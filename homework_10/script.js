'use strict'

const button = document.getElementById('button');
const divinner = document.getElementById('innerText');
button.addEventListener('click', (event) => {
    const input = document.getElementById('inputFib').value;
    let startFunction = Number(input);
start (startFunction);
function start (a) {
let n = 0;
let f2 = 1;
let f1 = 1;
let f3;
console.log(n);
console.log(f1);
console.log(f1);
 for (let i = 0; i < (a - 3); i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
     console.log(f3);};
    return divinner.innerHTML =` ${f3}`;
    }
     ;})
