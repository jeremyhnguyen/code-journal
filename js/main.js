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

// Rendering Entries

function renderEntry(entry) {
  const $li = document.createElement('li');
  const $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.url);
  const $columnHalf2 = document.createElement('div');
  const $h4 = document.createElement('h4');
  $h4.textContent = entry.title;
  const $p = document.createElement('p');
  $p.textContent = entry.notes;

  $li.append($columnHalf, $columnHalf2);
  $columnHalf.append($img);
  $columnHalf2.append($h4, $p);
  return $li;
}

// DOMContentLoaded Event

document.addEventListener('DOMContentLoaded', appendDOM);

function appendDOM(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $dataentries = renderEntry(data.entries[i]);
    const $ulEntries = document.querySelector('#entries');
    $ulEntries.append($dataentries);
  }
}
