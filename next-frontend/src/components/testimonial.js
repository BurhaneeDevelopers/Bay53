import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// Swiper
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { RiDoubleQuotesL } from "react-icons/ri";

// Backend
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Testimonial = ({ testimonials }) => {
  const swiper = useSwiper();

  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });

  const builder = imageUrlBuilder(client);

  const listOfTtestimonials = [];
  testimonials.forEach((element) => {
    listOfTtestimonials.push(element.id);
  });

  const handleMouseEnter = (id) => {
    const testimonialElement = document.getElementById(id);
    testimonials.forEach((element) => {
      const eachTestimonial = document.getElementById(element.id);
      eachTestimonial.classList.add("hidden", "opacity-10");
      // eachTestimonial.classList.add("opacity-100")
    });
    testimonialElement.classList.remove("hidden","opacity-100");
    // testimonialElement.classList.remove("opacity-100");
  };

  return (
    <>
      {/* Testimonial Section  */}
      <section className="bg-[#3F5473] p-10 sm:p-20">
        <h2 className="jost font-bold text-3xl sm:text-4xl text-white tracking-wide text-center">
          Client Testimonials
        </h2>

        <div className="bg-white mt-10 rounded-xl p-5 sm:p-20 flex justify-center items-center sm:justify-evenly">
          <Swiper slidesPerView={3}>
            {/* Card  */}
            {testimonials.map((item) => {
              return (
                <div key={item.id}>
                  <SwiperSlide className="!w-fit animation-bounce ease-in-out duration-500">
                    <div
                      className="flex items-center overflow-hidden group"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      key={item.id}
                    >
                      <div className="overflow-hidden rounded-xl w-[210px] h-[330px]">
                        <div
                          className="rounded-xl w-fit h-1/2 sm:h-full aspect-square bg-cover bg-center bg-no-repeat aspect"
                          style={{
                            backgroundImage: `url(${builder
                              .image(item.clientimage)
                              .width(1000)
                              .url()})`,
                          }}
                          id={item}
                        ></div>
                      </div>
                      <div
                        className={`mx-5 z-10 hidden transition-all ease-in-out duration-500 testimonial`}
                        id={item.id}
                      >
                        <p className="text-8xl text-gray-300">
                          <RiDoubleQuotesL />
                        </p>
                        <div className="">
                          <PortableText
                            className="max-w-sm poppins mb-2"
                            content={item.content}
                            projectId="ien9wevf"
                            dataset="production"
                            serializers={{
                              h1: (props) => (
                                <h1
                                  style={{
                                    marginTop: "1rem ",
                                    marginBottom: "0.1rem",
                                    fontSize: "2.3rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              h2: (props) => (
                                <h2
                                  style={{
                                    marginTop: "1rem ",
                                    marginBottom: "0.1rem",
                                    fontSize: "1.9rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              h3: (props) => (
                                <h3
                                  style={{
                                    marginTop: "1rem",
                                    marginBottom: "0.1rem",
                                    fontSize: "1.6rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              h4: (props) => (
                                <h4
                                  style={{
                                    marginTop: "1rem ",
                                    marginBottom: "0.1rem",
                                    fontSize: "1.4rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              h5: (props) => (
                                <h5
                                  style={{
                                    marginTop: "1rem ",
                                    marginBottom: "0.1rem",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              h6: (props) => (
                                <h6
                                  style={{
                                    marginTop: "1rem ",
                                    marginBottom: "0.1rem",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                  }}
                                  {...props}
                                />
                              ),
                              li: ({ children }) => (
                                <li className="list-disc ml-7 mb-1">
                                  {children}
                                </li>
                              ),
                            }}
                          />
                          <h4 className="text-[#103040] font-bold jockey-one text-lg">
                            {item.name}
                          </h4>
                          <p className="text-[#103040] font-thin jockey-one">
                            {item.post}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>

        {/* <div className="Indicators flex items-center justify-center sm:justify-end mt-10 gap-x-5 sm:gap-x-7">
          <button className="border-4 border-white/20 rounded-full p-5 sm:p-7 flex- justify-center items-center">
            <BsArrowLeft className="text-5xl text-white/30" />
          </button>
          <button className="border-4 border-white/20 rounded-full p-5 sm:p-7 flex- justify-center items-center">
            <BsArrowRight className="text-5xl text-white/30" />
          </button>
        </div> */}
      </section>
      {/* Testimonial Section  */}
    </>
  );
};

export default Testimonial;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "testimonials"]`;
  const testimonials = await client.fetch(query);
  return {
    props: {
      testimonials,
    },
  };
}
