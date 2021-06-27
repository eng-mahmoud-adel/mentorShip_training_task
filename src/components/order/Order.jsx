import React from 'react';
import './order.css';
import { Row, Col } from 'react-bootstrap';
import ProductOne from '../../images/product-1.png';
import ProductTwo from '../../images/product-2.png';

const Order = () => {
    return (
        <>
            <h1 className="text-center"><strong>CHOOSE &amp; ENJOY</strong></h1>
            <p className="description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam explicabo consectetur rem nobis obcaecati accusantium consequatur autem error, natus sed non perspiciatis aspernatur in tempore quis exercitationem mollitia nostrum.</p>

            <Row className="text-center align-items-end px-3">
                <Col md={4} className="mb-5 mb-md-0">
                    <div>
                        <img src={ProductOne} alt="" className="w-100" />
                    </div>

                    <h3 className="mt-4">LOREM IPSUM DOLOR</h3>
                    <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam explicabo</p>

                    <button className="btn btn-danger">ORDER NOW</button>
                </Col>

                <Col md={4} className="mb-5 mb-md-0">
                    <div>
                        <img src={ProductTwo} alt="" className="w-100" />
                    </div>

                    <h3 className="mt-4">LOREM IPSUM DOLOR</h3>
                    <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam explicabo</p>

                    <button className="btn btn-danger">ORDER NOW</button>
                </Col>

                <Col md={4} className="mb-5 mb-md-0">
                    <div>
                        <img src={ProductOne} alt="" className="w-100" />
                    </div>

                    <h3 className="mt-4">LOREM IPSUM DOLOR</h3>
                    <p className="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ullam explicabo</p>

                    <button className="btn btn-danger">ORDER NOW</button>
                </Col>
            </Row>
        </>
    )
}

export default Order;
