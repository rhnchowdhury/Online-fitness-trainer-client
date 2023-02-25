import React, { useEffect, useState } from 'react';
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
            {
                fitness.slice(0, 3).map(fit => <FitnessCard key={fit.course_id} fit={fit}></FitnessCard>)
            }
        </div>

    );
};

export default Fitness;