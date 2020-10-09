import React from 'react';
import {Header, NavigationPane, Screen} from './Parts.js';
import './app.css';

class App extends React.Component {
  render(props) {
    return (
      <div className="App">
        <Header name="Cooking" image="./burger_table.jpg"/>
        <NavigationPane />
        <Screen />
      </div>
    );
  }
}

export default App;
