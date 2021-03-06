/*
Circle slider with related buttons
*/

let positionSlider = 0;
const sliderWidth = 700;
const imgs = [
    'https://www.sostav.ru/images/news/2020/03/05/b520w5ah_md.png',
    'https://www.sostav.ru/images/news/2020/03/05/dke2zmzz.png',
    'https://i0.wp.com/lavnik.net/wp-content/uploads/2020/09/ucheba-za-rubezhom-top-3-strany-dlya-ukrainskih-abiturientov.jpg',
    'https://mfc01.ru/media/k2/items/cache/4653e069ed7369840191e8bf38ab8dc9_XL.jpg',
    'https://cdn.globaldialog.ru/_/manager/files/576/0f8d57d316/ucheba-za-granicei_c550x376.jpg'
];
const slideCount = imgs.length;

let btnHtml = '';
let imgHtml = '';
imgs.forEach((img, index) => {
    imgHtml += `<div class="slider__img"><img src="${img}"></div>`;
    btnHtml += `<button class=".img__button" value="${index * -1}">${index + 1}</button>`;
});

document.querySelector('.slider__imgs').innerHTML = imgHtml;
document.querySelector('.img__buttons').innerHTML = btnHtml;

document.querySelector('.img__buttons').addEventListener('click', function (event) {
    const target = event.target
    if (!(target.matches('button'))) {
        return;
    }
    const imgNumber = +target.value;
    positionSlider = imgNumber * sliderWidth;
    document.querySelector('.slider__imgs').style.left = `${positionSlider}px`;
});

document.querySelector('.slider__right').addEventListener('click', function () {
    if (positionSlider - sliderWidth <= -slideCount * sliderWidth) {
        positionSlider = sliderWidth;
    }
    positionSlider = positionSlider - sliderWidth;
    document.querySelector('.slider__imgs').style.left = `${positionSlider}px`;
});

document.querySelector('.slider__left').addEventListener('click', function () {
    if (positionSlider + sliderWidth > 0) {
        positionSlider = -slideCount * sliderWidth;
    }
    positionSlider = positionSlider + sliderWidth;
    document.querySelector('.slider__imgs').style.left = `${positionSlider}px`;
});