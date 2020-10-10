import React from 'react';
import axios from 'axios';
import backend from '../globals';

export default class Tree extends React.Component {

    constructor() {
        super();
        this.state = {
            nodeList: [],
        };
    }

    componentDidMount() {
        this.getCurrentTree();
    }

    getCurrentTree = () => {
        axios.get(`${backend.value}/api/skilltree/?name=${this.props.match.params.id}`)
            .then(res => {
                this.setState({ currentTree: res.data[0] });
                this.getNodeList(res.data[0].id);
            }).catch(err => {
                console.log(err);
            })
    }

    getNodeList = (treeId) => {
        axios.get(`${backend.value}/api/node/?tree=${treeId}`)
            .then(res => {
                this.setState({ nodeList: [...res.data] })
            }).catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <div>
                    {this.props.match.params.id}
                </div>
                <div>
                    {this.state.currentTree === null ? (<div>Loading...</div>) : (this.state.nodeList.map((element) => {
                        return(<div key={element.id}>{element.title}</div>)
                    }))}
                </div>
            </div>
        )
    }
}