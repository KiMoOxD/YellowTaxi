import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGeneralContext } from "../context/GeneralContext";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  let { isMenuOpen, toggleMenu } = useGeneralContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    if(isMenuOpen) toggleMenu()
    // eslint-disable-next-line
  }, [pathname]);

  return null;
};

export default ScrollToTop;