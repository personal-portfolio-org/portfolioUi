import styles from './Home.module.css'
import React from 'react';




export default function About() {

    return (
        <div className={styles.mainContainer} id="about">
            <div className={styles.header}>
                About Me
            </div>
            <div className={styles.container}>
                <div id="firstChildContainer" className={`${styles.card} ${styles.updateCard} ${styles.updateTextPart1}`}>

                    <p>
                        I'm Aniket Singh. I've interest in Chatbot, Full Stack and Software Developer. Also, I'd loved to work as
                        researcher for physical science, Artifical Intelligence and Machine Learning.
                    </p>
                    <p>

                        I take great pride in having successfully attained the illustrious achievement
                        of graduating with a B.Tech degree in Engineering Physics, specializing in the captivating field of Electronics and Communication Engineering,
                        complemented by a distinguished minor degree in Nano Science and Technology, both of which I diligently pursued at the prestigious
                        Delhi Technological University, nestled in the vibrant city of New Delhi.
                    </p>

                    <p>
                        The invaluable knowledge and hands-on experience I gained during my time at Delhi Technological
                        University have undoubtedly prepared me to excel in my future endeavors and contribute to the
                        ever-evolving landscape of engineering, electronics, and software development
                    </p>
                    <p>

                        In the captivating month of May 2021, I commenced my professional voyage at the esteemed organization
                        of TCS PVT. LTD., assuming the role of a zealous and aspiring Assistant System Engineer Trainee.
                        During this formative phase, I eagerly absorbed knowledge and honed my technical prowess,
                        immersing myself in the multifaceted world of software engineering.
                    </p>
                    <p>
                        As I continued to expand my skill set and seek new challenges,
                        destiny led me to the vibrant and dynamic domain of Paxcom PVT LTD. (A paymnetus company),
                        where I have been diligently serving as a proficient and innovative software developer.Within this renowned organization,
                        I have had the privilege to contribute my expertise towards the creation and refinement of cutting-edge
                        software solutions, embracing the opportunity to harness technology for optimal efficiency and user satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
}
