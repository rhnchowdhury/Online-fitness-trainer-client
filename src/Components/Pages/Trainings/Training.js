import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import TrainingCard from './TrainingCard';

const Training = () => {
    const [training, setTraining] = useState([]);
    useTitle('All Services');
    useEffect(() => {
        fetch('https://online-gym-server.vercel.app/fitness')
            .then(res => res.json())
            .then(data => setTraining(data))
    }, [])
    return (
        <div className='' style={{ background: '#7b7b7b' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    training.map(train => <TrainingCard key={train.course_id} train={train}></TrainingCard>)
                }
            </div>
        </div>
    );
};

export default Training;