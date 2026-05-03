import React, { useState } from "react";
import CaptureLogo from "../assets/CaptureLogo.png";
import { Link } from "react-router-dom";
import { darkON } from "./Auth/DarkModeSession";
import { motion, useScroll } from "motion/react";

export default function Header({ wants }) {
  const [touch, setTouch] = useState(false);
  const [colorWorldIcon, setColorWorldIcon] = useState("#495199");
  const { scrollYProgress } = useScroll();
  const TrueAndChange = () => {
    setTouch(!touch);
    if (touch) {
      setColorWorldIcon("#495199");
    } else {
      setColorWorldIcon("#7773ff");
    } // change color of world icon when hover
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-15px" }}
      animate={{ opacity: 1, translateY: "0px", transition: { duration: 0.7 } }}
      className={`shadow-sm w-screen h-[60px] around sticky top-0 z-10 bg-white dark:bg-slate-800`}
    >
      {wants ? (
        <Link to="/">
          <div className="center gap-[7px]">
            <img
              src={CaptureLogo}
              alt="logo website"
              class="w-[32px] h-[30px]"
            />
            <div className="center">
              <h3 className="text-[#495199] dark:text-blue-200 text-lg font-extrabold max-[440px]:hidden">
                Striker
              </h3>
              <h3 className="text-[#495199] dark:text-blue-200 text-lg font-medium max-[440px]:hidden">
                X
              </h3>
            </div>
          </div>
        </Link>
      ) : (
        <div className="center gap-[7px] cursor-pointer">
          <img src={CaptureLogo} alt="logo website" class="w-[32px] h-[30px]" />
          <div className="center">
            <h3 className="text-[#495199] dark:text-blue-200 text-lg font-extrabold max-[440px]:hidden">
              Striker
            </h3>
            <h3 className="text-[#495199] dark:text-blue-200 text-lg font-medium max-[440px]:hidden">
              X
            </h3>
          </div>
        </div>
      )}
      <div className="center gap-[10px]">
        <Link to="/signin">
          <div className="text-[#495199] font-medium rounded-lg py-[3px] px-[8px] duration-[0.6s] cursor-pointer hover:bg-[#94bdff] hover:text-white active:bg-[#94bdff] active:text-white dark:text-blue-300">
            Login
          </div>
        </Link>
        <Link to="/signup">
          <div className="text-white font-medium rounded-lg py-[3px] px-[8px] duration-[0.5s] cursor-pointer bg-[#003c9c] hover:bg-[#0062ff] active:bg-[#0062ff] dark:bg-blue-500">
            Get Started
          </div>
        </Link>
      </div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 60,
          left: 0,
          right: 0,
          height: 6,
          originX: 0,
          background:
            "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
          zIndex: 99,
          borderRadius: 20,
        }}
      />
    </motion.div>
  );
}
