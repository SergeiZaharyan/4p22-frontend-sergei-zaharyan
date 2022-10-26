let operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const submit = document.getElementById('submit');
let meaning = document.getElementById('meaning');

let a = operand1.addEventListener('input', (event) => {
    meaning.innerHTML = (event.target.value);
});
let b = operator.addEventListener('input', (event) => {
    meaning.innerHTML = (event.target.value + a);
});+
operand2.addEventListener('input', (event) => {
    meaning.innerHTML = (event.target.value + a + b);
});