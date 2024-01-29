import { Link } from 'react-router-dom'
import iconcart from "../../../assets/shared/desktop/icon-cart.svg"
import "../../styles/Header.css"

const header = () => {

    return (
        <div className="header-main">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" className="header-label">
                        audiophile
                    </Link>
                </div>
                <div className="links">
                    <Link to={`/`} className='link'>HOME</Link>
                    <Link to={`/headphones`} className='link'>HEADPHONES</Link>
                    <Link to={`/speakers`} className='link'>SPEAKERS</Link>
                    <Link to={`/earphones`} className='link'>EARPHONES</Link>
                </div>
                <div className="cart">
                    <img src={iconcart} className="icon" alt="" />
                </div>
            </div>
        </div>
    );
}

export default header;