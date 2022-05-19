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
            <a href='http://localhost:3000/about'>
              <img className='home-pic' src='/home-pic2.png'></img>
              </a>
            </div>
            <div className='home-box1-caption'>
            {/* <h2 className='name'>Bryan Sanchez</h2>
            <h2 className='name-quote'>Hello! My name is Bryan & i am a Full-Stack Software Engineer. Welcome to my page where you can learn a little bit about me & view some of my work!</h2> */}
            <div>
            {/* <Link to='/about' >About Me</Link> */}
            </div>
            </div>

        </div>
        <div className='home-box2'>
          <h2 className='home-box-title' >Who am i?</h2>
          <p2 className='text' >Hello! My name is </p2><p2 className='name-'>Bryan Sanchez,</p2>
          <h2 className='text'>I am a Full-Stack Software Engineer, with experience in   </h2>
          <h2 className='home-box-title' >Technologies</h2>
          <div>
            <div className='home-box-caption' ><h2>Front End: HTML, CSS, JavaScript, React, Redux, Vue, Python</h2></div>
            <div className='home-box-caption'><h2>Back End: Sequelize, Mongoose, Postgres, MongoDB, SQL, PostgreSQL </h2></div>
          </div>
        </div>






      </div>
    </div>
  )
  
  }

export default Home