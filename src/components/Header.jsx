import Menu from "./menu";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import AuthPortal from "./AuthPortal";
import { useAuth } from "../context/AuthContext";
import AccountInfo from "./AccountInfo";


export default function Header() {
  let { currentUser } = useAuth()
  return (
    <div className="flex sticky h-12 top-0 z-40 mx-auto justify-between items-center px-4 2xl:px-0">
      <Link to={`/`}>
        <h1 className="font-['Edu_AU_VIC_WA_NT_Hand'] drop-shadow-[0_0_5px_#ffffff70]">
          Yellow Taxi!
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