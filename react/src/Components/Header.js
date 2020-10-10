import React from 'react';
import Background from './images/burger_table.jpg'

class Header extends React.Component {
    render() {
        return (
            <header className="header" style={{
                backgroundImage: `url(${Background})`
            }}>
                <div className="hamburger" id="burger" onClick={() => {
                    var pane = document.getElementById("nav_pane");
                    if (pane.style.display === "none") {
                        pane.style.display = "block";
                    } else {
                        pane.style.display = "none";
                    }
                }}></div>
                <div className="skill_navigation">
                    <div id="left_button"></div>
                    <div className="tree_title">{this.props.name}</div>
                    <div id="right_button"></div>
                </div>
            </header>
        );
    }
}

export default Header;