const result = document.querySelector('#result');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const resetButton = document.querySelector('#reset');
const equalButton = document.querySelector('.equal');

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    result.value += button.getAttribute('data-value')
  });
});

resetButton.addEventListener('click', () => {
  result.value = '';
});