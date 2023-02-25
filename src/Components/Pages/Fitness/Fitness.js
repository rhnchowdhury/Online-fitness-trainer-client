import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FitnessCard from './FitnessCard';

const Fitness = () => {
    const [fitness, setFitness] = useState([]);
    useEffect(() => {
        fetch('fit.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFitness(data)
            })
    }, [])
    return (
        <div className='m-14'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    fitness.slice(0, 3).map(fit => <FitnessCard key={fit.course_id} fit={fit}></FitnessCard>)
                }
            </div>
            <div className='card-actions justify-center my-12'>
                <Link to='/fitness'><button className="btn text-white" style={{ background: 'rgb(204, 165, 82)', border: '2px solid rgb(204, 171, 82)' }}>View All Training</button></Link>
            </div>
        </div>

    );
};

export default Fitness;