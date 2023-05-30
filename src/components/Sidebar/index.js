import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoG from "../../assets/images/LogoG.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
// import SubLogoG from "../../assets/images/SubLogoG.png"
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoG} alt="logo" />

        </Link>
        <nav>
            <NavLink exact ="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="about-link" to="/About">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gaurang-patil-66bb90187'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='gargeegul1999@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://youtu.be/11uRy5ne3JU'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        </div>
)

export default Sidebar