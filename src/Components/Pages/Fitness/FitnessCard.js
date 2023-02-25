import React from 'react';

const FitnessCard = ({ fit }) => {
    const { image, title, price, details } = fit;
    return (
        <div className="card w-80 glass mt-8">
            <figure><img src={image} alt="car!" className='h-56' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 100) + "..."}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default FitnessCard;