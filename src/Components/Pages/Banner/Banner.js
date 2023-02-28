import React from 'react';
import img from '../../../assets/musculo.png'

const Banner = () => {
    return (
        <div className='py-10 bg-black' >
            <h1 className='text-3xl lg:text-5xl font-bold uppercase text-center' style={{ color: 'rgb(204, 165, 82)' }}>Online Gym</h1>
            <div className='card-actions justify-center'>
                <img src={img} alt="" className='' />
            </div>
            <h1 className='text-2xl lg:text-4xl font-bold uppercase text-center mt-12' style={{ color: 'rgb(204, 165, 82)' }}>Train at home <br /><span className='italic lowercase'>$49.99/month</span></h1>
        </div>
    );
};

export default Banner;