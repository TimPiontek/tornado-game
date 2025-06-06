# Tornado Game

A fun quiz game where teams take turns answering questions to score points. The game features a grid-based interface where each cell contains a question. Teams can pass, skip, or reveal answers to questions.

## Features

- Two-player or single-player mode
- Customizable grid size (3x3, 4x4, or 5x5)
- Custom questions support
- Score tracking
- Modern and responsive UI
- Google authentication (coming soon)
- Quiz creation and sharing (coming soon)

## How to Play

1. Open `index.html` in a web browser
2. Enter team names (or use defaults)
3. Choose game mode (single player or two players)
4. Select grid size
5. Optionally add custom questions
6. Click "Start Game" to begin
7. Teams take turns selecting cells on the grid
8. When a cell is selected:
   - The question is displayed
   - Teams can:
     - Pass: Score a point and end turn
     - Skip: End turn without scoring
     - Reveal Answer: Show the answer
9. The game continues until all cells are used
10. The team with the most points wins!

## Custom Questions Format

Custom questions can be added in the setup screen. Each question should be on a new line in the format:

```
question|answer
```

For example:
```
What is the capital of France?|Paris
Who painted the Mona Lisa?|Leonardo da Vinci
```

## Development

To run the game locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## Future Features

- User authentication with Google
- Quiz creation and sharing
- More question categories
- Difficulty levels
- Timer for questions
- Sound effects and animations
- Mobile app version

## Contributing

Feel free to submit issues and enhancement requests! 