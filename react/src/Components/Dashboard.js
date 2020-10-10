import React from 'react';
import Header from './Header';
import NavPane from './NavPane';
import Screen from './Screen';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="App">
                <Header name="Cooking" image="./images/burger_table.jpg" />
                <NavPane />
                <Screen />
            </div>
        );
    }
}

export default Dashboard;