import React from "react";
import Image from "next/image";

const Features = ({ title, content, image }) => {
  return (
    <>
      {/* Features Section  */}

      <div className="bg-[#5B6F8C] py-10 rounded-xl border-4 border-white/20 space-y-5 shadow-[4px_4px_64px_0px_#00000059] md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center text-center z-10 h-[22rem]">
        <h3 className="text-white text-center font-bold jost uppercase sm:text-2xl xs:pt-3 sm:pt-5">
          {title}
        </h3>
        <Image
          width={500}
          height={500}
          alt={title}
          className="w-14 sm:w-24 mx-auto invert"
          src={image}
        />
        <p className="text-[#E7ECF2] poppins font-semibold text-center text-xs sm:text-sm sm:max-w-sm px-2 sm:px-10 pb-2">
          {content}
        </p>
      </div>

      {/* Features Section  */}
    </>
  );
};

export default Features;
