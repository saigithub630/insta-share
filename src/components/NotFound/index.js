import './index.css'

const NotFound = () => (
  <div className="page-container">
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dfww8i8em/image/upload/v1645344706/erroring_1_vgwj9a.png"
        alt="page not found"
        className="not-found-img"
      />
      <h1 className="page-not-found-heading">Page Not Found</h1>
      <p className="description">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <button type="button" className="btn">
        Home Page
      </button>
    </div>
  </div>
)

export default NotFound
