import { Link } from 'react-router-dom'
// import Assets from './Assets'

const Home = () => {


  return (
    <div>
      <div>
      <h2 className='home-title1' >Home</h2>
      </div>
      <div className='home-cards'>
        <div>
          <div className='home-box1'>
            <div className='home-box1-caption'>
            <h2 className='name'>Bryan Sanchez</h2>
            <p2 className='name-quote'>Hello! My name is Bryan & i am a Full-Stack Software Engineer. Welcome to my page where you can learn a little bit about me & view some of my work!</p2>
            <div>
            <Link to='/about' >About Me</Link>
            </div>
            </div>
            <img className='home-pic' src='/profile-pic.png'></img>
          </div>

        </div>
        <div className='home-box2'>
          <h2 className='home-box-title' >Technologies</h2>
          <div>
            <div><p2>Front End: HTML, CSS, JavaScript, React, Redux, Vue, Python</p2></div>
            <div><p3>Back End: Sequelize, Mongoose, Postgres, MongoDB, SQL, PostgreSQL </p3></div>
          </div>
        </div>






      </div>
    </div>
  )
  
  }

export default Home