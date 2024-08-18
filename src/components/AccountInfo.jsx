import { CiUser } from "react-icons/ci";
import { useGeneralContext } from "../context/GeneralContext";
import { useAuth } from "../context/AuthContext";

export default function AccountInfo() {
    let { isAccOpen, toggleAcc } = useGeneralContext()
    let { logout, currentUser } = useAuth()
  return (
    <div className="relative">
      <CiUser onClick={toggleAcc} />
      {isAccOpen && (
        <div className="top-6 left-1.5 animate-bounce border-b-4 border-r-4 border-l-4 border-b-stone-50 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
      {isAccOpen && <div className="absolute w-36 text-center border border-stone-50/30 bg-stone-50/5 backdrop-blur-sm p-1 right-0 top-[200%] rounded">
        <span className="text-xs">Welcome, {currentUser.displayName}!</span>
        <button 
            className="text-sm px-4 py-1 w-full bg-red-700/30 hover:bg-red-700/50 hover:text-stone-200 transition rounded backdrop-blur-sm"
            onClick={() => {logout(); toggleAcc()}}
        >Logout</button>
      </div>}
    </div>
  )
}
