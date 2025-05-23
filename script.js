const slides = document.querySelectorAll(".slide");
let currentImg = 0;
slides.forEach((el, ind) => {if(Array.from(el.classList).includes("active")) currentImg = ind});
const rowNext = document.querySelector(".next");
const rowBack = document.querySelector(".back");
rowNext.addEventListener('click', next);
function next(){
    slides[currentImg].classList.remove('active')
    currentImg++;
    if(currentImg>slides.length-1) currentImg = 0;
    
    slides[currentImg].classList.add('active')
}
rowBack.addEventListener('click', back);
function back(){
    slides[currentImg].classList.remove('active')
    currentImg--;
    if(currentImg<0) currentImg = slides.length-1;
  
    slides[currentImg].classList.add('active')
}
 