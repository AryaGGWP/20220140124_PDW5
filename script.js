function openModal(src) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImg');
  modal.style.display = 'block';
  modalImg.src = src;
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
    closeModal();
  }
};
