// ─── GAME STATE & DOM ─────────────────────────────────────────
let rewards=[], scores={A:0,B:0}, picks={A:0,B:0},
    turn='A', names={A:'Team A',B:'Team B'}, total=20,
    questions=[], qIndex=0;

const setupScreen   = document.getElementById('setupScreen'),
      gameScreen    = document.getElementById('gameScreen'),
      startBtn      = document.getElementById('startGameBtn'),
      resetBtn      = document.getElementById('resetBtn'),
      passBtn       = document.getElementById('passBtn'),
      skipBtn       = document.getElementById('skipBtn'),
      revealBtn     = document.getElementById('revealBtn'),
      gridEl        = document.getElementById('grid'),
      annA          = document.getElementById('annA'),
      annB          = document.getElementById('annB'),
      nameAEl       = document.getElementById('nameA'),
      nameBEl       = document.getElementById('nameB'),
      scoreAEl      = document.getElementById('scoreA'),
      scoreBEl      = document.getElementById('scoreB'),
      turnEl        = document.getElementById('turnDisplay'),
      questionEl    = document.getElementById('question'),
      answerEl      = document.getElementById('answer'),
      sourceRadios  = document.querySelectorAll('input[name="source"]'),
      aiLabel       = document.getElementById('aiTopicLabel'),
      questionInput = document.getElementById('questionsInput'),
      aiTopicInput  = document.getElementById('aiTopicInput');

// Show/hide AI topic input
sourceRadios.forEach(r => r.onchange = () => {
  aiLabel.classList.toggle('hidden', r.value !== 'ai');
});

