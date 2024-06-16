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


/*
const imgBX=document.querySelector('.imgBX');
const slides = imgBX.getElementsByTagName('img');
var i = 0;

function nextSlide() {
     
    slides[i].classList.remove('active');
    i=(i+1)% slides.length;
    slides[i].classList.add('active');
}

function PrevSlide() {
     
    slides[i].classList.remove('active');
    i=(i-1 +slides.length)% slides.length;
    slides[i].classList.add('active');
    
}

// Sélectionnez les images et les liens de contrôle
const slides2 = document.querySelectorAll(".imgBX img");
const prevBtn = document.querySelector(".controls li:first-child");
const nextBtn = document.querySelector(".controls li:last-child");

let currentSlide = 0;
// Fonction pour afficher le slide suivant
function nextSlide() {
  slides2[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides2.length;
  slides2[currentSlide].classList.add("active");
}
// Fonction pour afficher le slide précédent
function prevSlide() {
  slides2[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides2.length) % slides2.length;
  slides2[currentSlide].classList.add("active");
}
// Défilement automatique toutes les 3 secondes
setInterval(nextSlide, 5000);

*/
