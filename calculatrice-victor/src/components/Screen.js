import React, { Component } from 'react';
// import App from "../App";

class Screen extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="screen">
                <p>{this.props.operations}</p>
                <p>{this.props.results}</p>
            </div>
        )
    }
}

export default Screen;