
const config = {
    type: 'carousel',
    startAt: 0,
    peek: {
        before: 50,
        after: 0
    },
    breakpoints: {
        600: {
            peek: {
                before: 0,
                after: 0
            }
        }
      } 
} 

new Glide('.glide', config).mount();

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
let cardTitles = document.querySelectorAll('.catalogSection__card-title');
let modalTitle = document.querySelector('.descr-buy')


buttonConsult.forEach(function(button, i){
    button.addEventListener('click', function(){
        modalWrapper.classList.remove('modal-wrapper-hide');
        modalWrapper.classList.add('modal-wrapper-show');
        modalConsult.classList.remove('modal-hide');
    })
});

buttonBuy.forEach(function(button, i){
    button.addEventListener('click', function(){
        let cardTitle = cardTitles[i];
        modalTitle.textContent = cardTitle.textContent;
        modalWrapper.classList.remove('modal-wrapper-hide');
        modalWrapper.classList.add('modal-wrapper-show');
        modalOrder.classList.remove('modal-hide');
    })
});

modalCloseButton.forEach(function(button, i){
    button.addEventListener('click', function(){
        closeModal(modalConsult);
        switch(true){
            case !modalConsult.classList.contains('modal-hide'): 
            closeModal(modalConsult);
            break;
            case !modalOrder.classList.contains('modal-hide'): 
            closeModal(modalOrder);
            break;
        }
    })
})

function closeModal (modalWindow){
    modalWrapper.classList.remove('modal-wrapper-show');
    modalWrapper.classList.add('modal-wrapper-hide');
    modalWindow.classList.add('modal-hide');
}






