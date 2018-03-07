toggle = function () {
    const menuToggle= document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('toggle');
    
};

;

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu');
    const menuList= document.querySelector('.menu-toggle');
    menuBtn.addEventListener("click", toggle);
    menuList.addEventListener("click", toggle);
   
});


