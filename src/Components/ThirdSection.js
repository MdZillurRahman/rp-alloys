import React from "react";
import machine from "../Images/machine.png";
import group from "../Images/Group.png";
import group345 from "../Images/Group 345.png";
import group1 from "../Images/Group (1).png";
import play from "../Images/written + play.png";

const ThirdSection = () => {
  return (
    <div className="mt-24 relative text-white">
      <img className="bg-[#094367] w-[100%] " src={machine} alt="Machine" />
      <div className="absolute top-[5%] lg:top-[25%] 2xl:top-[25%] left-[5%] lg:left-[20%] 2xl:left-[20%] h-[200px] lg:h-[570px] 2xl:h-[570px]">
        <p className="text-[10px] lg:text-[20px] 2xl:text-[20px]">Customer First Approach</p>
        <p className="w-[150px] lg:w-[600px] 2xl:w-[600px] text-[20px] lg:text-[70px] 2xl:text-[70px]">World Class Machine & Infra</p>
        <p className="text-[10px] lg:text-[18px] 2xl:text-[18px] w-[70%] lg:w-[550px] 2xl:w-[550px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudanti um totam rem aperiam, eaque ipsa</p>
      </div>
      <div className="absolute bottom-[1%] lg:bottom-[5%] 2xl:bottom-[5%] grid grid-cols-3 items-center mx-[20px] gap-8 lg:mx-[300px] lg:gap-16 2xl:mx-[300px] 2xl:gap-16">
        <div>
            <img className="w-[30%] lg:w-[40%]" src={group} alt="group"/>
            <p className="text-[10px] lg:text-[32px] 2xl:text-[32px] mt-3">10000 ft<sup>2</sup></p>
            <p className="text-[7px] lg:text-[23px] 2xl:text-[23px]">Factory Area</p>
        </div>
        <div>
            <img className="w-[30%] lg:w-[40%]" src={group345} alt="group"/>
            <p className="text-[10px] lg:text-[32px] 2xl:text-[32px] flex items-center mt-3 gap-1 lg:gap-2 2xl:gap-2">
            30
            <svg
            className="w-[8px] h-[16px] lg:w-[25px] lg:h-[66px] 2xl:w-[25px] 2xl:h-[66px] "
              // width="25"
              // height="66"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#FFFFFF"
              />
            </svg></p>
            <p className="text-[7px] lg:text-[23px] 2xl:text-[23px]">Factory We Have</p>
        </div>
        <div>
            <img className="w-[30%] lg:w-[40%]" src={group1} alt="group"/>
            <p className="text-[10px] lg:text-[32px] 2xl:text-[32px] flex items-center mt-3 gap-1 lg:gap-2 2xl:gap-2">
            2,000 
            <svg
            className="w-[8px] h-[16px] lg:w-[25px] lg:h-[66px] 2xl:w-[25px] 2xl:h-[66px] "
              // width="25"
              // height="66"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#FFFFFF"
              />
            </svg></p>
            <p className="text-[7px] lg:text-[23px] 2xl:text-[23px]">Workers We Have</p>
        </div>
      </div>
      <div className="absolute right-[-30%] top-[25%] lg:right-[10%] lg:top-[45%] 2xl:right-[10%] 2xl:top-[45%]">
        <img className="w-[30%] lg:w-[100%]" src={play} alt="Play"/>
      </div>
    </div>
  );
};

export default ThirdSection;
