import React, { Component } from 'react';
import Chiffre from './Chiffre';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Calculatrice RPN',
            // chiffrechoisi: 0,
            operations: [],
            numberToAdd: '',
            show_operations: '',
            show_results: 0,
            total: 0
        }
    }
    

    handleClickChiffre = (e) => {
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
            this.setState(state => ({
                numberToAdd: state.numberToAdd += e
            }));
    }

    handleClickOperation = (e) => {
        console.log(e)
        if( e === '+' ){

        } else if ( e === '-' ){

        } else if ( e === '/' ){
                
        } else if ( e === '+/-' ){
            this.setState(state => ({
                numberToAdd: (-1)*state.numberToAdd
            }));
                
        }  else if ( e === '*' ){
                
        } else if ( e === 'C' ){
            this.setState( state => ({
                show_results: 0,
                numberToAdd: '',
                show_operations: ''
            }));
            console.log( this.state.numberToAdd );
        }
    }

    handleClickEnter = () => {
            this.setState( state => ({
                show_results: 0,
                numberToAdd: '',
                show_operations: state.show_results + " " + this.state.numberToAdd,
                operations: [ ...state.operations, this.state.numberToAdd]
            }));
            // this.state.operations.push(Number(e));
            // this.setState({
            //     operations: this.state.operations
            // });
            console.log(this.state.operations);
    }

    render() {
        return(<div id="calculator">
        <header className="App-header">
            <h1>{this.state.title}</h1>
        </header>
        <div className="showscreen">
            <div className="operations">
                <p>{this.state.show_operations}</p>
            </div>
            <div className="numbertoadd">
                <p>{this.state.numberToAdd}</p>
            </div>
            <div className="showresults">
                <p>{this.state.show_results}</p>
            </div>
        </div>
            <table summary="Clavier (Christian)">
                <tbody>
                    <tr>
                        <td><Chiffre chiffrechoisi="7" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="8" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="9" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="/" handleClick={this.handleClickOperation} /></td>
                    </tr>
                    <tr>
                        <td><Chiffre chiffrechoisi="4" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="5" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="6" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="*" handleClick={this.handleClickOperation} /></td>
                    </tr>
                    <tr>
                        <td><Chiffre chiffrechoisi="1" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="2" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="3" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="-" handleClick={this.handleClickOperation} /></td>
                    </tr>
                    <tr>
                        <td><Chiffre chiffrechoisi="C" handleClick={this.handleClickOperation} /></td>
                        <td><Chiffre chiffrechoisi="0" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="," handleClick={this.handleClickOperation} /></td>
                        <td><Chiffre chiffrechoisi="+" handleClick={this.handleClickOperation} /></td>
                    </tr>
                    <tr>
                        <td><Chiffre chiffrechoisi="ENTER" handleClick={this.handleClickEnter} /></td>
                        <td><Chiffre chiffrechoisi="+/-" handleClick={this.handleClickOperation} /></td>
                    </tr>
                  </tbody>
            </table>
        </div>)
    }
}

export default Calculator;