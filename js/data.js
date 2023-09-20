/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', stringifyInput);

function stringifyInput(string) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('JS Storage', jsonData);
}

const getStorage = localStorage.getItem('JS Storage');
  if (getStorage !== null) {
  data = JSON.parse(getStorage);
}
