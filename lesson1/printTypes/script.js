/*
Вывод в консоль 5 типов данных js через оператор typeof.
*/

let n = 7;
const bigInt = 1234567890123456789012345678901234567890n;
let str = "Мама мыла раму";
let checked = true;
var x;
let id = Symbol("id");
var user = { name: "Вася" };
var age = null;

console.log(typeof n)
console.log(typeof bigInt)
console.log(typeof str)
console.log(typeof checked)
console.log(typeof age)
console.log(typeof x)
console.log(typeof id)
console.log(typeof user)

/*
Печать элементов массива
*/
humans = [
    { name: 'vvv', lastname: 'rrr' },
    { name: 'sdf', lastname: 'sgrg' },
    { name: '23423', lastname: 'f34r34' },
];
for (let i = 0; i < humans.length; i++) {
    console.log(`${humans[i].name} ${humans[i].lastname}`)
}