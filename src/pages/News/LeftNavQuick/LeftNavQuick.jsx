import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import moment from 'moment';
import { FaCalendar, FaCalendarAlt, FaRegCalendar } from 'react-icons/fa';

const LeftNavQuick = () => {
    return (
        <Row xs={1} md={1} lg={1} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={first} />
                    <Card.Body>
                        <Card.Title>FBVC Home Loans. We are here to make your dreams come true.</Card.Title>
                        <div className='d-flex align-items-center mt-2'>
                            <p className='flex-grow-1'>Regular News</p>
                            <p><FaRegCalendar></FaRegCalendar> {moment('2022-01-02').format('MMMM D, YYYY')}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={second} />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        <div className='d-flex align-items-center mt-2'>
                            <p className='flex-grow-1'>Cultural</p>
                            <p><FaRegCalendar></FaRegCalendar> {moment('2022-01-05').format('MMMM D, YYYY')}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={third} />
                    <Card.Body>
                        <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                        <div className='d-flex align-items-center mt-2'>
                            <p className='flex-grow-1'>Sports</p>
                            <p><FaRegCalendar></FaRegCalendar> {moment('2022-01-04').format('MMMM D, YYYY')}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LeftNavQuick;