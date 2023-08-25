'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const alertParagraph = document.querySelector('.alert');
  
    document.getElementById('btn').addEventListener('click', function () {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailValue === '' || !emailPattern.test(emailValue)) {
        emailInput.classList.add('red');
        alertParagraph.style.visibility = 'visible';
      } else {
        emailInput.classList.remove('red');
        alertParagraph.style.visibility = 'hidden';
      }
    });
  
    emailInput.addEventListener('input', function () {
      emailInput.classList.remove('red');
      alertParagraph.style.visibility = 'hidden';
    });
  });