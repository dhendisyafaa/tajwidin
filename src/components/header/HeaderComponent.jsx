import React from "react";
import NavbarComponent from "../navbar/NavbarComponent";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center">
      <p
        // style={{ fontFamily: "Amita, cursive" }}
        style={{ fontFamily: "Redressed, cursive" }}
        className="text-green text-3xl"
      >
        TajwidIn
      </p>
      <div className="hidden md:block">
        <NavbarComponent />
      </div>
    </div>
  );
};

export default HeaderComponent;
