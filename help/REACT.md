# React ![React](./img/react.png)

### Create project
```bash
npm create vite@latest exam_basics_react
# Select framework: React, variant: JavaScript

cd exam_basics_react
npm install
npm install react-router-dom bootstrap @fortawesome/fontawesome-free
```

### Project folder structure
```text
exam_basics_react/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── AppHeader.jsx
│   │   ├── AppHeader.css
│   │   ├── AppFooter.jsx
│   │   └── AppFooter.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── Page1Page.jsx
│   │   ├── Page1Page.css
│   │   ├── Page2Page.jsx
│   │   └── Page2Page.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

### Delete unnecessary *folders*, *files*
```bash
# These commands are different in Windows PowerShell!
rm ./public/favicon.svg
rm ./public/icons.svg
rm ./src/App.css
rm ./src/index.css
rm ./src/assets/hero.png
rm ./src/assets/react.svg
rm ./src/assets/vite.svg
```

### Create necessary *folders*, *files*
```bash
touch ./src/assets/main.css
mkdir -p src/components
touch ./src/components/AppHeader.jsx
touch ./src/components/AppHeader.css
touch ./src/components/AppFooter.jsx
touch ./src/components/AppFooter.css
mkdir -p src/pages
touch ./src/pages/HomePage.jsx
touch ./src/pages/HomePage.css
touch ./src/pages/Page1Page.jsx
touch ./src/pages/Page1Page.css
touch ./src/pages/Page2Page.jsx
touch ./src/pages/Page2Page.css
```

### Copy from *exam_basics_task/assets/image/favicon.png* to *public* folder
```bash
# This command is different in Windows PowerShell!
cp ../exam_basics_task/assets/image/favicon.png ./public/favicon.png
```

### Modify *index.html*
```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vizsgafeladat-indító React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### Modify *src/main.jsx*
```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

### Modify *src/App.jsx*
```js
import { Routes, Route, Navigate } from 'react-router-dom'
import AppHeader from './components/AppHeader.jsx'
import AppFooter from './components/AppFooter.jsx'
import HomePage from './pages/HomePage.jsx'
import Page1Page from './pages/Page1Page.jsx'
import Page2Page from './pages/Page2Page.jsx'

export default function App() {
  return (
    <div className="app-container position-relative d-flex flex-column vh-100 overflow-x-hidden overflow-y-auto">
      <AppHeader />
      <main className="position-relative flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/page1" element={<Page1Page />} />
          <Route path="/page2" element={<Page2Page />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}
```

### Modify *src/components/AppHeader.jsx*
```js
import { NavLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mt-3 mt-sm-0 text-center">
            <li className="nav-item text-small-caps btn-click-effect rounded">
              <NavLink className="nav-link" to="/home">
                <i className="fa-solid fa-house me-1"></i>
                <span>Kezdőoldal</span>
              </NavLink>
            </li>

            <li className="nav-item text-small-caps btn-click-effect rounded">
              <NavLink className="nav-link" to="/page1">
                <i className="fa-solid fa-face-smile-beam me-1"></i>
                <span>Oldal 1</span>
              </NavLink>
            </li>

            <li className="nav-item text-small-caps btn-click-effect rounded">
              <NavLink className="nav-link" to="/page2">
                <i className="fa-solid fa-face-grin-tears me-1"></i>
                <span>Oldal 2</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
```

### Modify *src/components/AppFooter.jsx*
```js
export default function AppFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container-fluid bg-body-tertiary">
      <p className="fw-lighter fs-xs text-center mb-0 py-2">
        <span>&copy; Copyright&nbsp;&nbsp;2021-{currentYear}</span>
        <span className="ms-2">Keri Informatika, Makó</span>
      </p>
    </div>
  )
}
```

### Modify *src/pages/HomePage.jsx*
```js
export default function HomePage() {
  console.log('Home controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title-home">
          <i className="fa-solid fa-house me-1"></i>
          <span>Kezdőoldal</span>
        </h1>
      </div>
    </div>
  )
}
```

### Modify *src/pages/Page1Page.jsx*
```js
export default function Page1Page() {
  console.log('Page1 controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title-page1">
          <i className="fa-solid fa-face-smile-beam me-1"></i>
          <span>Oldal 1</span>
        </h1>
      </div>
    </div>
  )
}
```

### Modify *src/pages/Page2Page.jsx*
```js
export default function Page2Page() {
  console.log('Page2 controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title-page2">
          <i className="fa-solid fa-face-grin-tears me-1"></i>
          <span>Oldal 2</span>
        </h1>
      </div>
    </div>
  )
}
```

### Modify *src/assets/main.css*
```css
*:not(input):not(textarea) {
  user-select: none !important;
  outline-style: none !important;
}
.text-small-caps {
  font-variant: small-caps !important;
}
.scale-in {
  animation: scaleIn 0.6s ease both;
}
.fs-xs {
  font-size: 0.75em;
}
.page-title-home {
  color: red;
}
.page-title-page1 {
  color: blue;
}
.page-title-page2 {
  color: green;
}
.nav-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.nav-link.active {
  text-decoration: underline;
  pointer-events: none;
}
.btn-click-effect:not(.disabled):active {
  animation: btnClickEffect 0.4s;
}
@keyframes scaleIn {
  0% { opacity: 0; transform: scale(0); }
  25% { opacity: 0; transform: scale(0); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes btnClickEffect {
  0% { transform: none; }
  50% { transform: scale(0.9); }
  100% { transform: none; }
}
```