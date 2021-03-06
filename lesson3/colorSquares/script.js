/*
Create 3 squares inside each other and 
randomly changed their colors by click
*/

function generateColor() {
    r = Math.ceil(Math.random() * 255);
    g = Math.ceil(Math.random() * 255);
    b = Math.ceil(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}

document.body.querySelector('.black_square').addEventListener('click', (event) => {
    event.target.style.background = generateColor();
    // event.stopPropagation();
})