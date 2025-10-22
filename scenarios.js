// SCENARIOS DEFINITION
window.SCENARIOS = {
  // BUSINESS MODE
  businessMode: {
    id: 'businessMode',
    name: 'Business Competition Mode',
    type: 'business',
    description: 'Corporate competition for market dominance',
    inspirationalQuote: {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
      context: "Business Strategy"
    },
    factionOrder: ['teamA', 'teamB', 'teamC', 'teamD'],
    factions: {
      teamA: {
        name: 'Alpha Division',
        color: '#1e40af',
        description: 'Growth-focused division',
        territories: [
          { name: 'Canary Wharf', cost: 62, description: 'London financial district' },
          { name: 'The Shard', cost: 58, description: 'London skyscraper' },
          { name: 'La Défense', cost: 55, description: 'Paris business district' },
          { name: 'Tour Montparnasse', cost: 52, description: 'Paris office tower' },
          { name: 'Frankfurt Stock Exchange', cost: 48, description: 'German finance hub' },
          { name: 'Commerzbank Tower', cost: 45, description: 'Frankfurt banking' },
          { name: 'Milan Financial District', cost: 42, description: 'Italian finance center' },
          { name: 'Madrid Business Quarter', cost: 40, description: 'Spanish corporate hub' }
        ]
      },
      teamB: {
        name: 'Beta Division',
        color: '#dc2626',
        description: 'Innovation-focused division',
        territories: [
          { name: 'Silicon Valley', cost: 80, description: 'Tech innovation hub' },
          { name: 'Wall Street', cost: 75, description: 'Financial center' },
          { name: 'Times Square', cost: 70, description: 'Media and advertising' },
          { name: 'Broadway District', cost: 65, description: 'Entertainment industry' },
          { name: 'Central Park', cost: 60, description: 'Green space and events' },
          { name: 'Brooklyn Bridge', cost: 55, description: 'Infrastructure landmark' },
          { name: 'Statue of Liberty', cost: 50, description: 'Symbolic landmark' },
          { name: 'Empire State Building', cost: 45, description: 'Iconic skyscraper' }
        ]
      },
      teamC: {
        name: 'Gamma Division',
        color: '#16a34a',
        description: 'Sustainability-focused division',
        territories: [
          { name: 'Copenhagen Harbor', cost: 60, description: 'Green energy hub' },
          { name: 'Amsterdam Canals', cost: 55, description: 'Sustainable transport' },
          { name: 'Stockholm Archipelago', cost: 50, description: 'Eco-friendly development' },
          { name: 'Oslo Fjord', cost: 45, description: 'Renewable energy center' },
          { name: 'Helsinki Design District', cost: 40, description: 'Sustainable design' },
          { name: 'Reykjavik Geothermal', cost: 35, description: 'Clean energy source' },
          { name: 'Zurich Lake', cost: 30, description: 'Environmental protection' },
          { name: 'Vienna Woods', cost: 25, description: 'Natural preservation' }
        ]
      },
      teamD: {
        name: 'Delta Division',
        color: '#ca8a04',
        description: 'Emerging markets division',
        territories: [
          { name: 'Singapore Marina', cost: 70, description: 'Asian financial hub' },
          { name: 'Hong Kong Central', cost: 65, description: 'Gateway to China' },
          { name: 'Tokyo Shibuya', cost: 60, description: 'Japanese innovation' },
          { name: 'Seoul Gangnam', cost: 55, description: 'Korean tech center' },
          { name: 'Mumbai Financial District', cost: 50, description: 'Indian finance hub' },
          { name: 'Dubai Marina', cost: 45, description: 'Middle East gateway' },
          { name: 'Sydney Harbor', cost: 40, description: 'Pacific Rim center' },
          { name: 'São Paulo Paulista', cost: 35, description: 'Latin American hub' }
        ]
      }
    },
    victoryConditions: {
      type: 'territory_control',
      requiredTerritories: 16,
      description: 'Control 16 territories to win'
    },
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  },

  // HAMLET SCENARIO - CLEAN VERSION
  hamlet: {
    id: 'hamlet',
    name: 'Hamlet',
    scenarioName: 'Hamlet',
    type: 'literary',
    description: 'The tragedy of Prince Hamlet\'s quest for revenge and truth in the court of Denmark',
    inspirationalQuote: {
      text: "To be, or not to be, that is the question.",
      author: "William Shakespeare",
      context: "Hamlet, Act III, Scene I"
    },
    factionOrder: ['hamletLoyalists', 'claudiusCourt'],
    factions: {
      hamletLoyalists: {
        name: 'Hamlet\'s Loyalists',
        color: '#1e40af', // Blue
        description: 'Aligned with truth, legacy, and justice',
        territories: [
          { name: 'Hamlet\'s Quarters', cost: 85, description: 'Hamlet\'s private space - psychological center of resistance' },
          { name: 'The Ghost\'s Platform', cost: 90, description: 'Where the truth is revealed; tied to the old king' },
          { name: 'Graveyard', cost: 80, description: 'Symbol of mortality and philosophical power' },
          { name: 'Wittenberg University', cost: 75, description: 'Represents Hamlet\'s intellect and allies abroad' },
          { name: 'Old King\'s Mausoleum', cost: 88, description: 'Legacy and spiritual power of his father' },
          { name: 'Forest Path Outside Elsinore', cost: 70, description: 'Space of reflection and plotting' },
          { name: 'Horatio\'s Study', cost: 65, description: 'Hamlet\'s trusted friend and confidant' },
          { name: 'Fortinbras\' Camp', cost: 60, description: 'External threat and foil to Hamlet' },
          { name: 'Ophelia\'s Garden', cost: 55, description: 'Symbol of innocence and lost love' },
          { name: 'The Players\' Stage', cost: 50, description: 'Where truth is performed and revealed' },
          { name: 'Polonius\' Library', cost: 45, description: 'Wisdom and foolishness intertwined' },
          { name: 'The Chapel', cost: 40, description: 'Spiritual refuge and moral center' },
          { name: 'The Armory', cost: 35, description: 'Weapons and preparation for conflict' },
          { name: 'The Observatory', cost: 30, description: 'Philosophical contemplation and stargazing' },
          { name: 'The Courtyard', cost: 25, description: 'Public space where tensions play out' },
          { name: 'The Secret Passage', cost: 20, description: 'Hidden routes and covert operations' }
        ]
      },
      claudiusCourt: {
        name: 'Claudius\' Court',
        color: '#dc2626', // Red
        description: 'The corrupt court seeking to maintain power',
        territories: [
          { name: 'Claudius\' Throne Room', cost: 95, description: 'Center of power and corruption' },
          { name: 'Gertrude\'s Chamber', cost: 85, description: 'Queen\'s private space - conflicted loyalties' },
          { name: 'The Banquet Hall', cost: 80, description: 'Where celebrations mask underlying tensions' },
          { name: 'The Treasury', cost: 75, description: 'Financial power and corruption' },
          { name: 'The Guard Tower', cost: 70, description: 'Military control and surveillance' },
          { name: 'The Wine Cellar', cost: 65, description: 'Where poison is stored and plots are hatched' },
          { name: 'The Council Chamber', cost: 60, description: 'Political decision-making and manipulation' },
          { name: 'The Royal Bedroom', cost: 55, description: 'Private space where secrets are kept' },
          { name: 'The Servants\' Quarters', cost: 50, description: 'Lower court members and spies' },
          { name: 'The Stables', cost: 45, description: 'Transportation and escape routes' },
          { name: 'The Kitchen', cost: 40, description: 'Where poison is prepared' },
          { name: 'The Courtyard Gate', cost: 35, description: 'Entry point and security checkpoint' },
          { name: 'The Royal Gardens', cost: 30, description: 'Beautiful facade hiding corruption' },
          { name: 'The Servants\' Hall', cost: 25, description: 'Gossip and information gathering' },
          { name: 'The Royal Chapel', cost: 20, description: 'False piety and moral pretense' },
          { name: 'The Secret Chamber', cost: 15, description: 'Hidden room for plotting and poison' }
        ]
      }
    },
    neutralTerritories: [
      { name: 'Elsinore Castle', cost: 100, description: 'The main setting - contested ground' },
      { name: 'The Harbor', cost: 80, description: 'Entry point for external forces' },
      { name: 'The Marketplace', cost: 60, description: 'Public space where information flows' },
      { name: 'The Tavern', cost: 40, description: 'Where commoners gather and plot' },
      { name: 'The Crossroads', cost: 20, description: 'Where paths converge and decisions are made' }
    ],
    characters: {
      hamletLoyalists: [
        { name: 'Hamlet', description: 'The melancholy prince seeking truth and justice', personality: 'intellectual' },
        { name: 'Horatio', description: 'Hamlet\'s loyal friend and confidant', personality: 'loyal' },
        { name: 'The Ghost', description: 'Hamlet\'s father seeking justice from beyond', personality: 'persistent' },
        { name: 'Fortinbras', description: 'Norwegian prince - external threat and foil', personality: 'military' },
        { name: 'The Players', description: 'Actors who help reveal truth through performance', personality: 'eloquent' },
        { name: 'Ophelia', description: 'Hamlet\'s love - innocent victim of court intrigue', personality: 'caring' },
        { name: 'Polonius', description: 'Lord Chamberlain - wise but foolish', personality: 'argumentative' },
        { name: 'Laertes', description: 'Ophelia\'s brother - seeks revenge', personality: 'passionate' }
      ],
      claudiusCourt: [
        { name: 'Claudius', description: 'The usurping king - corrupt and manipulative', personality: 'treacherous' },
        { name: 'Gertrude', description: 'Hamlet\'s mother - conflicted between son and husband', personality: 'manipulative' },
        { name: 'Rosencrantz', description: 'Claudius\' spy - Hamlet\'s false friend', personality: 'treacherous' },
        { name: 'Guildenstern', description: 'Claudius\' spy - Hamlet\'s false friend', personality: 'treacherous' },
        { name: 'Osric', description: 'Courtier - sycophantic and shallow', personality: 'selfish' },
        { name: 'Voltemand', description: 'Ambassador to Norway - diplomatic tool', personality: 'diplomatic' },
        { name: 'Cornelius', description: 'Ambassador to Norway - diplomatic tool', personality: 'diplomatic' },
        { name: 'Marcellus', description: 'Guard who sees the ghost - loyal to old king', personality: 'loyal' }
      ]
    },
    sceneAssignments: {
      'Act 1, Scene 1': {
        title: 'The Ghost Appears',
        description: 'The opening scene where the ghost of King Hamlet first appears to the guards.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'Who first sees the ghost of King Hamlet?',
            options: ['Horatio', 'Marcellus', 'Bernardo', 'Francisco'],
            correct: 2,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Bernardo is the first to see the ghost, as he is on guard duty when the scene opens.'
          },
          {
            type: 'short_answer',
            question: 'What does the ghost\'s appearance suggest about the state of Denmark?',
            answer: 'The ghost\'s appearance suggests that something is rotten in the state of Denmark, indicating political corruption and moral decay.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'The ghost\'s appearance is a supernatural sign that the natural order has been disrupted by Claudius\' murder of King Hamlet.'
          },
          {
            type: 'analysis',
            question: 'How does Shakespeare establish the atmosphere of mystery and foreboding in this opening scene?',
            answer: 'Shakespeare uses darkness, cold weather, and the supernatural appearance of the ghost to create an atmosphere of mystery and foreboding.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The setting of midnight, the cold weather, and the ghost\'s appearance all contribute to the ominous atmosphere that foreshadows the tragedy to come.'
          }
        ],
        triggerEvent: 'The ghost appears and beckons to the guards, setting the supernatural tone for the play.'
      },
      'Act 1, Scene 2': {
        title: 'The Court Scene',
        description: 'Claudius addresses the court and Hamlet\'s first soliloquy reveals his inner turmoil.',
        questions: [
          {
            type: 'multiple_choice',
            question: 'What does Claudius announce in his first speech to the court?',
            options: ['His marriage to Gertrude', 'His plan to invade Norway', 'His grief over King Hamlet\'s death', 'His suspicion of Hamlet'],
            correct: 0,
            standard: 'CCSS.ELA-LITERACY.RL.11-12.1',
            explanation: 'Claudius announces his marriage to Gertrude, which is the source of Hamlet\'s distress.'
          },
          {
            type: 'short_answer',
            question: 'What does Hamlet\'s first soliloquy reveal about his state of mind?',
            answer: 'Hamlet\'s soliloquy reveals his deep depression, disgust with the world, and suicidal thoughts.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.2',
            explanation: 'Hamlet expresses his desire to die and his disgust with the world, showing his psychological state after his father\'s death and mother\'s remarriage.'
          },
          {
            type: 'analysis',
            question: 'How does Shakespeare contrast Claudius\' public persona with Hamlet\'s private thoughts?',
            answer: 'Claudius presents a confident, political facade while Hamlet reveals deep emotional turmoil and philosophical despair.',
            standard: 'CCSS.ELA-LITERACY.RL.11-12.3',
            explanation: 'The contrast between Claudius\' smooth political speech and Hamlet\'s raw emotional soliloquy highlights the difference between appearance and reality.'
          }
        ],
        triggerEvent: 'Hamlet\'s soliloquy reveals his suicidal thoughts and disgust with the world.'
      }
    },
    economy: {
      startingMoney: 1000,
      incomePerTurn: 100,
      costMultiplier: 1.0
    },
    victoryConditions: {
      type: 'territory_control',
      requiredTerritories: 20,
      description: 'Control 20 territories to win'
    },
    randomAssignment: true,
    manualRoleAssignments: false,
    aiAssignments: false
  }
};

// Provide legacy global for pages that reference SCENARIOS directly
var SCENARIOS = window.SCENARIOS;

console.log('SCENARIOS object defined with', Object.keys(SCENARIOS).length, 'scenarios');
console.log('Available scenarios:', Object.keys(SCENARIOS).slice(0, 10));