import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

<div className='nav-bar'>

<nav>
    <NavLink exact="true" activeclassname="active" to="/">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
      <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
      <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
      <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
    </NavLink>
</nav>
<ul>
    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-meyer-b99939308/"> 
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Martin-94"> 
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/Meyer44598J"> 
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
    </li>
</ul>
</div>
)

export default Sidebar