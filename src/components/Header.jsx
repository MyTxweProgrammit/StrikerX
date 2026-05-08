import React, { useState } from "react";
import CaptureLogo from "../assets/CaptureLogo.png";
import { Link } from "react-router-dom";
import { darkON } from "./Auth/DarkModeSession";
import { motion, useScroll } from "motion/react";

export default function Header({ wants }) {
  const [touch, setTouch] = useState(false);
  const [colorWorldIcon, setColorWorldIcon] = useState("#495199");
  const [heightNav, setheightNav] = useState(false)
  const { scrollYProgress } = useScroll();
  const TrueAndChange = () => {
    setTouch(!touch);
    if (touch) {
      setColorWorldIcon("#495199");
    } else {
      setColorWorldIcon("#7773ff");
    } // change color of world icon when hover
  };
  const showNavBar = () => setheightNav(!heightNav)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "-15px" }}
        animate={{ opacity: 1, translateY: "0px", transition: { duration: 0.7 } }}
        className={`shadow-sm w-screen h-[60px] around sticky top-0 z-50 bg-white dark:bg-slate-800`}
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
                <h3 className="text-[#495199] outfit-txwe dark:text-blue-200 text-lg font-bold max-[440px]:hidden rubik-txwe">
                  StrikerX
                </h3>
              </div>
            </div>
          </Link>
        ) : (
          <div className="center gap-[7px] cursor-pointer">
            <img src={CaptureLogo} alt="logo website" class="w-[32px] h-[30px]" />
            <div className="center">
              <h3 className="text-[#495199] outfit-txwe dark:text-blue-200 text-lg font-bold max-[440px]:hidden">
                StrikerX
              </h3>
            </div>
          </div>
        )}
        <div className="center">
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" checked={heightNav} onClick={showNavBar} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
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
      <div className={`fixed top-[60px] z-50 w-screen transition-all duration-500 bg-white overflow-hidden px-[30px] dark:bg-slate-800 ${heightNav ? "h-screen" : "h-0"}`}>
        <Link style={{ display: "inline-flex", marginTop: 30 }} to="*">
          <span className="w-fit rubik-txwe text-black text-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Business</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/>
          </svg>
        </Link> <br />
        <Link style={{ display: "inline-block" }} to="/blog">
          <p className="w-fit rubik-txwe text-black text-[30px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Blog</p>
        </Link> <br />
        <Link style={{ display: "inline-block" }} to="*">
          <p className="w-fit rubik-txwe text-black text-[30px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">About Us</p>
        </Link> <br />
        <Link style={{ display: "inline-block" }} to="/user/community">
          <p className="w-fit rubik-txwe text-black text-[30px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Community</p>
          <div className="bg-blue-500 w-fit py-[5px] px-[7px] rounded-[10px] absolute top-[240px] left-[200px]">
            <p className="text-white outfit-txwe text-[12px]">NEW</p>
          </div>
        </Link> <br />
        <Link style={{ display: "inline-block" }} to="*">
          <p className="w-fit rubik-txwe text-black text-[30px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Sponsor</p>
        </Link>
        <hr className="w-[90%] border-2 border-slate-200 mt-[30px] dark:border"/>
        <Link style={{ display: "inline-flex", marginTop: 30 }} to="/signup">
          <span className="w-fit rubik-txwe text-black text-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Try StrikerX</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M8 7h9v9"/>
          </svg>
        </Link> <br />
        <Link style={{ display: "inline-block" }} to="/signin">
          <p className="w-fit rubik-txwe text-black text-[30px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-white">Sign In</p>
        </Link>
        <p className="w-fit rubik-txwe text-black text-[14px] mt-[30px] duration-500 active:ml-[20px] hover:ml-[20px] hover:text-slate-500 dark:text-slate-400">V0.1.0 - ALPHA</p>
      </div>
    </>
  );
}
