import './HomePage.css'

export default function HomePage() {
  console.log('Home controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title">
          <i className="fa-solid fa-house me-1"></i>
          <span>Kezdőoldal</span>
        </h1>
      </div>
    </div>
  )
}