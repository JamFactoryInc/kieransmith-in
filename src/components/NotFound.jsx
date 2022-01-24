import NavBar from './Nav'
import { faHome } from '@fortawesome/free-solid-svg-icons'

let taglines = [
    'Your princess is in another castle',
    'You saw nothing'

];

function NotFound() {
    
    return (
        <div>
            <NavBar links={[{ link: '/', icon: faHome }]} />
            <h1>404</h1>
            <h2>{taglines[Math.floor(Math.random() * taglines.length)]}</h2>
        </div>
    )
}

export default NotFound