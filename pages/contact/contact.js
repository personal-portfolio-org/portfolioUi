import styles from './Home.module.css'

export default function ContactPage() {
  return (
    <div className={styles.mainContainer} id="contact">
      <div className={`${styles.header}`}>
        Get In Touch
      </div>
      <div className={`${styles.contactInfo}`}>
      <div className={`${styles.contactchild}`}>
      <i className="fa fa-user" aria-hidden="true" style={{ fontSize: "36px" }}></i>
       <h4>Aniket Singh</h4>
       </div>
       <div className={`${styles.contactchild}`}>
        <i className="fa fa-envelope" aria-hidden="true" style={{ fontSize: "36px" }}></i>
        <h4> <a href='https://mail.google.com/mail/?view=cm&fs=1&to=testdata.appemail@gmail.com&su=SUBJECT&body=BODY'>
          testdata.appemail@gmail.com
        </a></h4>
        </div>
        <div className={`${styles.contactchild}`}>
        <i className="fa fa-linkedin" aria-hidden="true"  style={{ fontSize: "36px" }}></i>
        <h4><a href='https://in.linkedin.com/in/aniket-singh-1651221a6'>
          Linkedin
        </a></h4>
        </div>
        <div className={`${styles.contactchild}`}>
        <i className="fa fa-github" aria-hidden="true" style={{ fontSize: "36px" }}></i>
        <h4><a href='https://github.com/aniketgod'>Github</a></h4>
        </div>
        <div className={`${styles.contactchild}`}>
        <i className="fa fa-home" aria-hidden="true" style={{ fontSize: "36px" }}></i>
        <h4>India</h4>
        </div>
      </div>
    </div>
  );
}
