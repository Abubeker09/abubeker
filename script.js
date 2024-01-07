const questionButtons = document.querySelectorAll('.question');

questionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      button.querySelector('img').src = '/assets/images/icon-plus.svg';
    } else {
      answer.style.display = 'block';
      button.querySelector('img').src = '/assets/images/icon-minus.svg';
    }
  });
});
