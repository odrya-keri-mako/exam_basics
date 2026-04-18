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