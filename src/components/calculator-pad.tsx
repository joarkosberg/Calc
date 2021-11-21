import './calculator-pad.scss';

export interface CalculatorPadProps {
    text: String
    onClick: () => void
}

const CalculatorPad = (props: CalculatorPadProps) => {
    return (
        <div className="pad" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default CalculatorPad