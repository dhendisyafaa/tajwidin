import React from "react";
import NavbarComponent from "./NavbarComponent";

const NavbarLayout = ({ children }) => {
  return (
    <>
      <div className="flex justify-center my-3 md:hidden">
        <NavbarComponent />
      </div>
      {children}
    </>
  );
};

export default NavbarLayout;
