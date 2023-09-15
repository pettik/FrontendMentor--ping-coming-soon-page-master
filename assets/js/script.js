'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const alertParagraph = document.querySelector('.alert');
  const mainContent = document.querySelector('main');

  document.getElementById('btn').addEventListener('click', function () {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || !emailPattern.test(emailValue)) {
      mainContent.classList.add('red');
      alertParagraph.style.display = 'block';
    } else {
      mainContent.classList.remove('red');
      alertParagraph.style.display = 'none';
    }
  });

  // emailInput.addEventListener('input', function () {
  //   mainContent.classList.remove('red');
  //   alertParagraph.style.display = 'block';
  // });
});
