/*
Добавление dom элементов в зависимости от возраста пользователя 
(0-6: ты молод, 7-100: всё потеряно).
*/

const buttonSubmit = document.querySelector('.submit')
buttonSubmit.addEventListener('click', checkAge)

function removePreviousDiv() {
    let outputWrapperElement = document.querySelector('.new-div')
    if (outputWrapperElement !== null) {
        outputWrapperElement.remove();
    }
}

function addDivWithText(text) {
    const divElem = document.createElement('div');
    divElem.className = 'new-div';
    document.querySelector('footer').appendChild(divElem);

    const textElem = document.createTextNode(text);
    divElem.appendChild(textElem);
}


function checkAge() {
    let age_inp = document.querySelector('.age-getter')
    let age = Number.parseInt(age_inp.value)

    if (age >= 7 && age <= 100) {
        result = 'Bсё потеряно ('
    } else if (age >= 0 && age <= 6) {
        result = 'Ты молод )'
    } else {
        result = 'Введите корректный возраст!'
    }

    removePreviousDiv()
    addDivWithText(result)
}