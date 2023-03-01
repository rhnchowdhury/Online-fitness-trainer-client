import React from 'react';

const SecondSection = () => {
    return (
        <div className='py-12' style={{ background: '#121212' }}>
            <h1 className='text-3xl lg:text-6xl font-extrabold uppercase text-center text-white'>SCHEDULES</h1>
            <div className='card-actions justify-center m-10 p-8 bg-black'>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-12'>
                    <div>
                        <p className='uppercase text-white text-center border'>Monday</p>
                        <p className='uppercase text-white border p-2 font-bold text-center'>LEGS & GLUTES <br /><span className='lg:ml-4'> (SAVED)</span></p>
                    </div>
                    <div>
                        <p className='uppercase text-white border text-center'>Tuesday</p>
                        <p className='uppercase text-white border p-2 font-bold text-center'>FULL BODY WORK <br /> <span className='ml-5'>(SAVED)</span></p>
                    </div>
                    <div>
                        <p className='uppercase text-white border text-center'>Wednesday</p>
                        <p className='uppercase text-white border p-2 font-bold text-center'>UPPER BODY WITH MATERIAL (SAVED)</p>
                    </div>
                    <div>
                        <p className='uppercase text-white border text-center'>Thursday</p>
                        <p className='uppercase text-white border p-2 font-bold text-center'>BUTTOCKS WITH RUBBER BANDS (SAVED)</p>
                    </div>
                    <div>
                        <p className='uppercase text-white border text-center'>Friday</p>
                        <p className='uppercase text-white border p-2 font-bold text-center'>CARDIO HIIT <br /> <span className='lg:ml-4'>(SAVED)</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;