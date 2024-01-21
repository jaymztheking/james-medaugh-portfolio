import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const IndexPage = () => {
  return(
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Welcome.</h1>
        <p>Hi, I'm James Medaugh.  I'm a data person doing data things.</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default IndexPage;