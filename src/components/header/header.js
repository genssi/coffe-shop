import './header.scss';
import coffe from './../../resource/images/coffee-beans (1).svg';
import logo from '../../resource/images/logo.svg';

const Header = () => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li>
                        <a href="#asd"><img src={logo} alt="Coffee House Logo" className="logo"/></a>
                        <a href="#asd">Coffee house</a>
                        <a href="#asd" className="li_a">Our coffee</a>
                        <a href="#asd" className="li_a">For your pleasure</a>
                    </li>
                </ul>
            </nav>
            <h1 className="app__title">Everything You Love About Coffee</h1>
            <div className="beans__logo">
                <div className="line"></div>
                <div className="coffe__beans">
                    <img src={coffe} alt="coffe-logo" />
                </div>
                <div className="line"></div>
            </div>
            <div className="app__about">
                <p className="about_text">We makes every day full of energy and taste</p>
                <p className="about_text">Want to try our beans?</p>
            </div>
            <button className="button">More</button>
        </header>
    )
};

export default Header;