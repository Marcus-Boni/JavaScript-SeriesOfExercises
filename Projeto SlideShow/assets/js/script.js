const q = (el) => document.querySelector(el);

let slideArea = q('.slider');
let allSlides = document.querySelectorAll('.slider--item').length;
let slideControl = document.querySelectorAll('.slider--control');
let currentSlide = 0;

q('.slider--width').style.width = `calc(100vw * ${allSlides})`;
q('.slider--controls').style.height = `${slideArea.clientHeight}px`;

slideControl[0].addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = allSlides - 1;
    }
    updateMargin();
})
function goNext() {
    currentSlide++;
    if (currentSlide > (allSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();
}
slideControl[1].addEventListener('click', goNext);

let updateMargin = () => {
    let sliderItemWidth = q('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    q('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);
let number = 450;
if (slideArea.clientWidth <= `${number}px`) {
    console.log('sim')
}

let menuMobile = q('.mobile_button button');
let textMobile = q('.mobile_button ul')
function menuShow () {
    if (textMobile.classList.contains('open')) {
        textMobile.classList.remove('open');
    } else {
        textMobile.classList.add('open');
    }
}

menuMobile.addEventListener('click', menuShow);

