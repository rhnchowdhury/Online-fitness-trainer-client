import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FitnessCard = ({ fit }) => {
    const { image, title, price, details } = fit;
    return (
        <div className="card w-80 glass m-10">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="car!" className='h-56' />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black" >{title}</h2>
                {/* style={{ color: 'rgb(204, 171, 82)' }} */}
                <p>{details.slice(0, 100) + "..."}</p>
                <p><strong style={{ color: '#7b7b7b' }}>Subscription fee: </strong><span>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn" style={{ backgroundColor: 'black', border: '2px solid rgb(204, 165, 82)' }}><BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default FitnessCard;