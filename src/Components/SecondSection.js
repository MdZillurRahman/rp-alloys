import React from "react";
import pic2 from "../Images/pngwing 2.png";
import pic3 from "../Images/pngwing 3.png";
import first from "../Images/first.png";
import second from "../Images/second.png";
import third from "../Images/third.png";

const SecondSection = () => {
  return (
    <>
    <div className="bg-[#F7F7F7] relative py-10 h-[700px]" >
      <img
        className="absolute top-0 right-0 w-[400px]"
        src={pic2}
        alt="pic2"
      ></img>
      <img
        className="absolute bottom-0 left-0 w-[400px]"
        src={pic3}
        alt="pic3"
      ></img>
      <div className="pt-[100px] px-40">
        <p>Customer First Approach</p>
        <p className="w-[940px] text-[70px]">
          First choice of procurement partners across global
        </p>
      </div>
    </div>
    <div className="mt-[-300px] my-10">
         <div className="grid grid-cols-1 lg:grid-cols-3 ml-[300px] mt-[80px]">
        <div className="relative mr-8">
          <img className="w-[350px] h-[400px]" src={first} alt="first" />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
            }}
            className="absolute bottom-0 px-4 text-white h-[120px]"
          >
            <div className="bg-[#EC2232] w-[100px] h-[4px] my-4"></div>
            <p className="text-2xl font-bold">Cement Industry</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
              accusantium dolore.
            </p>
          </div>
        </div>
        <div className="relative mr-8">
          <img className="w-[350px] h-[400px]" src={second} alt="first" />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
            }}
            className="absolute bottom-0 px-4 text-white h-[120px]"
          >
            <div className="bg-[#EC2232] w-[100px] h-[4px] my-4"></div>
            <p className="text-2xl font-bold">Mining Processing</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
              accusantium dolore.
            </p>
          </div>
        </div>
        <div className="relative mr-8">
          <img className="w-[350px] h-[400px]" src={third} alt="first" />
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
            }}
            className="absolute bottom-0 px-4 text-white h-[120px]"
          >
            <div className="bg-[#EC2232] w-[100px] h-[4px] my-4"></div>
            <p className="text-2xl font-bold">Rubber Industry</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
              accusantium dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SecondSection;
