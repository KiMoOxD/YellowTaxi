import { Link } from "react-router-dom";
import AnimatedBackground from "./animated-background.tsx";

export default function AuthPortal() {

  return (
    <div className="flex flex-row">
      <AnimatedBackground
        defaultValue={"Register"}
        className="rounded-lg  dark:bg-stone-50/10  drop-shadow-[0_0_15px_#ffffff]"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        <Link to={'/signup'} data-id={"Register"}>
        <button
          type="button"
          className="px-2 py-0.5  text-sm text-white hover:text-zinc-600 transition-colors duration-300 dark:text-stone-400 dark:hover:text-zinc-50"
        >
          Register
        </button>
        </Link>
        <Link to={'/signin'} data-id={"Sign In"}>
        <button
          data-id={"Sign In"}
          type="button"
          className="px-2 py-0.5 text-sm text-white hover:text-zinc-600 transition-colors duration-300 dark:text-stone-400 dark:hover:text-zinc-50"
        >
          Sign In
        </button>
        </Link>
      </AnimatedBackground>
    </div>
  );
}
