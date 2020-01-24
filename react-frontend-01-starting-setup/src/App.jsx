import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace.jsx";
import MainNavigation from "./shared/components/UIElements/Navigation/MainNavigation.jsx";
import UserPlaces from './places/pages/UserPlaces.jsx'
// set up alternative routes. Switch from react-router-dom will wrap the react components,
//and prevent switching.
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>

          <Redirect to="/" />
        </Switch>{" "}
      </main>
    </Router>
  );
};

export default App;
