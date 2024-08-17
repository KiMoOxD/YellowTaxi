import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";


export default function RootLayout() {
  return (
    <>
      <div className="max-w-screen-2xl lg:px-3 3xl:px-0 relative mx-auto">
        <Header />
        <ScrollToTop />
        <Outlet />
      </div>
    </>
  );
}
