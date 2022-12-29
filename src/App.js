import './App.css';
import { experiences, certificates, personalInfo } from './util/data';

const App = () => {

  const handleLinkClick = (social) => {
    window.open(social.url, '_blank', 'noreferrer');
  }
  return (
    <div className="page-wrapper">
      <div className="cv-wrapper">
      <div className="left-section">
        <div className="picture-wrapper empty-section">
          <div className="picture-section">
            {personalInfo.firstName} <br/>
            {personalInfo.lastName}
          </div>
          <div className="job-title-section">
            {personalInfo.currentJob}
          </div>
        </div>
        <div className="hard-skills-wrapper empty-section">
          <p className="hard-skills-title"><h3>Hard Skills</h3></p>
          <p className="hard-skills-content">
            {personalInfo.hardSkills.map((skill, index) => {
              return <>{ index !== 0
                ? `| ${skill}` 
                : skill} </>
            })}
          </p>
        </div>
        <div className="soft-skills-wrapper empty-section">
          <p className="soft-skills-title"><h3>Soft Skills</h3></p>
          <p className="soft-skills-content">
            {personalInfo.softSkills.map((skill, index) => {
              return <>{ index !== 0 
                ? `| ${skill}` 
                : skill} </>
            })}
          </p>
        </div>
        <div className="social-links-wrapper empty-section">
          {personalInfo.socialLinks.map(social => {
            return (
              <div className="single-social-wrapper" onClick={() => {
                handleLinkClick(social)
              }}>
                <div className="icon-wrapper">
                  {social.website === "github"
                    ?<i class="fa-brands fa-github fa-2xl"></i>
                    :<i class="fa-brands fa-linkedin fa-2xl" style={{"--fa-primary-color": "white"}}></i>
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
            {personalInfo.contactInfo.phoneNumbers.map(number => {
              return (
                <>
                {number} <br/>
                </>
              )
            })}
            {personalInfo.contactInfo.email}
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="about-me">
          <h2 className='section-title'>about me</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est ante, egestas dapibus vulputate sit amet, venenatis at nulla. Aenean condimentum nunc metus, ac sagittis justo eleifend non. Nulla in ullamcorper ante. Nam consectetur metus at faucibus tincidunt. In in eleifend risus, nec suscipit lorem. 
            Aenean varius aliquam nibh maximus convallis. In egestas arcu diam, at suscipit nibh pulvinar ac. Cras vel nisl eu leo vestibulum dignissim. Sed ut tempus nisi. Mauris libero ipsum, luctus sit amet elit vel, scelerisque euismod libero. Ut iaculis ligula eget pretium molestie. Aliquam rutrum ipsum in enim dignissim, ac luctus ex tempor.
          </p>
        </div>
        <div className="education">
        <h2 className='section-title'>education</h2>
        <h4 className='subtitle'>Federal University of Mato Grosso (UFMT)</h4>
          <p className="section-text">
          2017 - Current | Computer Information Systems
          </p>
        </div>
        <div className="experience">
        <h2 className='section-title'>experience</h2>
          {experiences.map(experiencia => (
            <>
              <div className="experience-wrapper">
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
          {certificates.map(certificado => (
            <div className="certificate-wrapper">
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
