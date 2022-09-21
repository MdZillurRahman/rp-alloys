import React from 'react';
import name from "../Images/name.png"
import email from "../Images/email.png"
import mobile from "../Images/mobile.png"
import message from "../Images/message.png"

const ContactUs = () => {
    return (
        <div className='flex justify-center items-center my-20'>
            <div>

            </div>
            <div className='bg-white rounded'>
            <div className='my-6'>
                <div className='flex justify-start gap-3'>
                    <img src={name} alt="name"/>
                    <input className='border-0' type="text" placeholder='Full Name'/>
                </div>
                <hr className='h-1 bg-[#CDCDCD] mt-3'/>
            </div>
            <div className='my-6'>
                <div className='flex justify-start gap-3'>
                    <img src={email} alt="name"/>
                    <input className='border-0' type="text" placeholder='Full Name'/>
                </div>
                <hr className='h-1 bg-[#CDCDCD] mt-3'/>
            </div>
            <div className='my-6'>
                <div className='flex justify-start gap-3'>
                    <img src={mobile} alt="name"/>
                    <input className='border-0' type="text" placeholder='Full Name'/>
                </div>
                <hr className='h-1 bg-[#CDCDCD] mt-3'/>
            </div>
            <div className='my-6'>
                <div className='flex justify-start gap-3'>
                    <img src={message} alt="name"/>
                    <input className='border-0' type="text" placeholder='Full Name'/>
                </div>
                <hr className='h-1 bg-[#CDCDCD] mt-3'/>
            </div>

            <button className='bg-red-500' type='submit' placeholder="Submit"/>

            </div>
        </div>
    );
};

export default ContactUs;