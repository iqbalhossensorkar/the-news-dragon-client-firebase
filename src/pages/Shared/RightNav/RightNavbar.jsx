import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import banner from '../../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div className='ms-3'>
            <h5 className='fw-bold mb-4'>Login With</h5>
            <div>
                <Button className='w-100 mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button className='w-100' variant="outline-dark"> <FaGithub /> Login with Github</Button>
            </div>
            <h5 className='fw-bold mb-4 mt-4 mb-3'>Find Us On</h5>
            <ListGroup>
                <ListGroup.Item className='p-3 fw-semibold'> <FaFacebook className='me-2' />Facebook</ListGroup.Item>
                <ListGroup.Item className='p-3 fw-semibold'> <FaTwitter className='me-2' /> Twitter</ListGroup.Item>
                <ListGroup.Item className='p-3 fw-semibold'> <FaInstagram className='me-2' /> Instagram</ListGroup.Item>
            </ListGroup>
            <div>
                <QZone></QZone>
            </div>
            <div className='position-relative'>
                <img src={banner} alt="" className='w-100 my-4' />
                <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                    <h2 className='fw-bolder mb-4'>Create an Amazing Newspaper</h2>
                    <p className='mb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='fs-5 fw-semibold p-3' variant='danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNavbar;