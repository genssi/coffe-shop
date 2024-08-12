import './footer.scss';
import coffe from '../../resource/images/coffee-beans (1).svg';
import logo from '../../resource/images/logo.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer__content">
                    <ul>
                        <li>
                            <a href="#asd"><img src={logo} alt="Coffee House Logo" className="logo"/></a>
                            <a href="#asd">Coffee house</a>
                            <a href="#asd" className="li_a">Our coffee</a>
                            <a href="#asd" className="li_a">For your pleasure</a>
                        </li>
                    </ul>
                    <div className="beans__logo">
                        <div className="line"></div>
                        <div className="coffe__beans">
                            <img src={coffe} alt="coffe-logo" className="coffe_svg" />
                        </div>
                        <div className="line"></div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;