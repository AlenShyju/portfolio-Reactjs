import React from 'react';
import './App.css';
import './styles.css';
import Alen from './alen.png';

const AlenProfile = () => {
  return (
    <div>
      <header className="centered-header">
        <h1>ALEN P SHYJU</h1>
        <nav>
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Courses">Courses</a></li>
            <li><a href="#Extracurricular">Extracurricular</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="profile">
        <h2>Profile</h2>
        <div className="profile-container">
          <a href="https://www.linkedin.com/in/alen-p-shyju-503b56253/" target="_blank">
            <img src={Alen} alt="Alen's Profile Picture" className="profile-img" />
          </a>
          <p>Hardworking and dedicated student who wants to set a career in the IT field. Looking forward to a platform with new challenging experiences to grow and showcase my talent.</p>
        </div>
      </section>

      <section >
        <h2 id="skills">Skills</h2>

        <div className="Education">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Linux</li>
            <li>Python</li>
          </ul>
        </div>
      </section>

      <section id="Education">
        <h2 className="subHead">Education</h2>
        <div className="Education">
          <h3>Lovely Professional University, Punjab, India.</h3>
          <p>Master of computer Application<br />
            August 2023-present
          </p>
          <h3>Nehru Arts And Science College, TamilNadu
          </h3>
          <p>Bachelor of Computer Application<br />
            August 2020- May 2023<br />
            CGPA -8.4
          </p>
          <h3>T.M.V.H.S.S, Perumpilavu, Kerala
          </h3>
          <p>Commerce with Computer Applications<br />
            August 2018-april 2020<br />
            CGPA 8.2
          </p>
        </div>
      </section>

      <section id="projects">
        <h2 className="subHead">Projects</h2>

        <div className="project">
          <h3>College Administration System
          </h3>
          <p>Software application designed to manage various administrative tasks within a college or
            university. It serves as a centralized platform for students, faculty, and staff to access and
            manage academic and administrative information.</p>
        </div>
        <div className="project">
          <h3>Enhanced CNN Architecture for Live Translation of Sign Language Finger Gestures into Text</h3>
          <p> An AI-based application has been designed to translate live American Sign Language to text using finger gestures, employing a convolutional neural network framework.
          </p>
        </div>
      </section>

      <section id="Courses">
        <h2 className="subHead" style={{ width: '22%' }}>Courses & Certificatons</h2>
        <div className="Courses">
          <h3> {"-> Diploma in Python With Data Science and Machine Learning"}
          </h3>
          <h3> {"-> IBM - Network Security & Database Vulnerabilities"}</h3>
          <h3> {"-> EC-Council Ethical Hacking Essentials"}</h3>
          <h3> {"-> Saylor- Software engineering"} </h3>
        </div>
      </section>

      <section id="Extracurricular" >
        <h2 className="subHead" style={{ width: '15%' }}>Extracurricular</h2>
        <div className="Extracurricular">
          <h3><a href="https://alenshyju.blogspot.com/" target="_blank">{"-> My website:"}</a></h3>
          <h3> {"->Photography"} <p>My website: <a href="http://alenshyju007.weebly.com/" target="_blank">click</a></p></h3>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: alenshyju27@gmail.com</p>
        <p>Phone: 9048062060</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alen-p-shyju-503b56253/" target="_blank">Your LinkedIn Profile</a></p>
      </section>
    </div>
  );
};

export default AlenProfile;