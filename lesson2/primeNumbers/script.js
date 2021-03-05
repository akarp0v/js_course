/*
Числа Фибоначчи
*/
let firstNumber = 1
let secondNumber = 1
let fibDigit
for (let i = 0; i < 10; i++) {
    fibDigit = firstNumber + secondNumber
    console.log(fibDigit)
    firstNumber = secondNumber
    secondNumber = fibDigit
}

/* 
Сумма элементов массива:
- перебором
- forEach
- reduce
*/
let elements = [1, 2, 3, 4, 1234];
let sum = 0;
for (let element of elements) {
    sum += element
}
console.log(sum)

let sum = 0;
elements.forEach(function (item, i, arr) {
    sum += item;
    console.log(i + ": " + item + " (массив:" + arr + ")");
});
console.log(sum)

var result = elements.reduce((sum, current) => {
    return sum + current;
}, 0);
console.log(result)

/*
Массив простых чисел от 0 до 1000
*/
let isSimple;
for (let i = 2; i <= 1000; i++) {
    isSimple = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i !== j) {
            isSimple = false;
            break;
        }
    }
    if (isSimple) console.log(i);
}