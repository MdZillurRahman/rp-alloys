import React from "react";
import name from "../Images/name.png";
import email from "../Images/email.png";
import mobile from "../Images/mobile.png";
import message from "../Images/message.png";
import location from "../Images/location.png";
import map from "../Images/map.png";
import bgMap from "../Images/bg-map.png";

const ContactUs = () => {
  return (
    <div className="relative">
      <img className="w-[100%]" src={bgMap} alt="bgMap" />
      <div className="block ml-4 mb-3 lg:flex 2xl:flex justify-center items-center lg:my-20 2xl:my-20 lg:absolute lg:top-[4%] lg:left-[20%] 2xl:top-[4%] 2xl:left-[20%] z-1">
        <div className="my-4 lg:my-0 2xl:my-0">
          <h2 className="text-[20px] lg:text-[70px] 2xl:text-[70px] font-bold">Get in touch</h2>
          <p className="w-[90%] lg:w-[70%] 2xl:w-[70%] flex items-start mt-5 gap-2 mb-3">
            <img src={location} alt="location" />7 south
            side GT.Rd sector 13, Bulandshahr Road Industrial area, Gajibad
            uttor prodesh
          </p>
          <div className="w-[80%] flex justify-start">
            <img className="rounded" src={map} alt="" />
          </div>
        </div>
        <div style={{boxShadow: "0px -2px 50px rgba(0, 0, 0, 0.3)"}} className="bg-white rounded-xl w-[90%] lg:w-[50%] 2xl:w-[50%] px-1 lg:px-10 2xl:px-10 py-12">
          <div className="my-6">
            <div className="flex justify-start gap-3 items-center">
              <div>
                <img src={name} alt="name" />
              </div>
              <input className="border-0" type="text" placeholder="Full Name" />
            </div>
            <hr className="h-1 bg-[#CDCDCD] mt-3" />
          </div>
          <div className="my-6">
            <div className="flex justify-start gap-3 items-center">
              <div>
                <img src={email} alt="name" />
              </div>
              <input
                className="border-0"
                type="text"
                placeholder="Email Address"
              />
            </div>
            <hr className="h-1 bg-[#CDCDCD] mt-3" />
          </div>
          <div className="my-6">
            <div className="flex justify-start gap-3 items-center">
              <div>
                <img src={mobile} alt="name" />
              </div>
              <input
                className="border-0"
                type="text"
                placeholder="Mobile Number"
              />
            </div>
            <hr className="h-1 bg-[#CDCDCD] mt-3" />
          </div>
          <div className="my-6">
            <div className="flex justify-start gap-3">
              <div className="mt-2">
                <img src={message} alt="name" />
              </div>
              <textarea
                className="border-0"
                type="text"
                placeholder="Type your message here"
              />
            </div>
            <hr className="h-1 bg-[#CDCDCD] mt-3" />
          </div>

          <button
            className="bg-red-500 px-16 py-2 rounded-3xl text-white font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
