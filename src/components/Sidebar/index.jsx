import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/pg.png';
// import LogoSubtitle from '../../assets/images/Kas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
    return(
   
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoS} alt="logo">
        </img>
        {/* <img src={LogoSubtitle} alt='slobodan'> */}
        <h5 className='kia'>
            Kashish
        </h5>
        {/* </img> */}
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            
        </nav>


        <ul>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/kashish-kathuria-kia-2729671b4/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://github.com/imkashishkathuria/'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://youtube.com/'
                >
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a 
                target='_blank'
                rel='noreferrer'
                href='https://www.skype.com/en/'
                >
                    <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;