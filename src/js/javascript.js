/*$(document).ready(function () {
    $('.slider-wrapper').slick({
        speed: 1200,
        prevArrow: '<img class="sliderSection__nav-button left-arrow" src="../icons/chevron-left-solid.png">',
        nextArrow: '<img class="sliderSection__nav-button right-arrow" src="../icons/chevron-right-solid.png">',
        responsive: [
            {
              breakpoint: 768,
            }
          ]
    });
});*/

new Glide('.glide').mount();

//--------Catalog cards -------/

let catalogSection = document.querySelector('.catalogSection');
let buttonMore = catalogSection.querySelectorAll('.button-more');
let buttonBack = catalogSection.querySelectorAll('.button-back');
let faceBlock = catalogSection.querySelectorAll('.catalogSection__face-block');
let backBlock = catalogSection.querySelectorAll('.catalogSection__back-block');

buttonMore.forEach((item, i ) => {
    item.addEventListener('click', () => {
        faceBlock[i].classList.add('block-hide');
        backBlock[i].classList.add('block-active');
        backBlock[i].classList.remove('block-hide');
        console.log('click');
    });
});

buttonBack.forEach((item, i) => {
    item.addEventListener('click', () => {
        backBlock[i].classList.add('hide');
        backBlock[i].classList.remove('block-active');
        faceBlock[i].classList.remove('block-hide');
        
    });
});

//-------- Modal windows -------/

let buttonBuy = catalogSection.querySelectorAll('.modal-order');
let buttonConsult = document.querySelectorAll('.modal-consult');
let modalWrapper = document.querySelector('.modal-wrapper');
let modalOrder = document.querySelector('#modal-order');
let modalConsult = document.querySelector('#modal-consult');
let modalCloseButton = document.querySelectorAll('.modal__close');
console.log(modalCloseButton)


buttonConsult.forEach(function(button, i){
    button.addEventListener('click', function(){
        modalWrapper.classList.remove('modal-wrapper-hide');
        modalWrapper.classList.add('modal-wrapper-show');
        modalConsult.classList.remove('modal-hide');
        console.log('consult is working')
    })
});

buttonBuy.forEach(function(button, i){
    button.addEventListener('click', function(){
        modalWrapper.classList.remove('modal-wrapper-hide');
        modalWrapper.classList.add('modal-wrapper-show');
        modalOrder.classList.remove('modal-hide');
    })
});

modalCloseButton.forEach(function(button, i){
    button.addEventListener('click', function(){
        closeModal();
    })
})

function closeModal (modalWindow){
    modalWrapper.classList.remove('modal-wrapper-show');
    modalWrapper.classList.add('modal-wrapper-hide');
}






