import './Page2Page.css'

export default function Page2Page() {
  console.log('Page2 controller...')

  return (
    <div className="container h-100 scale-in">
      <div className="row h-100 align-items-center">
        <h1 className="text-center text-small-caps display-1 page-title page-title">
          <i className="fa-solid fa-face-grin-tears me-1"></i>
          <span>Oldal 2</span>
        </h1>
      </div>
    </div>
  )
}