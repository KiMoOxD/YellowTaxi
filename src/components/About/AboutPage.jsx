import React from "react";
import { Cursor2 } from "../Other/CustomCursor.tsx";
import { TextEffect } from "../TextEffect.tsx";
import star from "../../star.gif";
import { LuMapPin } from "react-icons/lu";
import { SiDailydotdev } from "react-icons/si";
import kimo from "../../kimo.webp";
import { motion } from "framer-motion";
import { GoDatabase } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-[100vh] py-5 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        className="px-4 mb-5 grid grid-cols-1 place-items-center lg:grid-cols-3"
      >
        <div className="flex items-center lg:items-start relative flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="relative"
          >
            <img
              src={star}
              alt=""
              className="absolute top-0 md:top-1.5 md:left-[32px] md:w-[35px] lg:-top-1 left-[22px] w-[38px] lg:left-[39px] lg:w-[52px] drop-shadow-[0_0_12px_#facc1530]"
            />
            <TextEffect
              per="word"
              preset="fade"
              className="mt-3 mb-1 text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-semibold drop-shadow-[0_0_3px_#facc15]"
            >
              Kareem Mohamed
            </TextEffect>
          </motion.div>
          <div className="flex gap-2 items-center">
            <LuMapPin className="text-yellow-400" /> Cairo
          </div>
          <div className="flex gap-2 items-center">
            <SiDailydotdev className="text-yellow-400" /> Full Stack Engineer
          </div>
          <hr className="my-2 w-full" />
          <TextEffect
            per="word"
            preset="fade"
            className="mb-5 text-center lg:text-start text-lg drop-shadow-[0_0_2px_#ffeffe70]"
          >
            Kareem has a strong background in full-stack web development, with
            expertise in JavaScript, Python, FastAPI, React, and web application
            deployment.
          </TextEffect>
        </div>
        <Cursor2 img={kimo} name={"Kareem Mohammed"} />
        <div className="flex flex-col gap-2 p-2 bg-green-600/20">
          <img
            src="https://readme-typing-svg.herokuapp.com/?font=Aref+Ruqaa+Ink&duration=2000&pause=2000&color=FACC15&center=true&multiline=true&height=60&lines=Full+Stack+Engineer;Cyber+Security+Enthusiast"
            alt="Typing SVG"
          />
          <div className="flex gap-3 text-xl mt-2 mx-auto text-yellow-500">
            <a href="https://github.com/KiMoOxD" target="_blank" rel={'noreferrer'}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kareem-mohamed2002/" target="_blank" rel={'noreferrer'}><FaLinkedin /></a>
            <a href="https://www.facebook.com/kareemmohamed369" target="_blank" rel={'noreferrer'}><FaFacebook /></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring" }}
        className="px-4 grid grid-cols-1 place-items-center lg:grid-cols-3"
      >
        <div className="flex items-center lg:items-start relative flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="relative"
          >
            <img
              src={star}
              alt=""
              className="absolute top-0.5 md:top-1 md:left-[32px] md:w-[35px] lg:-top-1 left-[22px] w-[38px] lg:left-[39px] lg:w-[52px] drop-shadow-[0_0_12px_#facc1530]"
            />
            <TextEffect
              per="word"
              preset="fade"
              className="mt-3 mb-1 text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-semibold drop-shadow-[0_0_3px_#facc15]"
            >
              Youssef Ahmed
            </TextEffect>
          </motion.div>

          <div className="flex gap-2 items-center">
            <LuMapPin className="text-yellow-400" /> Cairo
          </div>
          <div className="flex gap-2 items-center">
            <GoDatabase className="text-yellow-400" /> Data Scientist
          </div>
          <hr className="my-2 w-full" />
          <TextEffect
            per="word"
            preset="fade"
            className="mb-5 text-center lg:text-start text-lg drop-shadow-[0_0_2px_#ffeffe70]"
          >
            Youssef has a strong background in data science, with expertise in
            Python, SQL, and data science tools like Python, scikit-learn,
            Numpy, and Pandas, as well as data visualization tools like Plotly,
            Matplotlib, and Seaborn.
          </TextEffect>
        </div>
        <Cursor2
          img={`https://github.com/youssefa7med/About/blob/main/assets/profile-pic.png?raw=true`}
          name={"Youssef Ahmed"}
        />
        <div className="flex flex-col gap-2 p-2 bg-green-600/20">
          <img
            src="https://readme-typing-svg.herokuapp.com/?font=Aref+Ruqaa+Ink&duration=2000&multiline=true&pause=2000&color=FACC15&center=true&height=60&lines=Data+Scientest;Machine+Learning+Engineer"
            alt="Typing SVG"
          />
          <div className="flex gap-3 text-xl mt-2 mx-auto text-yellow-500">
            <a href="https://github.com/youssefa7med" target="_blank" rel={'noreferrer'}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/youssef-ahmed-/" target="_blank" rel={'noreferrer'}><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=100049906008785" target="_blank" rel={'noreferrer'}><FaFacebook /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
