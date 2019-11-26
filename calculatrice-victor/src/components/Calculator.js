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
            show_results: 0
        }
    }

    handleClickChiffre = (e) => {
        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if( this.state.numberToAdd === '0' || this.state.numberToAdd === 'NaN'){
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
        if( this.hasTwoItems() ) {
            let lastTwoItems = this.getTwoNumbers();
            if( e === '+' ){
                this.addfunction( lastTwoItems );
            } else if ( e === '-' ){
                this.minusfunction( lastTwoItems );
            } else if ( e === '/' ){
                this.dividefunction( lastTwoItems );
            } else if ( e === '+/-' ){
                this.plusminusfunction();
            }  else if ( e === '*' ){
                this.multiplyfunction( lastTwoItems );
            }
            /* else if ( e === 'C' ){
                this.clearDisplay();
            } else if ( e === 'CE' ){
                this.clearAll();
            }*/
        } else {
            if ( e === 'C' ){
                this.clearDisplay();
            } else if ( e === 'CE' ){
                this.clearAll();
            } else {
                // console.log('erreur nous avons besoin de plus de chiffre')
            }
        }

        setTimeout(()=>{
            this.showfunction();
        }, 200)

    }
 
    // function to add a number to stack
    addToStack =(number) => {
        var newStack = this.state.stack;

        newStack.unshift(number);
        this.setState({ stack: newStack });
    }
 
    // function to drop a number from stack
    dropfunction = (  ) => {
        var lastnumber = this.state.stack;
        lastnumber.shift();
        
        this.showfunction();

        this.setState({ stack: lastnumber });
    }
 
    // function to drop a number from stack
    swapfunction = (  ) => {
        var lastnumber = this.state.stack;
        var firstlastnumber = this.state.stack[0];
        var secondlastnumber = this.state.stack[1];
        lastnumber.shift();
        lastnumber.shift();

        this.setState({ stack: [secondlastnumber, firstlastnumber, ...lastnumber] });

        setTimeout(()=>{
            this.showfunction();
        }, 200)
    }

    // Enter button
    handleClickEnter = () => {
        this.showfunction( this.state.numberToAdd );
        this.addToStack( this.state.numberToAdd );
        this.clearDisplay();
        this.showfunction()
    }
    
    // Show function
    showfunction = (  ) =>{
        let objecttoshow = ''

        this.state.stack.forEach(element => {
            objecttoshow += ' ' + element
        });

        this.setState({show_operations: objecttoshow})
    }
    // clear number to add
    clearDisplay = () => {
        this.setState({numberToAdd: '0'});
    }

    // Clear all
    clearAll = () => {
        this.setState({numberToAdd: '0', stack: [], show_operations:'', show_results: '0'});
    }
    
    // Function to clear the number to add
    isFreshDisplay = () => {
        return this.state.numberToAdd === '0';
    }

    // Function to verify if the stack has a least 2 items
    hasTwoItems = () => {
        return (!this.isFreshDisplay() && this.state.stack.length > 0) || this.state.stack.length > 1;
    }
    
    // Function to get the last two numbers of the stack
    getTwoNumbers = () => {
        var newStack = this.state.stack, first, second;

        // if we have a number in the display, that's the first
        if (this.state.numberToAdd !== '0') {
            second = this.state.numberToAdd;
        } else {
            second = newStack.shift();
        }

        // and the second comes form the stack
        first = newStack.shift();

        this.setState({ stack: newStack });

        return [first, second];
    }

    addfunction = ( numbers ) =>{
        let newDisplayValue = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        this.addToStack( newDisplayValue );
        this.setState({numberToAdd: '0',show_results: newDisplayValue});
    }

    minusfunction = ( numbers ) =>{
        let newDisplayValue = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        this.addToStack( newDisplayValue );
        this.setState({numberToAdd: '0',show_results: newDisplayValue});
    }

    multiplyfunction = ( numbers ) =>{
        let newDisplayValue = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        this.addToStack( newDisplayValue );
        this.setState({numberToAdd: '0',show_results: newDisplayValue});
    }

    dividefunction = ( numbers ) =>{
        let newDisplayValue = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        this.addToStack( newDisplayValue );
        this.setState({numberToAdd: '0',show_results: newDisplayValue});
    }
    
    plusminusfunction = (  ) =>{
        let newValue = this.state.numberToAdd;
            
        newValue = -newValue;

        this.setState({
            numberToAdd: newValue
        });
    }

    render() {
        return(<div id="calculator">
        <header className="App-header">
            <h1>{this.state.title}</h1>
        </header>
        <div className="showscreen">
            <div className="operations">
                <p>La pile: {this.state.show_operations}</p>
            </div>
            <div className="numbertoadd">
                <p>Nombre à ajouter: {this.state.numberToAdd}</p>
            </div>
            <div className="showresults">
                <p>Résultat: {this.state.show_results}</p>
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
                        <td><Chiffre chiffrechoisi="DROP" handleClick={this.dropfunction} /></td>
                        <td><Chiffre chiffrechoisi="0" handleClick={this.handleClickChiffre} /></td>
                        <td><Chiffre chiffrechoisi="SWAP" handleClick={this.swapfunction} /></td>
                        <td><Chiffre chiffrechoisi="+" handleClick={this.handleClickOperation} /></td>
                    </tr>
                    <tr>
                        <td><Chiffre chiffrechoisi="ENTER" handleClick={this.handleClickEnter} /></td>
                        <td><Chiffre chiffrechoisi="+/-" handleClick={this.handleClickOperation} /></td>
                        <td><Chiffre chiffrechoisi="CE" handleClick={this.handleClickOperation} /></td>
                        <td><Chiffre chiffrechoisi="C" handleClick={this.handleClickOperation} /></td>
                    </tr>
                  </tbody>
            </table>
        </div>)
    }
}

export default Calculator;