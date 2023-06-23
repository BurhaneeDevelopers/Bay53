import React from "react";
import Image from "next/image";

// Backend
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Clients = ({ clients }) => {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
  });

  const builder = imageUrlBuilder(client);

  return (
    <>
      {/* Clients Section */}
      <div className="bg-[#FBF5EC] p-20">
        <h2 className="jost font-bold text-4xl text-[#3F5473] text-center tracking-wide">
          Most Prominent Clients
        </h2>

        <div className="flex justify-center gap-5 mt-14 flex-wrap md:px-24 lg:px-32">
          {clients.map((item) => {
            return (
              <div
                className="px-5 bg-white border-2 border-red-300 border-dashed"
                key={item.title}
              >
                <div
                  className="w-40 h-32 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${builder
                      .image(item.clientlogo)
                      .width(1000)
                      .url()})`,
                  }}
                ></div>
              </div>
            );
          })}
          {/* <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div>
          <div className="px-5 bg-white xs:w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/5 border-2 border-red-300 border-dashed">
            <Image
              width={500}
              height={500}
              src="/clients/client-1.png"
              className="w-full h-full"
            />
          </div> */}
        </div>
      </div>
      {/* Clients Section */}
    </>
  );
};

export default Clients;

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "16lbh5q7",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const query = `*[_type == "clients"]`;
  const clients = await client.fetch(query);
  return {
    props: {
      clients,
    },
  };
}