startBtn.onclick = async () => {
  names.A = document.getElementById('teamANameInput').value;
  names.B = document.getElementById('teamBNameInput').value;
  total   = +document.getElementById('gridSizeInput').value;

  const source = document.querySelector('input[name="source"]:checked').value;
  if (source === 'ai') {
    const topic = aiTopicInput.value.trim() || 'General Knowledge';
    try {
      const response = await fetch(`/.netlify/functions/generate-questions?topic=${encodeURIComponent(topic)}&count=${total}`);
      const result = await response.json();
      if (result.data && Array.isArray(result.data)) {
        questionInput.value = result.data.map(q => `${q.question}
${q.answer}`).join('

');
      }
    } catch (err) {
      alert('Failed to fetch AI questions.');
      console.error(err);
    }
  }

  parseQuestions();
  setupScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  initGame();
};

resetBtn.onclick = initGame;
passBtn.onclick  = () => { turn = turn==='A'?'B':'A'; updateTurn(); showQuestion(); };
skipBtn.onclick  = () => { qIndex=(qIndex+1)%questions.length; showQuestion(); };
revealBtn.onclick= () => {
  const ans = questions[qIndex]?.answer || '';
  answerEl.textContent = ans;
  answerEl.style.color = turn==='A'? 'var(--teamA)' : 'var(--teamB)';
  answerEl.style.textAlign = turn==='A'? 'left' : 'right';
};

function parseQuestions(){
  const raw = questionInput.value;
  const blocks = raw.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  if (blocks.some(b => b.split('\n').length > 1)) {
    questions = blocks.map(b => {
      const [q,a] = b.split('\n');
      return { question: q.trim(), answer: a?.trim() || null };
    });
  } else {
    questions = raw.split('\n').map(l => l.trim()).filter(Boolean)
                   .map(q => ({ question: q.replace(/^\d+\.\s*/, ''), answer: null }));
  }

  if (document.querySelector('input[name="order"]:checked').value === 'random') {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  qIndex = 0;
}

function initGame(){
  scores = { A:0, B:0 }; picks = { A:0, B:0 };
  annA.textContent = ''; annB.textContent = '';
  nameAEl.textContent = names.A; nameBEl.textContent = names.B;
  updateScores(); turn = 'A'; updateTurn();
  buildRewards(total); buildGrid(total); showQuestion();
}

function buildRewards(n){
  const ptsBase = Math.floor(n * 0.7),
        loseBase = Math.floor(n * 0.1),
        stealBase = loseBase,
        dblBase = n - (ptsBase + loseBase + stealBase),
        minSpec = n >= 24 ? 3 : 2,
        loseCount = Math.max(loseBase, minSpec),
        stealCount = Math.max(stealBase, minSpec),
        dblCount = Math.max(dblBase, minSpec),
        ptsCount = n - (loseCount + stealCount + dblCount);

  rewards = [];
  for (let i = 0; i < ptsCount; i++) rewards.push({ type:'points', value: (Math.floor(Math.random()*10)+1)*100 });
  for (let i = 0; i < loseCount; i++) rewards.push({ type:'lose' });
  for (let i = 0; i < stealCount; i++) rewards.push({ type:'steal' });
  for (let i = 0; i < dblCount; i++) rewards.push({ type:'double' });

  for (let i = rewards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rewards[i], rewards[j]] = [rewards[j], rewards[i]];
  }
}

function buildGrid(n){
  gridEl.innerHTML = '';
  let cols = Math.floor(Math.sqrt(n));
  gridEl.style.gridTemplateColumns = `repeat(${cols},1fr)`;

  for (let i = 0; i < n; i++) {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.onclick = () => handlePick(btn, i);
    gridEl.appendChild(btn);
  }
}

function handlePick(btn, i){
  let r = rewards[i], me = turn;
  if (picks[me] === 0 && r.type !== 'points') {
    r = { type:'points', value: (Math.floor(Math.random()*10)+1)*100 };
  }
  picks[me]++;
  let out = '';
  if (r.type === 'points') {
    scores[me] += r.value; out = '+' + r.value;
    btn.style.color = me === 'A' ? 'var(--teamA)' : 'var(--teamB)';
  } else if (r.type === 'lose') {
    scores[me] = 0; out = '☹️'; styleSpecial(btn, me); playSad();
  } else if (r.type === 'steal') {
    const o = me === 'A' ? 'B' : 'A';
    scores[me] += scores[o]; scores[o] = 0;
    out = '🌪'; styleSpecial(btn, me); playWind();
  } else {
    scores[me] *= 2; out = 'x2'; styleSpecial(btn, me);
  }

  annA.textContent = me === 'A' ? \`\${names.A} got \${out}\` : '';
  annB.textContent = me === 'B' ? \`\${names.B} got \${out}\` : '';
  btn.textContent = out; btn.disabled = true;
  updateScores();

  const done = document.querySelectorAll('#grid button:disabled').length;
  if (done === total) {
    if (scores.A > scores.B) annA.textContent = \`\${names.A} wins! 🏆\`;
    else if (scores.B > scores.A) annB.textContent = \`\${names.B} wins! 🏆\`;
    else annA.textContent = "It's a tie!";
  } else {
    turn = me === 'A' ? 'B' : 'A';
    updateTurn(); showQuestion();
  }
}

function showQuestion(){
  const q = questions[qIndex] || { question: '', answer: null };
  questionEl.textContent = q.question;
  questionEl.style.color = turn === 'A' ? 'var(--teamA)' : 'var(--teamB)';
  questionEl.style.textAlign = turn === 'A' ? 'left' : 'right';
  answerEl.textContent = '';
  revealBtn.classList.toggle('hidden', !q.answer);
}

function updateScores(){
  scoreAEl.textContent = scores.A;
  scoreBEl.textContent = scores.B;
}
function updateTurn(){
  turnEl.textContent = \`\${names[turn]}'s turn\`;
  turnEl.style.color = turn === 'A' ? 'var(--teamA)' : 'var(--teamB)';
}

function styleSpecial(btn, team){
  const clr = team === 'A' ? 'var(--teamA)' : 'var(--teamB)';
  btn.style.background = clr;
  btn.style.color = '#fff';
  btn.style.fontSize = '2.5em';
}

function playWind(){
  const C = new (window.AudioContext || window.webkitAudioContext)(),
        buf = C.createBuffer(1, C.sampleRate*0.5, C.sampleRate),
        d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random()*2-1;
  const src = C.createBufferSource(), f = C.createBiquadFilter();
  src.buffer = buf; f.type = 'lowpass'; f.frequency.value = 800;
  src.connect(f).connect(C.destination); src.start();
  setTimeout(() => src.stop(), 500);
}

function playSad(){
  const C = new (window.AudioContext || window.webkitAudioContext)(),
        o = C.createOscillator(), g = C.createGain();
  o.type = 'triangle'; o.frequency.value = 220;
  o.connect(g).connect(C.destination);
  o.start(); g.gain.setValueAtTime(1, C.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, C.currentTime + 0.8);
  setTimeout(() => o.stop(), 800);
}
