import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/details/:name">
          <CountryDetails />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
