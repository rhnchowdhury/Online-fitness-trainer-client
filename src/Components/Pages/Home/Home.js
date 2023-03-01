import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AddTrainingShow from '../AddTrainings/AddTrainingShow';
import Banner from '../Banner/Banner';
import FirstSection from '../ExtraSection/FirstSection';
import SecondSection from '../ExtraSection/SecondSection';
import Faq from '../Faqs/Faq';
import Fitness from '../Fitness/Fitness';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <Fitness></Fitness>
            <SecondSection></SecondSection>
            <FirstSection></FirstSection>
            <AddTrainingShow></AddTrainingShow>
            <Faq></Faq>
        </div>
    );
};

export default Home;