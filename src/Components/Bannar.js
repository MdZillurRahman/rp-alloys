import React from "react";
import bannar from "../Images/bannar.png";
import bg from "../Images/Rectangle 447.png";
import num from "../Images/num.png";

const Bannar = () => {
  return (
    <div className="relative mx-[20px] lg:mx-[75px] 2xl:mx-[75px]">
      <img className="w-[100%]" src={bannar} alt="Machine" />
      <img className="absolute top-0 w-[100%]" src={bg} alt="Machine" />
      <div
      >
        <p className="absolute w-[150px] top-[12%] left-[8%] text-[15px]  lg:top-[8%] lg:left-[6%] lg:text-[80px] 2xl:top-[8%] 2xl:left-[6%] 2xl:text-[80px] text-white font-bold lg:w-[800px] 2xl:w-[800px]  leading-none">
          Best Machine and Casting Solution
        </p>
      </div>

      <div className="bg-[#EC2232] opacity-50 w-[60px] h-[62px] lg:w-[234px] 2xl:w-[234px] lg:h-[235px] 2xl:h-[235px] absolute bottom-[13%] left-[8%] z-100">
        <div className="flex justify-center items-center lg:gap-3 2xl:gap-3 lg:mt-[92px] 2xl:mt-[92px] mt-[20px]">
          <img className="w-[16px] lg:w-[40px] 2xl:w-[40px]" src={num} alt="num" />
          <hr className="lg:w-10 2xl:w-10 w-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 absolute bottom-[25%] left-[13%] lg:text-[30px] 2xl:text-[30px] text-[8px] text-white lg:gap-12 2xl:gap-12 gap-3">
        <p>Mining/Mineral Processing</p>
        <p>Rubber Industry</p>
      </div>
      <div className="absolute bottom-[25%] left-0 opacity-20">
        <p className="lg:text-[30px] 2xl:text-[30px] text-[8px] text-white ">nt Industry</p>
      </div>
    </div>
  );
};

export default Bannar;
