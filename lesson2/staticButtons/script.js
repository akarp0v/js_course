/*
Create 10 buttons, 
show alert with button's number by click and delete button
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