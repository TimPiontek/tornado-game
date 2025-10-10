// Data Sync Service for Tornado Business Integrations
// Pulls data from external services and creates metrics/score events

class DataSyncService {
  constructor(supabase) {
    this.supabase = supabase;
  }

  // Salesforce Integration
  async syncSalesforceData(integration) {
    try {
      const { client_id, instance_url } = integration.settings;
      const token = integration.token;
      
      // Mock Salesforce API calls (replace with real Salesforce REST API)
      const opportunities = await this.fetchSalesforceOpportunities(instance_url, token);
      const accounts = await this.fetchSalesforceAccounts(instance_url, token);
      const leads = await this.fetchSalesforceLeads(instance_url, token);
      
      // Create metrics from Salesforce data
      await this.createMetricsFromSalesforceData({
        opportunities,
        accounts, 
        leads,
        integration
      });
      
      return { success: true, records: opportunities.length + accounts.length + leads.length };
    } catch (error) {
      console.error('Salesforce sync error:', error);
      return { success: false, error: error.message };
    }
  }

  async fetchSalesforceOpportunities(instanceUrl, token) {
    // Mock data - replace with real Salesforce REST API call
    return [
      { Id: '001', Name: 'Enterprise Deal', Amount: 50000, StageName: 'Closed Won', OwnerId: 'user1' },
      { Id: '002', Name: 'SMB Contract', Amount: 15000, StageName: 'Proposal', OwnerId: 'user2' },
      { Id: '003', Name: 'Enterprise Renewal', Amount: 75000, StageName: 'Negotiation', OwnerId: 'user1' }
    ];
  }

  async fetchSalesforceAccounts(instanceUrl, token) {
    // Mock data - replace with real Salesforce REST API call
    return [
      { Id: '001', Name: 'Acme Corp', Industry: 'Technology', AnnualRevenue: 1000000 },
      { Id: '002', Name: 'Beta Inc', Industry: 'Manufacturing', AnnualRevenue: 500000 }
    ];
  }

  async fetchSalesforceLeads(instanceUrl, token) {
    // Mock data - replace with real Salesforce REST API call
    return [
      { Id: '001', Name: 'John Smith', Company: 'TechStart', Status: 'Qualified' },
      { Id: '002', Name: 'Jane Doe', Company: 'InnovateCorp', Status: 'New' }
    ];
  }

  async createMetricsFromSalesforceData({ opportunities, accounts, leads, integration }) {
    const gameId = await this.getActiveGameId();
    
    // Create score events for opportunities
    for (const opp of opportunities) {
      const points = this.calculateOpportunityPoints(opp);
      await this.supabase.from('score_events').insert({
        game_id: gameId,
        employee_id: await this.findEmployeeByOwnerId(opp.OwnerId),
        metric_name: 'Salesforce Opportunity',
        value: opp.Amount,
        points: points,
        source: 'salesforce',
        external_id: opp.Id,
        metadata: {
          opportunity_name: opp.Name,
          stage: opp.StageName,
          amount: opp.Amount
        }
      });
    }

    // Create metrics for accounts
    await this.supabase.from('metrics').upsert({
      game_id: gameId,
      name: 'Salesforce Accounts',
      value: accounts.length,
      target: 100,
      unit: 'accounts',
      source: 'salesforce'
    });

    // Create metrics for leads
    await this.supabase.from('metrics').upsert({
      game_id: gameId,
      name: 'Salesforce Leads',
      value: leads.length,
      target: 200,
      unit: 'leads',
      source: 'salesforce'
    });
  }

  calculateOpportunityPoints(opportunity) {
    const basePoints = Math.floor(opportunity.Amount / 1000); // $1 per $1000
    const stageMultiplier = {
      'Closed Won': 2,
      'Negotiation': 1.5,
      'Proposal': 1.2,
      'Qualification': 1
    };
    return Math.floor(basePoints * (stageMultiplier[opportunity.StageName] || 1));
  }

