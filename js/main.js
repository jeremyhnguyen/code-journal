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

  // Updated Submit Event

  const $ul = document.querySelector('#entries');

  renderEntry(inputs);
  $ul.prepend(renderEntry(inputs));
  viewSwap('entries');
  togglenoEntries();
}

// Rendering Entries, Creating DOM Tree

const $title = document.querySelector('#title');

function renderEntry(entry) {
  const $li = document.createElement('li');
  const $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.url);
  $img.setAttribute('alt', $title);
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

const $ulEntries = document.querySelector('#entries');

function appendDOM(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $dataentries = renderEntry(data.entries[i]);
    $ulEntries.append($dataentries);
  }

  // Updated DOMContentLoaded Event

  viewSwap(data.view);
  togglenoEntries();
}
// Toggle No Entries

const $noEntryText = document.querySelector('.noentrytext');

function togglenoEntries(toggleText) {
  if (data.entries.length > 0) {
    $noEntryText.classList.add('hidden');
  } else {
    $noEntryText.classList.remove('hidden');
  }
}

// View Swap

const $formDiv = document.querySelector('.entryformdiv');
const $entriesDiv = document.querySelector('.entriesdiv');

function viewSwap(viewNameShown) {
  if (viewNameShown === 'entry-form') {
    $entriesDiv.className = 'hidden';
    $formDiv.classList.remove('class', 'hidden');
  } else if (viewNameShown === 'entries') {
    $entriesDiv.classList.remove('hidden');
    $formDiv.className = 'hidden';
  }
  data.view = viewNameShown;
}

// Event Handler for viewSwap Entries

const $swapAnchor = document.querySelector('#entry-anchor');

$swapAnchor.addEventListener('click', function () {
  viewSwap('entries');
});

// Event Handler for viewSwap Entry-Form

const $swapForm = document.querySelector('#form-anchor');

$swapForm.addEventListener('click', function () {
  viewSwap('entry-form');
});

// Event Handler for viewSwap Home

const $swapHome = document.querySelector('#swap-home');

$swapHome.addEventListener('click', function () {
  viewSwap('entry-form');
});
