import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation'
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
