import React, { Component } from 'react';
import Chiffre from './Chiffre';

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Calculatrice RPN',
            // chiffrechoisi: 0,
            stack: [],
            numberToAdd: '0',
            show_operations: '',
            show_results: 0,
            total: 0
        }
    }
    

    handleClickChiffre = (e) => {
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if( this.state.numberToAdd === '0'){
            this.setState(state => ({
                numberToAdd: state.numberToAdd = e
            }));
        } else{
            this.setState(state => ({
                numberToAdd: state.numberToAdd += e
            }));
        }
    }

    handleClickOperation = (e) => {
        console.log(e)
        if( this.hasTwoItems() ) {
            let lastTwoItems = this.getTwoNumbers();
            if( e === '+' ){
            } else if ( e === '-' ){
            } else if ( e === '/' ){
            } else if ( e === '+/-' ){
            }  else if ( e === '*' ){
            } else if ( e === 'C' ){
            }
        }
    }
 
    // add to stack function   
    addToStack =(number) => {
        var newStack = this.state.stack;

        newStack.unshift(number);
        this.setState({ stack: newStack });
    }

    // Enter button
    handleClickEnter = () => {
        this.addToStack( this.state.numberToAdd );
        this.clearDisplay();
        console.log(this.state.stack);
    }
    
    // clear number to add
    clearDisplay = () => {
        this.setState({numberToAdd: '0'});
    }

    // Clear all
    clearAll = () => {
        this.setState({numberToAdd: '0', stack: []});
    }
    
    isFreshDisplay = () => {
        return this.state.numberToAdd == '0';
    }

    hasTwoItems = () => {
        return (!this.isFreshDisplay() && this.state.stack.length > 0) || this.state.stack.length > 1;
    }
    
    getTwoNumbers = () => {
        var newStack = this.state.stack, first, second;

        // if we have a number in the display, that's the first
        if (this.state.displayValue !== '0') {
            second = this.state.displayValue;
        } else {
            second = newStack.shift();
        }

        // and the second comes form the stack
        first = newStack.shift();

        this.setState({ stack: newStack });

        return [first, second];
    }

    add = ( numbers ) =>{
        let newDisplayValue = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        this.setState({displayValue: newDisplayValue});
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