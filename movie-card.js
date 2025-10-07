/******************
 MOVIE POSTER MODAL 
*******************/

const modal = document.querySelector('.modal');
const moviePoster = document.querySelector('.movie-poster img');
const modalImg = document.getElementById('img1');
const closeBtn = document.querySelector('.close');
const movieCard = document.querySelector('.movie-card');

function openModal(src) {
  modalImg.src = src;
  modal.classList.add('open');
  document.body.classList.add('modal-open')
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open')
}

moviePoster.addEventListener('click', (e) => {
  openModal(e.target.src);
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
