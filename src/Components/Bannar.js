import React from "react";
import bannar from "../Images/bannar.png";
import bg from "../Images/Rectangle 447.png";
import num from "../Images/num.png";

const Bannar = () => {
  return (
    <div className="relative mx-[20px] lg:mx-[75px] 2xl:mx-[75px]">
      <img src={bannar} alt="Machine" />
      <img className="absolute top-0" src={bg} alt="Machine" />
      <div
        style={{
          background:
            "linear-gradient(180deg, #05283E -23.09%, rgba(9, 67, 103, 0) 107.85%)",
          backgroundImage: `url${bg}`,
        }}
      >
        <p className="absolute top-[8%] left-[6%] text-[80px] text-white font-bold w-[800px] leading-none">
          Best Machine and Casting Solution
        </p>
      </div>

      <div className="bg-[#EC2232] opacity-50 w-[234px] h-[235px] absolute bottom-[13%] left-[8%] z-100">
        <div className="flex justify-center items-center gap-3 mt-[92px]">
          <img src={num} alt="num" />
          <hr className="w-12" />
        </div>
      </div>
      <div className="grid grid-cols-2 absolute bottom-[25%] left-[13%] text-[30px] text-white gap-12">
        <p>Mining/Mineral Processing</p>
        <p>Rubber Industry</p>
      </div>
      <div className="absolute bottom-[25%] left-0 opacity-20">
        <p className="text-[30px] text-white ">nt Industry</p>
      </div>
    </div>
  );
};

export default Bannar;
