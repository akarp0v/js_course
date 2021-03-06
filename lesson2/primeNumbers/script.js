// /*
// Числа Фибоначчи
// */
// let firstNumber = 1
// let secondNumber = 1
// let fibDigit
// for (let i = 0; i < 10; i++) {
//     fibDigit = firstNumber + secondNumber
//     console.log(fibDigit)
//     firstNumber = secondNumber
//     secondNumber = fibDigit
// }

// /* 
// Сумма элементов массива:
// - перебором
// - forEach
// - reduce
// */
// let elements = [1, 2, 3, 4, 1234];
// let sum = 0;
// for (let element of elements) {
//     sum += element
// }
// console.log(sum)

// let sum = 0;
// elements.forEach(function (item, i, arr) {
//     sum += item;
//     console.log(i + ": " + item + " (массив:" + arr + ")");
// });
// console.log(sum)

// var result = elements.reduce((sum, current) => {
//     return sum + current;
// }, 0);
// console.log(result)

/*
Prime numbers from 0 to 1000
*/
let isSimple;
for (let i = 2; i <= 1000; i++) {
    if (i > 2 && i % 2 !== 0 || i % 3 !== 0) {
        isSimple = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isSimple = false;
                break;
            }
        }
        if (isSimple) console.log(i);
    }
}