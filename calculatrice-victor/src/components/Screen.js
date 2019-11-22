import React, { Component } from 'react';
// import App from "../App";

class Screen extends Component {
    constructor(props){
        super(props);
        this.state = {
            operations: [0,0]
        }
    }

    render() {
        return(
            <div className="screen">
                <p operations={this.props.operations}>{this.state.operations}</p>
            </div>
        )
    }
}

export default Screen;