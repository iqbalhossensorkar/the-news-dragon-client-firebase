import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => {
            console.log('error', error.message);
        })
    },[])
    return (
        <div>
            <h5 className='fw-bold mb-4'>All Caterogy</h5>
            <div className='text-center'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-decoration-none btn btn-outline-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;