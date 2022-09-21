import React from 'react';
import Bannar from './Bannar';
import ContactUs from './ContactUs';
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
            <ContactUs/>
        </div>
    );
};

export default Design;