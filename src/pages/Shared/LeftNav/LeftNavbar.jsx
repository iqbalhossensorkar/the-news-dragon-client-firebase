import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './LeftNavbar.css'
import EditorInsights from '../../News/editorInsights/EditorInsights';
import { Row } from 'react-bootstrap';
import LeftNavQuick from '../../News/LeftNavQuick/LeftNavQuick';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log('error', error.message);
            })
    }, [])
    return (
        <div>
            <h5 className='fw-bold mb-4'>All Caterogy</h5>
            <div className='text-center'>
                {
                    categories.map(category => <div key={category.id}>
                        <div className='btn-link-style'>
                            <Link to={`/category/${category.id}`} className='text-decoration-none fw-bold text-secondary '><div className='li'>
                                {category.name}
                            </div></Link>
                        </div>
                    </div>)
                }
            </div>
            <LeftNavQuick></LeftNavQuick>
        </div>
    );
};

export default LeftNavbar;