import logo from './logo.svg';
import { Route, Routes } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Nav from './components/Nav'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import './App.css';


// const onClick = () => {
//   <Link to='google.com' />
// }
function App() {
  return (
    <div className="App">
      < Nav />
      <Routes >
        <Route path='/' element={< Home />} />
      </Routes>

      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

      <Routes >
        <Route path='/projects' element={<Projects />} />
      </Routes>

      <header className="App-header">


      </header>
      <div className='socials'>
        <a href='https://github.com/Bryvn1xx'>
        <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/bryvn1xx/'>
        <FaLinkedin />
        </a>

      </div>
    </div >
  );
}

export default App;
