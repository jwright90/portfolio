import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Router Tutorial
// https://www.youtube.com/watch?v=aZGzwEjZrXc&ab_channel=TheNetNinja

import Navigation from './components/Navigation'
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
