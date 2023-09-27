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
const $delete = document.querySelector('.delete');
const $modal = document.querySelector('.modal');
const $cancel = document.querySelector('#cancel');

// Event Handler for Photo URL

$photoURL.addEventListener('input', photoInput);

function photoInput(input) {
  $photo.src = $photoURL.value;
}

// Event Handler for Submit

$form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const inputs = {};

  inputs.title = $form.elements.title.value;
  inputs.url = $form.elements.url.value;
  inputs.notes = $form.elements.notes.value;
  inputs.entryId = data.nextEntryId;

  if (data.editing === null) {
    data.nextEntryId++;
    data.entries.unshift(inputs);
    $ul.prepend(renderEntry(inputs));
  } else if (data.editing !== null) {
    inputs.entryId = data.editing.entryId;

    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i] = inputs;
      }
    }
    const $li = document.querySelectorAll('li');
    for (let x = 0; x < $li.length; x++) {
      if (data.editing.entryId === Number($li[x].getAttribute('data-entry-id')))
        $li[x].replaceWith(renderEntry(inputs));
    }
    $h1.textContent = 'New Entry';
    data.editing = null;
  }
  $photo.src = 'images/placeholder-image-square.jpg';
  $form.reset();
  togglenoEntries();
  viewSwap('entries');
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

// DOMContentLoaded Event Handler

document.addEventListener('DOMContentLoaded', appendDOM);

function appendDOM(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $dataentries = renderEntry(data.entries[i]);
    $ul.append($dataentries);
  }
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
  $delete.className = 'hidden';
});

// Event Handler for viewSwap Entry-Form

$swapForm.addEventListener('click', function () {
  viewSwap('entry-form');
  $delete.className = 'hidden';
});

// Event Handler for viewSwap Home

$swapHome.addEventListener('click', function () {
  viewSwap('entry-form');
  $h1.textContent = 'New Entry';
  $delete.className = 'hidden';
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
    $delete.classList.remove('hidden');
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

// Event Handler for Showing Modal on Delete Entry

$delete.onclick = function () {
  $modal.style.display = 'block';
};

// Event Handler for Modal Cancel

$cancel.onclick = function () {
  $modal.style.display = 'none';
};

// Event Handler for Modal Confirm
