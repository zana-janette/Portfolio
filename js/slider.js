    const angleUp = document.querySelector('.angle-up');
    const angleDown = document.querySelector('.angle-down');

function checkAngle (){

    const activeSlide = document.querySelector('.active');
    if (activeSlide.classList.contains('first-slide')){
       angleUp.style.display = 'none'; 
    }
        else{
        angleUp.style.display = 'block';
        };
        
    if (activeSlide.classList.contains('last-slide')){
       angleDown.style.display = 'none'; 
    }
        else{
          angleDown.style.display = 'block';
        };
};

slide = function (){
   const activeSlide = document.querySelector('.active');
   let nextSlide = {}; 
   if (this === angleDown){
       nextSlide = activeSlide.nextElementSibling;
   }
   else if (this === angleUp){
       nextSlide = activeSlide.previousElementSibling;
   }
   
   if (nextSlide){
//   activeSlide.style.opacity='0';   
   activeSlide.classList.remove('active');
   nextSlide.classList.add('active');
//   activeSlide.style.opacity='1';  
   checkAngle();
   }
};


document.addEventListener("DOMContentLoaded", function() {
    checkAngle();
    angleUp.addEventListener("click", slide);
    angleDown.addEventListener("click",slide);
});







//slideUp =function (){
//   const activeSlide = document.querySelector('.active');
//   const previousSlide = activeSlide.previousElementSibling;
//   if (previousSlide){
//   activeSlide.style.opacity='0';    
//   activeSlide.classList.remove('active');
//   previousSlide.classList.add('active');
//   checkAngle();
//   }
//};
//
//slideDown = function (){
//   const activeSlide = document.querySelector('.active');
//   const nextSlide = activeSlide.nextElementSibling;
//   if (nextSlide){
//   activeSlide.classList.remove('active');
//   nextSlide.classList.add('active');
//  checkAngle();
//   }
//};