"use strict";

const meaning = document.getElementById('meaning');
const submit = document.getElementById('submit');


submit.addEventListener('click', (event) => {
    const inputNum1 = document.getElementById('operand1').value;
    const inputOperator = document.getElementById('operator').value;
    const inputNum2 = document.getElementById('operand2').value;
    let result;
    event.preventDefault();




if (inputNum1 === "") {return meaning.innerText = "Первое число не указаано"};
if (inputNum2 === "") {return meaning.innerText ="Второе число не указано"};

if (isNaN(inputNum1) == true || isNaN(inputNum2) == true) {
    meaning.innerText = "Некорректный ввод чисел";
    return console.log("Некорректный ввод чисел");
  };

  switch (inputOperator) {
    case "":
      return meaning.innerText = "Не введён знак";
      break;
    case "+":
        result = Number(inputNum1) + Number(inputNum2);
      break;
    case "-":
        result = Number(inputNum1) - Number(inputNum2);
      break;
    case "/":
        result = Number(inputNum1) / Number(inputNum2);
      break;
    case "*":
        result = Number(inputNum1) * Number(inputNum2);
      break;
    default:
      return (
        (meaning.innerText = "Программа не поддерживает такую операцию"),
        console.log("Программа не поддерживает такую операцию")
      );
      break;
  }

  if (isNaN(result)) {
    meaning.innerText = "Операция некорректна";
    return console.log("Операция некорректна");
  } 
  else {
    meaning.innerText = `ОТВЕТ: ${result}`;
    console.log(result);
  }
});
