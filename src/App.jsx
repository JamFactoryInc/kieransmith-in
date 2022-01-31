import './styles/css/style.css'
import {NavBar, SmartLink} from './components/Nav'
import { useNavigate, Link as RouterLink} from "react-router-dom"
import { useEffect, useState } from "react";
import { faHome, faArrowRight, faFileInvoice} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accessibility from './components/Accessibility';

function App(props) {
  useEffect(() => {
      ScrollCache();
  }, []);
  let taglines = [
    <span key={1} className='tagline'>I swear it was just working</span>,
    <span key={2} className='tagline'>This is a pre-recorded message</span>,
    <span key={3} className='tagline'>I think therefore I think</span>,
    <span key={4} className='tagline'><i>// TODO</i>: Make website </span>,
    <span key={5} className='tagline'>Made you look</span>,
    <span key={6} className='tagline'>I dare you to look at the source code</span>,
    <span key={7} className='tagline'>There isn't enough room in this <i>{"<h2>"}</i> for the two of us</span>,
    <span key={8} className='tagline'>It was due today?</span>,
    <span key={9} className='tagline'>[<i>"hip"</i>, <i>"hip"</i>]</span>,
    <span key={10} className='tagline'><i>// FIXME</i>: Call an exterminator</span>,
    <span key={11} className='tagline'>console.<i>log</i>(<i>"here 1234"</i>);</span>
  ];
  let usedTaglines = [];
  if (new Date().getDay() !== 5) {
    taglines.push(<span key={0} className='tagline'>Today is not Friday</span>);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTagline(selectTagline());
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  function selectTagline() {
    let tagline = taglines.splice(Math.floor(Math.random() * taglines.length), 1);
    usedTaglines.push(tagline);
    if (taglines.length === 0) {
      taglines = usedTaglines;
      usedTaglines = [];
    }
    return tagline;
  }
  const [tagline, setTagline] = useState(selectTagline());
  return (
    <div className="App">
      <Page color='#111'>
        <header className="App-header">
        </header>
        <NavBar links={[{ link: '/', icon: faHome },
          { link: 'https://github.com/JamFactoryInc', icon: faGithubSquare },
          { link: 'https://www.linkedin.com/in/jamfactoryinc/', icon: faLinkedin },
          { link: '/resume', icon: faFileInvoice }]} />
        <h1>Hey, I'm <i>Kieran</i></h1>
        <h2  >{tagline}</h2>
      </Page>
      {<Disclaimer />}
      <Page color='#0C0C0C'>
        <div id="projects">
          <h3>About Me</h3>
          <section>
          </section>
          <h3>Links</h3>
          <section id='links'>
            <Link name='Resume' href='/resume' icon={faFileInvoice} />
            <Link name='Github' href='https://github.com/JamFactoryInc' icon={faGithub} />
            <Link name='Linkedin' href='https://www.linkedin.com/in/jamfactoryinc/' icon={faLinkedinIn} />
          </section>
          <h3>Projects</h3>
          <div id='gallery'>
            <ProjectCard
              show={true}
              title='kieransmith.in'
              description="The website you're on"
              link='projects/site'
              tags={['React.js', 'SASS', 'Firebase']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={false}
              title='Template Builder'
              description="A series of templates to help small businesses create an inexpensive online presence"
              link='projects/templatebuilder'
              tags={['React.JS', 'SASS', 'Firebase']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='Game of Life'
              description="John Conway's Game of Life. Every programmer has to do it sometime"
              link='projects/gameoflife'
              tags={['JavaScript', 'PixiJS']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='MCL'
              description="Python bytecode to Minecraft datapack compiler"
              link='projects/mcl'
              tags={['Python']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='CRUD Webapp'
              description="Full-stack capstone project allowing users to manager and browse collections of comic books"
              link='projects/comiccollectionsite'
              tags={['Vue.js', 'CSS', 'Java', 'Spring', 'PostgreSQL']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='Markdown Editor'
              description="Full-stack capstone project"
              link='projects/md'
              tags={['Markdown', 'React.JS', 'JavaScript', 'SASS']}/>
            <ProjectCard
              show={true}
              title='Snake'
              description="My first PixiJS project"
              link='projects/snake'
              tags={['JavaScript', 'PixiJS']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='Chess'
              description="Drag and Drop game of Chess against a Minimax AI that I made"
              link='projects/chess'
              tags={['JavaScript', 'PixiJS']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
            <ProjectCard
              show={true}
              title='Payment API'
              description="A backend project from my Full Stack bootcamp"
              link='projects/paymentAPI'
              tags={['Java', 'Spring', 'PostgreSQL']}
              githubLink='https://github.com/JamFactoryInc/Portfolio-Site' />
          </div>
        </div>
      </Page>
    </div>
  );
}

function Link({ name, href = '', icon }) {
  return (
    <SmartLink className='link' href={href}>{name}<FontAwesomeIcon icon={icon} /></SmartLink>
  )
}

function Disclaimer(props) {
  return (
    <div id='disclaimer' style={{maxWidth:'100%', color:'#222', fontSize:'70%', padding:'0 10%', textAlign:'center'}}>
      <h3>This site is under construction!</h3>
      <p>I'm still working on this website. Things will be broken and missing.</p>
    </div>
  )
}

function Page({ children, color }) {
  return (
    <div style={{ backgroundColor: color }} className='page'>{children}</div>
  )
}

function ProjectCard({ description, title, link, tags, show, githubLink }) {
  let gihubButton = (<span />);
  const navigate = useNavigate();
  if (show && githubLink) {
    gihubButton = (
      <a className='project-tile-github' href={show ? githubLink : '/'} tabIndex={Accessibility.tabIndex(title + '-github') + 1}  target='_blank'>
        <p>
          View on GitHub
        </p>
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>)
  }
    return (
      <div className="project-tile">
        <RouterLink className='card' to={show ? link : '/'} tabIndex={show ? (Accessibility.tabIndex(title) - 1) : -1} /*onClick={(show ? () => navigate(link): () => { })}*/>
          <div >
            <h3 className="project-title">
              {title}
              {show ? <FontAwesomeIcon className='exlink-arrow' icon={faArrowRight} /> : <span />}
            </h3>
            <p>
              {show ? description : "This project is not complete or not added to this website yet"}
            </p>
          </div>
        </RouterLink>
        {gihubButton}
        <div className='tags'>
          {
            tags.map((tag, i) => {
              return (
                <span key={i}
                  onClick={show ? () => { navigate(link + '#' + tag.toLowerCase()) } : () => { }}
                  className={'tag' + (show ? '' : ' disabled')}
                  style={show ? {} : { background: 'gray' }}>
                  {tag}
                </span>)
            })
          }
        </div>
      </div>
    )
}

function ScrollCache() {
  if (!localStorage[window.location.pathname] || localStorage[window.location.pathname] === '0') {
    window.scroll(0, 0);
    localStorage[window.location.pathname] = '0';
  } else {
    window.scroll(0, parseInt(localStorage[window.location.pathname]));
  }
  document.addEventListener('scroll', function (e) {
    localStorage[window.location.pathname] = window.scrollY.toString();

  })
}

export { App, ScrollCache};
