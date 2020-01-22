import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';

// set up alternative routes. Switch from react-router-dom will wrap the react components, 
//and prevent switching.
const App = () => {
  return (
  <Router>
    <Switch>
    <Route path="/" exact>
      <Users/>
    </Route>

    <Route path="/places/new" exact>
      <NewPlace/>
    </Route>
    
    <Redirect to="/"/> 
    </Switch>
  </Router>

  );
}

export default App;
