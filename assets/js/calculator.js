document.addEventListener('DOMContentLoaded', function() {
  const result = document.getElementById("result");
  const clearButton = document.getElementById("clear");
  const openParenButton = document.getElementById("open-paren");
  const closeParenButton = document.getElementById("close-paren");
  const backspaceButton = document.getElementById("backspace");
  const sevenButton = document.getElementById("seven");
  const eightButton = document.getElementById("eight");
  const nineButton = document.getElementById("nine");
  const divideButton = document.getElementById("divide");
  const fourButton = document.getElementById("four");
  const fiveButton = document.getElementById("five");
  const sixButton = document.getElementById("six");
  const multiplyButton = document.getElementById("multiply");
  const oneButton = document.getElementById("one");
  const twoButton = document.getElementById("two");
  const threeButton = document.getElementById("three");
  const subtractButton = document.getElementById("subtract");
  const zeroButton = document.getElementById("zero");
  const decimalButton = document.getElementById("decimal");
  const equalsButton = document.getElementById("equals");
  const addButton = document.getElementById("add");
  const themeSelector = document.getElementById('theme-selector');

  function insertValue(value) {
    result.value += value;
  }

  function clearResult() {
    result.value = "";
  }

  function backspace() {
    result.value = result.value.slice(0, -1);
  }

  function calculate() {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  }

  if (clearButton) clearButton.addEventListener("click", clearResult);
  if (openParenButton) openParenButton.addEventListener("click", () => insertValue('('));
  if (closeParenButton) closeParenButton.addEventListener("click", () => insertValue(')'));
  if (backspaceButton) backspaceButton.addEventListener("click", backspace);
  if (sevenButton) sevenButton.addEventListener("click", () => insertValue('7'));
  if (eightButton) eightButton.addEventListener("click", () => insertValue('8'));
  if (nineButton) nineButton.addEventListener("click", () => insertValue('9'));
  if (divideButton) divideButton.addEventListener("click", () => insertValue('/'));
  if (fourButton) fourButton.addEventListener("click", () => insertValue('4'));
  if (fiveButton) fiveButton.addEventListener("click", () => insertValue('5'));
  if (sixButton) sixButton.addEventListener("click", () => insertValue('6'));
  if (multiplyButton) multiplyButton.addEventListener("click", () => insertValue('*'));
  if (oneButton) oneButton.addEventListener("click", () => insertValue('1'));
  if (twoButton) twoButton.addEventListener("click", () => insertValue('2'));
  if (threeButton) threeButton.addEventListener("click", () => insertValue('3'));
  if (subtractButton) subtractButton.addEventListener("click", () => insertValue('-'));
  if (zeroButton) zeroButton.addEventListener("click", () => insertValue('0'));
  if (decimalButton) decimalButton.addEventListener("click", () => insertValue('.'));
  if (equalsButton) equalsButton.addEventListener("click", calculate);
  if (addButton) addButton.addEventListener("click", () => insertValue('+'));

  if (themeSelector) {
    themeSelector.addEventListener('change', function() {
      const theme = this.value;
      document.body.className = theme; // Simplified theme application
      localStorage.setItem('selectedTheme', theme);
    });

    // Load saved theme from local storage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.body.className = savedTheme;
      themeSelector.value = savedTheme;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
});