import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FitnessCard from './FitnessCard';

const Fitness = () => {
    const [fitness, setFitness] = useState([]);
    useEffect(() => {
        fetch('https://online-gym-server.vercel.app/fit')
            .then(res => res.json())
            .then(data => {
                setFitness(data)
            })
    }, [])
    return (
        <div className='' style={{ background: 'rgb(204, 165, 82)' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    fitness.slice(0, 3).map(fit => <FitnessCard key={fit.course_id} fit={fit}></FitnessCard>)
                }
            </div>
            <div className='card-actions justify-center'>
                <Link to='/fitness'><button className="btn text-white bg-black mb-10" >View All Training</button></Link>
            </div>
        </div>

    );
};

export default Fitness;