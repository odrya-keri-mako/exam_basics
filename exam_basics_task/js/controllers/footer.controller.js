console.log('Footer controller...');
const yearSpan = document.querySelector('footer span#current-year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();