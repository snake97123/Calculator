const result = document.querySelector('#result');
const numButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#operator');
const resetButton = document.querySelector('#reset');
const equalButton = document.querySelector('#equal');

let storedValue = null;
let currentOperator = null;
let isNewCalculation = false;

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if(isNewCalculation) {
      result.value = '';
      isNewCalculation = false;
    }
    result.value += button.getAttribute('data-value')
  });
});

document.querySelector('#operator[data-value="+"]').addEventListener('click', () => {
      storedValue = parseFloat(result.value);
      currentOperator = '+';
      result.value = '';
});

document.querySelector('#operator[data-value="-"]').addEventListener('click', () => {
  storedValue = parseFloat(result.value);
  currentOperator = '-';
  result.value = '';
});

document.querySelector('#operator[data-value="×"]').addEventListener('click', () => {
  storedValue = parseFloat(result.value);
  currentOperator = '×';
  result.value = '';
});

document.querySelector('#operator[data-value="÷"]').addEventListener('click', () => {
  storedValue = parseFloat(result.value);
  currentOperator = '÷';
  result.value = '';
});

document.querySelector('#calculate').addEventListener('click', () => {
    if(storedValue !== null && currentOperator !== null) {
      switch(currentOperator) {
        case '+':
          result.value = storedValue + parseFloat(result.value);
          break;
        case '-':
          result.value = storedValue - parseFloat(result.value);
          break;
        case '×':
          result.value = storedValue * parseFloat(result.value);
          break;
        case '÷':
          result.value = storedValue / parseFloat(result.value);
          break;
      }
      storedValue = null;
      currentOperator = null;
      isNewCalculation = true;
    }
});

document.querySelector('#operator[data-value="+/-"]').addEventListener('click', () => {
    let currentValue = parseFloat(result.value);
    currentValue = -currentValue;
    result.value = currentValue.toString();
});

document.querySelector('#operator[data-value="%"]').addEventListener('click', () => { 
    let currentValue = parseFloat(result.value);
    currentValue = currentValue / 100;
    result.value = currentValue.toString();
});

document.querySelector('#operator[data-value="."]').addEventListener('click', () => {
    if(!result.value.includes('.')) {
      result.value += '.';
    }
});

resetButton.addEventListener('click', () => {
  result.value = '';
});