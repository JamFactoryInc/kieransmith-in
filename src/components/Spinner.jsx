import '../styles/css/style.css'
export default function Spinner(props) {
    return (
        <span className="spinner">
            <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </span>
    )
}