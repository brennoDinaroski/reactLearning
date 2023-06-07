import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
    )
}