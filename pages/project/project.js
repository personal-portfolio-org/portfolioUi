import React from "react";
import styles from './Home.module.css';

export default function Project() {
  return (
    <div className={styles.mainContainer} id="project">
      <div className={styles.header}>
        My Project
      </div>
      <div className={styles.container}>
        <div id="firstChildContainer" className={`${styles.card} ${styles.updateCard} ${styles.updateTextPart1}`}>
          <h2>Web Developer</h2>
          <p>
            Created the Restful Apis by utilizing technology such as FastApi and Web UI by utilizing technology 
            such as AppSmith and AngularJs.
          </p>
        </div>
        <div id="secondChildContainer" className={`${styles.card} ${styles.updateCard} ${styles.updateTextPart1}`}>
          <h2>Chatbot Developer</h2>
          <p>
            By utilizing the Rasa/IBM Watson Assistant to develop multiple chatbot products. To maintain the quality of the product,
            worked on frequent training of the model.
          </p>
        </div>
        <div id="thirdChildContainer" className={`${styles.card} ${styles.updateCard} ${styles.updateTextPart1}`}>
          <h2>Automation Devloper</h2>
          <p>
            By utilizing technology such as python and its libraries to develop chatbot tester with interactive report.
          </p>
        </div>
      </div>
    </div>

  );
}
