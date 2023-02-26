import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FitnessDetails = () => {
    const { image, title, price, details } = useLoaderData();
    return (
        <div className='m-14'>
            <div className="card w-80 glass mt-8">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <h2 className="card-title" style={{ color: 'rgb(204, 171, 82)' }}>{title}</h2>
                    <p>{details}</p>
                    <p><strong style={{ color: '#7b7b7b' }}>Subscription fee: </strong><span>${price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default FitnessDetails;