import React from "react";

const FirstSection = () => {
  return (
    <div className="mx-[170px] relative my-[160px]">
      <p className="text-[#EC2232]">Smart Working Team</p>
      <div className="flex ">
        <div className="text-[70px]">
          <p>Some of the best of</p>
          <p>industry experts</p>
        </div>
        <div>
          <p className="w-[350px] ml-[41px] mt-[192px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudanti um totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <p className="text-[110px] flex items-center justify-center gap-3">
            20
            <svg
              width="67"
              height="85"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#EC2232"
              />
            </svg></p>
            <p className="text-[30px] mt-[-30px]"><span className="font-bold">Location</span> worldwide</p>
          
        </div>
        <div>
          <p className="text-[110px] flex items-center justify-center gap-3">
            23
            <svg
              width="67"
              height="85"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#EC2232"
              />
            </svg></p>
            <p className="text-[30px] mt-[-30px]">Year of <span className="font-bold">Experience</span> </p>
          
        </div>
        <div>
          <p className="text-[110px] flex items-center justify-center gap-3">
            50
            <svg
              width="67"
              height="85"
              viewBox="0 0 57 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.05 31.91H32.07V56H24.59V31.91H0.61V24.43H24.59V0.339995H32.07V24.43H56.05V31.91Z"
                fill="#EC2232"
              />
            </svg></p>
            <p className="text-[30px] mt-[-30px]">Global Happy <span className="font-bold">Clients</span> </p>
          
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
