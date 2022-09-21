import React from "react";
import twitter from "../Images/twitter.png";
import instragram from "../Images/Instragream.png";
import linkedIn from "../Images/linkedIn.png";

const Footer = () => {
  return (
    <div className="bg-[#181818] block lg:flex 2xl:flex justify-around items-center py-16 px-10 lg:px-24 2xl:px-24 text-white">
      <div className="text-[20px] lg:text-[35px] 2xl:text-[35px] flex lg:gap-20 2xl:gap-20">
        <div>
          <p>About us</p>
          <p>Infrastructure</p>
          <p>Contact us</p>
        </div>
        <div className="hidden lg:block 2xl:block border bg-[#C4C4C4]"></div>
      </div>
      <div className="flex gap-10 mt-5">
        <div>
          <p className="text-[20px] lg:text-[35px] 2xl:text-[35px]">Industry</p>
          <ul
            style={{ listStyleType: "disc" }}
            className="grid grid-cols-2 ml-5 text-[10px] lg:text-[22px] 2xl:text-[22px] gap-x-16"
          >
            <li>Cement</li>
            <li>Sugar</li>
            <li>Mining Processing</li>
            <li>Fertilizer</li>
            <li>Rubber</li>
            <li>Power</li>
          </ul>
        </div>
        <div className="hidden lg:block 2xl:block border bg-[#C4C4C4]"></div>
      </div>

      <div>
        <div className="flex justify-center lg:justify-end 2xl:justify-end items-center gap-8 my-3">
          <img src={twitter} alt="twitter" />
          <img src={instragram} alt="instragram" />
          <img src={linkedIn} alt="linkedIn" />
        </div>
        <p className="text-[15px] lg:text-[19px] 2xl:text-[19px] my-3 text-center">2022 © Rp alloys & steel forging</p>
        <p className="text-[15px] lg:text-[19px] 2xl:text-[19px] my-3 text-center">
          Design Credits : Art Attackk
        </p>
      </div>
    </div>
  );
};

export default Footer;
