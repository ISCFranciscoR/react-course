import './App.css';
import Menu from './components/core/Menu';
import Router from './components/core/Router';
import { routes } from './routes/routes';
import NotFound from './components/pages/NotFound';
import Route from './components/core/Route';
import { Suspense, lazy } from 'react';
import Query from './components/pages/Query';
import Loader from './components/core/Loader';

const LazyAboutPage = lazy(() => import('./components/pages/Query'));

function App() {
  return (
    <>
      <Menu />
      <main>
        <h1>Custom React router</h1>
        <Suspense fallback={<Loader />}>
          <Router routes={routes} defaultComponent={NotFound}>
            <Route path="/search/Angular" component={Query} />
            <Route path="/about" component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  );
}

export default App;
