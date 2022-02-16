let defaultResult = 0;
let currentResult = defaultResult;


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',devide)
function grabUserNumberInput(){
    return parseInt(userInput.value)
}
function createAndWriteOutput(operator,resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,calcDescription)
}
function add(num1, num2){
    const enteredNumber = grabUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber)
}
function subtract(num1,num2){
    const enteredNumber = grabUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber)
}
function multiply(num1, num2){
    const enteredNumber = grabUserNumberInput()
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber)
}
function devide(num1,num2){
    const enteredNumber = grabUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber)
}