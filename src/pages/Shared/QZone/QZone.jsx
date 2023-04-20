import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 text-center'>
            <h5 className='fw-bold mb-4 mt-4 mb-3 pt-4 ps-3'>Q-Zone</h5>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img className='pb-3' src={qZone3} alt="" />
        </div>
    );
};

export default QZone;