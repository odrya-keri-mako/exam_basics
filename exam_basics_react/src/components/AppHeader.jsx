import styles from './AppHeader.module.css'
import { NavLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mt-3 mt-sm-0 text-center">

            {/* Home */}
            <li className={`nav-item text-small-caps rounded 
                            ${styles.navItem} ${styles.btnClickEffect}`}>
              <NavLink  to="/home"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? styles.activeLink : ''}`}>
                <i className="fa-solid fa-house me-1"></i>
                <span>Kezdőoldal</span>
              </NavLink>
            </li>

            {/* Page1 */}
            <li className={`nav-item text-small-caps rounded 
                            ${styles.navItem} ${styles.btnClickEffect}`}>
              <NavLink  to="/page1"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? styles.activeLink : ''}`}>
                <i className="fa-solid fa-face-smile-beam me-1"></i>
                <span>Oldal 1</span>
              </NavLink>
            </li>

            {/* Page2 */}
            <li className={`nav-item text-small-caps rounded 
                            ${styles.navItem} ${styles.btnClickEffect}`}>
              <NavLink  to="/page2"
                        className={({ isActive }) =>
                          `nav-link ${isActive ? styles.activeLink : ''}`}>
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