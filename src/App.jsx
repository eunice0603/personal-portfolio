import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [activeLink, setActiveLink] = useState('intro');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.add('ss-show');
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        const sections = ['intro', 'about', 'works', 'footer'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(sectionId);
                    break;
                }
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {loading && (
        <div id="preloader">
          <div className="dots-fade" id="loader">
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      <div id="page" className="s-pagewrap">
          <header className="s-header">
            <div className="row s-header__inner">
              <div className="s-header__block">
                <div className="s-header__logo">
                  <a className="logo" href="index.html">
                    <img alt="Homepage" src="images/logo.png" />
                  </a>
                </div>
                <a className="s-header__menu-toggle" href="#0">
                  <span>Menu</span>
                </a>
              </div>
              <nav className="s-header__nav">
                <ul className="s-header__menu-links">
                  <li className={activeLink === 'intro' ? 'current' : ''}>
                    <a className="smoothscroll" href="#intro" onClick={() => setActiveLink('intro')}>
                      Intro
                    </a>
                  </li>
                  <li className={activeLink === 'about' ? 'current' : ''}>
                    <a className="smoothscroll" href="#about" onClick={() => setActiveLink('about')}>
                      About
                    </a>
                  </li>
                  <li className={activeLink === 'works' ? 'current' : ''}>
                    <a className="smoothscroll" href="#works" onClick={() => setActiveLink('works')}>
                      Works
                    </a>
                  </li>
                  <li className={activeLink === 'footer' ? 'current' : ''}>
                    <a className="smoothscroll" href="#footer" onClick={() => setActiveLink('footer')}>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>{" "}

          <section className="s-intro target-section" id="intro">
            <div className="row s-intro__content width-sixteen-col">
              <div className="column lg-12 s-intro__content-inner grid-block grid-16">
                <div className="s-intro__content-text">
                  <div className="s-intro__content-pretitle text-pretitle">Pagbati!</div>
                  <h1 className="s-intro__content-title">
                    I'm Eunice Lugtu <br />a project manager <br />
                    based in Apalit, Pampanga.
                  </h1>
                  <div className="s-intro__content-btns">
                    <a className="smoothscroll btn" href="#about">
                      More About Me
                    </a>
                    <a className="smoothscroll btn btn--stroke" href="#footer">
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ul className="s-intro__social social-list">
              <li>
                <a href="https://www.facebook.com/nawteun">
                  <svg
                    height="24"
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                    }}
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                  </svg>
                  <span className="u-screen-reader-text">Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/eunice0603">
                  <svg
                    height="24"
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                    }}
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span className="u-screen-reader-text">GitHub</span>
                </a>
              </li>
            </ul>
            <div className="s-intro__content-media">
              <img
                alt=""
                src="images/intro-bg.jpg"
                srcSet="images/intro-bg.jpg 1x, images/intro-bg.jpg 2x"
              />
            </div>
            <div className="s-intro__btn-download">
              <a className="btn btn--stroke" href="https://drive.google.com/file/d/1D6JHGPDGM8CRqJJEvCKAvRG33D6aWq9X/view?usp=sharing">
                Get My CV
              </a>
            </div>
            <div className="s-intro__scroll-down">
              <a className="smoothscroll" href="#about">
                <div className="scroll-icon">
                  <svg
                    height="24"
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                    }}
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
                  </svg>
                </div>
                <span className="scroll-text u-screen-reader-text">Scroll Down</span>
              </a>
            </div>
          </section>{" "}

          <section className="s-about target-section" id="about">
            <div className="row s-about__content">
              <div className="column xl-12">
                <div className="section-header" data-num="01">
                  <h2 className="text-display-title">About Me.</h2>
                </div>
                <p className="attention-getter">
                  Hello! I’m a junior Bachelor of Science in Information Systems student at
                  La Verdad Christian College – Apalit, with a growing passion for Project Management
                  and the role of effective communication in leading successful projects.
                </p>
                <p className="attention-getter">
                  My background in technical writing has honed my ability to organize information,
                  document processes clearly, and communicate across diverse teams—skills that are
                  essential in planning, coordinating, and executing projects efficiently. This
                  experience has also strengthened my attention to detail, time management, and
                  analytical thinking, all of which support my goal of becoming an effective and
                  strategic project leader in the IT field.
                </p>
                <p className="attention-getter">
                  I continuously seek opportunities to enhance my knowledge of project management
                  methodologies, risk assessment, and project coordination, and I aim to apply these
                  principles to create structured, goal-oriented solutions. As I continue my journey
                  in Information Systems, I’m driven to combine both my technical and managerial skills
                  to deliver impactful, well-managed projects that make a real difference.
                </p>
                <div className="grid-list-items s-about__blocks">
                  <div className="grid-list-items__item s-about__block">
                    <h4 className="s-about__block-title">Experiences</h4>
                    <ul className="s-about__list">
                      <li>
                        Note Application
                        <span>Backend Developer</span>
                      </li>
                      <li>
                        E-commerce System
                        <span>Project Manager</span>
                      </li>
                      <li>
                        PSAS Scheduling System
                        <span>Project Manager</span>
                      </li>
                      <li>
                        IRCITE
                        <span>Technical Writer</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grid-list-items__item s-about__block">
                    <h4 className="s-about__block-title">Tools</h4>
                    <ul className="s-about__list">
                      <li>
                        Gantt Chart
                      </li>
                      <li>
                        Project Charter
                      </li>
                      <li>
                        React
                      </li>
                      <li>
                        Laravel
                      </li>
                      <li>
                        CSharp
                      </li>
                      <li>
                        PHP
                      </li>
                    </ul>
                  </div>
                  <div className="grid-list-items__item s-about__block">
                    <h4 className="s-about__block-title">Skills</h4>
                    <ul className="s-about__list">
                      <li>Team Collaboration and Coordination</li>
                      <li>Project Management Tools and Software</li>
                      <li>Process Documentation</li>
                      <li>Presentation and Public Speaking</li>
                      <li>Adaptability</li>
                      <li>Critical Thinking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}

          <section className="s-works target-section" id="works">
            <div className="row">
              <div className="column xl-12">
                <div className="section-header" data-num="02">
                  <h2 className="text-display-title">Selected Writings.</h2>
                </div>
              </div>
            </div>
            <div className="row folio-entries">
              <div className="column entry">
                <a
                  className="entry__link glightbox"
                  data-glightbox="title: Technical Writing Piece 2024; description: .entry__desc-01"
                  href="images/folio/gallery/technical-writing-1.jpg">
                  <div className="entry__thumb">
                    <img
                      alt=""
                      src="images/folio/technical-writing-1.jpg"
                      srcSet="images/folio/technical-writing-1.jpg 1x, images/folio/technical-writing-1@2x.jpg 2x"
                    />
                  </div>
                  <div className="entry__info">
                    <h4 className="entry__title">Technical Writing Piece 2024</h4>
                    <div className="entry__cat">IRCITE</div>
                  </div>
                </a>
                <div className="glightbox-desc entry__desc-01">
                  <p>
                    Theme: Breaking Barriers and Empowering Change Through Global Innovation,
                    Knowledge, Engineering, and Diversity-centered Research
                    
                    IRCITE 2024
                    <br />
                    <a href="https://drive.google.com/file/d/1AAkVDXYovTmEdjjBCsHvRgBrrGUszGbz/view?usp=sharing">Document Link</a>
                  </p>
                </div>
              </div>
              <div className="column entry">
                <a
                  className="entry__link glightbox"
                  data-glightbox="title: Technical Writing Piece 2025; description: .entry__desc-02"
                  href="images/folio/gallery/technical-writing-2.jpg">
                  <div className="entry__thumb">
                    <img
                      alt=""
                      src="images/folio/technical-writing-2.jpg"
                      srcSet="images/folio/technical-writing-2.jpg 1x, images/folio/technical-writing-2@2x.jpg 2x"
                    />
                  </div>
                  <div className="entry__info">
                    <h4 className="entry__title">Technical Writing Piece 2025</h4>
                    <div className="entry__cat">IRCITE</div>
                  </div>
                </a>
                <div className="glightbox-desc entry__desc-02">
                  <p>
                    Theme: AI in IT Education
                    <br />
                    IRCITE 2025
                    <br />
                    <a href="https://drive.google.com/file/d/11s0HDiiFm8L24c3rG7OG_PT8NHl-6Uyv/view?usp=sharing">Document Link</a>.
                  </p>
                </div>
              </div>
              <div className="column entry">
                <a
                  className="entry__link glightbox"
                  data-glightbox="title: Literary Writing; description: .entry__desc-03"
                  href="images/folio/gallery/literary-writing.jpg">
                  <div className="entry__thumb">
                    <img
                      alt=""
                      src="images/folio/literary-writing.jpg"
                      srcSet="images/folio/literary-writing.jpg 1x, images/folio/literary-writing@2x.jpg 2x"
                    />
                  </div>
                  <div className="entry__info">
                    <h4 className="entry__title">Literary Writing</h4>
                    <div className="entry__cat">Own</div>
                  </div>
                </a>
                <div className="glightbox-desc entry__desc-03">
                  <p>
                    Found an inspiration and wrote down the story created in my mind.
                    <br />
                    <a href="https://drive.google.com/file/d/14Rq2scjsVh_CRPedVk4sv1j8Ut4XP5iM/view?usp=sharing">Document Link</a>.
                  </p>
                </div>
              </div>
              <div className="column entry">
                <a
                  className="entry__link glightbox"
                  data-glightbox="title: Technical Writing Piece; description: .entry__desc-04"
                  href="images/folio/gallery/technical-writing-3.jpg">
                  <div className="entry__thumb">
                    <img
                      alt=""
                      src="images/folio/technical-writing-3.jpg"
                      srcSet="images/folio/technical-writing-3.jpg 1x, images/folio/technical-writing-3@2x.jpg 2x"
                    />
                  </div>
                  <div className="entry__info">
                    <h4 className="entry__title">Technical Writing Piece 2024</h4>
                    <div className="entry__cat">LVCC AIM 7th ICT Week</div>
                  </div>
                </a>
                <div className="glightbox-desc entry__desc-04">
                  <p>
                    Theme: Beyond Boundaries: Embracing AI and Human Ingenuity

                    LVCC AIM 7th ICT Week 2024
                    <br />
                    <a href="https://drive.google.com/file/d/1a7ibm29l3IZqDqhXwDbQy_jRiaisw82N/view?usp=sharing">Document Link</a>.
                  </p>
                </div>
              </div>
              <div className="column entry">
                <a
                  className="entry__link glightbox"
                  data-glightbox="title: Oratorical Piece; description: .entry__desc-05"
                  href="images/folio/gallery/g-lamp.jpg">
                  <div className="entry__thumb">
                    <img
                      alt=""
                      src="images/folio/oratorical.jpg"
                      srcSet="images/folio/oratorical.jpg 1x, images/folio/oratorical@2x.jpg 2x"
                    />
                  </div>
                  <div className="entry__info">
                    <h4 className="entry__title">Oratorical Piece 2024</h4>
                    <div className="entry__cat">LVCC Intramurals</div>
                  </div>
                </a>
                <div className="glightbox-desc entry__desc-05">
                  <p>
                    Oratorical Piece used for the Oratorical Speech Competition.

                    LVCC Intramurals 2024
                    <br />
                    <a href="https://drive.google.com/file/d/1W2LewR3nJ13y81AX16-f-T2tKeOVRFjM/view?usp=sharing">Document Link</a>.
                  </p>
                </div>
              </div>
            </div>
          </section>{" "}

          <footer className="s-footer target-section" id="footer">
            <div className="row">
              <div className="column lg-12">
                <div className="section-header light-on-dark" data-num="03">
                  <h2 className="text-display-title">Get In Touch.</h2>
                </div>
              </div>
            </div>
            <div className="row s-footer__content">
              <div className="column xl-6 md-12 s-footer__block s-footer__about">
                <p className="attention-getter">
                  I’m always open to connecting with individuals and teams who share
                  the same passion for technology and project management. If you’d
                  like to collaborate, discuss ideas, or explore opportunities, feel
                  free to reach out—I’d be happy to hear from you.
                </p>
              </div>
              <div className="column xl-6 md-12 s-footer__block s-footer__site-links">
                <div className="row">
                  <div className="column xl-4 lg-5 md-6 tab-12">
                    <h5>Follow Me</h5>
                    <ul className="link-list">
                      <li>
                        <a href="#0">Facebook</a>
                      </li>
                      <li>
                        <a href="#0">Github</a>
                      </li>
                    </ul>
                  </div>
                  <div className="column xl-6 md-6 tab-12">
                    <h5>Contact Me</h5>
                    <ul className="link-list">
                      <li>
                        <a href="mailto:eunicedr.lugtu@gmail.com">eunicedr.lugtu@gmail.com</a>
                      </li>
                      <li>
                        <a href="tel:09393002460">09393002460</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row s-footer__buttons">
              <div className="column xl-6 tab-12">
                <a className="btn btn--primary btn--large u-fullwidth" href="mailto:eunicedr.lugtu@gmail.com">
                  Message Me
                </a>
              </div>
              <div className="column xl-6 tab-12">
                <a className="btn btn--stroke btn--large u-fullwidth" href="https://drive.google.com/file/d/1D6JHGPDGM8CRqJJEvCKAvRG33D6aWq9X/view?usp=sharing">
                  Get My CV
                </a>
              </div>
            </div>
            <div className="row s-footer__bottom">
              <div className="column xl-6 lg-12">
                <ul className="s-footer__social social-list">
                  <li>
                    <a href="https://www.facebook.com/nawteun">
                      <svg
                        height="24"
                        style={{
                          fill: "rgba(0, 0, 0, 1)",
                        }}
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                      </svg>
                      <span className="u-screen-reader-text">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/eunice0603">
                      <svg
                        height="24"
                        style={{
                          fill: "rgba(0, 0, 0, 1)",
                        }}
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span className="u-screen-reader-text">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="column xl-6 lg-12">
                <p className="ss-copyright">
                  <span>© Copyright Hudson 2023</span>
                  <span>
                    Design by <a href="https://styleshout.com/">StyleShout</a>{" "}
                    Distribution by <a href="https://themewagon.com">ThemeWagon</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="ss-go-top">
              <a className="smoothscroll" href="#top" title="Back to Top">
                <svg
                  height="24"
                  style={{
                    fill: "rgba(0, 0, 0, 1)",
                  }}
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
                </svg>
              </a>
              <span>Back To Top</span>
            </div>
          </footer>{" "}
      </div>
    </>
  )
}

export default App
