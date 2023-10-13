import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './index.css';

function App(): JSX.Element {
  return (
    <>
      <div className="todoapp">
        <Header />
        <Todos />
        <Footer />
      </div>
    </>
  );
}

export default App;
