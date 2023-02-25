import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const FitnessCard = ({ fit }) => {
    const { image, title, price, details } = fit;
    return (
        <div className="card w-80 glass mt-8">
            <figure><img src={image} alt="car!" className='h-56' /></figure>
            <div className="card-body">
                <h2 className="card-title" style={{ color: 'rgb(204, 171, 82)' }}>{title}</h2>
                <p>{details.slice(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                    <button className="btn" style={{ backgroundColor: 'rgb(204, 165, 82)', border: '2px solid rgb(204, 165, 82)' }}><BsArrowRight></BsArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default FitnessCard;