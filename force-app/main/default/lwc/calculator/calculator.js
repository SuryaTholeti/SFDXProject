import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track result;

    handleFirstNumberChange(event) {
        this.firstNumber = parseFloat(event.target.value);
    }

    handleSecondNumberChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }

    handleAddition() {
        this.result = this.firstNumber + this.secondNumber;
    }

    handleSubtraction() {
        this.result = this.firstNumber - this.secondNumber;
    }

    handleMultiplication() {
        this.result = this.firstNumber * this.secondNumber;
    }

    handleDivision() {
        if (this.secondNumber !== 0) {
            this.result = this.firstNumber / this.secondNumber;
        } else {
            this.result = 'Cannot divide by zero!';
        }
    }
}
