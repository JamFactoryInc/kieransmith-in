import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({ links }) {
  return (
      <nav>
          {links.map((linkAndIcon, index) => {
              return <NavButton key={index} link={linkAndIcon.link} icon={linkAndIcon.icon} />
          })}
    </nav>
  )
}

function NavButton(props) {
    let inside = (
            <svg viewBox='0 0 512 512'>
            <FontAwesomeIcon icon={props.icon} />
            </svg>)
    if (props.link.startsWith('http')) {
        return (
            <a href={props.link} target='_blank'>{inside}</a>
        )
    }
    return (
        <Link onClick={() => { if (window.location.pathname === props.link) window.scroll(0, 0);}} to={props.link}>{inside}</Link>
    )
}

export default NavBar;