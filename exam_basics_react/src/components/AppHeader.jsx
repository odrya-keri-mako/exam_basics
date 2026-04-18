import styles from './AppHeader.module.css'
import { NavLink } from 'react-router-dom'

export default function AppHeader() {
  return (
    <nav className={`navbar navbar-expand-sm bg-body-tertiary sticky-top ${styles.appHeader}`}>
      <div className="container-fluid">
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto mt-3 mt-sm-0 text-center">
            <li className={`nav-item rounded ${styles.navItem}`}>
              <NavLink 
                className= {
                  ({ isActive }) => `nav-link ${isActive ? styles.active : ''}`
                }
                to="/home">
                Kezdőoldal
              </NavLink>
            </li>

            <li className={`nav-item rounded ${styles.navItem}`}>
              <NavLink 
                className= {
                  ({ isActive }) => `nav-link ${isActive ? styles.active : ''}`
                }
                to="/page1">
                Oldal 1
              </NavLink>
            </li>

            <li className={`nav-item rounded text-small-caps 
                            btn-click-effect ${styles.navItem}`}>
              <NavLink className= {({ isActive }) => 
                `nav-link ${isActive ? styles.activeLink : ''}`
                }
                to="/page2">
                Oldal 2
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}