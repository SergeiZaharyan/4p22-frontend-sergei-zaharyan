
async function getresponse() {
        let promise = await fetch(`https://reqres.in/api/users?per_page=12`);

        let result = await promise.json()

        let surname = `Фамилии: `;

    result.data.forEach((element, index, array) => {

        if (index !== (array.length - 1)) {
            surname += element.last_name + `, `;} else

        if (index === (array.length - 1)) {
            surname += element.last_name + `.`;} 
    });
    
    console.log('-----------');
    console.log (surname);
    console.log('-----------');

    console.log('-----------');
    console.log(Object.keys(result.data[`0`]).join(`, `));
    console.log('-----------');

        
    const findElement = result.data.filter(item => 
        item.last_name[0] === 'F');

    console.log('-----------');
    console.log(findElement); 
    console.log('-----------');

    let accGlobal = `Наша база содержит данные следующих пользователей: `
        const userBase = result.data.reduce((accLocation, item, index, array ) => {

            let massage = accLocation + (item.last_name + ` ` + item.first_name);

        if (index !==(array.length - 1)) {
            massage += `, `;}
            return massage;
        }, accGlobal);

    console.log('-----------');
    console.log(userBase);
    console.log('-----------');

};
getresponse();