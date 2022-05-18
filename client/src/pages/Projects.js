const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='projects'>
        <div className='proj-container'>
          <div className='proj-1'>
            <a href='https://noderun.herokuapp.com/'>
            <img className='proj1-img' src='/noderun-screenshot.png'></img>
            </a>
            <h2>NodeRun</h2>
          </div>
          <div className='proj-1'>
            <a href='https://worktrack-frontend.herokuapp.com/'>
              <img className='proj1-img' src='/worktrack-app.png'></img>

            </a>
          </div>
          <div className='proj-1'>
            <a href='https://github.com/Bryvn1xx/u2_proj_used_cars'>
              <img className='proj1-img' src='/luxury-motors.png'></img>
            </a>
          </div>
          <div className='proj-1'>
            <a href='https://second-birth.surge.sh/'>
              <img className='proj1-img' src='/connect-4.png'></img>
            </a>
          </div>
        </div>






      </div>

    </div>
  )
}

export default Projects