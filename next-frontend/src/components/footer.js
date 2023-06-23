import React from "react";
import Head from "next/head";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import {
  BsTwitter,
  //   BsInstagram,
} from "react-icons/bs";

// Backend
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Footer = ({ footer }) => {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);
  return (
    <>
      {/* Footer Section  */}
      <footer>
        <div className="bg-[#3F5473] py-20 grid grid-cols-1 place-items-center space-y-10 sm:space-y-0 sm:flex sm:justify-around">
          <div className="flex flex-col">
            <h3 className="text-[#FBF5EC] text-xl jost font-semibold">
              Quick Contact
            </h3>
            <ul className="text-center sm:text-start">
              <li className="text-[#D9D9D9] text-sm">+91 89839 25368</li>
              <li className="text-[#D9D9D9] text-sm">+91 76002 32598</li>
              <li className="text-[#D9D9D9] text-sm">info@bay53cms.com</li>
              <li className="text-[#D9D9D9] text-sm">www.bay53cms.com</li>
            </ul>
          </div>

          <div className="flex flex-col jusitfy-center items-center">
            <h3 className="text-[#FBF5EC] text-xl jost font-semibold text-center">
              Connect With Us
            </h3>
            <ul className="flex gap-3 mt-2">
              <li className="bg-white p-1.5 rounded-full">
                <FcGoogle className="text-2xl" />
              </li>
              <li className="bg-white p-1.5 rounded-full">
                <BsTwitter className="text-2xl text-[#1DA1F2]" />
              </li>
              <li className="bg-white p-1.5 rounded-full">
                <FaFacebookF className="text-2xl text-[#3b5998]" />
              </li>
              <li className="bg-white p-1.5 rounded-full">
                {/* <BsInstagram className="text-2xl text-indigo-700" /> */}
                <Image
                  width={500}
                  height={500}
                  alt="Instagram"
                  src="/instagram.png"
                  className="w-6 translate-x-[0.05rem]"
                />
              </li>
            </ul>

            <div className="mt-7 flex flex-col justify-center items-center">
              <input
                className="px-2 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent poppins rounded-sm placeholder:text-xs sm:w-52 lg:w-72"
                type="text"
                name="email"
                placeholder="Enter your email ID"
                aria-label="Enter your email ID"
              />
              <div className="mt-2">
                <button className="w-44 py-3 bg-transparent border-2 border-white text-white hover:bg-black/60 hover:border-[#1C4B6F] transition-all ease-in-out duration-300 rounded font-semibold jost">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#FBF5EC] text-xl jost font-semibold text-end">
              Privacy Policy
            </h3>
            <ul>
              <li className="text-[#D9D9D9] text-sm text-center sm:text-end">
                Terms of Service
              </li>
              <li className="text-[#D9D9D9] text-sm text-center sm:text-end">
                Cloud based software
              </li>
              <li className="text-[#D9D9D9] text-sm text-center sm:text-end">
                Web based software
              </li>
              <li className="text-[#D9D9D9] text-sm text-center sm:text-end">
                Mobile based software
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer Section  */}
    </>
  );
};

export default Footer;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "footer"]`;
  const footer = await client.fetch(query);
  return {
    props: {
      footer,
    },
  };
}
