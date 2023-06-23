import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import {
  BsArrowRight,
  BsArrowLeft,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

// component
import Testimonial from "@/components/testimonial";
import Clients from "@/components/clients";

// Backend
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

export default function Home({ testimonials, clients }) {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      <Head>
        <title>Bay53 - CMS Solutions</title>
      </Head>

      {/* Hero Section  */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          allowTouchMove={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          preventClicksPropagation={true}
          preventClicks={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="absolute bottom-10 sm:bottom-5 left-0 right-0 z-50 mx-auto flex justify-center ">
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-12 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
            </div>
            <div className="relative bg-[url(/hero/hero-.png)] bg-cover bg-center bg-no-repeat">
              <Image
                width={1000}
                height={1000}
                src="/hero/hero-1.png"
                alt=""
                className="absolute object-cover object-left h-screen w-full hidden md:flex"
              />
              <div className="absolute inset-0 h-screen gradient w-[75rem]"></div>
              <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20">
                <div className="text-center md:text-start mt-14">
                  <h1 className="text-3xl font-bold sm:text-5xl lg:text-9xl text-[#062843] jost">
                    ERP
                    <span className="block jockey-one lg:text-6xl text-[#1C4B6F] font-thin ">
                      Business Service
                    </span>
                  </h1>

                  <p className="mt-4 max-w-lg sm:text-xl/relaxed poppins text-[#1C4B6F] font-medium mx-auto md:mx-0">
                    Say goodbye to the hassle of managing your business
                    processes manually. Our ERP services provide end-to-end
                    solutions to automate your operations, improve efficiency
                    and reduce costs.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-start">
                    <button className="w-40 py-4 bg-transparent border-2 border-[#1C4B6F] text-[#1C4B6F] hover:bg-[#1C4B6F] hover:text-white transition-all ease-in-out duration-300 rounded font-bold jost">
                      <Link href="/erp">EXPLORE</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute bottom-5 left-0 right-0 z-50 mx-auto flex justify-center">
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-12 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
            </div>
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src="/hero/hero-2.png"
                alt=""
                className="absolute object-cover w-2/3 h-screen scale-x-[-1] hidden md:flex"
              />
              <div className="absolute inset-0 h-screen gradient-2 w-full lg:w-[75rem] scale-x-[-1]"></div>
              <div className="relative mx-auto px-4 py-32 sm:px-6 md:flex md:h-screen md:items-end lg:items-center lg:px-20 scale-x-[-1]">
                <div className="text-center md:text-start mt-14 scale-x-[-1]">
                  <h1 className="text-3xl font-bold sm:text-5xl lg:text-9xl text-[#062843] jost">
                    CMS
                    <span className="block jockey-one lg:text-6xl text-[#1C4B6F] font-thin ">
                      E-Commerce Service
                    </span>
                  </h1>

                  <p className="mt-4 max-w-lg sm:text-xl/relaxed poppins text-[#1C4B6F] font-medium mx-auto md:mx-0">
                    Streamline Your Content Creation and Management with Our
                    Cutting-Edge Content Management System - Effortlessly
                    Create, Publish, and Optimize Your Website Today!
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-start">
                    <button className="w-40 py-4 bg-transparent border-2 border-[#1C4B6F] text-[#1C4B6F] hover:bg-[#1C4B6F] hover:text-white transition-all ease-in-out duration-300 rounded font-bold jost">
                      <Link href="/cms">EXPLORE</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute bottom-5 left-0 right-0 z-50 mx-auto flex justify-center ">
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-3.5 mx-0.5"></div>
              <div className="rounded-full bg-[#1C4B6F] h-3.5 w-12 mx-0.5"></div>
            </div>
            <div className="">
              <Image
                width={1000}
                height={1000}
                src="/hero/hero-3.png"
                alt=""
                className="absolute object-cover object-left h-screen w-full translate-x-64 lg:translate-x-96 hidden md:flex"
              />
              <div className="absolute inset-0 gradient w-[75rem] h-screen"></div>
              <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-20">
                <div className="text-center md:text-start mt-14">
                  <h1 className="text-3xl font-bold sm:text-5xl lg:text-9xl text-[#062843] jost">
                    CRM
                    <span className="block jockey-one lg:text-6xl text-[#1C4B6F] font-thin ">
                      Business Solution
                    </span>
                  </h1>

                  <p className="mt-4 max-w-lg sm:text-xl/relaxed poppins text-[#1C4B6F] font-medium mx-auto md:mx-0">
                    Revolutionize Your Business with the Ultimate Customer
                    Relationship Management Solution - Empower Your Team, Boost
                    Sales, and Maximize Customer Satisfaction Today!
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-center justify-center md:justify-start">
                    <button className="w-40 py-4 bg-transparent border-2 border-[#1C4B6F] text-[#1C4B6F] hover:bg-[#1C4B6F] hover:text-white transition-all ease-in-out duration-300 rounded font-bold jost">
                      <Link href="/crm">EXPLORE</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Hero Section  */}

      {/* Testimonial  */}
      {/* <Testimonial testimonials={testimonials} /> */}
      {/* Testimonial  */}

      {/* Clients  */}
      <Clients clients={clients} />
      {/* Clients  */}
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "testimonials"]`;
  const queryTwo = `*[_type == "clients"]`;
  const testimonials = await client.fetch(query);
  const clients = await client.fetch(queryTwo);
  return {
    props: {
      testimonials,
      clients,
    },
  };
}
