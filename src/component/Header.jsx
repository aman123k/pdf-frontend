import React from "react";
import img from "../image/download.png";

function Header() {
  return (
    <>
      <header className="w-full bg-emerald-100 px-5 py-2">
        <div className=" w-24 h-12 mix-blend-multiply">
          <img
            className="w-full h-full object-contain mix-blend-multiply "
            src={img}
            alt=""
          />
        </div>
      </header>

      
    </>
  );
}

export default Header;
