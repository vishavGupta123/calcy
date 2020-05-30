var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var minusPlus = "plus";
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "+" || value == "-" || value == "/" || value == "*") {
      operator = value;
      operand1 = parseFloat(display.textContent);
      display.innerText = operand1 + operator;
    } else if (value == "=") {
      var array = display.textContent.split(operator);
      console.log(array);
      operand2 = parseFloat(array[1]);
      var result = eval(operand1 + " " + operator + " " + operand2);
      display.innerText = result;
    } else if (value == "AC") {
      display.innerText = "";
    } else if (value == "%") {
      operand1 = parseFloat(display.textContent);
      operator = "/";
      operand2 = 100;
      var result = eval(operand1 + " " + operator + " " + operand2);
      display.innerText = result;
    } else if (value == "+/-") {
      if (minusPlus === "plus") {
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = operand1 + operator;
        minusPlus = "minus";
      } else {
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = operand1 + operator;
        minusPlus = "plus";
      }
    } else {
      display.innerText += value;
    }
  });
}
