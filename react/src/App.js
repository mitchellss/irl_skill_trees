import React from 'react';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Tree from './Components/Tree';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/app.css';

class App extends React.Component {
  render(props) {
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
