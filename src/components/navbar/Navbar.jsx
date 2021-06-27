import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import Delivery from '../../images/delivery.png';

const BaseNavbar = () => {
    return (
        <Navbar expand="lg" className="px-5 align-items-baseline">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="180"
                    height="40"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="ml-auto">
                    <div className="text-md-right my-3">
                        <img src={Delivery} alt="" className="mr-2" />
                        Express Delivery +1 234 567 890
                    </div>
                    <Nav>
                        <Nav.Link className="mr-md-2" href="#home">HOME</Nav.Link>
                        <Nav.Link className="mx-md-2" href="#link">MENU</Nav.Link>
                        <Nav.Link className="mr-md-2" href="#link">OUR STORY</Nav.Link>
                        <Nav.Link className="ml-md-2 pr-0" href="#link">CONTACT US</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BaseNavbar;
