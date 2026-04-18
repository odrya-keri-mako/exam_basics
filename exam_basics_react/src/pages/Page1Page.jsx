import './Page1Page.css'

export default function Page1Page() {
  console.log('Page1 controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title">
          <i className="fa-solid fa-face-smile-beam me-1"></i>
          <span>Oldal 1</span>
        </h1>
      </div>
    </div>
  )
}