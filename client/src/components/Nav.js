import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/about'>About</Link>
        <Link className='navlink' to='/projects'>Projects</Link>
      </nav>
      <header>
      </header>
    </div>
  )
}

export default Nav