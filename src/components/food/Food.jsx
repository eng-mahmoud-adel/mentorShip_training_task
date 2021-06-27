import React from 'react';
import './food.css';
import { Container, Row, Col } from 'react-bootstrap';
import FoodOne from '../../images/food-1.png';
import FoodTwo from '../../images/food-2.png';
import FoodThree from '../../images/food-3.png';

const Food = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <div className="food mb-3 mb-md-0">
                        <h6 className="text-white">TRY IT TODAY</h6>
                        <p className="text-white">MOST POPULAR BURGER</p>
                        <img src={FoodOne} alt="" className="w-100" />
                    </div>
                </Col>

                <Col xs={12} md={6}>
                    <div className="food mb-3 mb-md-0">
                        <h6 className="text-white">TRY IT TODAY</h6>
                        <p className="text-white">MORE FUN</p>
                        <p className="text-white">MORE TASTE</p>
                        <img src={FoodTwo} alt="" className="w-100 mb-md-4" />
                    </div>

                    <div className="food">
                        <h6 className="text-white">TRY IT TODAY</h6>
                        <p className="text-white">FRESH &amp; CHILI</p>
                        <img src={FoodThree} alt="" className="w-100 mt-md-2" />
                    </div>
                </Col>
            </Row>

            <div className="text-center mt-5 tasty">ALWAYS TASTY BURGER</div>
        </Container>
    )
}

export default Food;
