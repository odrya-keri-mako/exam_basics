import { Routes, Route, Navigate } from 'react-router-dom'
import AppHeader from './components/AppHeader.jsx'
import AppFooter from './components/AppFooter.jsx'
import HomePage  from './pages/HomePage.jsx'
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