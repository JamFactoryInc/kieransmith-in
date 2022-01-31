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
    return (
        <SmartLink href={props.link}>
            <svg viewBox='0 0 512 512'>
                <FontAwesomeIcon icon={props.icon} />
            </svg>
        </SmartLink>
    )
}

function SmartLink({className = '', children, href}) {
    if (href.startsWith('http')) {
        return (
            <a className={className} href={href} target='_blank'>{children}</a>
        )
    }
    return (
        <Link className={className} onClick={() => { if (window.location.pathname === href) window.scroll(0, 0); }} to={href}>{children}</Link>
    )
}

export {NavBar, SmartLink};