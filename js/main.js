const $photoURL = document.querySelector('#url');

$photoURL.addEventListener('input', photoInput);

function photoInput(input) {
  const $photo = document.querySelector('#image');
  $photo.src = $photoURL.value;
}
