import React from 'react';
import * as styles from './styles/Intro.module.css'; // Assuming you have corresponding CSS
import WizardImage from "../images/data-wizard.png"

const Intro = () => {
  return (
    <div className={styles.intro}>
      
      <h1>Hi, I'm James Medaugh</h1>
      <p>Hello, World! I'm James Medaugh, your go-to wizard in the enchanting realm of data. By day, I create data platforms that make Snowflake look like a tropical beach, and by night, I'm a Python charmer, whispering sweet nothings to databases and spinning data into gold.  With a spellbook brimming with skills from database sorcery to cloud wizardry, I've journeyed through data dungeons in the kingdoms of Education, E-commerce, and Health Care. I've conjured up AWS Lambda spells, wrangled PowerBI dragons, and even hosted a grand ball for machine learning algorithms, winning accolades for my dazzling displays.  So, if you need a data champion who can turn a chaotic swarm of bytes into a symphony of insights or someone who can make your data dance the waltz, you're in the right castle! Let's embark on this data adventure together, shall we?</p>
      <img src={WizardImage} alt="Wizard transforming data into insights" className="wizardImage" />
    </div>
  );
};

export default Intro;
