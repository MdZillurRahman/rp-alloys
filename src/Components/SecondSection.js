import React from "react";
import pic2 from "../Images/pngwing 2.png";
import pic3 from "../Images/pngwing 3.png";
import first from "../Images/first.png";
import second from "../Images/second.png";
import third from "../Images/third.png";

const SecondSection = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] relative py-6 h-[300px] lg:py-10 lg:h-[700px] 2xl:py-10 2xl:h-[700px]">
        <img
          className="absolute top-0 right-0 h-[200px] w-[200px] lg:w-[400px] 2xl:w-[400px] lg:h-[400px] 2xl:h-[400px] "
          src={pic2}
          alt="pic2"
        ></img>
        <img
          className="absolute bottom-0 left-0 h-[200px] w-[200px] lg:w-[400px] 2xl:w-[400px] lg:h-[400px] 2xl:h-[400px]"
          src={pic3}
          alt="pic3"
        ></img>
        <div className="pt-[100px] ml-[50px] lg:ml-[300px] 2xl:ml-[300px]">
          <p className="text-[#EC2232]">Customer First Approach</p>
          <p className="w-[280px] lg:w-[940px] 2xl:w-[940px] text-[20px] lg:text-[70px] 2xl:text-[70px] leading-none">
            First choice of procurement partners across global
          </p>
        </div>
      </div>
      <div className="mt-[-50px] lg:mt-[-300px] 2xl:mt-[-300px] my-2 lg:my-10 2xl:my-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 ml-[50px] lg:ml-[300px] 2xl:ml-[300px] ">
          <div className="relative my-4 lg:mr-8 2xl:mr-8 group">
            <img
              className="w-[250px] h-[350px] lg:w-[350px] lg:h-[500px] 2xl:w-[350px] 2xl:h-[500px]"
              src={first}
              alt="first"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
              }}
              className="absolute w-[250px] lg:w-[350px] 2xl:w-[350px] bottom-0 px-4 py-[-2] text-white h-[120px] block lg:hidden 2xl:hidden group-hover:block "
            >
              <div className="bg-[#EC2232] w-[100px] h-[4px] my-4"></div>
              <p className="text-2xl font-bold">Cement Industry</p>
              <p>
                Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
                accusantium dolore.
              </p>
            </div>
          </div>
          <div className="relative my-4 lg:mr-8 2xl:mr-8 group">
            <img
              className="w-[250px] h-[350px] lg:w-[350px] lg:h-[500px] 2xl:w-[350px] 2xl:h-[500px]"
              src={second}
              alt="first"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
              }}
              className="absolute w-[250px] lg:w-[350px] 2xl:w-[350px] bottom-0 px-4 py-[-2] text-white h-[120px] block lg:hidden 2xl:hidden group-hover:block "
            >
              <div className="bg-[#EC2232] w-[100px] h-[4px] my-4"></div>
              <p className="text-2xl font-bold">Mining Processing</p>
              <p>
                Sed ut perspiciatis unde omnis iste natus err or sit voluptatem
                accusantium dolore.
              </p>
            </div>
          </div>
          <div className="relative my-4 lg:mr-8 2xl:mr-8 group">
            <img
              className="w-[250px] h-[350px] lg:w-[350px] lg:h-[500px] 2xl:w-[350px] 2xl:h-[500px]"
              src={third}
              alt="first"
            />
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 10.05%, #000000 110.99%)",
              }}
              className="absolute w-[250px] lg:w-[350px] 2xl:w-[350px] bottom-0 px-4 py-[-2] text-white h-[120px] block lg:hidden 2xl:hidden group-hover:block "
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
