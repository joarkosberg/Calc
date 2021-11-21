import { CalculatorAction } from "../models/calculator-action";

export class CalculatorActionHelper {
    static getSymbol(action: CalculatorAction): String {
        switch(action) {
            case CalculatorAction.Add: { 
                return("+")
             } 
             case CalculatorAction.Subtract: { 
                return("-")
             } 
             case CalculatorAction.Divide: { 
                return("/")
             } 
             case CalculatorAction.Multiple: { 
                return("*")
             } 
             case CalculatorAction.Equals: { 
                return("=")
             } 
             case CalculatorAction.None: { 
                return("")
             } 
        }
    }
}