import React from 'react';
import Bannar from './Bannar';
import FirstSection from './FirstSection';
import Navbar from './Navbar';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Design = () => {
    return (
        <div>
            <Navbar/>
            <Bannar/>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    );
};

export default Design;