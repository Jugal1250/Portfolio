window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    const totop = document.querySelector(".scroll-up-btn");
    let windowPosition = this.scrollY > 0 ;
    header.classList.toggle('scrolling-active', windowPosition);
    if(window.pageYOffset > 100){
            totop.classList.add("show");
           }else{
            totop.classList.remove("show"); 
           }
           totop.addEventListener("click", scrollToTop);

           function scrollToTop() {
             window.scrollTo({
               top: 0,
               behavior: "smooth"
             });
           }     
           
})
// toglle button
const manubtn = document.querySelector(".menu-btn");
const navbarmenu = document.querySelector(".navbar .menu");
const menubtni = document.querySelector(".menu-btn i");
const navbarmenulia = document.querySelector(".navbar .menu li a");
manubtn.addEventListener("click", () => {
    navbarmenu.classList.toggle("active")   
})
manubtn.addEventListener("click", () => {
    menubtni .classList.toggle("active") 
}) 
navbarmenulia.addEventListener("click", goodbheaviour) ;
      function goodbheaviour(){
        window.scrollTo({
          behavior: "smooth"
        });
      }     

// typing animation
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement; 
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    
    const current = this.wordIndex % this.words.length;
    
    const fullTxt = this.words[current];

    
    if(this.isDeleting) {
      
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    
    if(!this.isDeleting && this.txt === fullTxt) {
      
      typeSpeed = this.wait;
      
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
     
      this.wordIndex++;
      
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}



document.addEventListener('DOMContentLoaded', init);


function init() {
  const txtElement = document.querySelector('.typing');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
 
  new TypeWriter(txtElement, words, wait);
}
$(document).ready(function(){
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      }
  }
});
});














