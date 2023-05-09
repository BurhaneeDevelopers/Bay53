import React from "react";
// import { document } from "postcss";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Component
import Features from "@/components/features";

const CMS = () => {
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
            src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
          ></video>
          <div className="text-center poppins font-semibold max-w-3xl sm:text-xl md:text-2xl text-[#3F5473] mt-5">
            Empower Your Content, Elevate Your Brand, and Engage Your Audience
            Like Never Before with Our Cutting-Edge CMS - Unleash Your Digital
            Presence Today!
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
            title="Easy Content Creation and Management"
            content="A CMS provides a user-friendly interface that allows you to create, edit, and manage your digital content without needing technical expertise or coding skills."
            image="/icons/cms/content-creation.png"
          />
          <Features
            title="Customization and Flexibility"
            content="A CMS allows you to customize your website or digital platform according to your brand's unique identity and requirements."
            image="/icons/cms/customization.png"
          />
          <Features
            title="Collaboration and Workflow Management"
            content="A CMS enables collaboration among team members, allowing multiple users to work on content creation, editing, and publishing simultaneously."
            image="/icons/cms/collaboration.png"
          />
        </div>
      </section>
      {/* Features Section  */}
    </>
  );
};

export default CMS;
