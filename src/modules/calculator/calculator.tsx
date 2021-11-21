import CalculatorPad from "../../components/calculator-pad"
import { CalculatorAction } from "../../models/calculator-action";
import './calculator.scss';
import React, { useState } from "react";
import { CalculatorActionHelper } from "../../utilities/calculator-action-helper";

const Calculator = () => {
    const defaultInput = '0'
    const decimalSymbol = '.'

    const [showingPrevious, setShowingPrevious] = useState(false)
    const [previousInput, setPreviousInput] = useState<number | null>(null)
    const [currentInput, setInput] = useState(defaultInput)
    const [currentAction, setAction] = useState<CalculatorAction>(CalculatorAction.None)

    function numberTapped(number: number) {
        if (defaultInput == currentInput) {
            setInput(number.toString())
        } else {
            if (showingPrevious) {
                setInput(number.toString())
                setShowingPrevious(false)
            } else {
                setInput(currentInput + number)
            }
        }
    }

    function decimalTapped() {
        if (!currentInput.includes(decimalSymbol)) {
            setInput(currentInput + decimalSymbol)
        }
    }

    function actionTapped(action: CalculatorAction) {
        const previousAction = currentAction
        const input: number = +currentInput

        setAction(action)

        if (previousInput != null) {
            switch(previousAction) {
                case CalculatorAction.Add: { 
                    const newValue = previousInput + input
                    setInput((newValue).toString())
                    setPreviousInput(newValue)
                    break; 
                } 
                case CalculatorAction.Subtract: { 
                    const newValue = previousInput - input
                    setInput((newValue).toString())
                    setPreviousInput(newValue)
                    break; 
                } 
                case CalculatorAction.Divide: { 
                    const newValue =  previousInput / input
                    setInput((newValue).toString())
                    setPreviousInput(newValue)
                    break; 
                } 
                case CalculatorAction.Multiple: { 
                    const newValue = previousInput * input
                    setInput((newValue).toString())
                    setPreviousInput(newValue)
                    break; 
                }
            }
        } else {
            setPreviousInput(input)
        }
 
        setShowingPrevious(true)
    }

    return (
        <div>
            <h1>Calculator</h1>
            <div className="input-parent">
                <p className="input-field">{ CalculatorActionHelper.getSymbol(currentAction) + " " + currentInput }</p>
                <div className="input-numbers">
                    <CalculatorPad text="1" onClick={() => numberTapped(1)}/>
                    <CalculatorPad text="2" onClick={() => numberTapped(2)}/>
                    <CalculatorPad text="3" onClick={() => numberTapped(3)}/>
                    <CalculatorPad text="4" onClick={() => numberTapped(4)}/>
                    <CalculatorPad text="5" onClick={() => numberTapped(5)}/>
                    <CalculatorPad text="6" onClick={() => numberTapped(6)}/>
                    <CalculatorPad text="7" onClick={() => numberTapped(7)}/>
                    <CalculatorPad text="8" onClick={() => numberTapped(8)}/>
                    <CalculatorPad text="9" onClick={() => numberTapped(9)}/>
                    <CalculatorPad text="0" onClick={() => numberTapped(0)}/>
                    <CalculatorPad text={decimalSymbol} onClick={decimalTapped}/>
                </div>
                <div className="input-actions">
                    <CalculatorPad text={CalculatorActionHelper.getSymbol(CalculatorAction.Add)} onClick={() => actionTapped(CalculatorAction.Add)}/>
                    <CalculatorPad text={CalculatorActionHelper.getSymbol(CalculatorAction.Subtract)} onClick={() => actionTapped(CalculatorAction.Subtract)}/>
                    <CalculatorPad text={CalculatorActionHelper.getSymbol(CalculatorAction.Divide)} onClick={() => actionTapped(CalculatorAction.Divide)}/>
                    <CalculatorPad text={CalculatorActionHelper.getSymbol(CalculatorAction.Multiple)} onClick={() => actionTapped(CalculatorAction.Multiple)}/>
                    <CalculatorPad text={CalculatorActionHelper.getSymbol(CalculatorAction.Equals)} onClick={() => actionTapped(CalculatorAction.Equals)}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator