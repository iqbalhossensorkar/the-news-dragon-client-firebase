import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" className='mt-5 mb-3' />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
                <div className='d-flex p-3 bg-secondary bg-opacity-10 my-3'>
                    <Button className='me-3' variant="danger">Latest</Button>
                    <Marquee className='fw-bold me-5' gradient={false} speed={60}>
                        I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text....
                    </Marquee>
                </div>
            </div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Icon</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;