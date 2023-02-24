import React from 'react';
import img from '../../../assets/musculo.png'

const Banner = () => {
    return (
        <div className='py-10' style={{ background: '#7b7b7b' }}>
            <h1 className='text-5xl font-bold uppercase text-center' style={{ color: 'rgb(204, 165, 82)' }}>Online Gym</h1>
            <img src={img} alt="" className='object-center ml-96' />
            <h1 className='text-4xl font-bold uppercase text-center mt-12' style={{ color: 'rgb(204, 165, 82)' }}>Train at home <br /><span className='italic lowercase'>$14.99/month</span></h1>
        </div>
    );
};

export default Banner;