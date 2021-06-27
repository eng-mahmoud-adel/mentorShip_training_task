import React from 'react';
import './footer.css';
import FooterLogo from '../../images/footer-logo.png';
import LocationIcon from '../../images/location.png';
import EmailIcon from '../../images/email.png';
import InstagramIcon from '../../images/instagram.png';
import FaceBookIcon from '../../images/facebook.png';
import TwitterIcon from '../../images/twitter.png';
import WhatsAppIcon from '../../images/whatsApp.png';

const Footer = () => {
    return (
        <footer className="mx-4 p-4">
            <img
                src={FooterLogo}
                width="280"
                height="60"
                // className="d-inline-block align-top"
                alt=""
            />

            <div className="d-flex my-4 flex-column flex-md-row">
                <p className="description text-left text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ab voluptas. Saepe, expedita nulla aliquid repudiandae porro quis iusto illum officiis quas molestias natus laboriosam omnis tenetur hic eveniet consequatur!</p>

                <div className="info d-flex flex-column ml-md-auto">
                    <div className="location mr-4 mt-5">
                        <img src={LocationIcon} alt="" className="mr-4" />
                        <span className="text-white">MAIN ROAD, BUILDING NAME, COUNTRY</span>
                    </div>

                    <div className="email mr-4 mt-4">
                        <img src={EmailIcon} alt="" className="mr-4" />
                        <span className="text-white">INFO@COMPANYNAME.COM</span>
                    </div>
                </div>
            </div>

            <div className="d-md-flex justify-content-between">
                <p className="text-white">&copy; COMPANY NAME 2020 ALL RIGHTS RESERVED</p>

                <div>
                    <a href=""><img src={InstagramIcon} alt="" className="mx-2" /></a>
                    <a href=""><img src={FaceBookIcon} alt="" className="mx-2" /></a>
                    <a href=""><img src={TwitterIcon} alt="" className="mx-2" /></a>
                    <a href=""><img src={WhatsAppIcon} alt="" className="mx-2" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
