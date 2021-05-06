import React from 'react';
import { Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Gratitude = React.lazy(() => import('./pages/Gratitude'));
const Resume = React.lazy(() => import('./pages/Resume'));

const App: React.FunctionComponent = () => {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <React.Suspense fallback={<Preloader />}>
          <Route path="/" component={Home} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/gratitude" component={Gratitude} exact />
          <Route path="/resume" component={Resume} exact />
        </React.Suspense>
      </main>
    </div>
  );
};

export default App;
