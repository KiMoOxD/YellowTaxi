import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGeneralContext } from "../context/GeneralContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  let { isMenuOpen, toggleMenu } = useGeneralContext();
  let { currentUser } = useAuth()
  let navigate = useNavigate();
  let protectedPath = ['/predict']
  let AuthPath = ['/signin', '/signup']


  useEffect(() => {
    console.log(AuthPath.some(path => path === pathname))
    console.log(currentUser)
    if (protectedPath.some(path => path === pathname)) {
      if (!currentUser) {
        navigate("/signin");
        return;
      }
    } 

    window.scrollTo(0, 0);
    if(isMenuOpen) toggleMenu()
    // eslint-disable-next-line
  }, [pathname]);

  return null;
};

export default ScrollToTop;