
// Document loaded event
document.addEventListener('DOMContentLoaded', initApp);

// Initialize application
async function initApp() {
  try {
    await includeHtmlByType('layouts');
    await includeHtmlByType('components');
    await loadPage();
    await includeControllers();
  } catch (e) { console.error(e); }
}

// Include htmls by type
async function includeHtmlByType(type) {
  const elements = document.querySelectorAll(
    `[data-include-html][data-include-type="${type}"]`
  );
  if (!elements.length) return;

  await Promise.all(
    [...elements].map(async (element) => {
      const file = element.getAttribute('data-include-html');
      element.removeAttribute('data-include-html');
      element.removeAttribute('data-include-type');
      if (!file) return;
      const html = await fileGetContents(`./html/${type}/${file}`);
      element.innerHTML = html;
    })
  );
}

// Load current page
async function loadPage() {
  const main = document.querySelector('main');
  if (!main) return;
  const html = await fileGetContents(`./html/pages/${APP.pageID}.html`);
  main.innerHTML = html;
}

// Load controllers
async function includeControllers() {
  const controllerElements = document.querySelectorAll('[data-include-controller]');
  if (!controllerElements.length) return;
  for (const element of controllerElements) {
    const file = element.getAttribute('data-include-controller');
    element.removeAttribute('data-include-controller');
    if (!file) continue;
    await loadScript(`./js/controllers/${file}`);
  }
}

// Load a script
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.body.appendChild(script);
  });
}

// File get contents
async function fileGetContents(file) {
  const response = await fetch(file);
  if (!response.ok)
    throw new Error(`Failed to load: ${file} (${response.status})`);
  return await response.text();
}