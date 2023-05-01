import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../pages/Shared/LeftNav/LeftNavbar';
import RightNavbar from '../pages/Shared/RightNav/RightNavbar';
import { Outlet } from 'react-router-dom';

const NewsLayer = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><h5 className='fw-bold mb-4'><Outlet></Outlet></h5></Col>
                    <Col lg={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayer;