import React from "react"
import Header from "./Header"
import ThemeToggle from "./ThemeToggle"
import CaptureLogo from "../assets/CaptureLogo.png"
import Markdown from "../assets/Markdown.png"
import react from "../assets/React.png"
import Python from "../assets/Python.png"
import Marquee from "react-fast-marquee"

export default function Main() {
    return (
        <div className="relative w-screen h-[1000px]">
            <div className="absolute bg-white w-screen h-[60px]"></div>
            <title>StrikerX - Learn Everything About Programming!</title>
            <Header wants={false} />
            <div className="bg-white w-screen bg-white pt-[10%] pb-[25px] max-[450px]:pt-[80px]">
                <div className="center"> {/* Logo */}
                    <img src={CaptureLogo} />
                </div>
                <p className="text-center bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text text-[50px] font-medium max-[520px]:text-[35px]">StrikerX</p>
                <p className="text-black text-center text-[26px] font-medium max-[520px]:text-[20px]">The area of code learning that never stops!</p>
                <div className="mx-auto w-fit h-fit mt-[10px] group">
                    <div className="py-2 px-[10px] rounded-[25px] max-[520px]:text-[11px] w-fit text-white bg-[#5482ff] font-medium cursor-pointer duration-[0.5s] group-hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-[#5482ff] group-hover:text-[#5482ff] relative overflow-hidden
                    active:bg-white active:border-2 active:border-solid active:border-[#5482ff] active:text-[#5482ff]
                    ">
                        Start Learning
                        <div className="absolute bg-[#5482ff] w-[30px] h-full top-0 translate-x-[-40px] group-hover:translate-x-[115px] duration-[0.5s]"></div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-left w-screen pt-[20px]">
                <p className="font-bold text-[25px] ml-[20px] max-[520px]:text-[20px] text-white">What will you learn?</p>
                <p className="ml-[20px] bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text max-[520px]:text-[13px]">Here is you might like.</p>
                <div className="mt-[20px]"> {/* border of card */}
                    <Marquee className="flex h-[200px]">
                        <div className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]">
                            <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                                <div className="bg-white w-fit h-fit p-2 rounded-full">
                                    <img src={Markdown} className="w-[22px] h-[22px]" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">MarkDown</p>
                                    <p className="text-sm mt-[-3px] text-white">Maytee Sukchaung</p>
                                </div>
                            </div>
                            <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                                Learn something about simple text organization. This name file is "md". So remember and prepare to look its value. You will got a very simple different text output.
                            </p>
                        </div>
                        <div className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]">
                            <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                                <div className="bg-white w-fit h-fit p-2 rounded-full">
                                    <img src={react} className="w-[22px] h-[22px]" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">ReactJS</p>
                                    <p className="text-sm mt-[-3px] text-white">Maytee Sukchaung</p>
                                </div>
                            </div>
                            <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                                A very popular JavaScript framework which most of programmer also know it. It was created by Facebook worker for building user interfaces and create website.
                            </p>
                        </div>
                        <div className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]">
                            <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                                <div className="bg-white w-fit h-fit p-2 rounded-full">
                                    <img src={Python} className="w-[22px] h-[22px]" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Python</p>
                                    <p className="text-sm mt-[-3px] text-white">Maytee Sukchaung</p>
                                </div>
                            </div>
                            <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                                The best programming language that never dies! Many learners decide to start this language first. It have a more simple syntax that you will easily understand.
                            </p>
                        </div>
                    </Marquee>
                </div>
            </div>
            <ThemeToggle />
        </div>
    )
}