//--Hiding or displaying overflow
function toggleOverflow (contactOverflow){
    html.style.overflow=contactOverflow; 
    document.body.style.overflow=contactOverflow;
};

//--Hiding or displaying contact-wrapper
toggleContact = function (){
   const contact = document.querySelector('.contact-wrapper');
   contact.classList.toggle('toggle');
   let contactOverflow = '';
   if (this.classList.contains('contact')){
        contactOverflow = 'hidden';
    }
    else{
     contactOverflow = 'visible'; 
    };
  toggleOverflow (contactOverflow);  
};


document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.querySelector('.contact');
    const returnBtn = document.querySelector('.return-btn');
    contactBtn.addEventListener("click", toggleContact);
    returnBtn.addEventListener("click", toggleContact);
});


