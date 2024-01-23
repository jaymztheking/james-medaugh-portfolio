import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import * as styles from './styles/ProjectsCarousel.module.css';

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.carousel}>
      <h2>My Projects</h2>
      <Slider {...settings}>
        <div className={styles.project}>
          <h3>Baseball Statistics Database</h3>
          <p>Short Description</p>
        </div>
        <div className={styles.project}>
          <h3>10 x 10 Number Game in React</h3>
          <p>Short Description</p>
        </div>
        <div className={styles.project}>
          <h3>Data Ingestion Library</h3>
          <p>Short Description</p>
        </div>
      </Slider>
    </div>
  );
};

export default ProjectsCarousel;
