import React from 'react';
import './events.css';
import { Carousel } from 'react-bootstrap';
import FoodEvent from '../../images/food-event.png';

const Events = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={FoodEvent}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>DISCOVER ONE</h4>
                    <h3>UPCOMING EVENTS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sit porro hic exercitationem quod, praesentium fugit, placeat nostrum quaerat est aspernatur omnis cumque odit labore excepturi fuga deserunt minima voluptatum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={FoodEvent}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4>DISCOVER TWO</h4>
                    <h3>UPCOMING EVENTS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sit porro hic exercitationem quod, praesentium fugit, placeat nostrum quaerat est aspernatur omnis cumque odit labore excepturi fuga deserunt minima voluptatum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={FoodEvent}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h4>DISCOVER THREE</h4>
                    <h3>UPCOMING EVENTS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse sit porro hic exercitationem quod, praesentium fugit, placeat nostrum quaerat est aspernatur omnis cumque odit labore excepturi fuga deserunt minima voluptatum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Events;
