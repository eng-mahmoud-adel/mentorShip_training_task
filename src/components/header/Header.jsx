import React from 'react';
import './header.css';
import { Row, Col } from 'react-bootstrap';
import BaseNavbar from '../navbar/Navbar';
import HeaderFood from '../../images/header.png';

const Header = () => {
    return (
        <header id="header">
            <BaseNavbar />

            <Row className="px-5">
                <Col md={12} lg={5}>
                    <p className="mb-0">IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
                    <h2>BURGER</h2>
                    <h3>WEEK</h3>
                </Col>
                <Col md={12} lg={7}>
                    <div className="header-food">
                        <img src={HeaderFood} alt="" className="w-100 h-100" />
                        
                        <div className="price-wrapper">
                            <div className="price">
                                <span className="d-inline-block text-white">$5</span><small className="text-white">.49</small><br /><span className="d-block text-white">ONLY</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </header>
    )
}

export default Header;
