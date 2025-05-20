// Game state
let gameState = {
    currentQuiz: null,
    questions: [],
    currentQuestionIndex: 0,
    teamATurn: true,
    teamAScore: 0,
    teamBScore: 0,
    gridSize: 18,
    specialItems: {
        tornado: 2,
        double: 2,
        lose: 2,
        swap: 2
    }
};

// DOM Elements
const setupScreen = document.getElementById('setupScreen');
const gameScreen = document.getElementById('gameScreen');
const grid = document.getElementById('grid');
const startGameBtn = document.getElementById('startGameBtnBottom');
const teamANameInput = document.getElementById('teamANameInput');
const teamBNameInput = document.getElementById('teamBNameInput');
const singlePlayerCheckbox = document.getElementById('singlePlayerCheckbox');
const gridSizeInput = document.getElementById('gridSizeInput');
const questionsInput = document.getElementById('questionsInput');
const customQuizDropdown = document.getElementById('customQuizDropdown');
const questionAnswerRow = document.getElementById('questionAnswerRow');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const turnDisplay = document.getElementById('turnDisplay');
const scoreA = document.getElementById('scoreA');
const scoreB = document.getElementById('scoreB');
const nameA = document.getElementById('nameA');
const nameB = document.getElementById('nameB');
const resetBtn = document.getElementById('resetBtn');
const homeBtn = document.getElementById('homeBtn');
const passBtn = document.getElementById('passBtn');
const skipBtn = document.getElementById('skipBtn');
const revealBtn = document.getElementById('revealBtn');
const createQuizBtn = document.getElementById('createQuizBtn');
const createQuizModal = document.getElementById('createQuizModal');
const closeCreateQuizModal = document.getElementById('closeCreateQuizModal');
const createQuizForm = document.getElementById('createQuizForm');
const newQuizTitle = document.getElementById('newQuizTitle');
const newQuizCategory = document.getElementById('newQuizCategory');
const newQuizQA = document.getElementById('newQuizQA');
const createQuizMsg = document.getElementById('createQuizMsg');

// Navigation logic to show/hide sections
const homeLink = document.querySelector('a[href="/"]');
const publicLibraryLink = document.getElementById('publicLibraryLink');
const librarySection = document.getElementById('librarySection');
const publicLibrarySection = document.getElementById('publicLibrarySection'); // if you have one

function showSection(section) {
  // Hide all main sections
  if (setupScreen) setupScreen.classList.add('hidden');
  if (librarySection) librarySection.classList.add('hidden');
  if (publicLibrarySection) publicLibrarySection.classList.add('hidden');
  // Show the requested section
  if (section) section.classList.remove('hidden');
}

if (homeLink && setupScreen) {
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(setupScreen);
  });
}
if (myLibraryLink && librarySection) {
  myLibraryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(librarySection);
    setupCreateQuizLogic();
  });
}
if (publicLibraryLink && publicLibrarySection) {
  publicLibraryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(publicLibrarySection);
  });
}
// Show setupScreen by default
showSection(setupScreen);

// Login modal logic
const loginLogoutBtn = document.getElementById('loginLogoutBtn');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
if (loginLogoutBtn && authModal) {
  loginLogoutBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    authModal.classList.remove('hidden');
  });
}
if (closeAuthModal && authModal) {
  closeAuthModal.addEventListener('click', () => {
    authModal.style.display = 'none';
    authModal.classList.add('hidden');
  });
}

// Load quiz library
async function loadQuizLibrary() {
    try {
        const response = await fetch('quiz_library.json');
        const quizzes = await response.json();
        populateQuizDropdown(quizzes);
    } catch (error) {
        console.error('Error loading quiz library:', error);
    }
}

