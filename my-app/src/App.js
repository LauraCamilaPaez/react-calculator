import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');

    const addInput = val => {
        setInput(input + val);
    };

    const calculateResult = () => {
        if (input) {
            setInput(evaluate(input));
        } else {
            alert("Please enter values to perform calculations")
        }
    }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
            src={freeCodeCampLogo}
            className='freecodecamp-logo'
            alt='FreeCodeCamp Logo'
        />
      </div>
        <div className='calculator-container'>
            <Screen input={input}/>
            <div className='row'>
                <Button manageClick={addInput}>1</Button>
                <Button manageClick={addInput}>2</Button>
                <Button manageClick={addInput}>3</Button>
                <Button manageClick={addInput}>+</Button>
            </div>
            <div className='row'>
                <Button manageClick={addInput}>4</Button>
                <Button manageClick={addInput}>5</Button>
                <Button manageClick={addInput}>6</Button>
                <Button manageClick={addInput}>-</Button>
            </div>
            <div className='row'>
                <Button manageClick={addInput}>7</Button>
                <Button manageClick={addInput}>8</Button>
                <Button manageClick={addInput}>9</Button>
                <Button manageClick={addInput}>*</Button>
            </div>
            <div className='row'>
                <Button manageClick={calculateResult}>=</Button>
                <Button manageClick={addInput}>0</Button>
                <Button manageClick={addInput}>.</Button>
                <Button manageClick={addInput}>/</Button>
            </div>
            <div className='row'>
                <ButtonClear manageClear={ ()=> setInput('')}>
                    Clear
                </ButtonClear>
            </div>
        </div>
    </div>
  );
}

export default App;
