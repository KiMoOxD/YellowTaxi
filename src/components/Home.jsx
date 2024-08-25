import React from "react";
import { TextEffect } from "./TextEffect.tsx";
import { Link } from "react-router-dom";
import taxiimg from "../ezgif-7-8255d88569.gif";

export default function Home() {
  return (
    <div>
      <section className=" text-white min-h-[90vh] flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto relative max-w-lg text-center">
            <div className="flex justify-center items-center">
            </div>
            <div className="overflow-hidden relative h-[200px]">
            <img src={taxiimg} alt="Taxi Animation" className="w-full object-cover" />
            </div>
            <h2 className="w-[500px] text-3xl font-bold sm:text-4xl">
              Embark on Your Adventure
            </h2>
            <TextEffect per="char" preset="fade" className="mt-4 text-gray-300">
              Ready to explore the world?
            </TextEffect>
            <TextEffect per="char" preset="fade" className="mt-4 text-gray-300">
              Our platform offers personalized travel experiences tailored to
              your unique desires. From serene beach getaways to thrilling city
              adventures, we've got the perfect itinerary waiting for you.
              Embark on a journey of discovery and create unforgettable
              memories.
            </TextEffect>
          </div>

          <div className="mt-12 text-center">
            <Link
              to={"/predict"}
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
