import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="top-header">
      <div className="top-header__inner">
        <Link to="/" className="brand" aria-label="Top Training Institute home">
          <div className="brand-mark">TOP</div>
          <div className="brand-text">
            <span>TOP TRAINING</span>
            <small>INSTITUTE</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/" className="nav-home">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/student">Student</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>

        <button className="apply-btn" type="button">
          Apply Now <span>→</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar