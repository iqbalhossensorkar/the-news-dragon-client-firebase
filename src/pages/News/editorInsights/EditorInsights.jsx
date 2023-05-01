import React from 'react';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const EditorInsights = () => {
    return (
        <>
            <h5 className='fw-bold mb-4 mt-5'>Editors Insight</h5>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card  style={{ height: '316px' }}>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>FBVC Home Loans. We are here to make your dreams come true.</Card.Title>
                            <div>
                                <p><FaRegCalendar></FaRegCalendar> {moment('2022-01-02').format('MMMM D, YYYY')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ height: '316px' }}>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <p className='mt-4'><FaRegCalendar></FaRegCalendar> {moment('2022-01-05').format('MMMM D, YYYY')}</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ height: '316px' }}>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <p><FaRegCalendar></FaRegCalendar> {moment('2022-01-04').format('MMMM D, YYYY')}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default EditorInsights;