function stick (){
const menu = document.querySelector('header');
let topPos = document.documentElement.scrollTop;
console.log(topPos);
if (topPos>0){
    menu.style.backgroundColor='rgba(255,255,255,0.92)';
    menu.style.color='#000513';
    }
    else{
    menu.style.backgroundColor='transparent';
    menu.style.color='#fff';
    }
};


document.addEventListener("DOMContentLoaded", function() {
   let topPos = document.documentElement.scrollTop;
   window.addEventListener('scroll',stick);    
});

