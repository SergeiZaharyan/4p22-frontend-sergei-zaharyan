let surname = `Фамилии: `;
async function getresponse() {
let promise = await fetch(`https://reqres.in/api/users?per_page=12`);

let massiv = await promise.json()

console.log(massiv);
console.log(massiv.data);
let result = surname;
massiv.data.forEach((element, index, array) => {
    if (index !== (array.length - 1)) {
        result += element.last_name + `, `;} else
    if (index === (array.length - 1)) {
     result += element.last_name;} 
});
console.log (result);
};
getresponse();