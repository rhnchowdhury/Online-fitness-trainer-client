import React from 'react';
import img from '../../../assets/phone.png';
import { ImCheckmark } from "react-icons/im";

const FirstSection = () => {
    return (
        <div className='' style={{ background: 'rgb(204, 165, 82)' }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="h-auto w-auto rounded-lg" />
                    <div className=''>
                        <h1 className="text-4xl font-bold">WHY JOIN THE ONLINE GYM?</h1>
                        <div className='mt-12'>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>12 Week Training Plan</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>Postsummer 2023</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>Unlimited access to over 150 different workouts</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>Private training calendar</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>Access to content from mobile, computer and tablet</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>5 day trial</p>
                            <p className='flex font-bold'><ImCheckmark className='mt-1 mr-1 text-white'></ImCheckmark>Without permanence or commitment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;