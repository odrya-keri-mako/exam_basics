console.log('Header controller...');
const navLink = document.querySelector(
  `a.nav-link[href="?page=${APP.pageID}"]`);
if (navLink) navLink.classList.add('active');