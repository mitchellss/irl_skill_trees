import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import backend from '../globals';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            trees: []
        };
    }

    componentDidMount() {
        this.getTrees();
    }

    componentDidUpdate() {

    }

    getTrees = () => {
        axios.get(`${backend.value}/api/skilltree/`)
            .then(res => {
                this.setState({ trees: [...res.data] })
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                {this.state.trees.length === 0 ? (
                    <div>Loading...</div>
                ) : (
                        this.state.trees.map((element) => {
                            return (
                                <Link key={element.id} to={`/${element.name}`}>
                                    <div>{element.name}</div>
                                </Link>
                            )
                        })
                    )}
            </div>
        )
    }
}

export default Dashboard;