import React from 'react';
import './reservation.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const Reservation = () => {
    return (
        <div className="reservation text-center my-5">
            <h6>RESERVATION</h6>
            <h1><strong>BOOK YOUR TABLE</strong></h1>

            <Form>
                <Container>
                    <Row>
                        <Col>
                            <Form.Control placeholder="NAME" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="EMAIL" />
                        </Col>
                    </Row>

                    <Row className="my-2 my-md-4">
                        <Col>
                            <Form.Control placeholder="DATE" />
                        </Col>

                        <Col>
                            <Form.Control placeholder="TIME" />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Control placeholder="PEOPLE" />
                        </Col>

                        <Col>
                            <Button variant="danger" type="submit" className="w-100 h-100">
                                FIND A TABLE
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default Reservation;
