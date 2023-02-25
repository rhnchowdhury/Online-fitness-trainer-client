import React, { useEffect, useState } from 'react';
import TrainingCard from './TrainingCard';

const Training = () => {
    const [training, setTraining] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/fitness')
            .then(res => res.json())
            .then(data => setTraining(data))
    }, [])
    return (
        <div className='m-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    training.map(train => <TrainingCard key={train.course_id} train={train}></TrainingCard>)
                }
            </div>
        </div>
    );
};

export default Training;