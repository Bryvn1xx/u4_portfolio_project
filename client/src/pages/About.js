import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <h1 className='home-box-title'>About</h1>
      <div className='about-box'>
        <p className='about-cap-title' >Me</p>
        <div className='about-box2'>
          <a href='https://docs.google.com/document/d/1Gov2U05QAngWiTxTWTEd3XuJ2apUPY6rkDgA16VK8PE/edit?usp=sharing' target='_blank'>
            {/* <p className='resume-link' >Download Resume Here!</p> */}
          </a>
        </div>

        <img className='about-pic' src='/profile-pic.png'></img>
        <p className='about-cap'>   Hello! My Name is Bryan Sanchez, I am a Full-Stack Software Engineer with a background in Information Technology, based out of Rancho Cucamonga, CA. I am 23 years old, and still love playing with computers. This is my portfolio where you can view some of the work i have created & taken part in, and contact me via links at the bottom of the page!</p>
      </div >
    </div >
  )
}

export default About