  // HubSpot Integration
  async syncHubSpotData(integration) {
    try {
      const { api_key } = integration.settings;
      
      // Mock HubSpot API calls (replace with real HubSpot API)
      const deals = await this.fetchHubSpotDeals(api_key);
      const tasks = await this.fetchHubSpotTasks(api_key);
      
      await this.createMetricsFromHubSpotData({
        deals,
        tasks,
        integration
      });
      
      return { success: true, records: deals.length + tasks.length };
    } catch (error) {
      console.error('HubSpot sync error:', error);
      return { success: false, error: error.message };
    }
  }

  async fetchHubSpotDeals(apiKey) {
    // Mock data - replace with real HubSpot API call
    return [
      { id: 'deal1', name: 'Q1 Enterprise Deal', amount: 45000, stage: 'closedwon', owner: 'user1' },
      { id: 'deal2', name: 'SMB Expansion', amount: 12000, stage: 'proposal', owner: 'user2' }
    ];
  }

  async fetchHubSpotTasks(apiKey) {
    // Mock data - replace with real HubSpot API call
    return [
      { id: 'task1', name: 'Follow up call', status: 'completed', owner: 'user1' },
      { id: 'task2', name: 'Send proposal', status: 'in_progress', owner: 'user2' }
    ];
  }

  async createMetricsFromHubSpotData({ deals, tasks, integration }) {
    const gameId = await this.getActiveGameId();
    
    // Create score events for deals
    for (const deal of deals) {
      const points = Math.floor(deal.amount / 1000); // $1 per $1000
      await this.supabase.from('score_events').insert({
        game_id: gameId,
        employee_id: await this.findEmployeeByOwnerId(deal.owner),
        metric_name: 'HubSpot Deal',
        value: deal.amount,
        points: points,
        source: 'hubspot',
        external_id: deal.id,
        metadata: {
          deal_name: deal.name,
          stage: deal.stage
        }
      });
    }

    // Create metrics for tasks
    await this.supabase.from('metrics').upsert({
      game_id: gameId,
      name: 'HubSpot Tasks Completed',
      value: tasks.filter(t => t.status === 'completed').length,
      target: 50,
      unit: 'tasks',
      source: 'hubspot'
    });
  }

  // Webhook Notifications
  async sendWebhookNotification(integration, event) {
    try {
      const { webhook_url } = integration.settings;
      
      const payload = {
        text: `🎉 Tornado Business: ${event.title}`,
        username: 'Tornado Business',
        icon_emoji: ':tornado:',
        attachments: [{
          color: 'good',
          fields: [
            { title: 'Event', value: event.title, short: true },
            { title: 'Employee', value: event.employee_name, short: true },
            { title: 'Points', value: event.points, short: true },
            { title: 'Details', value: event.description, short: false }
          ]
        }]
      };

      const response = await fetch(webhook_url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      return response.ok;
    } catch (error) {
      console.error('Webhook notification error:', error);
      return false;
    }
  }

  // Utility functions
  async getActiveGameId() {
    const { data } = await this.supabase.from('games').select('id').eq('status', 'active').single();
    return data?.id;
  }

  async findEmployeeByOwnerId(ownerId) {
    // Map external owner ID to internal employee ID
    const { data } = await this.supabase.from('employees').select('id').eq('external_id', ownerId).single();
    return data?.id;
  }

  // Main sync function
  async syncAllIntegrations() {
    const { data: integrations } = await this.supabase.from('integrations').select('*').eq('status', 'Connected');
    
    const results = [];
    
    for (const integration of integrations) {
      let result;
      
      switch (integration.type) {
        case 'salesforce':
          result = await this.syncSalesforceData(integration);
          break;
        case 'hubspot':
          result = await this.syncHubSpotData(integration);
          break;
        default:
          result = { success: false, error: 'Unknown integration type' };
      }
      
      results.push({
        integration: integration.type,
        ...result
      });
    }
    
    return results;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataSyncService;
} else {
  window.DataSyncService = DataSyncService;
}
