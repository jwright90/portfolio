import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Router Tutorial
// https://www.youtube.com/watch?v=aZGzwEjZrXc&ab_channel=TheNetNinja

import Navigation from './components/Navigation'
import Hero from './components/Hero';
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
