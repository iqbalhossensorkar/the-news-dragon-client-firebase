import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsights from '../editorInsights/EditorInsights';

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div>
            <h5 className='fw-bold mb-4'>Dragon News Home</h5>
            <Card>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft className='me-2'></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsights></EditorInsights>
        </div>
    );
};

export default News;