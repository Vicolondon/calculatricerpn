import React, { Component } from 'react';
// import App from "../App";

class Chiffre extends Component {
    constructor(props){
        super(props);
        this.state = {
            chiffrechoisi: 0,
        }
    }

    render() {
        return(
            <button onClick={e => this.props.handleClick(this.props.chiffrechoisi)}>{this.props.chiffrechoisi}</button>
        )
    }
}

export default Chiffre;