// Populate quiz dropdown
function populateQuizDropdown(quizzes) {
    const categories = {};
    
    // Group quizzes by category
    quizzes.forEach(quiz => {
        if (!categories[quiz.category]) {
            categories[quiz.category] = [];
        }
        categories[quiz.category].push(quiz);
    });

    // Create dropdown HTML
    let html = '<div class="custom-quiz-dropdown-list">';
    
    Object.entries(categories).forEach(([category, categoryQuizzes]) => {
        html += `
            <div class="custom-quiz-category">
                ${category}
                <span class="custom-quiz-category-arrow">▶</span>
            </div>
            <ul class="custom-quiz-quizlist">
                ${categoryQuizzes.map(quiz => `
                    <li data-quiz='${JSON.stringify(quiz)}'>${quiz.title}</li>
                `).join('')}
            </ul>
        `;
    });

    html += '</div>';
    customQuizDropdown.innerHTML = '--';
    customQuizDropdown.insertAdjacentHTML('afterend', html);

    // Add event listeners
    document.querySelectorAll('.custom-quiz-category').forEach(category => {
        category.addEventListener('click', () => {
            category.classList.toggle('open');
            const arrow = category.querySelector('.custom-quiz-category-arrow');
            arrow.style.transform = category.classList.contains('open') ? 'rotate(90deg)' : '';
        });
    });

    document.querySelectorAll('.custom-quiz-quizlist li').forEach(quiz => {
        quiz.addEventListener('click', () => {
            const quizData = JSON.parse(quiz.dataset.quiz);
            gameState.currentQuiz = quizData;
            customQuizDropdown.textContent = quizData.title;
            document.querySelector('.custom-quiz-dropdown-list').style.display = 'none';
        });
    });

    customQuizDropdown.addEventListener('click', () => {
        const list = document.querySelector('.custom-quiz-dropdown-list');
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
    });
}

// Start game
function startGame() {
    // Get team names
    const teamAName = teamANameInput.value || 'Team A';
    const teamBName = teamBNameInput.value || 'Team B';
    const isSinglePlayer = singlePlayerCheckbox.checked;
    
    // Update display
    nameA.textContent = teamAName;
    nameB.textContent = teamBName;
    
    // Get questions
    let questions = [];
    if (gameState.currentQuiz) {
        questions = gameState.currentQuiz.questions;
    } else {
        // Parse custom questions
        const customQuestions = questionsInput.value.trim();
        if (customQuestions) {
            const lines = customQuestions.split('\n');
            for (let i = 0; i < lines.length; i += 2) {
                if (lines[i] && lines[i + 1]) {
                    questions.push({
                        question: lines[i].trim(),
                        answer: lines[i + 1].trim()
                    });
                }
            }
        }
    }
    
    if (questions.length === 0) {
        alert('Please select a quiz or enter custom questions!');
        return;
    }

    // Initialize game state
    gameState.questions = questions;
    gameState.currentQuestionIndex = 0;
    gameState.teamATurn = true;
    gameState.teamAScore = 0;
    gameState.teamBScore = 0;
    gameState.gridSize = parseInt(gridSizeInput.value);

    // Update display
    scoreA.textContent = '0';
    scoreB.textContent = '0';
    turnDisplay.textContent = `${teamAName}'s turn`;

    // Generate grid
    generateGrid();

    // Show game screen
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}

// Generate game grid
function generateGrid() {
    grid.innerHTML = '';
    const totalCells = gameState.gridSize * gameState.gridSize;
    // Calculate columns and rows for a near-square grid, favoring width
    const columns = Math.ceil(Math.sqrt(totalCells));
    const rows = Math.ceil(totalCells / columns);
    
    // Calculate number of special items
    const specialCounts = {
        tornado: gameState.specialItems.tornado,
        double: gameState.specialItems.double,
        lose: gameState.specialItems.lose,
        swap: gameState.specialItems.swap
    };
    
    // Create array of cell values
    let cells = [];
    
    // Add special items
    Object.entries(specialCounts).forEach(([type, count]) => {
        for (let i = 0; i < count; i++) {
            cells.push(type);
        }
    });
    
    // Add point values
    const remainingCells = totalCells - cells.length;
    for (let i = 0; i < remainingCells; i++) {
        cells.push(Math.floor(Math.random() * 5) + 1); // Random points 1-5
    }
    
    // Shuffle cells
    cells = cells.sort(() => Math.random() - 0.5);
    
    // Create grid
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    cells.forEach((value, index) => {
        const button = document.createElement('button');
        button.textContent = '?';
        button.dataset.value = value;
        button.addEventListener('click', () => handleCellClick(button));
        grid.appendChild(button);
    });
}

// Handle cell click
function handleCellClick(button) {
    if (button.disabled) return;
    
    const value = button.dataset.value;
    button.disabled = true;
    
    switch (value) {
        case 'tornado':
            button.textContent = '🌪️';
            handleTornado();
            break;
        case 'double':
            button.textContent = '🦁🦁';
            handleDouble();
            break;
        case 'lose':
            button.textContent = '🦨';
            handleLose();
            break;
        case 'swap':
            button.textContent = '🦘';
            handleSwap();
            break;
        default:
            button.textContent = value;
            updateScore(parseInt(value));
    }
}

