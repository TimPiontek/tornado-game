// Simple Rules Engine (stub)
// Rule: { id, metric_name, condition, badge_id, points, notify }

// Safe condition evaluator (no eval) supporting: ==, !=, >=, <=, >, <
function evaluateCondition(condition, value) {
  if (!condition) return false;
  const m = String(condition).match(/^\s*value\s*(==|!=|>=|<=|>|<)\s*(-?\d+(?:\.\d+)?)\s*$/);
  if (!m) return false;
  const op = m[1];
  const rhs = Number(m[2]);
  const lhs = Number(value||0);
  switch (op) {
    case '==': return lhs === rhs;
    case '!=': return lhs !== rhs;
    case '>=': return lhs >= rhs;
    case '<=': return lhs <= rhs;
    case '>': return lhs > rhs;
    case '<': return lhs < rhs;
    default: return false;
  }
}

export function evaluateRules(rules, event) {
  // event: { metric_name, value, employee_id, game_id }
  const awards = [];
  (rules||[]).forEach(rule => {
    if (rule.metric_name !== event.metric_name) return;
    const ok = evaluateCondition(rule.condition, event.value);
    if (ok) awards.push({ badge_id: rule.badge_id, points: Number(rule.points||0), notify: !!rule.notify });
  });
  return awards;
}

export async function saveRule(supabase, rule) {
  await supabase.from('rules').upsert(rule);
}

