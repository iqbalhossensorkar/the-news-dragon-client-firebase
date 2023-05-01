import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
const {user, logOut} = useContext(AuthContext);

const handleLoggedOut= () => {
    logOut() 
    .then()
    .catch(error => {
        console.log('error', error.message);
    })
}

    return (
        <Container>
            <Navbar className='mb-4' collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link style={{textDecoration: 'none', color: 'gray'}} className='me-3' to="/">Home</Link>
                            <Link style={{textDecoration: 'none', color: 'gray'}} className='me-3' to='/about'>About</Link>
                            <Link style={{textDecoration: 'none', color: 'gray'}} to='/career'>Career</Link>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {user && <Nav.Link href="#deets"><FaUserCircle className='fs-3'></FaUserCircle></Nav.Link>}
                            {user ? <Button onClick={handleLoggedOut} variant="dark">Logout</Button> :
                                <Link to='/login'><Button variant="dark">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;