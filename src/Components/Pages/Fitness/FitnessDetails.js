import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../Context/AuthProvider';
import Review from '../Reviews/OtherReviews/Review';

const FitnessDetails = () => {
    const { _id, image, title, price, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const email = user?.email || 'unregistered';
        const url = form.url.value;
        const message = form.message.value;

        const review = {
            training: _id,
            trainingName: title,
            price,
            trainer: name,
            email,
            url,
            message,
        };

        if (user?.email) {
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('review added successfully');
                        form.reset();
                    }
                })
                .catch(err => console.error(err));
        }
        else {
            return alert('Please login to add a review');
        }
    };


    return (
        <div className='' style={{ background: '#2e2e2e' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='m-5 lg:m-10'>
                    <div className="card lg:w-80 glass mt-8">
                        <figure>
                            <PhotoProvider>
                                <PhotoView src={image}>
                                    <img src={image} alt="" />
                                </PhotoView>
                            </PhotoProvider>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold" style={{ color: 'rgb(204, 171, 82)' }}>{title}</h2>
                            <p className='text-white'>{details}</p>
                            <p className='text-white'><strong style={{ color: 'rgb(204, 171, 82)' }}>Subscription fee: </strong><span>${price}</span></p>
                        </div>
                    </div>
                </div>
                <div className='m-10'>
                    <h1 className='font-bold text-2xl lg:text-4xl lg:m-8 card-actions justify-center' style={{ color: 'rgb(204, 165, 82)' }}>Others Review</h1>\
                    <Review></Review>
                    <h1 className='font-bold text-2xl lg:text-4xl mt-5 lg:m-8 card-actions justify-center' style={{ color: 'rgb(204, 165, 82)' }}>Add Your Review</h1>
                    <form onSubmit={handleReview}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5' >
                            <input name='first' type="text" placeholder="First Name" className="input input-bordered w-fulls" />
                            <input name='last' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            <input name='url' type="text" placeholder="Image URL" className="input input-bordered w-full" />
                            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        </div>
                        <textarea className="textarea textarea-bordered h-24 w-full mt-2" name='message' placeholder="Your message"></textarea>
                        <input className='btn my-4' type="submit" value="Add review" style={{ backgroundColor: 'rgb(204, 171, 82)', border: 'rgb(204, 171, 82)' }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FitnessDetails;