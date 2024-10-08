import { CiMenuBurger } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useGeneralContext } from "../context/GeneralContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Menu() {
  let { isMenuOpen, toggleMenu } = useGeneralContext();
  console.log("menu");

  return (
    <div className="lg:hidden text-xl cursor-pointer">
      {!isMenuOpen && <CiMenuBurger onClick={toggleMenu} />}
      {isMenuOpen && <IoMdClose onClick={toggleMenu} />}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0.3, x: '50px' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '50px' }}
            transition={{ duration: 0.2}}
            className="h-[calc(100vh_-_48px)] origin-right w-full *:w-full *:text-center md:w-96 absolute top-[48px] right-0 pt-14 flex flex-col gap-2 border border-stone-50/10 bg-stone-900 rounded-sm"
          >
            <div
              className="text-white text-2xl absolute top-5 left-5"
              onClick={toggleMenu}
            >
              <IoMdExit />
            </div>
            <NavLink onClick={toggleMenu} to={"/"}>
              <div className="py-3 border border-stone-50/0 hover:border-stone-50/25 hover:bg-stone-50/5 shadow text-stone-50 hover:text-stone-200 transition">
                Home
              </div>
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/predict"}>
              <div className="py-3 border border-stone-50/0 hover:border-stone-50/25 hover:bg-stone-50/5 shadow text-stone-50 hover:text-stone-200 transition">
                Predict
              </div>
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/about"}>
              <div className="py-3 border border-stone-50/0 hover:border-stone-50/25 hover:bg-stone-50/5 shadow text-stone-50 hover:text-stone-200 transition">
                About
              </div>
            </NavLink>
          </motion.div>
        )}

        {/* {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0.5, x: "200px" }}
            animate={{ opacity: 1, x: "0" }}
            exit={{ opacity: 0, x: "200px" }}
            transition={{ duration: 1}}
            className="*:w-full *:text-center md:w-96 absolute top-[48px] right-0 pt-14 flex flex-col gap-2 rounded-sm"
          >
            dsad
          </motion.div>
        )} */}
      </AnimatePresence>
      {isMenuOpen && (
        <div className="top-8 right-5 animate-bounce border-b-4 border-r-4 border-l-4 border-b-stone-50 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
