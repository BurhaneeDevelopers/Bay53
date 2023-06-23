import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Navbar Section  */}
      <div className="flex justify-between px-5 sm:px-12 absolute z-10 lg:px-[5.5rem] py-8 items-center">
        <div className="">
          <Image
            width={1500}
            height={1500}
            src="/logo.png"
            alt="Bay 53"
            className="w-1/2 xs:w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/12"
          />
        </div>
        <div className="">
          <button className="w-32 md:w-40 py-4 bg-[#1C4B6F] text-white rounded-sm font-bold jost  md:text-lg transition-[0.3s] hover:transition-[0.3s] hover:translate-x-[-0.3em] hover:translate-y-[-0.3em] hover:shadow-[-3px_3px_0px_1px_#062843]">
            {/* <button className="w-40 py-4 bg-[#1C4B6F] text-white rounded-sm font-bold jost text-lg hover:border-l-4 hover:border-b-4 hover:border-white transition-all ease-in duration-100 hover:-translate-y-3 "> */}
            Contact Us
          </button>
        </div>
      </div>
      {/* Navbar Section  */}
    </>
  );
};

export default Navbar;
