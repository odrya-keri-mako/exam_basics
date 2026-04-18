import styles from './Page1Page.module.css'
import { useEffect } from 'react'
import { useAppContext } from '../context/AppContext.jsx'

export default function Page1Page() {

  const { pageID } = useAppContext();
  
  useEffect(() => {
    console.log(`${pageID} controller...`);
  }, [pageID]);
  
  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className={`text-center text-small-caps display-1 ${styles.pageTitle}`}>
          Oldal 1
        </h1>
      </div>
    </div>
  )
}