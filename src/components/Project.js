import React from "react";
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react";

const Project = ({ title, description, tech, pictures, url1, url2 }) => {
  return (
    <div className="project">
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
          <p className="project-tech">
            <i>{tech}</i>
          </p>
        
        <div className="project-buttons">
          
            <a className="live-button" href={url1}>
              Live demo
            </a>
         
          
            <a className="source-button" href={url2}>
              View code
            </a>
          
        </div>
      </div>
      <div className="carousel-wrapper">
        <CCarousel controls indicators>
          {pictures.map(item => 
            <CCarouselItem>
            <CImage
              className="d-flex w-100"
              src={item.url}
              alt="slide 1"
            />

          </CCarouselItem>)}
          
        </CCarousel>
      </div>
    </div>
  );
};

export default Project;
