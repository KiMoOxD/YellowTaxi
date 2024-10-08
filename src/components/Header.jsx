import Menu from "./menu";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import AuthPortal from "./AuthPortal";
import { useAuth } from "../context/AuthContext";
import AccountInfo from "./AccountInfo";


export default function Header() {
  let { currentUser } = useAuth()
  console.log("header");

  return (
    <div className="flex sticky bg-yellow-300/5 rounded-lg h-12 top-0 z-40 mx-auto justify-between items-center px-4">
      <Link to={`/`}>
        <h1 className="font-['Edu_AU_VIC_WA_NT_Hand'] text-lg">
          <span className="text-yellow-400">NYC</span> <span>T</span><span className="text-stone-400">a</span><span>x</span><span className="text-stone-400">i</span>!
        </h1>
      </Link>
      <NavLinks />
      
      <div className="flex gap-3 text-xl items-center cursor-pointer">
        {!currentUser && <AuthPortal />}
        {currentUser && <AccountInfo />}
        <Menu />
      </div>
    </div>
  );
}