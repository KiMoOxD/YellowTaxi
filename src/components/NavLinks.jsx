import { NavLink } from "react-router-dom";
import AnimatedBackground from "./animated-background.tsx";

export default function NavLinks() {
  return (
    <div className="hidden items-center  h-12 lg:flex flex-row">
      <AnimatedBackground
        defaultValue={"Home"}
        className="rounded-lg  dark:bg-slate-500/10  drop-shadow-[0_0_15px_#ffffff]"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        <NavLink to={"/"} data-id={"Home"}>
          <button
            type="button"
            className="w-24 py-1 h-fit flex justify-center items-center text-sm text-white hover:text-zinc-600 transition-colors duration-300 dark:text-stone-400 dark:hover:text-zinc-50"
          >
            Home
          </button>
        </NavLink>
        <NavLink to={"/predict"} data-id={"Predict"}>
          <button
            type="button"
            className="w-24 py-1 h-fit flex justify-center items-center text-sm text-white hover:text-zinc-600 transition-colors duration-300 dark:text-stone-400 dark:hover:text-zinc-50"
          >
            Predict
          </button>
        </NavLink>
        <NavLink to={"/about"} data-id={"about"}>
          <button
            type="button"
            className="w-24 py-1 h-fit flex justify-center items-center text-sm text-white hover:text-zinc-600 transition-colors duration-300 dark:text-stone-400 dark:hover:text-zinc-50"
          >
            About
          </button>
        </NavLink>
      </AnimatedBackground>
    </div>
  );
}



// export default function NavLinks() {
//   return (
//     <ul className="hidden lg:flex gap-2 *:w-24 *:h-12 *:flex *:justify-center *:transition *:cursor-pointer *:items-center">
//       <NavLink className="hover:bg-slate-200" to={"/"}>
//         <li>Home</li>
//       </NavLink>
//       <NavLink className="hover:bg-slate-200" to={'/predict'}>
//         <li>Predict</li>
//       </NavLink>
//     </ul>
//   );
// }
