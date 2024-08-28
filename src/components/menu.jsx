import { CiMenuBurger } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useGeneralContext } from "../context/GeneralContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu() {
  let { isMenuOpen, toggleMenu } = useGeneralContext();

  return (
    <div className="lg:hidden text-xl cursor-pointer relative">
      {!isMenuOpen && <CiMenuBurger onClick={toggleMenu} />}
      {isMenuOpen && <IoMdClose onClick={toggleMenu} />}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring" }}
            className="h-[98vh] w-[100vw] *:w-full *:text-center md:w-96 absolute top-[180%] right-[-75%] pt-14 flex flex-col gap-2 bg-[#0c0b1549] border border-stone-50/10 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 shadow rounded-sm"
          >
            <div
              className="text-white text-2xl absolute top-5 left-5"
              onClick={toggleMenu}
            >
              <IoMdExit />
            </div>
            <NavLink onClick={toggleMenu} to={"/"}>
              <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
                Home
              </div>
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/predict"}>
              <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
                Predict
              </div>
            </NavLink>
            <NavLink onClick={toggleMenu} to={"/about"}>
              <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
                About
              </div>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
      {isMenuOpen && (
        <div className="top-6 left-1.5 animate-bounce border-b-4 border-r-4 border-l-4 border-b-stone-50 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
