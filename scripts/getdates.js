const date = new Date();
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');

currentYear.textContent = date.getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;

