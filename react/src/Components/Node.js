import React from 'react';

export default class Node extends React.Component {
    render() {
        return(<div className="node">{this.props.name}</div>);
    }
}