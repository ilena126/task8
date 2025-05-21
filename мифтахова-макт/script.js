 // Открытие модального окна
 document.getElementById('openModalBtn').addEventListener('click', function() {
  document.querySelector('.modal-overlay').style.display = 'flex';
});

// Закрытие модального окна
document.querySelector('.close-btn').addEventListener('click', function() {
  document.querySelector('.modal-overlay').style.display = 'none';
});

// Закрытие при клике вне модального окна
document.querySelector('.modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) {
      this.style.display = 'none';
  }
});




// Получаем элементы
const commBtn = document.getElementById("commBtn");
const commentModal = document.getElementById("commentModal");
const closeBtn = commentModal.querySelector(".close");

// Открываем модальное окно при клике на кнопку
commBtn.addEventListener("click", function() {
  commentModal.style.display = "block";
});

// Закрываем модальное окно при клике на крестик
closeBtn.addEventListener("click", function() {
  commentModal.style.display = "none";
});

// Закрываем модальное окно при клике вне его
window.addEventListener("click", function(event) {
  if (event.target === commentModal) {
    commentModal.style.display = "none";
  }
});