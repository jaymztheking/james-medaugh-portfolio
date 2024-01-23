import React from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import '../styles/global.css'; // Adjust the path if your global stylesheet is located elsewhere

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <main className='mainContainer'>
        <div className='intro'>
          <Intro />
        </div>
        <div className='carousel'>
          <ProjectsCarousel />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
