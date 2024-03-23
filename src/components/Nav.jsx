// npm modules
import { NavLink } from 'react-router-dom'

// assets
import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/"><img src={logo} alt="A cute puppy" /></NavLink>
      <NavLink to="/chickens">Chicken List</NavLink>
    </nav>
  )
}

export default Nav