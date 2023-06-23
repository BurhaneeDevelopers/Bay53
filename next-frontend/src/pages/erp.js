import React from "react";
// import { document } from "postcss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Component
import Features from "@/components/features";

const ERP = () => {
  return (
    <>
      {/* Video Section  */}
      <section className="p-20 bg-[#E7ECF2]">
        <div className="flex flex-col justify-center items-center mt-20">
          <video
            poster="/video/image-1.png"
            id="video"
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
            className=" w-full sm:w-1/2 h-full rounded-xl"
            src="/video/Microsoft-Azure.mp4"
          ></video>
          <div className="text-center poppins font-semibold max-w-3xl sm:text-xl md:text-2xl text-[#3F5473] mt-5">
            Streamline your business operations with our powerful and intuitive
            ERP software, designed to save you time and money while improving
            productivity and efficiency.
          </div>
        </div>
      </section>
      {/* Video Section  */}

      {/* Features Section  */}
      <section className="bg-[#151D28] py-20 px-10 flex flex-col justify-center items-center">
        <h2 className="jost font-bold text-4xl xs:text-3xl md:text-4xl text-[#E7ECF2] text-center tracking-wide">
          Our Special Features
        </h2>

        <div className="flex flex-wrap justify-center items-center mt-10 xl:flex-nowrap md:inline-flex md:-space-x-5 space-y-10 md:space-y-0 gap-7 xl:gap-0">
          <Features
            title="Automated Workflows"
            content="An ERP software with automated workflows can streamline business processes and reduce manual errors. This feature can help businesses save time and increase efficiency."
            image="/icons/erp/workflow.png"
          />
          <Features
            title="Real-time Data Insights"
            content="An ERP software that provides real-time data insights can help businesses make informed decisions quickly. This feature can provide businesses with up-to-date information."
            image="/icons/erp/insights.png"
          />
          <Features
            title="Customization"
            content="An ERP software with customization options can cater to the unique needs of a business. This can allow businesses to tailor the software to their specific requirements, ensuring that they get the most out of the software."
            image="/icons/erp/setting.png"
          />
        </div>
      </section>
      {/* Features Section  */}
    </>
  );
};

export default ERP;
