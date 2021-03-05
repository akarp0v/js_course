/*
Создать в dom 10 кнопок, при нажатии на каждую 
должен выводиться номер кнопки через alert, 
кнопка должна исчезать для пользователя 
*/

function removeButton(event) {
    const target = event.target
    if (target.matches('button')) {
        alert(`${event.type} on button #${this.textContent}`);
        this.remove();
    }
}

const buttons = document.body.querySelectorAll('button');

[...buttons].forEach(button => {
    button.addEventListener('click', removeButton);
});