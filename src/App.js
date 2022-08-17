import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  }
}

export default App;
