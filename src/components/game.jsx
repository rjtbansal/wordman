import { useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import GameInput from './game-input';
import GameStatus from './game-status';

const Game = ({ children }) => {
  const [colorGuess, setColorGuess] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  if (hasGuessed) {
    if (correctAnswer === colorGuess) {
      setIsWinner(true);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
      {/* Performance issue: WE got a requirement to have ExpensiveComponent between Game status and the Game
      input. This has forced us to move this component from application back to Game component undoing our
      previous refactoring. So we will now levarage {children} prop */}
      {/* <ExpensiveComponent /> */}
      {/* with children prop parent doesnt rerender this component */}
      {children}
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
    </div>
  );
};

export default Game;
