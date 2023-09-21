const $photoURL = document.querySelector('#url');
const $photo = document.querySelector('#image');
const $form = document.querySelector('form');
const $ul = document.querySelector('#entries');
const $title = document.querySelector('#title');
const $notes = document.querySelector('#notes');
const $h1 = document.querySelector('h1');
const $formDiv = document.querySelector('.entryformdiv');
const $entriesDiv = document.querySelector('.entriesdiv');
const $noEntryText = document.querySelector('.noentrytext');
const $swapAnchor = document.querySelector('#entry-anchor');
const $swapForm = document.querySelector('#form-anchor');
const $swapHome = document.querySelector('#swap-home');

// Photo URL Event

$photoURL.addEventListener('input', photoInput);

function photoInput(input) {
  $photo.src = $photoURL.value;
}

// Submit Event

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

  $ul.prepend(renderEntry(inputs));
  viewSwap('entries');
  togglenoEntries();
}

// Rendering Entries, Creating DOM Tree

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);
  const $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.url);
  $img.setAttribute('alt', $title);
  const $columnHalf2 = document.createElement('div');
  $columnHalf2.setAttribute('class', 'column-half');
  const $h4 = document.createElement('h4');
  const $titleDiv = document.createElement('div');
  $titleDiv.setAttribute('class', 'titlediv');
  $h4.textContent = entry.title;
  const $faPencilItem = document.createElement('i');
  $faPencilItem.setAttribute('class', 'fa fa-pencil');
  const $p = document.createElement('p');
  $p.textContent = entry.notes;

  $li.append($columnHalf, $columnHalf2);
  $columnHalf.append($img);
  $columnHalf2.append($titleDiv, $p);
  $titleDiv.append($h4, $faPencilItem);
  return $li;
}

// DOMContentLoaded Event

document.addEventListener('DOMContentLoaded', appendDOM);

function appendDOM(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $dataentries = renderEntry(data.entries[i]);
    $ul.append($dataentries);
  }

  // Updated DOMContentLoaded Event

  viewSwap(data.view);
  togglenoEntries();
}
// Toggle No Entries

function togglenoEntries(toggleText) {
  if (data.entries.length > 0) {
    $noEntryText.classList.add('hidden');
  } else {
    $noEntryText.classList.remove('hidden');
  }
}

// View Swap

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

$swapAnchor.addEventListener('click', function () {
  viewSwap('entries');
});

// Event Handler for viewSwap Entry-Form

$swapForm.addEventListener('click', function () {
  viewSwap('entry-form');
});

// Event Handler for viewSwap Home

$swapHome.addEventListener('click', function () {
  viewSwap('entry-form');
  $h1.textContent = 'New Entry';
});

// Event Handler for ul

$ul.addEventListener('click', clickPencil);

function clickPencil(event) {
  const $editedEntry = Number(
    event.target.closest('li').getAttribute('data-entry-id')
  );

  if (event.target.tagName === 'I') {
    $h1.textContent = 'Edit Entry';
    viewSwap('entry-form');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === $editedEntry) {
        data.editing = data.entries[i];

        $title.value = data.editing.title;
        $photoURL.value = data.editing.url;
        $notes.value = data.editing.notes;
        $photo.src = data.editing.url;
      }
    }
  }
}

// query for each of the form inputs and using the values inside of data.entries[i] you would update each of their value properties!
