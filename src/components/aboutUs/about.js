import './about.scss';
import coffe from './../../resource/images/coffee-beans (1).svg'

const About = () => {
    return (
        <section className="about">
            <div className="about__content">
                <h2>About Us</h2>
                    <div className="beans__logo">
                        <div className="line"></div>
                        <div className="coffe__beans">
                            <img src={coffe} alt="coffe-logo" className="coffe_svg" />
                        </div>
                        <div className="line"></div>
                    </div>
                    <p className="first-paragraph">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at. Situation recommend objection do intention
    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.</p>

    <p className="second-paragraph">Now residence dashwoods she excellent you. Shade being under his bed her, Much
    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
    horrible but confined day end marriage. Eagerness furniture set preserved far
    recommend. Did even but nor are most gave hope. Secure active living depend son
    repair day ladies now.</p>
            </div>
        </section>
    )
}

export default About;