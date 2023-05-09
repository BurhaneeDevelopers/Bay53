import React from "react";
// import { document } from "postcss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Component
import Features from "@/components/features";

const CRM = () => {
  return (
    <>
      {/* Video Section  */}
      <section className="p-10 md:p-20 bg-[#E7ECF2]">
        <div className="flex flex-col justify-center items-center mt-20">
          <video
            poster="/video/image-1.png"
            id="video"
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
            className=" w-full sm:w-1/2 h-full rounded-xl"
            src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
          ></video>
          <div className="text-center poppins font-semibold max-w-3xl sm:text-xl md:text-2xl text-[#3F5473] mt-5">
            Unlock the Full Potential of Your Business with Our Cutting-Edge CRM
            Platform - Streamline Your Sales, Simplify Your Workflows, and
            Supercharge Your Growth!
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
            title="Centralized Customer Data Management"
            content="A CRM system provides a centralized and organized platform for businesses to manage all their customer data in one place. This includes contact information, communication history, purchase history, preferences, and more."
            image="/icons/crm/centralized.png"
          />
          <Features
            title="Advanced Analytics and Reporting"
            content="A CRM system typically includes robust analytics and reporting capabilities that provide businesses with valuable insights into their sales, marketing, and customer service performance."
            image="/icons/crm/analytics.png"
          />
          <Features
            title="Enhanced Sales and Marketing Automation"
            content="A CRM system often includes powerful automation features that can streamline sales and marketing processes. This may include automated lead capture, lead nurturing, email campaigns, task automation, and more."
            image="/icons/crm/marketing.png"
          />
        </div>
      </section>
      {/* Features Section  */}
    </>
  );
};

export default CRM;
