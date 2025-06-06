// Game state management
class GameState {
    constructor() {
        this.currentQuiz = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.teamATurn = true;
        this.teamAScore = 0;
        this.teamBScore = 0;
        this.gridSize = 18;
        this.specialItems = {
            tornado: 2,
            double: 2,
            lose: 2,
            swap: 2
        };
    }

    reset() {
        this.currentQuestionIndex = 0;
        this.teamATurn = true;
        this.teamAScore = 0;
        this.teamBScore = 0;
    }

    updateScore(points) {
        if (this.teamATurn) {
            this.teamAScore += points;
        } else {
            this.teamBScore += points;
        }
    }

    nextTurn() {
        this.teamATurn = !this.teamATurn;
        this.currentQuestionIndex++;
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    hasMoreQuestions() {
        return this.currentQuestionIndex < this.questions.length;
    }
}

// Grid management
class GridManager {
    constructor(gameState) {
        this.gameState = gameState;
        this.grid = document.getElementById('grid');
    }

    generateGrid() {
        this.grid.innerHTML = '';
        const { gridSize } = this.gameState;
        let columns, rows;

        // Explicit grid layouts for each option
        switch (gridSize) {
            case 8:
                columns = 4; rows = 2; break;
            case 10:
                columns = 5; rows = 2; break;
            case 16:
                columns = 4; rows = 4; break;
            case 18:
                columns = Math.ceil(Math.sqrt(gridSize));
                rows = Math.ceil(gridSize / columns);
                break;
            case 20:
                columns = Math.ceil(Math.sqrt(gridSize));
                rows = Math.ceil(gridSize / columns);
                break;
            default:
                columns = Math.ceil(Math.sqrt(gridSize));
                rows = Math.ceil(gridSize / columns);
        }

        this.grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        this.grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

        // Create cells
        for (let i = 0; i < gridSize; i++) {
            const button = document.createElement('button');
            button.dataset.index = i;
            button.addEventListener('click', () => this.handleCellClick(button));
            this.grid.appendChild(button);
        }
    }

    handleCellClick(button) {
        if (button.disabled) return;

        const points = Math.floor(Math.random() * 5) + 1;
        const special = Math.random() < 0.2;

        if (special) {
            this.handleSpecialItem(button);
        } else {
            button.textContent = points;
            button.disabled = true;
            this.gameState.updateScore(points);
            this.updateScoreDisplay();
        }
    }

    handleSpecialItem(button) {
        const specialTypes = ['tornado', 'double', 'lose', 'swap'];
        const type = specialTypes[Math.floor(Math.random() * specialTypes.length)];
        
        if (this.gameState.specialItems[type] > 0) {
            button.textContent = this.getSpecialEmoji(type);
            button.disabled = true;
            this.gameState.specialItems[type]--;
            
            switch (type) {
                case 'tornado':
                    this.handleTornado();
                    break;
                case 'double':
                    this.handleDouble();
                    break;
                case 'lose':
                    this.handleLose();
                    break;
                case 'swap':
                    this.handleSwap();
                    break;
            }
        } else {
            this.handleCellClick(button);
        }
    }

    getSpecialEmoji(type) {
        const emojis = {
            tornado: '🌪️',
            double: '2️⃣',
            lose: '😢',
            swap: '🔄'
        };
        return emojis[type];
    }

    handleTornado() {
        const buttons = Array.from(this.grid.children);
        buttons.forEach(button => {
            if (!button.disabled) {
                button.textContent = Math.floor(Math.random() * 5) + 1;
                button.disabled = true;
            }
        });
    }

    handleDouble() {
        const points = Math.floor(Math.random() * 5) + 1;
        this.gameState.updateScore(points * 2);
        this.updateScoreDisplay();
    }

    handleLose() {
        const points = Math.floor(Math.random() * 5) + 1;
        this.gameState.updateScore(-points);
        this.updateScoreDisplay();
    }

    handleSwap() {
        const temp = this.gameState.teamAScore;
        this.gameState.teamAScore = this.gameState.teamBScore;
        this.gameState.teamBScore = temp;
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        document.getElementById('scoreA').textContent = this.gameState.teamAScore;
        document.getElementById('scoreB').textContent = this.gameState.teamBScore;
    }
}

// Quiz management
class QuizManager {
    constructor(gameState) {
        this.gameState = gameState;
    }

    async loadQuizLibrary() {
        try {
            const response = await fetch('quiz_library.json');
            const quizzes = await response.json();
            this.populateQuizDropdown(quizzes);
        } catch (error) {
            console.error('Error loading quiz library:', error);
        }
    }

    populateQuizDropdown(quizzes) {
        const categories = {};
        
        // Group quizzes by category
        quizzes.forEach(quiz => {
            if (!categories[quiz.category]) {
                categories[quiz.category] = [];
            }
            categories[quiz.category].push(quiz);
        });

        const dropdown = document.getElementById('customQuizDropdown');
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
        dropdown.innerHTML = '--';
        dropdown.insertAdjacentHTML('afterend', html);

        this.setupDropdownEventListeners();
    }

    setupDropdownEventListeners() {
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
                this.gameState.currentQuiz = quizData;
                document.getElementById('customQuizDropdown').textContent = quizData.title;
                document.querySelector('.custom-quiz-dropdown-list').style.display = 'none';
            });
        });

        const dropdown = document.getElementById('customQuizDropdown');
        dropdown.addEventListener('click', () => {
            const list = document.querySelector('.custom-quiz-dropdown-list');
            list.style.display = list.style.display === 'none' ? 'block' : 'none';
        });
    }
}

// Export the classes
export { GameState, GridManager, QuizManager }; 