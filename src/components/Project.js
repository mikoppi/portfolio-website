import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Project = ({ title, description, tech, pictures, url1, url2 }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tech-wrapper">
        <p className="project-tech">
          <i>{tech}</i>
        </p>
      </div>
      <div className="project-buttons">
        <div className="live-button">
          <a href={url1}>
            <button>Live demo</button>
          </a>
        </div>
        <div className="source-button">
          <a href={url2}>
            <button>View code</button>
          </a>
        </div>
        <div>
          <SimpleImageSlider
            width={896}
            height={504}
            images={pictures}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
