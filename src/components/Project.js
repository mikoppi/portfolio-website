import React from 'react'


const Project = ({title, description, tech, videoSource}) => {
  return (
    <div className='project'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <div className='project-tech-wrapper'>
            <p className='project-tech'>
                <i>{tech}</i>
            </p> 
        </div>
        <div className='project-buttons'>
            <div className="live-button">
                <a href="jee"
                ><button>Live demo</button></a
                >
            </div>
            <div className="source-button">
                <a href="jee"
                ><button>View code</button></a
                >
            </div>
        </div>
        <div className="video-wrapper">
              <video playsInline autoPlay muted loop>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
    </div>
  )
}

export default Project