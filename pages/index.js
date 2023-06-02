import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about/about';
import SkillPage from './skill/skill';
import Project from './project/project';
import ContactPage from './contact/contact';
import ChatBot from './conversation/bot';

export default function HomePage()
{
  return (
    <div>
<div className={styles.container}>
<div className={`${styles.card} ${styles.updateCard} ${styles.updateTextPart1}`}>
<h2>
  Good Morning, World . . .
</h2>
<h2>
   Full Stack and Chatbot Developer.
</h2>
<p className={`${styles.updateTextPart2}`}> 
I like to innovation, developing and solve issue with my best expereince. 
</p>
</div>
<div className={`${styles.polaroid}`}>
<Image src={'/guitar.jpg'} alt="My logo" width={550} height={500}/>
</div></div>
<About/>
<SkillPage/>
<Project/>
<ContactPage/>
<ChatBot></ChatBot>
</div>
  );
}
