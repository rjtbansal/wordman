import { useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const Application = () => {
  const [colorGuess, setColorGuess] = useState('');
  /**Performance issue below: generateRandomColor is doing expensive
   * calculation and is being called immediately on every render leading to
   * slow typing when we try typing in the input text. tO FIX below commented out code
   * pass initial value of useState as an anonymous function for it to be called only when
   * needed
   */
  // const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [correctAnswer, setCorrectAnswer] = useState(() =>
    generateRandomColor(),
  );
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  if (hasGuessed) {
    if (correctAnswer === colorGuess) {
      setIsWinner(true);
    }
  }

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
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
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
