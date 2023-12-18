import ExpensiveComponent from './expensive-component';
import Game from './game';

const Application = () => {
  // const [colorGuess, setColorGuess] = useState('');
  // const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  // const [hasGuessed, setHasGuessed] = useState(false);
  // const [isWinner, setIsWinner] = useState(false);

  // if (hasGuessed) {
  //   if (correctAnswer === colorGuess) {
  //     setIsWinner(true);
  //   }
  // }

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game />
      {/**Performance enhancement: Everything was rendering here especially when talking to ExpensiveComponent
       * We moved all these components that depend on each other and their state to the new component
       * Game. Now in the profiler ExpensiveComponent no longer renders all the time as we type.
       *
       * Tip: Think of these improvements before trying to reach out to memoization functions
       */}
      {/* <ColorSwatch color={correctAnswer} />
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
      </button> */}
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
