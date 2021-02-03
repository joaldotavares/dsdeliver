import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return(
        <footer className = 'main-footer'>
            DS Deliver - Todos os direitos reservados DevSuperior

            <div className = 'footer-icons'>
                <a href ='' target = '_new'>
                    <YouTubeIcon />
                </a>
                <a href = 'https://www.linkedin.com/in/joaldotavares/'>
                    <LinkedInIcon />
                </a>
                <a href = 'https://www.instagram.com/putz_junior/'>
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    );
}

export default Footer;