const fetchNotes = require('./fetchNotes');

const titleEL = document.querySelector('#title');
const contentEL = document.querySelector('#content');
const buttonEL = document.querySelector('#submit');

buttonEL.addEventListener('click', () => {
fetchNotes(titleEL.value, contentEL.value);
})

