
//display
let displayOutput = document.getElementById('display-output');
let displayInput = document.getElementById('display-input');

//button
let inputBtn = document.querySelectorAll('[data-input]');
let operatorBtn = document.querySelectorAll('[data-operator]');
let clearBtn = document.querySelector('[data-clear]');
let equalBtn = document.querySelector('[data-equal]');

function main() {
    let innerCalculation;
    let inputBtnArr = [...inputBtn];
    let operatorBtnArr = [...operatorBtn];

    for(let i = 0; i < inputBtnArr.length; i++) {
        inputBtnArr[i].addEventListener('click', () => {
            console.log("input clicked");
            if(displayInput.innerText.length < 20){
                displayInput.innerText += inputBtnArr[i].getAttribute('data-input');
            }
        })
    }

    for(let i = 0; i < operatorBtnArr.length; i++){
        operatorBtnArr[i].addEventListener('click', () => {
            console.log("operator clicked");

            if(operatorBtnArr[i].getAttribute('data-operator') != "pos-neg"){
                displayOutput.innerText += " " + displayInput.innerText + " " + operatorBtn[i].getAttribute('data-operator');
                displayInput.innerText = "";
            }
            else if(operatorBtnArr[i].getAttribute('data-operator') == "pos-neg"){
                displayInput.innerText *= -1;
            }
        })
    }

    clearBtn.addEventListener('click', () => {
        displayInput.innerText = "";
        displayOutput.innerText = "";
    })

    equalBtn.addEventListener('click', () => {
        let equationTBA = `${displayOutput.innerText} ${displayInput.innerText}`;
        let ans = math.evaluate(equationTBA);
        displayInput.innerText = ans;
        displayOutput.innerText = "";
    })
    
}

main();


//if input btn clicked, append number value to innerCalculation and display input;
//if operator btn clicked, append operator to innerCalcutation and displayInput, append displayInput value to displayOutput, clear displayInput
//if clear btn clicked, clear innerCalculation, displayInput, and displayOutput
//if equal btn clicked, if no error, append innerCalculate result in displayInput