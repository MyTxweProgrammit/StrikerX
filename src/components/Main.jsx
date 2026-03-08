import React, { useEffect, useState } from "react"
import Header from "./Header"
import ThemeToggle from "./ThemeToggle"
import CaptureLogo from "../assets/CaptureLogo.png"
import Markdown from "../assets/Markdown.png"
import react from "../assets/React.png"
import Python from "../assets/Python.png"
import Marquee from "react-fast-marquee"
import { motion } from "motion/react" 
import CEObigbrother from "../assets/CEObigbrother.png"
import { database } from "./../firebase-config"
import { ref, onValue, update } from "firebase/database"

export default function Main() {
    const [liked, setLiked] = useState(0)
    useEffect(() => {
        const likedRef = ref(database, 'utilities/');
        const unsubscribe = onValue(likedRef, (snapshot) => {
            const data = snapshot.val().likeCEO;
            if (data !== null) {
                setLiked(data);
            }
        });
        return () => unsubscribe()
    }, []);
    const updateLiked = () => {
        const postData = {
            likeCEO: liked + 1
        };
        const updates = {};
        updates['utilities/'] = postData;
        update(ref(database), updates)
    }

    return (
        <div className="relative w-screen h-full">
            <div className="absolute bg-white w-screen h-[60px]"></div>
            <title>StrikerX - Learn Everything About Programming!</title>
            <Header wants={false} />
            <div className="bg-white w-screen bg-white pt-[10%] pb-[25px] max-[450px]:pt-[80px]" id="test">
                <div className="center"> {/* Logo */}
                    <img src={CaptureLogo} />
                </div>
                <p className="text-center bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text text-[50px] font-medium max-[520px]:text-[35px]">StrikerX</p>
                <div className="w-fit mx-auto text-black">
                    <p className="text-black text-center text-[26px] font-medium max-[520px]:text-[20px]">The area of code learning for DEV!</p>
                </div>
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
            <div className="relative w-full h-[1380px] bg-[#242424]">
                <motion.div
                    className="absolute bg-slate-300 w-[230px] h-[280px] translate-y-[960px] rounded-[10px]"
                    initial={{ translateX: "-200px", rotate: 0, opacity: 0 }}
                    whileInView={{ translateX: "0px", rotate: 20, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                </motion.div>
                <motion.div
                    className="bg-white w-[250px] h-[300px] translate-y-[1000px] rounded-[10px] pt-[10px] duration-[0.5s] hover:scale-[1.1]"
                    initial={{ translateX: "-200px", rotate: 0, opacity: 0 }}
                    whileInView={{ translateX: "0px", rotate: 30, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="rounded-full w-[60px] h-[60px] mx-auto overflow-hidden">
                        <img src={CEObigbrother} alt="CEO of StikerX"/>
                    </div>
                    <p className="inter-txwe text-black font-bold text-center text-[14px] mt-[5px]">Maytee Sukchaung</p>
                    <p className="inter-txwe text-black text-center text-[8px] ">CEO & Developer of StrikerX</p>
                    <div className="mx-auto">
                        <p className="inter-txwe text-slate-500 text-[10px] mt-[10px] mx-[25px]">Hello everyone!, I'm T who is the ceo of this website. Actually I created this course because I want to have some project that can share your knowledge to other. I hope you all to enjoy with this project :)</p>
                    </div>
                    <div className="center gap-[5px]">
                        <div className="text-black cursor-pointer" onClick={updateLiked}>Click</div>
                        <div className="text-black">{liked}</div>
                    </div>
                </motion.div>
            </div>
            {/* <ThemeToggle /> */}
        </div>
    )
}