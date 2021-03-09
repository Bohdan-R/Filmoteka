const refs = {
  inputRef: document.querySelector('.search-form'),
  galleryRef: document.querySelector('.movie__list'),
  galContainerRef: document.querySelector('.js-container'),
  // Модалка
  modalRef: document.querySelector('.card'),
  modalBoxRef: document.querySelector('.card-box'),
  btnCloseModalRef: document.querySelector('.card__btn-close'),
  modalBackdropRef: document.querySelector('.backdrop'),
  // Пагинация
  prevBtnRef: document.querySelector('#js-prev-btn'),
  nextBtnRef: document.querySelector('#js-next-btn'),
  paginBtnsRef: document.querySelectorAll('.pagination__page-btn'),
  paginBtnWrapper: document.querySelector('.pagination__page-numbers'),
  // Локалсторидж
  addToWatchedBtn: () => document.querySelector('.js-btn-watched'),
  addToQueueBtn: document.querySelector('.js-btn-queue'),
};

export default refs;
