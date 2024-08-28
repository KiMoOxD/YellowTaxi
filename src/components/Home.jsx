import React from "react";
import { TextEffect } from "./TextEffect.tsx";
import { Link } from "react-router-dom";
import taxiimg from "../ezgif-7-8255d88569.gif";

export default function Home() {
  return (
    <div>
      <section className=" text-white min-h-[90vh] flex items-center justify-center">
        <div className="flex flex-col text-center lg:flex-row lg:text-start px-5 py-10 lg:justify-between items-center gap-10 mx-auto max-w-screen-2xl w-full">
          <div className="order-1 lg:order-0 mx-auto relative max-w-3xl">
            {/* <div className="overflow-hidden relative h-[200px]">
              <img
                src={taxiimg}
                alt="Taxi Animation"
                className="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
              />
            </div> */}
            <p
              per="char"
              preset="fade"
              className=" text-3xl font-bold sm:text-7xl"
            >
              Embark on Your <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">Adventure</span>
            </p>
            <TextEffect
              per="char"
              preset="fade"
              className="mt-4 text-gray-300 text-2xl"
            >
              Ready to explore the world?
            </TextEffect>
            <TextEffect
              per="char"
              preset="fade"
              className="mt-4 text-gray-300 text-md"
            >
              Our platform offers personalized travel experiences tailored to
              your unique desires. From serene beach getaways to thrilling city
              adventures, we've got the perfect itinerary waiting for you.
              Embark on a journey of discovery and create unforgettable
              memories.
            </TextEffect>
            <div className="mt-8">
              <Link
                to={"/predict"}
                className="inline-block rounded bg-transparent px-12 py-3 text-sm font-medium text-yellow-400 border lg:shadow-xl border-yellow-400 transition hover:shadow-yellow-500/50 hover:bg-yellow-400/80 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>

          <div class="relative drop-shadow-[0_0_10px_rgba(250,204,255,0.1)] lg:min-w-[280px] mx-auto lg:mr-auto lg:ml-0 order-0 lg:order-1 border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] lg:h-[550px] w-[210px] lg:w-[290px] shadow-xl">
            <div class="z-10 w-[100px] lg:w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div class="z-10 h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="z-10 h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="z-10 h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
              <div className="overflow-hidden absolute top-0 w-full rounded-[2.5rem] bg-[#374151] h-[130px] lg:h-[200px]">
                <img
                  src={taxiimg}
                  alt="Taxi Animation"
                  className="w-full absolute top-[65%] lg:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                className="block w-full h-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
