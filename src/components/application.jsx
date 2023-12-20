import ExpensiveComponent from './expensive-component';
import Game from './game';

const Application = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game>
        {/* now we are pushing state down. ExpensiveComponent is being rendered via children prop within Game
        and Game is unaware of it so rerendering of ExpensiveComponent is not happening in Game on every
        keystroke when we type */}
        <ExpensiveComponent />
      </Game>
    </main>
  );
};

export default Application;
