var hamburger = document.querySelector('#hamburger');

var cross = document.querySelector('#cross')

var navigatie = document.querySelector('header ul');



function active (){
navigatie.classList.toggle('active');

hamburger.classList.toggle('hidden');
    
cross.classList.toggle('hidden');
  
  
}

hamburger.addEventListener('click', active);

cross.addEventListener('click', active);