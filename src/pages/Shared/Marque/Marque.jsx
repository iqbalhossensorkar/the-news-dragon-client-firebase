import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='container d-flex p-3 bg-secondary bg-opacity-10 my-3'>
            <Button className='me-3' variant="danger">Latest</Button>
            <Marquee className='fw-bold me-5' gradient={false} speed={60}>
                I can be a React component, multiple React components, or just some text.... I can be a React component, multiple React components, or just some text....
            </Marquee>
        </div>
    );
};

export default Marque;