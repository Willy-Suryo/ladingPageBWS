const nav=document.getElementById('nav');
window,addEventListener('scroll', function(){
    if(window.scrollY>20){
        nav.classList.add("scroll");
        console.log('discroll')
    }
    else{
        nav.classList.remove("scroll");
    }
});

const navLink=document.getElementById('nav-link');
const btnMenu=document.getElementById('btn-menu');
btnMenu.addEventListener('click' , ()=> {
    navLink.classList.toggle('active');
    nav.classList.add('scroll')
    console.log('tes');
});
//pop up vid

const showVid= document.getElementById('show-vid');
const clsVid= document.getElementById('close-vid');
const popVid= document.getElementById('pop-vid');
const vidEl= document.getElementById('vid-el');

showVid.addEventListener('click',function(){
    popVid.classList.add('pop');
    console.log('dikilk')
});
clsVid.addEventListener('click',function(){
    popVid.classList.remove('pop');
    console.log('dikilk');
    vidEl.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
});

// faq visi misi

const soal1=document.getElementById('soal-1');
const jawab1=document.getElementById('jawab-1');
const soal2=document.getElementById('soal-2');
const jawab2=document.getElementById('jawab-2');

soal1.addEventListener('click',function(){
    jawab1.classList.toggle('down');

    jawab2.classList.remove('down');
});
soal2.addEventListener('click',function(){
    jawab2.classList.toggle('down');

    jawab1.classList.remove('down');
});

// carousel - seni

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const numGroups = carousel.querySelectorAll('.grub').length;
const itemsPerGroup = 2;
const numItems = numGroups * itemsPerGroup;

function updateCarousel() {
    const itemWidth = carousel.querySelector('.seni').clientWidth;
    const groupIndex = Math.floor(currentIndex / itemsPerGroup);
    carousel.style.transform = `translateX(-${groupIndex * itemWidth * itemsPerGroup}px)`;
}

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + numItems) % numItems;
    updateCarousel();
});

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % numItems;
    updateCarousel();
});

const autoInterval = 2000;

setInterval(() => {
    currentIndex = (currentIndex + 1) % numItems;
    updateCarousel();
}, autoInterval);

