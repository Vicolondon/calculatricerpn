import React, { Component } from 'react';
import Chiffre from './Chiffre';
import Screen from './Screen';
// import App from "../App";

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            Chiffrechoisi: 0,
            operations: [],
            results: '0'
        }
    }

    render() {
        return(<div id="calculator">
        <header className="App-header">
            <h1>Calculatrice RPN</h1>
        </header>
        <Screen/>
              <table summary="Clavier (Christian)">
                  <tbody>
                      <tr>
                          <td><Chiffre Chiffrechoisi="7"/></td>
                          <td><Chiffre Chiffrechoisi="8"/></td>
                          <td><Chiffre Chiffrechoisi="9"/></td>
                          <td><Chiffre Chiffrechoisi="/"/></td>
                      </tr>
                      <tr>
                          <td><Chiffre Chiffrechoisi="4"/></td>
                          <td><Chiffre Chiffrechoisi="5"/></td>
                          <td><Chiffre Chiffrechoisi="6"/></td>
                          <td><Chiffre Chiffrechoisi="*"/></td>
                      </tr>
                      <tr>
                          <td><Chiffre Chiffrechoisi="1"/></td>
                          <td><Chiffre Chiffrechoisi="2"/></td>
                          <td><Chiffre Chiffrechoisi="3"/></td>
                          <td><Chiffre Chiffrechoisi="-"/></td>
                      </tr>
                      <tr>
                          <td><Chiffre Chiffrechoisi="C"/></td>
                          <td><Chiffre Chiffrechoisi="0"/></td>
                          <td><Chiffre Chiffrechoisi=","/></td>
                          <td><Chiffre Chiffrechoisi="+/-"/></td>
                      </tr>
                      <tr>
                          <th><Chiffre Chiffrechoisi="ENTER"/></th>
                      </tr>
                  </tbody>
              </table>
        </div>)
    }
}

export default Calculator;