// Special item handlers
function handleTornado() {
    if (gameState.teamATurn) {
        gameState.teamAScore += gameState.teamBScore;
        gameState.teamBScore = 0;
    } else {
        gameState.teamBScore += gameState.teamAScore;
        gameState.teamAScore = 0;
    }
    updateScoreDisplay();
}

function handleDouble() {
    if (gameState.teamATurn) {
        gameState.teamAScore *= 2;
    } else {
        gameState.teamBScore *= 2;
    }
    updateScoreDisplay();
}

function handleLose() {
    if (gameState.teamATurn) {
        gameState.teamAScore = 0;
    } else {
        gameState.teamBScore = 0;
    }
    updateScoreDisplay();
}

function handleSwap() {
    [gameState.teamAScore, gameState.teamBScore] = [gameState.teamBScore, gameState.teamAScore];
    updateScoreDisplay();
}

// Update score
function updateScore(points) {
    if (gameState.teamATurn) {
        gameState.teamAScore += points;
    } else {
        gameState.teamBScore += points;
    }
    updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
    scoreA.textContent = gameState.teamAScore;
    scoreB.textContent = gameState.teamBScore;
}

// Show current question
function showCurrentQuestion() {
    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        gameState.currentQuestionIndex = 0;
    }
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElement.textContent = currentQuestion.answer;
    questionAnswerRow.style.display = 'flex';
}

// Pass to next question
function passQuestion() {
    gameState.currentQuestionIndex++;
    showCurrentQuestion();
}

// Skip question
function skipQuestion() {
    gameState.teamATurn = !gameState.teamATurn;
    turnDisplay.textContent = `${gameState.teamATurn ? nameA.textContent : nameB.textContent}'s turn`;
    passQuestion();
}

// Reveal answer
function revealAnswer() {
    answerElement.style.display = 'block';
}

// Reset game
function resetGame() {
    gameState.teamAScore = 0;
    gameState.teamBScore = 0;
    gameState.teamATurn = true;
    gameState.currentQuestionIndex = 0;
    updateScoreDisplay();
    turnDisplay.textContent = `${nameA.textContent}'s turn`;
    generateGrid();
    showCurrentQuestion();
}

// Return to home
function returnHome() {
    gameScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
}

// Event listeners
startGameBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
homeBtn.addEventListener('click', returnHome);
passBtn.addEventListener('click', passQuestion);
skipBtn.addEventListener('click', skipQuestion);
revealBtn.addEventListener('click', revealAnswer);

function setupCreateQuizLogic() {
  if (createQuizBtn && createQuizModal && closeCreateQuizModal && createQuizForm) {
    createQuizBtn.addEventListener('click', () => {
      createQuizModal.style.display = 'flex';
      createQuizModal.classList.remove('hidden');
      createQuizMsg.textContent = '';
      createQuizForm.reset();
    });
    closeCreateQuizModal.addEventListener('click', () => {
      createQuizModal.style.display = 'none';
      createQuizModal.classList.add('hidden');
    });
    createQuizForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = newQuizTitle.value.trim();
      const category = newQuizCategory.value.trim();
      const qaText = newQuizQA.value.trim();
      if (!title || !category || !qaText) {
        createQuizMsg.textContent = 'All fields are required.';
        return;
      }
      // Parse Q&A
      const lines = qaText.split('\n');
      const questions = [];
      for (let i = 0; i < lines.length; i += 2) {
        if (lines[i] && lines[i+1]) {
          questions.push({ question: lines[i].trim(), answer: lines[i+1].trim() });
        }
      }
      if (questions.length === 0) {
        createQuizMsg.textContent = 'Please enter at least one Q&A pair.';
        return;
      }
      // POST to backend
      try {
        const res = await fetch('/add_quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, category, questions })
        });
        if (res.ok) {
          createQuizMsg.style.color = 'green';
          createQuizMsg.textContent = 'Quiz saved!';
          setTimeout(() => {
            createQuizModal.style.display = 'none';
            createQuizModal.classList.add('hidden');
            loadQuizLibrary();
          }, 1000);
        } else {
          const err = await res.text();
          createQuizMsg.style.color = '#e57373';
          createQuizMsg.textContent = 'Error: ' + err;
        }
      } catch (err) {
        createQuizMsg.style.color = '#e57373';
        createQuizMsg.textContent = 'Network error.';
      }
    });
  }
}

// Initialize
loadQuizLibrary(); 