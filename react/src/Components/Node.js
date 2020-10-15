import React from 'react';

export default class Node extends React.Component {
    render() {
        return (
            <div className={`node_div col${this.props.column} level${this.props.level}`} >
                <a className={this.props.state} id={this.props.linkID} href={this.props.nodeUrl} target="_blank" rel="noopener noreferrer"></a>
                <div className="desc">
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
                <div className="disabled_desc">
                    <h1 className="skill_title">{this.props.desc_title}</h1>
                    <p className="skill_desc">Node Locked<br />To unlock this node, click on nodes earlier in the tree</p>
                </div>
            </div>
        );
    }
}