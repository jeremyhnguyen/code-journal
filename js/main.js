// Photo URL Event

const $photoURL = document.querySelector('#url');

$photoURL.addEventListener('input', photoInput);

const $photo = document.querySelector('#image');

function photoInput(input) {
  $photo.src = $photoURL.value;
}

// Submit Event

const $form = document.querySelector('form');

$form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const inputs = {};

  inputs.title = $form.elements.title.value;
  inputs.url = $form.elements.url.value;
  inputs.notes = $form.elements.notes.value;

  inputs.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputs);
  $photo.src = 'images/placeholder-image-square.jpg';
  $form.reset();
}
