// Simple Rules Engine (stub)
// Rule: { id, metric_name, condition, badge_id, points, notify }

export function evaluateRules(rules, event) {
  // event: { metric_name, value, employee_id, game_id }
  const awards = [];
  (rules||[]).forEach(rule => {
    if (rule.metric_name !== event.metric_name) return;
    try {
      // very basic condition evaluation: use value variable
      const value = Number(event.value||0);
      // eslint-disable-next-line no-eval
      const ok = !!eval(rule.condition || 'false');
      if (ok) awards.push({ badge_id: rule.badge_id, points: Number(rule.points||0), notify: !!rule.notify });
    } catch (e) { /* ignore */ }
  });
  return awards;
}

export async function saveRule(supabase, rule) {
  await supabase.from('rules').upsert(rule);
}

