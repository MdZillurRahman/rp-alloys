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
      {" "}
      <img src={bgMap} alt="bgMap" />
      <div className="flex justify-center items-center my-20 absolute top-[5%] left-[20%] z-1">
        <div>
          <h2 className="text-6xl font-bold">Get in touch</h2>
          <p className="w-[70%] flex items-start mt-5 gap-2 mb-3 text-[px]">
            <img className="rounded" src={location} alt="location" />7 south
            side GT.Rd sector 13, Bulandshahr Road Industrial area, Gajibad
            uttor prodesh
          </p>
          <div className="w-[65%] flex justify-start">
            <img src={map} alt="" />
          </div>
        </div>
        <div style={{boxShadow: "0px -2px 50px rgba(0, 0, 0, 0.3)"}} className="bg-white rounded w-[50%] px-10 py-12">
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
