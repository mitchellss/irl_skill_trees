import React from 'react';

class RootNode extends React.Component {
    render() {
        return (
            <div className="node_div" id={this.props.nodeID}>
                <a className="node" id={this.props.linkID} href={this.props.nodeUrl} target="_blank" rel="noopener noreferrer" onClick={this.props.unlockFunction}></a>
                <div className="desc" id="root_desc">
                    <h1 className="skill_title">{this.props.desc_title}</h1>
                    <p className="skill_desc">{this.props.desc.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        )
                    })}</p>
                </div>
                <div id={this.props.leftBranch} className="branch"></div>
                <div id={this.props.rightBranch} className="branch"></div>
            </div>
        );
    }
}

export default RootNode;