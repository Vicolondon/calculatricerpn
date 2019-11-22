import React, { Component } from 'react';
import Chiffre from './Chiffre';
import Screen from './Screen';
// import App from "../App";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            chiffrechoisi: 0,
            operations: [0,3,4],
            results: '0'
        }
    }

    handleClick = (e) => {
        // this.setState({ chiffrechoisi: this.props.chiffrechoisi})
        this.state.operations.push(Number(e));
        this.setState({ operations: this.state.operations});
        console.log( e );
        console.log( this.state.operations );
    }

    showOnScreen = (e) => {
        this.setState({ operations: this.state.operations.push(e)});
        console.log( this.state.operations );
    }

    render() {
        return(<div id="calculator">
        <header className="App-header">
            <h1>Calculatrice RPN</h1>
        </header>
        <Screen operations={this.operations}/>
              <table summary="Clavier (Christian)">
                  <tbody>
                      <tr>
                          <td><Chiffre chiffrechoisi="7" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="8" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="9" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="/" handleClick={this.handleClick} /></td>
                      </tr>
                      <tr>
                          <td><Chiffre chiffrechoisi="4" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="5" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="6" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="*" handleClick={this.handleClick} /></td>
                      </tr>
                      <tr>
                          <td><Chiffre chiffrechoisi="1" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="2" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="3" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="-" handleClick={this.handleClick} /></td>
                      </tr>
                      <tr>
                          <td><Chiffre chiffrechoisi="C" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="0" handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="," handleClick={this.handleClick} /></td>
                          <td><Chiffre chiffrechoisi="+/-" handleClick={this.handleClick} /></td>
                      </tr>
                      <tr>
                          <th><Chiffre chiffrechoisi="ENTER" handleClick={this.showOnScreen} /></th>
                      </tr>
                  </tbody>
              </table>
        </div>)
    }
}

export default Calculator;