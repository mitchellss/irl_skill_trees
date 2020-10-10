import React from 'react';

class Level extends React.Component {
    render() {
        return (
            <div className="level">
                <div className="level_line" id={this.props.levelLineNumber}></div>
                <div className="level_title" id={this.props.levelTitleNumber}>{this.props.levelTitle}</div>
            </div>
        );
    }
}

export default Level;