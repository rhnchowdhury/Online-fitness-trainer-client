import React from 'react';
import Banner from '../Banner/Banner';
import FirstSection from '../ExtraSection/FirstSection';
import Fitness from '../Fitness/Fitness';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fitness></Fitness>
            <FirstSection></FirstSection>
        </div>
    );
};

export default Home;