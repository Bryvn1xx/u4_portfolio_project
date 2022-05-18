import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/about'>About</Link>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <h3>Welcome!</h3>
      </nav>
      <header>
      </header>
    </div>
  )
}

export default Nav