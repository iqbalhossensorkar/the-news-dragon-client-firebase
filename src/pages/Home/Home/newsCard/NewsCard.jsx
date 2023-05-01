import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;
    return (
        <div>
            <h5 className='fw-bold mb-4'>Dragon News Home</h5>
            <Card className="mb-4">
                <Card.Header>
                    <div className='d-flex align-items-center'>
                        <Image className='me-3' style={{ height: '40px' }} src={author?.img} roundedCircle />
                        <div className=' flex-grow-1'>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{moment(author?.published_date).format('yyyy-mm-d')}</p>
                        </div>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt className='ms-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>{details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...</>} <Link className='text-warning' style={{ textDecoration: 'none' }} to={`/news/${_id}`}>Read More</Link></Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                            readonly
                        />
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <span>
                        <FaEye className='me-2'></FaEye> {total_view}
                    </span>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;