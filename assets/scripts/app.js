let defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',devide)

//grabs input from input field
function grabUserNumberInput(){
    return parseInt(userInput.value)
}
//creates and writes to the dom
function createAndWriteOutput(operator,initalResult, enteredNumber){
    const calcDescription = `${initalResult} ${operator} ${enteredNumber}`
    outputResult(currentResult,calcDescription)//from vendor.js
    writeToLog(operator,initalResult,enteredNumber,currentResult)
    console.log(logEntries)
}
function writeToLog(operation,resultBeforeCalc,enteredNumber,currentResult){
    const logEntry = {
        operation: operation,
        previousResult:resultBeforeCalc,
        number:enteredNumber,
        result:currentResult
    }
    logEntries.push(logEntry)
}
function calculateResult(operation){
    const enteredNumber = grabUserNumberInput();
    const initialResult = currentResult
    if(operation === '+'){
        currentResult += enteredNumber;//currentResult = currentResult + enteredNumber;
    }else if (operation === '-'){
        currentResult -= enteredNumber;
    }else if (operation === '*'){
        currentResult *= enteredNumber;
    }else if (operation === '/'){
        currentResult /= enteredNumber;
    }
    
    createAndWriteOutput(operation,initialResult,enteredNumber) 
}
function add(num1, num2){
    calculateResult('+')
}
function subtract(num1,num2){
    calculateResult('-')         
}
function multiply(num1, num2){
    calculateResult('*')
    
}
function devide(num1,num2){
    calculateResult('/')
}