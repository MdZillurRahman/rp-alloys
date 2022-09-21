import React from "react";
import bannar from "../Images/bannar.png";
import bg from "../Images/Rectangle 447.png";

const Bannar = () => {
  return (
    <div className="relative">
      <div style={{backgroundImage: `linear-gradient(to bottom, #05283eec, #09436700), url(${bannar})` }}>
        <p  className="absolute top-[25%] left-[10%] text-[80px] text-white font-bold">
          Best Machine and <br /> Casting Solution
        </p>
      </div>
    </div>
  );
};

export default Bannar;
