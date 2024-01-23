import React from 'react';
import * as styles from './styles/Skills.module.css'; // Assuming you have a corresponding CSS module

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillCategory}>
        <h3>Databases</h3>
        <ul>
          <li>Snowflake</li>
          <li>Big Query</li>
          <li>Oracle</li>
          <li>SQL Server</li>
          <li>Postgres</li>
          <li>NoSQL (DynamoDB, MongoDB, Firestore)</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Data Tools and Libraries</h3>
        <ul>
          <li>Apache Spark/Google DataProc/Databricks</li>
          <li>Apache Kafka</li>
          <li>Apache Airflow/Google Composer</li>
          <li>Apache Beam/Google DataFlow</li>
          <li>Pandas, NumPy, SciPy, Scikit-learn, Tensorflow</li>
        </ul>
      </div>
      <div className={styles.skillCategory}>
        <h3>Programming Languages</h3>
        <ul>
          <li>Python</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Scala</li>
          <li>R</li>
          <li>SQL Dialects (ANSI, PL/SQL, T-SQL)</li>
          <li>Bash/KSH/ZSH</li>
        </ul>
      </div><
        div className={styles.skillCategory}>
        <h3>BI and Data Visualization</h3>
        <ul>
          <li>PowerBI</li>
          <li>Tableau</li>
          <li>Cognos</li>
          <li>SSIS/SSAS/SSRS</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
