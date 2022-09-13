const Projects = () => {
  return (
    <div>
      <h1 className='project-page-title'>Projects</h1>
      <div className='projects'>
        <div className='proj-container'>
          <div className='proj-1'>
            <a href='https://noderun.herokuapp.com/'>
              <img className='proj1-img' src='/noderun-screenshot.png'></img>
            </a>
            <a className='repos-link' href='https://github.com/Bryvn1xx/u4_capstone_noderun' >
              <p>NodeRun Repo</p>
            </a>
            <h2>NodeRun</h2>
          </div>
          <div className='proj-1'>
            <a href='https://worktrack-frontend.herokuapp.com/'>
              <img className='proj1-img' src='/worktrack-app.png'></img>

            </a>
            <a className='repos-link' href='https://github.com/MC-JSON/WorkTrack-FrontEnd/tree/main' >
              <p>WorkTrack Repo</p>
            </a>
          </div>
          <div className='proj-1'>
            <a href='https://github.com/Bryvn1xx/u2_proj_used_cars'>
              <img className='proj1-img' src='/luxury-motors.png'></img>
            </a>
            <a className='repos-link' href='https://github.com/Bryvn1xx/u4_capstone_noderun' >
              <p>Luxury Motors Repo</p>
            </a>
          </div>
          <div className='proj-1'>
            <a href='https://github.com/Bryvn1xx/connecting4'>
              <img className='proj1-img' src='/connect-4.png'></img>
            </a>
            <a className='repos-link' href='https://github.com/Bryvn1xx/u4_capstone_noderun' >
              <p>Tic-Tac-Toe Repo</p>
            </a>
          </div>
        </div>






      </div>

    </div>
  )
}

export default Projects