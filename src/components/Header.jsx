import React, { useState } from "react"
import CaptureLogo from "../assets/CaptureLogo.png"
import { Link } from "react-router-dom"

export default function Header({ wants }) {
    const [touch, setTouch] = useState(false)
    const [colorWorldIcon, setColorWorldIcon] = useState("#495199")
    const TrueAndChange = () => {
        setTouch(!touch)
        if (touch) { setColorWorldIcon("#495199") }
        else { setColorWorldIcon("#7773ff") } // change color of world icon when hover
    }

    return (
        <div className="shadow-sm w-screen h-[60px] around bg-white sticky top-0 z-10">
            {(wants) ? (
                <Link to='/'>
                    <div className="center gap-[7px]">
                        <img src={CaptureLogo} alt="logo website" class="w-[32px] h-[30px]" />
                        <div className="center">
                            <h3 className="text-[#495199] text-lg font-extrabold max-[440px]:hidden">Pro</h3>
                            <h3 className="text-[#495199] text-lg font-medium max-[440px]:hidden">DEVs</h3>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className="center gap-[7px] cursor-pointer">
                    <img src={CaptureLogo} alt="logo website" class="w-[32px] h-[30px]" />
                    <div className="center">
                        <h3 className="text-[#495199] text-lg font-extrabold max-[440px]:hidden">Pro</h3>
                        <h3 className="text-[#495199] text-lg font-medium max-[440px]:hidden">DEVs</h3>
                    </div>
                </div>
            )}
            <div className="center gap-[10px]">
                <Link to='/signin'>
                    <div className="text-[#495199] font-medium rounded-lg py-[3px] px-[8px] duration-[0.6s] cursor-pointer hover:bg-[#94bdff] hover:text-white active:bg-[#94bdff] active:text-white">Login</div>
                </Link>
                <Link to='/signup'>
                    <div className="text-white font-medium rounded-lg py-[3px] px-[8px] duration-[0.5s] cursor-pointer bg-[#003c9c] hover:bg-[#0062ff] active:bg-[#0062ff]">Get Started</div>
                </Link>
                <div
                    onMouseEnter={TrueAndChange}
                    onMouseLeave={TrueAndChange}
                    className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke={`${colorWorldIcon}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20.94 13.045A9 9 0 1 0 11.987 21M3.6 9h16.8M3.6 15H13" /><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.529 10.294M16 22l5-5m0 4.5V17h-4.5" /></g>
                    </svg>
                </div>
            </div>
        </div>
    )
}