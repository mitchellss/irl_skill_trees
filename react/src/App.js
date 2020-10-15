import React from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Tree from './Components/Tree';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/login" component={Login}/>
          <Route path="/:id" component={Tree}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
