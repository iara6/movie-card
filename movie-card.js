/******************
 MOVIE POSTER MODAL 
*******************/

const modal = document.querySelector('.modal');
const moviePoster = document.querySelector('.movie-poster img');
const modalImg = document.getElementById('img1');
const closeBtn = document.querySelector('.close');

const watchBtn = document.querySelector('.watch-trailer-button');
const trailer = document.querySelector('.trailer');

function openModalPoster(src) {
  modalImg.src = src;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
 /*  setTimeout(() => modalImg.classList.add('modal-open'), 35); */
  requestAnimationFrame(() => modalImg.classList.add('modal-open'));
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  modalImg.classList.remove('modal-open');
  trailer.classList.remove('modal-open');
  trailer.src = trailer.src;
}

moviePoster.addEventListener('click', (e) => {
  openModalPoster(e.target.src);
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();

  const visibleContent = modal.querySelector('.modal-open');
  const visibleContentArea = visibleContent.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;
  
  const clickOutside = x < visibleContentArea.left || x > visibleContentArea.right || y < visibleContentArea.top || y > visibleContentArea.bottom;

  if (clickOutside) closeModal();
});


/**************
 TRAILER MODAL 
***************/

function openModalTrailer() {
  modal.classList.add('open');
  document.body.classList.add('modal-open');
 /*  setTimeout(() => trailer.classList.add('modal-open'), 35); */
  requestAnimationFrame(() => trailer.classList.add('modal-open'));
}

watchBtn.addEventListener('click', openModalTrailer);