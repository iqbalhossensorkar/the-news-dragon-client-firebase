import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavbar from '../pages/Shared/LeftNav/LeftNavbar';
import RightNavbar from '../pages/Shared/RightNav/RightNavbar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Marque from '../pages/Shared/Marque/Marque';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Marque></Marque>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}><LeftNavbar></LeftNavbar></Col>
                    <Col lg={6}><h5 className='fw-bold mb-4'><Outlet></Outlet></h5></Col>
                    <Col lg={3}><RightNavbar></RightNavbar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;