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
            </div>
        </Container>
    );
};

export default Header;