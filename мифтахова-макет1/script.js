const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  let formattedValue = "";

  if (value.length > 0) {
    formattedValue = value.substring(0, 3);
  }
  if (value.length > 3) {
    formattedValue += " " + value.substring(3, 6);
  }
  if (value.length > 6) {
    formattedValue += " " + value.substring(6, 8);
  }
  if (value.length > 8) {
    formattedValue += " " + value.substring(8, 10);
  }

  e.target.value = formattedValue;
});

function validatePhone() {
  const phoneNumber = phoneInput.value.replace(/\D/g, '');
  
  if (phoneNumber.length === 10) {
      submitBtn.classList.remove('invalid');
      submitBtn.classList.add('valid');
      return true;
  } else {
      submitBtn.classList.remove('valid');
      submitBtn.classList.add('invalid');
      return false;
  }
}

submitBtn.addEventListener('click', function() {
  if (validatePhone()) {
      alert('Добро пожаловать!');
  } else {
      alert('Пожалуйста, введите корректный номер телефона (10 цифр)');
  }
});