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
        const { gridSize, factionCount = 2 } = this.gameState;
        let columns, rows;

        // Multi-faction grid layouts for geometrically appealing designs
        if (factionCount === 3) {
            // 3-faction layouts: Triangle/Hexagonal patterns
            switch (gridSize) {
                case 12:
                    columns = 4; rows = 3; break; // 4x3 rectangle
                case 15:
                    columns = 5; rows = 3; break; // 5x3 rectangle
                case 18:
                    columns = 6; rows = 3; break; // 6x3 rectangle
                case 21:
                    columns = 7; rows = 3; break; // 7x3 rectangle
                case 24:
                    columns = 6; rows = 4; break; // 6x4 rectangle
                case 27:
                    columns = 9; rows = 3; break; // 9x3 rectangle
                case 30:
                    columns = 6; rows = 5; break; // 6x5 rectangle
                default:
                    columns = Math.ceil(Math.sqrt(gridSize));
                    rows = Math.ceil(gridSize / columns);
            }
        } else if (factionCount === 4) {
            // 4-faction layouts: Square/Cross patterns
            switch (gridSize) {
                case 16:
                    columns = 4; rows = 4; break; // Perfect 4x4 square
                case 20:
                    columns = 5; rows = 4; break; // 5x4 rectangle
                case 24:
                    columns = 6; rows = 4; break; // 6x4 rectangle
                case 28:
                    columns = 7; rows = 4; break; // 7x4 rectangle
                case 32:
                    columns = 8; rows = 4; break; // 8x4 rectangle
                case 36:
                    columns = 6; rows = 6; break; // Perfect 6x6 square
                case 40:
                    columns = 8; rows = 5; break; // 8x5 rectangle
                case 44:
                    columns = 11; rows = 4; break; // 11x4 rectangle
                case 48:
                    columns = 8; rows = 6; break; // 8x6 rectangle
                case 52:
                    columns = 13; rows = 4; break; // 13x4 rectangle
                case 56:
                    columns = 8; rows = 7; break; // 8x7 rectangle
                case 60:
                    columns = 10; rows = 6; break; // 10x6 rectangle
                case 64:
                    columns = 8; rows = 8; break; // Perfect 8x8 square
                default:
                    columns = Math.ceil(Math.sqrt(gridSize));
                    rows = Math.ceil(gridSize / columns);
            }
        } else {
            // 2-faction layouts (original)
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
        }

        this.grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        this.grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

        // Add faction-specific styling for multi-faction layouts
        if (factionCount > 2) {
            this.grid.classList.add(`faction-${factionCount}`);
            this.grid.style.gap = '8px'; // Tighter spacing for more territories
        }

        // Create cells
        for (let i = 0; i < gridSize; i++) {
            const button = document.createElement('button');
            button.dataset.index = i;
            button.addEventListener('click', () => this.handleCellClick(button));
            
            // Add faction-specific styling based on position
            if (factionCount > 2) {
                this.addFactionStyling(button, i, factionCount, columns, rows);
            }
            
            this.grid.appendChild(button);
        }
    }

    addFactionStyling(button, index, factionCount, columns, rows) {
        const row = Math.floor(index / columns);
        const col = index % columns;
        
        if (factionCount === 3) {
            // 3-faction layout: Divide into 3 horizontal sections
            const sectionHeight = Math.ceil(rows / 3);
            if (row < sectionHeight) {
                button.classList.add('faction-1');
            } else if (row < sectionHeight * 2) {
                button.classList.add('faction-2');
            } else {
                button.classList.add('faction-3');
            }
        } else if (factionCount === 4) {
            // 4-faction layout: Divide into 4 quadrants
            const midRow = Math.floor(rows / 2);
            const midCol = Math.floor(columns / 2);
            
            if (row < midRow && col < midCol) {
                button.classList.add('faction-1'); // Top-left
            } else if (row < midRow && col >= midCol) {
                button.classList.add('faction-2'); // Top-right
            } else if (row >= midRow && col < midCol) {
                button.classList.add('faction-3'); // Bottom-left
            } else {
                button.classList.add('faction-4'); // Bottom-right
            }
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