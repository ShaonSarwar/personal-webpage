import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css';
import profile from "../../Assets/shaon-sarwar.png"

const About = () => {
  const { name, role, description, resume, social, } = about

  return (
    <div className='about center'>
      {name && (
        <h1 style={{ textAlign: "center" }}>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role' style={{ textAlign: "center" }}>A {role}</h2>}
      <p className='about__desc' style={{ textAlign: 'justify', paddingInline: 15 }}>{description && description}</p>
      <div style={{ marginLeft: 25 }}>
        <div>
          <img src={profile} alt="Profile" height={350} width={330} />
        </div>

        <div className='about__contact' style={{ textAlign: "center" }}>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
