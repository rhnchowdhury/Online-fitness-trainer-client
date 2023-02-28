import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
    return (
        <div className='py-10' style={{ background: 'rgb(204, 165, 82)' }}>
            <h1 className='text-3xl lg:text-6xl font-extrabold uppercase text-center'>DO YOU STILL HAVE DOUBTS?</h1>
            <p className='text-center mt-2'>You can consult our Frequently Asked Questions page, and thus you will obtain all the information</p>
            <p className='card-actions justify-center text-4xl font-bold mt-2'><FaQuestionCircle></FaQuestionCircle></p>
        </div>
    );
};

export default Faq;