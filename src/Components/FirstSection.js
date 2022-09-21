import React from "react";

const FirstSection = () => {
  return (
    <div className="mx-[20px] my-[20px] lg:mx-[170px] 2xl:mx-[170px] relative lg:my-[160px] 2xl:my-[160px]">
      <p className="text-[#EC2232]">Smart Working Team</p>
      <div className="block lg:flex 2xl:flex">
        <div className="lg:text-[70px] 2xl:text-[70px] text-[20px] ">
          <p className="w-[200px] lg:w-[600px] 2xl:[600px] leading-none">Some of the best of industry experts</p>
        </div>
        <div>
          <p className="w-[80%] ml-[30px] mt-[22px] lg:w-[350px] lg:ml-[41px] lg:mt-[152px] 2xl:w-[350px] 2xl:ml-[41px] 2xl:mt-[152px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudanti um totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="block lg:flex 2xl:flex lg:justify-evenly 2xl:justify-evenly">
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
            <p className="text-[30px] mt-[-30px] text-center"><span className="font-bold">Location</span> worldwide</p>
          
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
            <p className="text-[30px] mt-[-30px] text-center">Year of <span className="font-bold">Experience</span> </p>
          
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
            <p className="text-[30px] mt-[-30px] text-center">Global Happy <span className="font-bold">Clients</span> </p>
          
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
