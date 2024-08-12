import './maskGroup.scss';
import solimo from '../../resource/images/best-item-1.png';
import presto from '../../resource/images/best-item-2.png';
import aromistico from '../../resource/images/best-item-3.png';

const MaskGroup = () => {
    return (
        <div className="mask-group">
            <div className="mask__content">
                <h2>Our best</h2>
                <div className="best__items">
                    <div className="best_item">
                        <img src={solimo} alt="solimo-coffe" />
                        <p className="info-coffe">Solimo Coffee Beans 2 kg</p>
                        <span className="price">10.73$</span>
                    </div>
                    <div className="best_item">
                        <img src={presto} alt="presto-coffe" />
                        <p className="info-coffe">Presto Coffee Beans 1 kg</p>
                        <span className="price">15.99$</span>
                    </div>
                    <div className="best_item">
                        <img src={aromistico} alt="aromistico-coffe" />
                        <p className="info-coffe">AROMISTICO Coffee 1 kg</p>
                        <span className="price">6.99$</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MaskGroup;