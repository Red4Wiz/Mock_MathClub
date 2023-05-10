import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        Math Club
      </Link>
      <ul>
        <CustomLink to="/events" className="navbar-links">Events</CustomLink>
        <CustomLink to="/lessons" className="navbar-links">Lessons</CustomLink>
        <CustomLink to="/contact" className="navbar-links">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
