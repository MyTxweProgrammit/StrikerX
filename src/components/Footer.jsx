import React from "react"
import { Link } from "react-router-dom"
import { useMediaQuery } from "@react-hooks-hub/use-media-query";

export default function Footer() {
    const { device } = useMediaQuery({
        breakpoints: { mobile: 600 },
    });
    return (
        <>
            { device <= "mobile" ? (
                <div className="w-full h-fit bg-white pt-[30px]">
                    <div className="w-full py-[25px] center gap-[16%]">
                        <p className="font-bold text-black text-[20px]">StrikerX</p>
                        <div className="center gap-[10px]">
                            <Link to="*" style={{ color: "black", fontWeight: 400 }}>About</Link>
                            <Link to="*" style={{ color: "black", fontWeight: 400 }}>Features</Link>
                            <Link to="*" style={{ color: "black", fontWeight: 400 }}>Works</Link>
                            <Link to="*" style={{ color: "black", fontWeight: 400 }}>Support</Link>
                        </div>
                        <div className="center gap-[10px]">
                            <div className="cursor-pointer">
                                <Link to="https://github.com/MyTxweProgrammit/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cursor-pointer">
                                <Link to="https://www.instagram.com/txwe18_/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cursor-pointer">
                                <Link to="https://www.facebook.com/maytee.sukchaung" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="border border-solid border-slate-200"/>
                    <div className="w-full flex items-center justify-around py-[15px]">
                        <p className="text-black text-[14px]">@ Copyright 2024, All Rights Reserved</p>
                        <div className="center gap-[10px]">
                            <p className="text-black text-[14px]">Privacy Policy</p>
                            <p className="text-black text-[14px]">Terms & Conditions</p>    
                        </div>
                    </div>
                    <div className="pb-[10px]">
                        <hr className="border border-solid border-slate-200 mx-auto mb-[15px] w-[80%]"/>
                        <p className="text-black text-center">View <Link to="https://github.com/MyTxweProgrammit/prodevs" target="_blank">Source Code</Link> on Github</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white w-full h-fit pl-[20px] pt-[70px]">
                    <p className="font-bold text-black text-[25px]">StrikerX</p> <hr className="my-[15px] border border-solid border-white"/>
                    <Link to="*" style={{ color: "black", fontWeight: 400 }}>About</Link> <br/> <hr className="my-[7px] border border-solid border-white"/>
                    <Link to="*" style={{ color: "black", fontWeight: 400 }}>Features</Link> <br/> <hr className="my-[7px] border border-solid border-white"/>
                    <Link to="*" style={{ color: "black", fontWeight: 400 }}>Works</Link> <br/> <hr className="my-[7px] border border-solid border-white"/>
                    <Link to="*" style={{ color: "black", fontWeight: 400 }}>Support</Link> <br/>
                    <div className="center gap-[10px] w-fit mt-[25px]">
                            <div className="cursor-pointer">
                                <Link to="https://github.com/MyTxweProgrammit/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cursor-pointer">
                                <Link to="https://www.instagram.com/txwe18_/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                                    </svg>
                                </Link>
                            </div>
                            <div className="cursor-pointer">
                                <Link to="https://www.facebook.com/maytee.sukchaung" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#717171" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/>
                                    </svg>
                                </Link>
                            </div>
                    </div>
                    <hr className="border border-solid border-slate-200 mt-[50px] ml-[-20px]"/>
                    <p className="text-black text-[14px] my-[30px]">@ Copyright 2024, All Rights Reserved</p>
                    <Link to="*" style={{ color: "black", fontWeight: 400, fontSize: "14px" }}>Privacy Policy</Link>
                    <Link to="*" style={{ color: "black", fontWeight: 400, fontSize: "14px", marginLeft: "20px" }}>Terms & Conditions</Link> <br/>
                    <p className="text-black font-[400] text-[14px] mt-[10px]">View <Link to="https://github.com/MyTxweProgrammit/prodevs" target="_blank">Source Code</Link> on Github</p>
                    <section className="w-full h-[60px] ml-[-20px]"></section>
                </div>
            )}
        </>
    )
}