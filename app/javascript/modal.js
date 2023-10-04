document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.querySelector('.js-open');
  const closeModalButton = document.querySelector('.js-close');
  const modal = document.querySelector('.js-modal');
  const editButtons = document.querySelectorAll('.js-edit');
  const modalContent = document.querySelector('.js-content');

  openModalButton.addEventListener('click', () => {
    fetch('/tasks/new')
      .then((response) => response.text())
      .then((data) => {
        modalContent.innerHTML = data;
        modal.style.display = 'block';
      })
      .catch((error) => console.error('Error:', error));
  });

  editButtons.forEach((editButton) => {
    editButton.addEventListener('click', (event) => {
      event.preventDefault();
      const urlArray = editButton.parentNode.action.split('/');
      const fetchUrl = urlArray.slice(-3).join('/');

      fetch(fetchUrl)
        .then((response) => response.text())
        .then((data) => {
          modalContent.innerHTML = data;
          modal.style.display = 'block';
        })
        .catch((error) => console.error('Error:', error));
    });
  });

  closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
