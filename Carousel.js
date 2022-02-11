const btn = document.querySelector('.btn');
const firstItem = document.querySelector('.first-carousel-item');
const carouselItems = document.getElementsByClassName('carousel-item');
const carouselControlButton = document.getElementsByClassName('carousel-control-button');
let clickCount = 1;


btn.addEventListener('click', changeImage);
setInterval(changeImage, 5000);

function changeImage() {
    firstItem.style.marginLeft = `-${clickCount * 100}%`;
    for (let i = 0; i < carouselControlButton.length; i++) {
        carouselControlButton[i].classList.remove('outline');
    }
    carouselControlButton[clickCount].classList.add('outline');

    clickCount++;
    if (clickCount === carouselItems.length) {
        clickCount = 0;
    }
};