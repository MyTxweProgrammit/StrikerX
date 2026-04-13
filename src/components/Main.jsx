import React, { useEffect, useState } from "react";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import CaptureLogo from "../assets/CaptureLogo.png";
import Markdown from "../assets/Markdown.png";
import react from "../assets/React.png";
import Python from "../assets/Python.png";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useMediaQuery } from "@react-hooks-hub/use-media-query";
import CEObigbrother from "../assets/CEObigbrother.png";
import { database } from "./../firebase-config";
import { ref, onValue, update } from "firebase/database";

export default function Main() {
  const { device } = useMediaQuery({
    breakpoints: { mobile: 600 },
  });
  const [liked, setLiked] = useState(0);
  const [showPOP, setShowPOP] = useState(false);
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  });
  useEffect(() => {
    const likedRef = ref(database, "utilities/");
    const unsubscribe = onValue(likedRef, (snapshot) => {
      const data = snapshot.val().likeCEO;
      if (data !== null) {
        setLiked(data);
      }
    });
    return () => unsubscribe();
  }, []);
  const updateLiked = () => {
    const postData = {
      likeCEO: liked + 1,
    };
    const updates = {};
    updates["utilities/"] = postData;
    update(ref(database), updates);
  };
  const closePOP = (e) => {
    // Click outside popup (glassmorphism) to close it which can't affect to inside popup
    if (e.target === e.currentTarget) setShowPOP(false);
  };

  return (
    <div className="relative w-screen h-full">
      <div className="absolute bg-white w-screen h-[60px]"></div>
      <title>StrikerX - Learn Everything About Programming!</title>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5211508376773772"
          crossorigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-5211508376773772"
        ></meta>
      </head>
      <Header wants={false} />
      <div
        className="bg-white w-screen bg-white pt-[10%] pb-[25px] max-[450px]:pt-[80px]"
        id="test"
      >
        <motion.div
          className="center"
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 1 },
          }}
        >
          {" "}
          {/* Logo */}
          <img src={CaptureLogo} />
        </motion.div>
        <motion.p
          className="text-center bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text text-[50px] font-medium max-[520px]:text-[35px]"
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.7 },
          }}
        >
          StrikerX
        </motion.p>
        <div className="w-fit mx-auto text-black">
          <motion.p
            initial={{ opacity: 0, translateY: "-15px" }}
            animate={{
              opacity: 1,
              translateY: "0px",
              transition: { duration: 1 },
            }}
            className="text-black text-center text-[26px] font-medium max-[520px]:text-[20px]"
          >
            The area of code learning for DEV!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 1 },
          }}
          className="mx-auto w-fit h-fit mt-[10px] group"
        >
          <div
            className="py-2 px-[10px] rounded-[25px] max-[520px]:text-[11px] w-fit text-white bg-[#5482ff] font-medium cursor-pointer duration-[0.5s] group-hover:bg-white group-hover:border-2 group-hover:border-solid group-hover:border-[#5482ff] group-hover:text-[#5482ff] relative overflow-hidden
                    active:bg-white active:border-2 active:border-solid active:border-[#5482ff] active:text-[#5482ff]
                    "
          >
            Start Learning
            <div className="absolute bg-[#5482ff] w-[30px] h-full top-0 translate-x-[-40px] group-hover:translate-x-[115px] duration-[0.5s]"></div>
          </div>
        </motion.div>
      </div>
      <div className="bg-gradient-left w-screen pt-[20px]">
        <motion.p
          className="font-bold text-[25px] ml-[20px] max-[520px]:text-[20px] text-white"
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 1 },
          }}
        >
          What will you learn?
        </motion.p>
        <motion.p
          className="ml-[20px] bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 text-transparent bg-clip-text max-[520px]:text-[13px]"
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 1 },
          }}
        >
          Here is you might like.
        </motion.p>
        <div className="mt-[20px]">
          {" "}
          {/* border of card */}
          <Marquee className="flex h-[200px]">
            <motion.div
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 1 },
              }}
              className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]"
            >
              <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                <div className="bg-white w-fit h-fit p-2 rounded-full">
                  <img src={Markdown} className="w-[22px] h-[22px]" />
                </div>
                <div>
                  <p className="font-bold text-white">MarkDown</p>
                  <p className="text-sm mt-[-3px] text-white">
                    Maytee Sukchaung
                  </p>
                </div>
              </div>
              <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                Learn something about simple text organization. This name file
                is "md". So remember and prepare to look its value. You will got
                a very simple different text output.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 1 },
              }}
              className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]"
            >
              <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                <div className="bg-white w-fit h-fit p-2 rounded-full">
                  <img src={react} className="w-[22px] h-[22px]" />
                </div>
                <div>
                  <p className="font-bold text-white">ReactJS</p>
                  <p className="text-sm mt-[-3px] text-white">
                    Maytee Sukchaung
                  </p>
                </div>
              </div>
              <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                A very popular JavaScript framework which most of programmer
                also know it. It was created by Facebook worker for building
                user interfaces and create website.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: "-15px" }}
              animate={{
                opacity: 1,
                translateY: "0px",
                transition: { duration: 1 },
              }}
              className="mx-[10px] w-[300px] h-[171px] bg-[#1f2940] border border-solid border-transparent shadow-xl rounded-[10px] duration-[0.5s] hover:translate-x-[-10px] hover:translate-y-[-10px] cursor-pointer active:translate-x-[-10px] active:translate-y-[-10px]"
            >
              <div className="center gap-[15px] w-fit mt-[20px] ml-[20px]">
                <div className="bg-white w-fit h-fit p-2 rounded-full">
                  <img src={Python} className="w-[22px] h-[22px]" />
                </div>
                <div>
                  <p className="font-bold text-white">Python</p>
                  <p className="text-sm mt-[-3px] text-white">
                    Maytee Sukchaung
                  </p>
                </div>
              </div>
              <p className="mx-[20px] mt-[10px] mb-[20px] text-[#7582a1] text-[13px]">
                The best programming language that never dies! Many learners
                decide to start this language first. It have a more simple
                syntax that you will easily understand.
              </p>
            </motion.div>
          </Marquee>
        </div>
      </div>
      <div className="relative w-full h-[1380px] bg-[#242424]">
        <motion.div
          className="absolute bg-slate-300 w-[230px] h-[280px] translate-y-[50px] rounded-[10px]"
          initial={{ translateX: "-200px", rotate: 0, opacity: 0 }}
          whileInView={{ translateX: "0px", rotate: 20, opacity: 1 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <motion.div
          className="bg-white w-[250px] h-[300px] translate-y-[90px] rounded-[10px] pt-[10px] duration-[0.5s] hover:scale-[1.1]"
          initial={{ translateX: "-200px", rotate: 0, opacity: 0 }}
          whileInView={{ translateX: "0px", rotate: 30, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="rounded-full w-[60px] h-[60px] mx-auto overflow-hidden">
            <img src={CEObigbrother} alt="CEO of StikerX" />
          </div>
          <p className="inter-txwe text-black font-bold text-center text-[14px] mt-[5px]">
            Maytee Sukchaung
          </p>
          <p className="inter-txwe text-black text-center text-[8px] ">
            CEO & Developer of StrikerX
          </p>
          <div className="mx-auto">
            <p className="inter-txwe text-slate-500 text-[10px] mt-[10px] mx-[25px]">
              Hello everyone!, I'm T who is the ceo of this website. Actually I
              created this course because I want to have some project that can
              share your knowledge to other. I hope you all to enjoy with this
              project :)
            </p>
          </div>
          <div className="center w-fit relative left-[70%] mt-[15px]">
            <div className="cursor-pointer" onClick={updateLiked}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17px"
                height="17px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ff1500"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                />
              </svg>
            </div>
            <div className="text-[#ff1500] text-[13px] font-bold ml-[5px]">
              {formatter.format(liked)}
            </div>
          </div>
          <div className="center w-fit relative left-[70%]">
            <div className="cursor-pointer" onClick={() => setShowPOP(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17px"
                height="17px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#BFBFBF"
                  d="M12.36 4C6.58 4 2.644 9.857 4.824 15.21l.933 2.288a.5.5 0 0 1-.15.579L3.634 19.66a.5.5 0 0 0 .313.89h7.82a8.73 8.73 0 0 0 8.733-8.732C20.5 7.5 17 4 12.682 4z"
                />
              </svg>
            </div>
            <div className="text-[#BFBFBF] text-[13px] font-bold ml-[5px]">
              1
            </div>
          </div>
        </motion.div>
        {showPOP ? (
          <div
            className="center bg-white/10 backdrop-blur-sm border-b border-white/10 w-full height-pop-main fixed top-[60px] z-40"
            onClick={closePOP}
          >
            <motion.div
              className="bg-slate-100 w-[80%] h-[300px] rounded-[20px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-fit mt-[20px] ml-[30px]">
                <p className="inter-txwe text-black font-bold text-[25px]">
                  Comment
                </p>
              </div>
              <div className="border-test mx-auto w-[90%] h-[60%] overflow-hidden">
                <div className="bg-slate-600 w-[100px] h-[1000px] overflow-y-auto"></div>{" "}
                {/* test */}
              </div>
              <div className="mx-auto w-[90%] h-[20%] center relative">
                <input
                  type="text"
                  className="text-[#BFBFBF] border border-solid border-slate-400 rounded-[25px] pl-[20px] w-full h-[70%]"
                  placeholder="Comment as Guess"
                />
                <div className="absolute right-[15px] cursor-pointer rounded-full p-[6px] center duration-[0.5s] hover:bg-slate-300 active:bg-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 26 26"
                  >
                    <path fill="#0a44ff" d="M0 2v8.5L15 13L0 15.5V24l26-11z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
        <Swiper
          className={
            device <= "mobile"
              ? "w-[300px] h-[300px] absolute right-[-160px] top-[-180px]"
              : "w-[300px] h-[300px] mt-[170px]"
          }
          modules={[Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="bg-[#4287f5] w-full h-[87%] pt-[30px] px-[30px] cursor-grab">
              <p className="text-white font-semibold text-[25px] leading-tight">
                College <br /> Experience
              </p>
              <p className="text-white mt-[10px] text-[14px] leading-tight">
                There have a course that let you learn it. We have an activity
                online to give a certificate to you for free.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#cf00c4] w-full h-[87%] pt-[30px] px-[30px] cursor-grab">
              <p className="text-white font-semibold text-[25px] leading-tight">
                Feel Good <br /> To Learn
              </p>
              <p className="text-white mt-[10px] text-[14px] leading-tight">
                This website didn't teach you stressfully. We strict and care
                about people's emotion. So we want you to enjoy with it.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#34bfbd] w-full h-[87%] pt-[30px] px-[30px] cursor-grab">
              <p className="text-white font-semibold text-[25px] leading-tight">
                Be <br /> Yourself
              </p>
              <p className="text-white mt-[10px] text-[14px] leading-tight">
                Try to demonstrate about your mind. What can you think about
                design or code. Let's try it by your plan
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#f23d9a] w-full h-[87%] pt-[30px] px-[30px] cursor-grab">
              <p className="text-white font-semibold text-[25px] leading-tight">
                Challenge <br /> Yourself
              </p>
              <p className="text-white mt-[10px] text-[14px] leading-tight">
                We want you to think and try to fix your failure. Not to
                challenge with other people. It can help you to get successful
                on your position career.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <ThemeToggle /> */}
      <Footer />
    </div>
  );
}
