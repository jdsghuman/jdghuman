import React, { useState } from 'react'
import Title from '../Title/Title'
import InteractiveButtons from '../InteractiveButtons/InteractiveButtons'
import Terminal from '../Terminal/Terminal'
import './About.css'
import EmptyTerminal from '../EmptyTerminal/EmptyTerminal'

const About = () => {
  const [state, setState] = useState({
    maximize: false,
    minimize: false,
    open: true,
    page: 'about',
  })

  const maximizeTerminal = () => setState({ ...state, maximize: true })
  const minimizeTerminal = () => {
    state.maximize
      ? setState({ ...state, maximize: false })
      : setState({ ...state, minimize: true })
  }

  return (
    <>
      <Title>ABOUT</Title>
      <div
        className={
          state.maximize === false
            ? 'about__container'
            : 'about__container about__container--maximize'
        }
      >
        <InteractiveButtons
          page="about"
          maximizeTerminal={maximizeTerminal}
          minimizeTerminal={minimizeTerminal}
        />
        {!state.minimize && (
          <div className="about__description">
            <div className="about__links">
              <a
                href="https://www.linkedin.com/in/jdghuman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img__about"
                  alt="linkedin icon"
                  src="images/linkedin-brands.svg"
                />
              </a>
              <a className="link__email" href="mailto:jdsghuman@gmail.com">
                <img
                  className="img__about"
                  alt="email icon"
                  src="images/envelope-regular.svg"
                />
              </a>
              <a
                href="https://github.com/jdsghuman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img__about"
                  alt="github icon"
                  src="images/github-square-brands.svg"
                />
              </a>
            </div>
            <div>
              <p>
                I am a Full Stack Software Engineer who loves to code and build
                things, located in Houston, TX. I enjoy turning concepts and
                designs into front end UI and solving complex problems with
                code.
              </p>
            </div>
            <div />
            <div style={{ marginTop: '40px' }}>
              <p>
                When I am not building web applications or coding, I can be
                found hanging out with my family, building something in the
                garage, or drinking coffee…. I’m always drinking coffee!
              </p>
            </div>
          </div>
        )}
        {state.minimize && state.open && <EmptyTerminal />}
        <Terminal
          clear={minimizeTerminal}
          page={state.page}
          openTerminal={state.open}
        />
      </div>
    </>
  )
}

export default About
