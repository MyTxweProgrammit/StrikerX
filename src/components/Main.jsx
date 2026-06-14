import React, { useEffect, useState } from "react";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import StrikerX from "../assets/StrikerXlogo.svg";
import Markdown from "../assets/Markdown.png";
import react from "../assets/React.png";
import Python from "../assets/Python.png";
import BackgroundMain from "../assets/BackgroundMain.jpg";
import StrikerXBanner from "../assets/StrikerXBanner.jpg";
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
import { Link } from "react-router-dom";
import { usePopCash } from "./hooks/usePopCash";

export default function Main() {
  const { device } = useMediaQuery({
    breakpoints: { 
      mobile: 600 
    },
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
  // usePopCash(true); Temporary Stopped

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
        className="overflow-hidden relative bg-[#131B2E] w-screen h-fit py-[60px] pl-[25px]"
        id="test"
      >
        <motion.div 
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }}
          className="border border-solid border-[#1ABBD9] w-fit center gap-[7px] px-[12px] py-[5px] rounded-[15px] bg-[#001F26] mb-[15px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="#1ABBD9" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm3.5-1l-1.4-1.4L8.675 13l-2.6-2.6L7.5 9l4 4zm4.5 0v-2h6v2z" />
          </svg>
          <p className="font-bold text-[#1ABBD9] text-[10px]">MASTER THROUGH EXEUTION</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }} 
          className="text-white font-bold text-[35px]">Write <i className="text-[#1ABBD9]">Clean</i> Code</motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }} 
          className="text-white font-bold text-[35px]">Build <span className="text-[#A0A3FF] underline">Epic</span> App</motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }} 
          className="text-slate-300 text-[16px] mt-[15px] w-[415.36px] max-[480px]:w-[360px]">
          StrikerX isn't a tutorial site. It's a high-performance training enviroment for the next generation of world-class software engineers.
        </motion.p>
        <motion.section 
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }}
          className="center w-fit mt-[30px] gap-[20px]">
          <div className="bg-[#C0C1FF] center w-fit cursor-pointer px-[25px] py-[14px] rounded-[7px]">
            <Link to="/signin" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7,width: "100%", height: "100%" }}>
              <p className="text-[#1000A9]">Start Learning</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="#1000A9" d="M5 16c-2 1-2 5-2 5s3 0 5-2zM21 2h-3.69c-2.4 0-4.66.94-6.36 2.64L8.69 6.9a8.4 8.4 0 0 0-6.24 1.27c-.25.17-.41.44-.44.73s.08.59.29.81l12 12c.2.2.45.29.71.29s.51-.1.71-.29c1.9-1.9 1.6-5.08 1.38-6.38l2.28-2.28c1.7-1.7 2.64-3.96 2.64-6.36V3c0-.55-.45-1-1-1Zm-3.59 7.41c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83s2.05-.78 2.83 0s.78 2.05 0 2.83" />
                </svg>
            </Link>
          </div>
          <div className="bg-[#131B2E] center w-fit cursor-pointer px-[25px] py-[14px] rounded-[7px] border border-solid border-slate-700">
            <Link to="*" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7,width: "100%", height: "100%" }}>
              <p className="text-white">Browse Courses</p>
            </Link>
          </div>
        </motion.section>
        <motion.div 
          initial={{ opacity: 0, translateY: "-15px" }}
          animate={{
            opacity: 1,
            translateY: "0px",
            transition: { duration: 0.5 },
          }}
          className="center gap-[10px] w-fit mt-[20px]">
          <div className="rounded-full w-[25px] h-[25px] mx-auto overflow-hidden">
            <img src={CEObigbrother} alt="CEO of StikerX" />
          </div>
          <p className="text-slate-400 text-[12px]"><span className="text-white font-bold">1</span> Developer Joined this season</p>
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
      <div className="relative w-full h-fit bg-[#242424]">
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
      <div className="w-screen bg-gradient-left pt-[40px]">
        <p className="font-bold text-[#756bff] text-[25px] ml-[20px]">
          Core Disciplines
        </p>
        <p className="text-white text-[16px] ml-[20px]">
          Specialized tracks designed for professional advancement.
        </p>
        <section className="w-[100%] grid grid-cols-4 pl-[20px] max-[1170px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 ">
          <div className="bg-[#eee6f2] rounded-xl w-[270px] h-[160px] my-[30px] pt-[25px] px-[25px] max-[600px]:mx-auto duration-[0.5s] hover:scale-[1.05] active:scale-[1.05]">
            <div className="w-[40px] h-[40px] rounded-xl bg-white center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#7c00ff"
                  d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z"
                />
              </svg>
            </div>
            <p className="text-blue-900 font-bold mt-[7px] text-[17px]">
              Web Development
            </p>
            <p className="text-slate-700 text-[11px] ">
              Modern architectures and high performance frameworks.
            </p>
          </div>
          <div className="bg-[#eee6f2] rounded-xl w-[270px] h-[160px] my-[30px] pt-[25px] px-[25px] max-[600px]:mx-auto duration-[0.5s] hover:scale-[1.05] active:scale-[1.05]">
            <div className="w-[40px] h-[40px] rounded-xl bg-white center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#7c00ff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m3 11l2.5-2.5c1.017-1.017 1.526-1.526 2.137-1.638a2 2 0 0 1 .726 0c.611.112 1.12.62 2.137 1.638s1.526 1.526 2.137 1.638c.24.045.486.045.726 0c.611-.112 1.12-.621 2.137-1.638L21 3M3 15v6m6-8v8m6-5v5m6-12v12"
                />
              </svg>
            </div>
            <p className="text-blue-900 font-bold mt-[7px] text-[17px]">
              Data Science
            </p>
            <p className="text-slate-700 text-[11px] ">
              Statistical modeling, AI implementation and MLOps.
            </p>
          </div>
          <div className="bg-[#eee6f2] rounded-xl w-[270px] h-[160px] my-[30px] pt-[25px] px-[25px] max-[600px]:mx-auto duration-[0.5s] hover:scale-[1.05] active:scale-[1.05]">
            <div className="w-[40px] h-[40px] rounded-xl bg-white center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#7c00ff"
                  fill-rule="evenodd"
                  d="M6.697 6.697a7.5 7.5 0 0 1 12.794 4.927A4.002 4.002 0 0 1 18.5 19.5h-12a5 5 0 0 1-1.667-9.715a7.5 7.5 0 0 1 1.864-3.088m9.01 5.01a1 1 0 0 0-1.414-1.414L11 13.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-blue-900 font-bold mt-[7px] text-[17px]">
              DevOps
            </p>
            <p className="text-slate-700 text-[11px] ">
              Infrastructure as code and scalable cloud systems.
            </p>
          </div>
          <div className="bg-[#eee6f2] rounded-xl w-[270px] h-[160px] my-[30px] pt-[25px] px-[25px] max-[600px]:mx-auto duration-[0.5s] hover:scale-[1.05] active:scale-[1.05]">
            <div className="w-[40px] h-[40px] rounded-xl bg-white center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#7c00ff"
                  d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0"
                />
              </svg>
            </div>
            <p className="text-blue-900 font-bold mt-[7px] text-[17px]">
              Mobile Apps
            </p>
            <p className="text-slate-700 text-[11px] ">
              Native performance for iOS, Android and cross-platform.
            </p>
          </div>
        </section>
      </div>
      <div
        className="py-[40px]"
        style={{
          background:
            "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 19%, rgba(0, 65, 207, 1) 46%, rgba(22, 91, 175, 1) 100%, rgba(31, 102, 161, 1) 70%, rgba(0, 212, 255, 1) 100%)",
        }}
      >
        <div className="glass mx-auto w-[90%] p-[20px] rounded-xl shadow-xl duration-[0.5s] hover:scale-[1.05] active:scale-[1.05]">
          <p className="text-white font-bold text-[25px] rubik-txwe">FAQ</p>
          <p className="text-slate-100 mt-[10px] rubik-txwe text-[17px] font-bold">
            1. Are all the courses free?
          </p>
          <p className="text-slate-100 ml-[17px] rubik-txwe text-[14px]">
            Answer: No It's not, But more of our courses can learn for free.
            Except the rare courses.
          </p>
          <p className="text-slate-100 mt-[10px] rubik-txwe text-[17px] font-bold">
            2. Which courses can we begin?
          </p>
          <p className="text-slate-100 ml-[17px] rubik-txwe text-[14px]">
            Answer: All of it that you want. But we recommend to start with
            Python course first.
          </p>
        </div>
      </div>
      <div className="w-screen">
        <Link
          className=""
          to="https://popcash.net/home/501369"
          target="_blank"
          title="PopCash - The Popunder network"
        >
          <img
            className="mx-auto"
            src="https://static.popcash.net/img/affiliate/728x90.jpg"
            alt="PopCash.net"
          />
        </Link>{" "}
        <br />
        <Link to="/signup">
          <img src={StrikerXBanner} />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
