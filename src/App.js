import './App.css';
import { experiences, certificates, personalInfo } from './util/data';
import {useState, useEffect} from 'react';

import axios from 'axios';


const App = () => {
  
  const [CV, setCV] = useState({
    personalInfo: {
        "firstName": "",
        "lastName": "",
        "currentJob": "",
        "hardSkills": [],
        "softSkills": [],
        "socialLinks": [],
        "contactInfo": {
            "phoneNumbers": [],
            "email": ""
        }
    },
    experiences: [],
    certificates: []
});

  const requestCV = async() => {
    try {
      const resp = await axios.get("https://cv-generator-api.herokuapp.com/cv");
      setCV(resp.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    requestCV();
  }, [] )

 
  return (
    <div className="page-wrapper">
      <div className="cv-wrapper">
      <div className="left-section">
        <div className="picture-wrapper empty-section">
          <div className="picture-section">
            {/* TODO: Fetch picture from back-end */}
            {CV.personalInfo.firstName} <br/>
            {CV.personalInfo.lastName}
          </div>
          <div className="job-title-section">
            {CV.personalInfo.currentJob}
          </div>
        </div>
        <div className="hard-skills-wrapper empty-section">
          <p className="hard-skills-title">Hard Skills</p>
          <p className="hard-skills-content">
            {CV.personalInfo.hardSkills.map((skill, index) => {
              return <>{ index !== 0
                ? `| ${skill}` 
                : skill} </>
            })}
          </p>
        </div>
        <div className="soft-skills-wrapper empty-section">
          <p className="soft-skills-title">Soft Skills</p>
          <p className="soft-skills-content">
            {CV.personalInfo.softSkills.map((skill, index) => {
              return <>{ index !== 0 
                ? `| ${skill}` 
                : skill} </>
            })}
          </p>
        </div>
        <div className="social-links-wrapper empty-section">
          {CV.personalInfo.socialLinks.map((social, index) => {
            return (
              <div key={index} className="single-social-wrapper">
                <div className="icon-wrapper">
                  {social.website === "github"
                    ?<i className="fa-brands fa-github fa-2xl"></i>
                    :<i className="fa-brands fa-linkedin fa-2xl" style={{"--fa-primary-color": "white"}}></i>
                  }
                </div>
                <p className="handler-wrapper">{social.handle}</p>
              </div>
            )
          })}
        </div>
        <div className="contact-wrapper empty-section">
          <h3 className="contact-section-title">Contact</h3>
          <div className="contact-info">
            {CV.personalInfo.contactInfo.phoneNumbers.map(number => {
              return (
                <>
                {number} <br/>
                </>
              )
            })}
            {CV.personalInfo.contactInfo.email}
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="about-me">
          <h2 className='section-title'>about me </h2>
          <p className="section-text">
          TODO: Fetch this data from back-end
          </p>
        </div>
        <div className="education">
        <h2 className='section-title'>education</h2>
        <h4 className='subtitle'>TODO: Fetch this data from back-end</h4>
          <p className="section-text">
          TODO: Fetch this data from back-end
          </p>
        </div>
        <div className="experience">
        <h2 className='section-title'>experience</h2>
          {CV.experiences.map((experiencia, index) => (
            <>
              <div key={index} className="experience-wrapper">
                <div className="year-wrapper">
                  {experiencia.timeFrame}
                </div>
                <div className="exp-info-wrapper">
                  <p className="company-name">
                    {experiencia.companyName}
                  </p>
                  <p className="job-title">
                    {experiencia.jobTitle}
                  </p>
                  <p className="job-description">
                    {experiencia.jobDescription}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="certificates">
          <h2 className='section-title'>certificates</h2>
          {CV.certificates.map((certificado, index) => (
            <div key={index} className="certificate-wrapper">
            <p className="certificate-name">{certificado.name}</p>
            <div className="certificate-info">
              {certificado.timeFrame} - {certificado.info}
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
