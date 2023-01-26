<template>
    <div id="grid-container">
        <div class="calculator-row" id="outer-calculator-div">
            <div id="calculator-output-div">
                <div id="calculator-output">
                    {{ updatingValue }}
                </div>
            </div>
        </div>
        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorFirstRow" :key="n"
                :class="{'pink-buttons': ['PWR','DEL','AC','÷'].includes(n)}" 
                @click="buttonClick(n)">
                {{ n }}
            </button>
        </div>
        
        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorSecondRow" :key="n"
                :class="{'green-buttons': ['7','8','9'].includes(n), 'pink-buttons': ['x'].includes(n)}"
                @click="buttonClick(n)">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorThirdRow" :key="n"
                :class="{'green-buttons': ['4','5','6'].includes(n), 'pink-buttons': ['-'].includes(n)}"
                @click="buttonClick(n)">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorFourthRow" :key="n"
                :class="{'green-buttons': ['1','2','3'].includes(n), 'pink-buttons': ['+'].includes(n)}"
                @click="buttonClick(n)">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <div id="zero-button-div">
                <button class="calculator-button, green-buttons" id="zero-button"
                @click="buttonClick(0)">
                    0
                </button>
            </div>
            <button class="calculator-button" v-for="n in calculatorFifthRow" :key="n"
                :class="{'pink-buttons': ['.','='].includes(n)}"
                @click="buttonClick(n)">
                {{ n }}
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        name: "Calculator",

        data() {
            return {
                updatingValue: "OFF",
                value: 0.0,
                lastOperator: "",
                equation: "",
                isOff: true,
                beginNewEquation: false,
                calculatorFirstRow: ["PWR","DEL", "AC", "÷"],
                calculatorSecondRow: ["7", "8", "9", "x"],
                calculatorThirdRow: ["4", "5", "6", "-"],
                calculatorFourthRow: ["1", "2", "3", "+"],
                calculatorFifthRow: [".", "="]
            }
        },

        methods: {
            buttonClick(buttonValue){
                if (buttonValue == "PWR") {
                    if (this.isOff){
                        this.clearOutAllFields();
                        this.isOff = false;
                        return;
                    } else{
                        this.clearOutAllFields();
                        this.updatingValue = "OFF";
                        this.isOff = true;
                        return;
                    }
                }
                if (this.isOff){
                    return;
                }
                if(isNaN(buttonValue) && buttonValue != "."){
                    this.symbolHandling(buttonValue);
                } else {
                    this.numberHandling(buttonValue);
                }
            },


            numberHandling(buttonValue){
                if(isNaN(this.updatingValue) && this.updatingValue != "."){
                    this.updatingValue = "";
                }
                if(!this.beginNewEquation){
                    this.updatingValue = this.updatingValue.concat(buttonValue);
                } else {
                    this.updatingValue = buttonValue;
                    this.beginNewEquation = false;
                }
            },

            symbolHandling(buttonValue){
                switch (buttonValue){
                    case "DEL":
                        this.clearOutAllFields();
                        break;
                    case "AC":
                        if (!this.updatingValue == ""){
                            this.updatingValue = this.updatingValue.slice(0, -1);
                        } else {
                            this.clearOutAllFields();
                        }
                        break;
                    case "=":
                        this.doTheMath(buttonValue);
                        this.updatingValue = this.value.toString();
                        this.equation = this.equation.concat(this.value);
                        //this.$emit("addEquationToHistory", this.equation);
                        console.log(this.equation);
                        this.clearAllButOutput();
                        this.beginNewEquation = true;
                        break;
                    default:
                        this.doTheMath(buttonValue);
                        break;
                }
            },

            doTheMath(buttonValue){
                
                // Calculates the sum so far, using the previous operator entered (it it was).
                if(this.lastOperator != ""){

                    // If the user were to give 2 operators in row, a 0 is placed in between.
                    if (isNaN(this.updatingValue)){
                        this.updatingValue = 0;
                    }

                    // Calculates the sum, based on opertor.
                    switch(this.lastOperator){
                        case "+":
                            this.value += parseFloat(this.updatingValue);
                            break;
                        case "-":
                            this.value -= parseFloat(this.updatingValue);
                            break;
                        case "x":
                            this.value *= parseFloat(this.updatingValue);
                            break;
                        case "÷":
                            this.value /= parseFloat(this.updatingValue);
                            break;
                    }
                } else {
                    if (this.updatingValue == ""){
                        this.value = 0; //If there is no previous operator and no input number from user, then value is given 0.
                    } else {
                        this.value = parseFloat(this.updatingValue); // If no previous operator, then the value is set with user input.
                    }
                }

                if (isNaN(this.updatingValue)){
                    this.equation = this.equation.concat("0"); // If there is no input from user, then a 0 is placed in the equation.
                } else{
                    this.equation = this.equation.concat(this.updatingValue); // Else the user input is place in the equation.
                }

                this.equation = this.equation.concat(buttonValue); //Equation is then given the operator.
                this.updatingValue = buttonValue; // The display then shows which operator was selected.
                this.lastOperator = buttonValue;  // Last operator is then replaced with the last
                
                console.log(this.equation);
                console.log(this.value);
                console.log(this.updatingValue);
                
            },

            clearOutAllFields(){
                this.clearAllButOutput();
                this.updatingValue = "";
            },

            clearAllButOutput(){
                this.value = 0;
                this.lastOperator = "";
                this.equation = "";
            }
        }
    }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
#grid-container{
    display: grid;
    color: white;
    height: 600px;
    width: 500px;
    grid-template-columns: repeat(auto, 1fr);
    grid-template-rows:  repeat(auto, 1fr);
    background-color: rgb(35, 35, 72);
    border: 10px solid black;
    border-radius: 10px;
}

.calculator-row{
    width: 500px;
    min-height: 88px;
    text-align: left;
    display: flex;
}

.calculator-button{
    min-width: 125px;
    height: 88px;
    font-size: 40px;
    border-radius: 5px;
    cursor: pointer;
}

.calculator-button:active{
    border: 3px solid black;
    font-size: 36px;
}

#calculator-output{
    padding-top: 12px;
    padding-right: 10px;
    height: 100px;
    text-align: right;
    justify-items: center;
    font-size: 70px;
    font-family: 'Orbitron', sans-serif;
    overflow-x: auto;
    overflow-y: hidden;
}

#calculator-output-div{
    width: 460px;
    height: 100px;
    border-radius: 20px;
    margin-left: 20px;
    margin-top: 25px;
    background-color: rgb(6, 6, 50);
}

#outer-calculator-div{
    height: 160px;
}

.pink-buttons{
    background-color: #fe67c2;
    border: 1px solid black;
}

.green-buttons{
    background-color: #62f2b4;
    border: 1px solid black;
}

#zero-button-div{
    display: grid;
    width: 250px;
    min-height: 88px;
}

#zero-button{
    font-size: 40px;
    border-radius: 5px;
    cursor: pointer;
}

#zero-button:active{
    border: 3px solid black;
    font-size: 36px;
}

</style>