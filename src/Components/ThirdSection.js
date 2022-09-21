import React from "react";
import machine from "../Images/machine.png";
import group from "../Images/Group.png";
import group345 from "../Images/Group 345.png";
import group1 from "../Images/Group (1).png";
import play from "../Images/written + play.png";

const ThirdSection = () => {
  return (
    <div className="mt-24 relative text-white">
      <img className="bg-[#094367]" src={machine} alt="Machine" />
      <div className="absolute top-[25%] left-[20%] h-[570px]">
        <p>Customer First Approach</p>
        <p className="w-[600px] text-[70px]">World Class Machine & Infra</p>
        <p className="text-[18px] w-[550px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudanti um totam rem aperiam, eaque ipsa</p>
      </div>
      <div className="absolute bottom-[5%] grid grid-cols-3 items-center mx-[265px] gap-16">
        <div>
            <img src={group} alt="group"/>
            <p className="text-[32px] mt-3">10000 ft<sup>2</sup></p>
            <p className="text-[13px]">Factory Area</p>
        </div>
        <div>
            <img src={group345} alt="group"/>
            <p className="text-[32px] flex items-center mt-3 gap-2">
            30
            <svg
              width="25"
              height="66"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#FFFFFF"
              />
            </svg></p>
            <p className="text-[13px]">Factory We Have</p>
        </div>
        <div>
            <img src={group1} alt="group"/>
            <p className="text-[32px] flex items-center mt-3 gap-2">
            2,000 
            <svg
              width="25"
              height="66"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#FFFFFF"
              />
            </svg></p>
            <p className="text-[13px]">Workers We Have</p>
        </div>
      </div>
      <div className="absolute right-[10%] top-[45%]">
        <img src={play} alt="Play"/>
      </div>
    </div>
  );
};

export default ThirdSection;
