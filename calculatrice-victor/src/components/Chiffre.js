import React, { Component } from 'react';
// import App from "../App";

class Chiffre extends Component {
    constructor(props){
        super(props);
        this.state = {
            Chiffrechoisi: 0,
            operations: [],
            results: '0'
        }
    }

    handleClick = () => {
        return console.log(this.props.Chiffrechoisi);
    }

    render() {
        return(
            <button onClick={this.handleClick}>{this.props.Chiffrechoisi}</button>
        )
    }
}

export default Chiffre;