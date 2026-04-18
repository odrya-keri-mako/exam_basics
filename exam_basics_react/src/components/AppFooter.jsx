import styles from './AppFooter.module.css'
import { useEffect } from 'react'

export default function AppFooter() {
  
  useEffect(() => {
    console.log('Footer controller...');
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-body-tertiary">
      <p className={`fw-lighter text-center mb-0 py-2 ${styles.fsXs}`}>
        <span>&copy; Copyright&nbsp;&nbsp;2021-{currentYear}</span>
        <span className="ms-2">Keri Informatika, Makó</span>
      </p>
    </div>
  )
}