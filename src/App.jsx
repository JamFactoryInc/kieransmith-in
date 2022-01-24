import './styles/css/style.css'
import NavBar from './components/Nav'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { faHome, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App(props) {
  useEffect(() => {
      ScrollCache();
  }, []);
  let taglines = [
    'I can code if you\'re not watching',
    'Look ma, I\'m on TV',
    'This is a pre-recorded message',
    'I think therefore I think',
    '// TODO: Make website',
    'This is a secret (Don\'t tell anyone)',
    'Made you look',
    'I dare you to look at the source code',
    'There isn\'t enough room in this <h2> for the two of us',
    'It was due today?'

  ];
  if (new Date().getDay() != 5) {
    taglines.push('Today is not Friday');
  }
  return (
    <div className="App">
      <Page color='#111'>
        <header className="App-header">
        </header>
        <NavBar links={[{ link: '/', icon: faHome },
          { link: 'https://github.com/JamFactoryInc', icon: faGithubSquare },
          { link: 'https://www.linkedin.com/in/jamfactoryinc/', icon: faLinkedin }]} />
        <h1>Hey, I'm <i>Kieran</i></h1>
        <h2>{taglines[Math.floor(Math.random() * taglines.length)]}</h2>
      </Page>
      {<Disclaimer />}
      <Page color='#0C0C0C'>
        <div id="projects">
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
      <a className='project-tile-github' href={show ? githubLink : '/'} target='_blank'>
        <p>
          View on GitHub
        </p>
        <FontAwesomeIcon icon={faGithub} />
      </a>)
  }
    return (
      <div className="project-tile">
        <div className='card' onClick={(show ? _ => navigate(link): () => { })}>
          <div >
            <h3 className="project-title">
              {title}
              {show ? <FontAwesomeIcon className='exlink-arrow' icon={faArrowRight} /> : <span />}
            </h3>
            <p>
              {show ? description : "This project is not complete or not added to this website yet"}
            </p>
          </div>
        </div>
        {gihubButton}
        <div className='tags'>
          {
            tags.map((tag, i) => {
              return (<span key={i} className='tag' style={show ? {} : { background: 'gray' }}>{tag}</span>)
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
