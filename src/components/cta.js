import React from "react";

const CTA = () => {
  return (
    <>
      {/* CTA Section  */}
      <section className="bg-[#E7ECF2] p-20 flex flex-col justify-center items-center">
        <h3 className="text-[#3F5473] poppins font-semibold text-xl sm:text-2xl text-center">
          Take the first step towards achieving your goals today! Sign up for a
          free trial or contact our sales representatives to learn more.
        </h3>

        <div className="flex gap-x-10 flex-wrap justify-center">
          <div className="mt-10">
            <button className="w-40 py-4 border-2 hover:bg-transparent hover:border-[#1C4B6F] hover:text-[#1C4B6F] bg-[#1C4B6F] text-white transition-all ease-in-out duration-300 rounded font-bold jost">
              SIGN UP
            </button>
          </div>
          <div className="mt-10">
            <button className="w-40 py-4 bg-transparent border-2 border-[#1C4B6F] text-[#1C4B6F] hover:bg-[#1C4B6F] hover:text-white transition-all ease-in-out duration-300 rounded font-bold jost">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
      {/* CTA Section  */}
    </>
  );
};

export default CTA;
