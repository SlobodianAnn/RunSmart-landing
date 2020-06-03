$(document).ready(function () {
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
});

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

//--------Modal windows -------/

$('[data-modal=consult]').on('click', function(){
    $('.modal-wrapper, #modal-consult').fadeIn();
});

$('.modal__close').on('click', function(){
    $('.modal-wrapper, #modal-consult, #modal-order').fadeOut('slow');
});

$('[data-modal=modal-order]').on('click', function(){
    $('.modal-wrapper, #modal-order').fadeIn();
});

$('[data-modal=modal-order]').each(function(i){
    $(this).on('click', function(){
        $('#modal-order .modal__descr').text($('.catalogSection__card-title').eq(i).text());
    })
})





