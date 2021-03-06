/*
Create 10 buttons, 
show alert with button number by click, 
then delete button and don't show after page refreshing
*/
function removeButton(event) {
    const target = event.target
    if (target.matches('button')) {
        alert(`${event.type} on button #${this.textContent}`);
        this.remove();
    }

    let index = buttonsArray.indexOf(+this.id);
    buttonsArray.splice(index, 1);

    if (buttonsArray.length === 0) {
        localStorage.clear()
    } else {
        localStorage.setItem('buttons', JSON.stringify(buttonsArray));
    }
}

function createButton(id) {
    const buttonElement = document.createElement('button');
    buttonElement.id = id;
    buttonElement.addEventListener('click', removeButton);
    document.body.appendChild(buttonElement);

    const textElement = document.createTextNode(`${id}`);
    buttonElement.appendChild(textElement);

    buttonsArray.push(id);
}

let buttonsCount = 10;
let buttonsArray = [];

if (localStorage.getItem('buttons')) {
    buttonsStorageArray = JSON.parse(localStorage.getItem('buttons'));
    console.log(buttonsStorageArray)
    for (let id of buttonsStorageArray) {
        createButton(id);
    }
} else {
    for (let id = 0; id < buttonsCount; id++) {
        createButton(id);
    }
    localStorage.setItem('buttons', JSON.stringify(buttonsArray))
}