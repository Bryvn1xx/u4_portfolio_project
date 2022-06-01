import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1 className='home-box-title'>About</h1>
      <div className='about-box'>
        <p className='about-cap-title' >Me</p>
        <p className='about-cap'>   Hello! My Name is Bryan Sanchez, I am a Full-Stack Software Engineer based out of Los Angeles. I enjoy working with teams & have experience using a wide variety of technologies in team environments. I love being faced with new challenges every-day as they only sharpen my skills. </p>
        <div className='about-box2'>
          <a href='https://docs.google.com/document/d/1Gov2U05QAngWiTxTWTEd3XuJ2apUPY6rkDgA16VK8PE/edit?usp=sharing' target='_blank'>
            <p className='resume-link' >Download Resume Here!</p>
          </a>
        </div>

        <img className='about-pic' src='/profile-pic.png'></img>
      </div >
    </div >
  )
}

export default About