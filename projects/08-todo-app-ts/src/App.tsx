import { Todos } from './components/Todos';
import { useTodos } from './hooks/useTodos';
import { Footer } from './components/Footer';

function App(): JSX.Element {
  const { todos } = useTodos();
  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <div className="todoapp">
        <Todos todos={todos} />
        <Footer activeCount={1} todos={todos} />
      </div>
    </>
  );
}

export default App;
