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
                @click="buttonClick(n)">
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
                updatingValue: "",
                staticValue: 0,
                lastOperator: "",
                calculatorFirstRow: ["PWR","DEL", "AC", "÷"],
                calculatorSecondRow: ["7", "8", "9", "x"],
                calculatorThirdRow: ["4", "5", "6", "-"],
                calculatorFourthRow: ["1", "2", "3", "+"],
                calculatorFifthRow: [".", "="]
            }
        },

        methods: {
            buttonClick(buttonValue){
                if(isNaN(buttonValue)){
                    this.symbolHandling(buttonValue);
                    // Reset display
                } else{
                    this.numberHandling(buttonValue);
                    // Handle numbers
                }
            },

            numberHandling(buttonValue){
                
                this.updatingValue = this.updatingValue.concat(buttonValue);
                
            },

            symbolHandling(buttonValue){
                if (buttonValue == "DEL"){
                    this.updatingValue = "";
                } else if (buttonValue == "AC"){
                    this.updatingValue = this.updatingValue.slice(0, -1);
                }
                this.lastOperator = buttonValue;
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
    overflow: auto;
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