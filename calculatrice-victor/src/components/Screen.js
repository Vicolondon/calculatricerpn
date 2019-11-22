import React, { Component } from 'react';
// import App from "../App";

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {
            operations: []
        }
    }

    render() {
        return(
            <div className="screen">
                <p operations={this.props.operations}>{this.operations}</p>
            </div>
        )
    }
}

export default Screen;