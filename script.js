let menu=document.querySelector('.fa-bars');
let navbar=document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

$(window).on('scroll load',function(){
    if($(window).scrollTop() > 60){
        $('header').addClass('header-active');
    }else{
        $('header').removeClass('header-active');
    
}});

$(window).on('scroll load',function(){
    if($(window).scrollTop() > 60){
        $('header-ei').addClass('header-ei-active');
    }else{
        $('header-ei').removeClass('header-ei-active');
    
}});

/*Home script*/
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].classList.add('active');
}

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.querySelector('.slide-content').classList.remove('animate-up');
    });
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].classList.add('active');
    slides[slideIndex].querySelector('.slide-content').classList.add('animate-up');
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

showSlide(slideIndex);

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 8000);


