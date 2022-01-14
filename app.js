const carouselSliede = document.querySelector('.carousel-slide');
const carouselDiv = document.querySelectorAll('.carousel-slide div');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
//Img Width
let size = carouselDiv[0].clientWidth;
//start from second Img
carouselSliede.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=>{
    if(counter >= carouselDiv.length - 1) return;
    carouselSliede.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSliede.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    carouselSliede.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSliede.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSliede.addEventListener('transitionend', ()=>{
    if(carouselDiv[counter].id == 'last-clone'){
        carouselSliede.style.transition = "none";
        counter = carouselDiv.length - 2;
        carouselSliede.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselDiv[counter].id == 'first-clone'){
        carouselSliede.style.transition = "none";
        counter = carouselDiv.length - counter;
        carouselSliede.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


