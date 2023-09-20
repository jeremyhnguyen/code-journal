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

// Rendering Entries, Creating DOM Tree

function renderEntry (entry) {
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

function appendDOM (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $dataentries = renderEntry(data.entries[i]);
  const $ulEntries = document.querySelector('#entries');
    $ulEntries.append($dataentries);
  }
}

// Toggle No Entries

function togglenoEntries (toggleText) {
  const $noEntryText = document.querySelector('.noentrytext');

  if (data.entries.length > 0) {
    $noEntryText.classList.add('hidden');
  } else {
    $noEntryText.classList.remove('hidden');
  }
}

// View Swap

const $formDiv = document.querySelector('#entryformdiv');
const $entriesDiv = document.querySelector('#entriesdiv');

function viewSwap (viewNameShown) {
  if (viewNameShown === 'entry-form') {
    $entriesDiv.className = "hidden";
    $formDiv.classList.remove('class', 'hidden');
  } else if (viewNameShown ==='entries') {
    $entriesDiv.classList.remove('hidden');
    $formDiv.className = "hidden";
  }
}

// Event Handler for viewSwap Entries

const $swapAnchor = document.querySelector('#entryanchor');

$swapAnchor.addEventListener('click', function () {
  viewSwap('entries');
});

// Event Handler for viewSwap Entry-Form

const $swapForm = document.querySelector('#formanchor');

$swapForm.addEventListener('click', function () {
  viewSwap('entry-form');
})
