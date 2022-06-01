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
            <a className='home-pic1' href='https://bryansportal.herokuapp.com/about'>
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
          {/* <p2 className='text' >Hello! My name is </p2><p2 className='name-'>Bryan Sanchez,</p2> */}
          <div>
            <div className='onmymacpic'>
              <img className='emoji1' src='/onmymac.png'></img>
              <h2 className='text1'>I am a Full-Stack Software Engineer with experience using the latest frameworks availible. I value developing simple & easy to use apps that fit everyones needs.  </h2>
            </div>
          </div>
        </div>

        <div className='home-box2'>
          <h2 className='home-box-title'>Technologies</h2>
          <div className='text2'>
            <div className='home-box-caption' ><h2 className='techstx'>Front End: HTML, CSS, JavaScript, React, Redux, Vue, Python</h2></div>

            <div className='home-box-caption'><h2 className='techstx' >Back End: Sequelize, Mongoose, Postgres, MongoDB, SQL, PostgreSQL </h2></div>
          </div>
          <div className='light-bulb-pic'>
            <img className='lbp' src='light-bulb.png'></img>
          </div>
        </div>






      </div>
    </div>
  )

}

export default Home