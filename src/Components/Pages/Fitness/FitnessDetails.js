import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FitnessDetails = () => {
    const { image, title, price, details } = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
    };

    return (
        <div className='m-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
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
                <div>
                    <h1 className='text-violet-700 font-bold text-4xl m-8 card-actions justify-center'>Others Review</h1>\

                    <h1 className='text-violet-700 font-bold text-4xl m-8 card-actions justify-center'>Add Your Review</h1>
                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name='first' type="text" placeholder="First Name" className="input input-bordered w-fulls" />
                            <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            <input name='url' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                            <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full" />
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full mt-2" name='message' placeholder="Your message"></textarea>
                        <input className='btn  bg-violet-700 my-4' type="submit" value="Add review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FitnessDetails;