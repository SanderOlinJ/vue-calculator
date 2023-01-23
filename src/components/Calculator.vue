<template>
    <div id="grid-container">
        <div class="calculator-row">
            <div id="calculator-output-div">
                <div id="calculator-output">
                    5400
                </div>
            </div>
        </div>
        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorFirstRow" :key="n">
                {{ n }}
            </button>
        </div>
        
        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorSecondRow" :key="n">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorThirdRow" :key="n">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorFourthRow" :key="n">
                {{ n }}
            </button>
        </div>

        <div class="calculator-row">
            <button class="calculator-button" v-for="n in calculatorFifthRow" :key="n">
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
                calculatorFirstRow: ["DEL", "AC", "÷"],
                calculatorSecondRow: ["7", "8", "9", "x"],
                calculatorThirdRow: ["4", "5", "6", "-"],
                calculatorFourthRow: ["1", "2", "3", "+"],
                calculatorFifthRow: ["0", ".", "="]
            }
        }
    }
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
#grid-container{
    padding: 0;
    margin: 0;
    display: grid;
    color: white;
    height: 600px;
    width: 500px;
    grid-template-columns: repeat(auto, 1fr);
    grid-template-rows:  repeat(auto, 1fr);
    background-color: rgb(35, 35, 72);
    border: 10 px solid gray;
    border-radius: 10px;
}

.calculator-row{
    padding: 0;
    margin: 0;
    width: 500px;
    min-height: 100px;
    text-align: right;
}

.calculator-button{
    padding: 0;
    margin: 0;
    min-width: 125px;
    height: 70px;
    font-size: 40px;
    border-radius: 0;
}

#calculator-output{
    padding: 0;
    margin: 0;
    text-align: right;
    justify-items: center;
    font-size: 50px;
    font-family: 'Orbitron', sans-serif;
    
}

#calculator-output-div{
    width: 460px;
    height: 80px;
    margin-left: 20px;
    margin-top: 12px;
    background-color: rgb(6, 6, 50);
}


</style>