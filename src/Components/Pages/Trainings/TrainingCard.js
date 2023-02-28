import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const TrainingCard = ({ train }) => {
    const { _id, image, title, price, details } = train;
    return (
        <div className="card lg:w-80 glass m-5 lg:m-20">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="car!" className='h-56' />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className='text-black'>{details.slice(0, 100) + "..."}</p>
                <p><strong style={{ color: 'rgb(204, 171, 82)' }}>Subscription fee: </strong><span>${price}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/fitness/${_id}`}><button className="btn" style={{ backgroundColor: 'rgb(204, 165, 82)', border: '2px solid rgb(204, 165, 82)' }}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;