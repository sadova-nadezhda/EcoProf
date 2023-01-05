
/*new js*/
$(function() {
  $('ul.tab__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tab').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

/*form verification*/
let btnVerif = document.querySelector('.services-inner__form');
let wrap = document.querySelector('.wrapper');
let formWrap = document.querySelector('.form__wrapper');
let clsForm = document.querySelector('.form__close');
btnVerif.addEventListener('click', ()=> {
  wrap.classList.add('active');
  formWrap.classList.add('active');
});
clsForm.addEventListener('click', ()=> {
  wrap.classList.remove('active');
  formWrap.classList.remove('active');
});