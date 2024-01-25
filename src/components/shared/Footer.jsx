import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../assets/shared/desktop/icon-instagram.svg";
import "../../styles/Footer.css"

const Footer = () => {

    return (
        <div className='footer-main'>
            <div className="footer-content">
                <div className="info">
                    <div className="title">audiophile</div>
                    <div className="description">Audiophile is an all in one stop to fulfill your audio needs. We're a small team for music lovers and sound specialists who are devoted to help you get the most out of personal audio. Come and visit our demo facility - we're open 7 days of a week.</div>
                    <div className="copyright">Copyright 2021. All Rights Reserved</div>
                </div>
                <div className="links-logos">
                    <div className="footer-links">
                        <Link to={`/`} className='footer-link'>HOME</Link>
                        <Link to={`/headphones`} className='footer-link'>HEADPHONES</Link>
                        <Link to={`/speakers`} className='footer-link'>SPEAKERS</Link>
                        <Link to={`/earphones`} className='footer-link'>EARPHONES</Link>
                    </div>
                    <div className="logos">
                        <img src={facebook} className='icon' alt='' />
                        <img src={twitter} className='icon' alt='' />
                        <img src={instagram} className='icon' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;