import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { onAuthStateChanged, deleteUser } from "firebase/auth";
import { auth, database } from "./../firebase-config";
import { ref, set, get, child, update } from "firebase/database";
import CaptureLogo from "../assets/CaptureLogo.png";
import Markdown from "../assets/Markdown.png";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { restClient } from "@massive.com/client-js";
import PythonCourse from "../assets/PythonCourse.png";
import ReactCourse from "../assets/ReactCourse.png";
import Challenge_Day from "../assets/Challenge_Day.png";
import CardCourse from "./CardCourse";
import Chat from "./Chat"
import Footer from "./Footer"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";

export default function User({ logout }) {
  const [pricePackage, setPricePackage] = useState("Monthly")

  const apiKey = import.meta.env.VITE_TOKEN_STOCK;
  const [jsonStock, setJsonStock] = useState();
  const rest = restClient(apiKey, "https://api.massive.com");
  async function stock() {
    try {
      const response = await rest.getStocksAggregates({
        stocksTicker: "SONY",
        multiplier: "1",
        timespan: "day",
        from: "2026-03-19", // year/month/date
        to: "2026-03-22",
        adjusted: "true",
        sort: "asc",
        limit: "120",
      });
      console.log(response);
      setJsonStock(response);
    } catch (e) {
      console.error("An error ouccured:", e);
    }
  }

  const [MarkdownDate, setMarkdownDate] = useState(new Date().toLocaleString());
  const [MarkdownExpire, setMarkdownExpire] = useState("");
  const [disappearMarkDown, setDissappearMarkDown] = useState(false);
  const [expireMarkdown, setExpireMarkdown] = useState("");
  useEffect(() => {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    date.getMonth() + 1;
    setMarkdownExpire(date.toLocaleString());

    const dbRef = ref(database);
    const user = auth.currentUser;
    get(child(dbRef, `users/${user.uid}/courses/Markdown`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (snapshot.val().Enroll) {
            setDissappearMarkDown(true);
          }
          setExpireMarkdown(snapshot.val().Expire);
        } else {
          console.log("No Data Aviliable");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    stock();
  }, []);
  const EnrollMarkDown = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        await set(ref(database, "users/" + uid + "/courses/Markdown/"), {
          EnrollDate: MarkdownDate,
          Expire: MarkdownExpire,
          Enroll: true,
          Project: "",
        });
        await set(ref(database, "users/" + uid + "/courses/Markdown/Project"), {
          Project: "",
        });

        alert("You can start to learn now!");
        document.getElementById("my_modal").close();
      } else {
        alert("Please sign in to enroll in a course.");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid
      setUID(uid)
    } else {
      null;
    }
  });
//   useEffect(() => {
//     const SCRIPT_ID = 'adsterra-popunder-js';
//     if (document.getElementById(SCRIPT_ID)) return;
//     const script = document.createElement('script');
//     script.id = SCRIPT_ID;
//     script.src = "https://pl29156560.profitablecpmratenetwork.com/55/ad/3f/55ad3ffbb8d961b905c063526c8b7c30.js";
//     script.async = true;
//     script.type = 'text/javascript';
//     try {document.body.appendChild(script);} 
//     catch (err) {console.error("Failed to append Adsterra script", err);}
//     return () => {
//       const target = document.getElementById(SCRIPT_ID);
//       if (target && target.parentNode === document.body) {
//         try {document.body.removeChild(target);} 
//         catch (e) {console.warn("Script removal skipped");}
//       }
//     };
//  }, []) Temporary Stopped
  return (
    <>
      <title>StrikerX - User</title>
      <head>
        <script async="async" data-cfasync="false" src="https://pl29156561.profitablecpmratenetwork.com/3d8d4df0c6a6041d9d8ca120272411cf/invoke.js"></script>
      </head>
      <div className="w-screen h-fit bg-white dark:bg-slate-800">
        <HeaderUser logoutHead={logout} />
        <div className="border border-solid border-orange-500 w-[90%] mx-auto mt-[20px] bg-orange-200 rounded-xl py-[8px] px-[8px]">
          <div className="center w-fit gap-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="SVGX9qUOAmp">
                  <g fill="none">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                    />
                    <path
                      fill="#000"
                      fill-rule="evenodd"
                      d="M24 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"
                      clip-rule="evenodd"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M24.5 34V20h-2M21 34h7"
                    />
                  </g>
                </mask>
              </defs>
              <path fill="#f38000" d="M0 0h48v48H0z" mask="url(#SVGX9qUOAmp)" />
            </svg>
            <p className="inter-txwe text-orange-500 font-bold text-[14px]">
              Are you a starter? Let's started!
            </p>
          </div>
          <p className="inter-txwe text-orange-500 text-[12px] mx-[22px]">
            You can follow this link{" "}
            <Link to="/overview" className="inter-txwe text-[12px]">
              Overview.
            </Link>{" "}
            This will guide you how to learn our courses.
          </p>
        </div>
        <div>
          <p className="text-black">
            {jsonStock?.results?.[jsonStock.results.length - 1].c}
          </p>
          <p className="text-black">{jsonStock?.ticker}</p>
        </div>
        <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px] dark:text-[#8fa5ff]">
          Your Course (0):
        </p>
        {disappearMarkDown ? (
          <Link to="/user/markdown">
            <div className="border border-solid border-[#BFBFBF] shadow-lg cursor-pointer w-[220px] h-[60px] enroll-rounded ml-[20px] mt-[10px] flex center gap-[20px] bg-white relative duration-[0.5s] hover:scale-[1.1] active:scale-[1.1]">
              <section className="translate-y-[-5px]">
                <div className="center w-fit gap-[5px]">
                  <p className="inter-txwe text-black text-[13px] font-bold">
                    Markdown
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 128 128"
                  >
                    <radialGradient
                      id="SVG6bAUKdJt"
                      cx="68.884"
                      cy="124.296"
                      r="70.587"
                      gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".314" stop-color="#ff9800" />
                      <stop offset=".662" stop-color="#ff6d00" />
                      <stop offset=".972" stop-color="#f44336" />
                    </radialGradient>
                    <path
                      fill="url(#SVG6bAUKdJt)"
                      d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
                    />
                    <radialGradient
                      id="SVG5R9TgbPb"
                      cx="64.921"
                      cy="54.062"
                      r="73.86"
                      gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".214" stop-color="#fff176" />
                      <stop offset=".328" stop-color="#fff27d" />
                      <stop offset=".487" stop-color="#fff48f" />
                      <stop offset=".672" stop-color="#fff7ad" />
                      <stop offset=".793" stop-color="#fff9c4" />
                      <stop
                        offset=".822"
                        stop-color="#fff8bd"
                        stop-opacity="0.804"
                      />
                      <stop
                        offset=".863"
                        stop-color="#fff6ab"
                        stop-opacity="0.529"
                      />
                      <stop
                        offset=".91"
                        stop-color="#fff38d"
                        stop-opacity="0.209"
                      />
                      <stop
                        offset=".941"
                        stop-color="#fff176"
                        stop-opacity="0"
                      />
                    </radialGradient>
                    <path
                      fill="url(#SVG5R9TgbPb)"
                      d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
                    />
                  </svg>
                </div>
                <p className="inter-txwe text-[#BFBFBF] text-[10px] mt-[-3px]">
                  You're on the way to beat it.
                </p>
              </section>
              <div
                className="translate-y-[-5px] radial-progress text-primary text-[10px]"
                style={{ "--value": 0, "--size": "30px" }}
                aria-valuenow={0}
                role="progressbar"
              >
                0%
              </div>
              <p className="absolute text-[#BFBFBF] text-[8px] bottom-[0px]">
                Expire : {expireMarkdown}
              </p>
            </div>
          </Link>
        ) : null}
        <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px] dark:text-[#8fa5ff]">
          All Courses:
        </p>
        {!disappearMarkDown ? (
          <>
            <div
              onClick={() => document.getElementById("my_modal").showModal()}
              className="py-[5px] overflow-hidden relative center duration-[0.5s] hover:scale-[1.1] gap-[10px] border border-solid border-slate-300 bg-white w-[165px] rounded-lg shadow-xl ml-[20px] mt-[10px] cursor-pointer"
            >
              <div>
                <img src={Markdown} className="w-[26px] h-[26px]" />
              </div>
              <p className="inter-txwe text-slate-400 font-bold text-[13px]">
                Markdown
              </p>
              <section className="absolute bg-red-500 w-[60px] h-[12px] text-white inter-txwe text-[7px] text-center font-bold right-[-20px] top-[6px] rotate-[45deg]">
                NEW
              </section>
            </div>
            <dialog id="my_modal" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Markdown Language</h3>
                <p className="py-4">
                  In this course You will learn an easiest programming language
                  in the world. It's not like python because It just a
                  lightweight markup language that you need to know it first.
                  You will know about .md file and Its syntax.
                </p>
                <div className="modal-action">
                  <div
                    onClick={EnrollMarkDown}
                    className="bg-blue-600 center px-[10px] py-[3px] rounded-[10px] cursor-pointer duration-[0.5s] hover:bg-blue-500 active:bg-blue-500"
                  >
                    <p className="inter-txwe font-bold">Enroll</p>
                  </div>
                  <form method="dialog">
                    <button className="btn">Ignore it</button>
                  </form>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        ) : null}
        <div className="min-[450px]:flex mx-[20px] gap-[10px] my-[15px]">
          <CardCourse
            Picture={PythonCourse}
            Name="Python for Beginner"
            Author="Mr. Maytee Sukchaung"
            ComingSOON={true}
          />
          <CardCourse
            Picture={ReactCourse}
            Name="ReactJS"
            Level="ADVANCED"
            Author="Mr. Maytee Sukchaung"
            ComingSOON={true}
          />
        </div>
        <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px] dark:text-[#8fa5ff]">
          Challenges (Newest):
        </p>
        <div className="w-full px-[20px] mt-[10px] grid grid-cols-2 max-[540px]:grid-cols-1 max-[540px]:gap-y-[30px]">
          <div className="shadow-xl border border-solid border-slate-100 w-[230px] h-fit overflow-hidden rounded-[20px] hover:scale-[1.1] hover:shadow-xl active:scale-[1.1] duration-[0.3s] bg-white dark:border-none">
            <div className="w-full h-[120px] overflow-hidden">
              <img src={Challenge_Day} className="w-full h-[140%]"/>
            </div>
            <p className="text-black font-bold inter-txwe text-[13px] mt-[10px] text-center">The Challenge Day 2026</p>
            <p className="text-slate-600 inter-txwe text-[10px] mt-[10px] mx-[20px]">A First Coding Chellenge in our Website. Let's participate to recieve some reward and more informations below this.</p>
            <ul className="mx-[20px] mt-[10px]">
              <li className="text-slate-600 text-[9px] center gap-[5px] w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#7c7c7c" d="M10.586 2.1a2 2 0 0 1 2.7-.116l.128.117L15.314 4H18a2 2 0 0 1 1.994 1.85L20 6v2.686l1.9 1.9a2 2 0 0 1 .116 2.701l-.117.127l-1.9 1.9V18a2 2 0 0 1-1.85 1.995L18 20h-2.685l-1.9 1.9a2 2 0 0 1-2.701.116l-.127-.116l-1.9-1.9H6a2 2 0 0 1-1.995-1.85L4 18v-2.686l-1.9-1.9a2 2 0 0 1-.116-2.701l.116-.127l1.9-1.9V6a2 2 0 0 1 1.85-1.994L6 4h2.686zm4.493 6.883l-4.244 4.244l-1.768-1.768a1 1 0 0 0-1.414 1.415l2.404 2.404a1.1 1.1 0 0 0 1.556 0l4.88-4.881a1 1 0 0 0-1.414-1.414"/></g>
                </svg>
                Certificate for All
              </li>
              <li className="text-slate-600 text-[9px] center gap-[5px] w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                  <path fill="#7c7c7c" d="M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4L8 7.99z"/>
                </svg>
                200 points to grow badge learner
              </li>
            </ul>
            <hr className="w-[190px] border border-solid border-slate-200 my-[10px] mx-auto" />
            <div className="bg-[#ffde82] [#ebb82d] rounded-xl mx-auto w-[90%] center mb-[6px] cursor-not-allowed"> {/* Have 2 Colors in class to use if Button Ready */}
              <p className="text-[12px] font-bold text-white rubik-txwe my-[7px]">Closing</p>
            </div>
            <p className="text-slate-400 text-center rubik-txwe text-[8px] mb-[2px]">This will open on 1 Oct 2026</p>
          </div>
          <div className="shadow-xl border border-solid border-slate-100 w-[230px] h-[317.7px] overflow-hidden rounded-[20px] hover:scale-[1.1] hover:shadow-xl active:scale-[1.1] duration-[0.3s] bg-white dark:border-none">
            <div className="w-full h-[120px] skeleton bg-slate-100 center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20">
                <path fill="#7c7c7c" d="M19.09 2a.9.9 0 0 1 .91.889V17.11a.9.9 0 0 1-.91.889H.91A.9.9 0 0 1 0 17.11V2.89A.9.9 0 0 1 .91 2zM5.416 8.417l-4.06 4.042v4.217H18.64v-1.433l-3.2-3.12l-2.777 2.333q-.249.175-.48.155a.8.8 0 0 1-.439-.189zm13.22-5.086H1.362v7.23L4.968 6.97a.72.72 0 0 1 .44-.156q.232 0 .41.14l6.431 6.088l2.805-2.35a.7.7 0 0 1 .421-.146a.7.7 0 0 1 .418.145l2.742 2.665zM15.273 5.23c.753 0 1.363.597 1.363 1.333s-.61 1.333-1.363 1.333c-.754 0-1.364-.597-1.364-1.333s.61-1.333 1.364-1.333"/>
              </svg>
            </div>
            <p className="skeleton skeleton-text font-bold inter-txwe text-[13px] mt-[10px] text-center">Coming Soon</p>
            <div className="mt-[10px] mx-auto skeleton w-[90%] bg-slate-100 h-[20px]"></div>
            <div className="mt-[10px] mx-auto skeleton w-[90%] bg-slate-100 h-[20px]"></div>
            <div className="mt-[10px] mb-[12px] mx-auto skeleton w-[90%] bg-slate-100 h-[20px]"></div>
            <hr className="w-[190px] border border-solid border-slate-200 my-[10px] mx-auto" />
            <div className="bg-slate-100 skeleton rounded-xl mx-auto w-[90%] center mb-[6px] cursor-not-allowed"> {/* Have 2 Colors in class to use if Button Ready */}
              <p className="text-[12px] font-bold text-white rubik-txwe my-[7px]">Closing</p>
            </div>
            <p className="skeleton skeleton-text text-center rubik-txwe text-[8px] mb-[2px]">No Information Yet</p>
          </div>
        </div>
        <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px] dark:text-[#8fa5ff]">
          Our Packages:
        </p>
        <div className="w-screen h-full">
          <section className="w-fit center">
            <div onClick={() => setPricePackage("Yearly")} className={`cursor-pointer ml-[10px] mt-[10px] w-fit p-[7px] right-[20px] top-[20px] text-[12px] rounded-lg ${pricePackage == "Yearly" ? "bg-slate-600 text-white" : "border border-solid border-slate-600 text-slate-600" }`}>Yearly</div>
            <div onClick={() => setPricePackage("Monthly")} className={`cursor-pointer ml-[10px] mt-[10px] w-fit p-[7px] right-[20px] top-[20px] text-[12px] rounded-lg ${pricePackage == "Monthly" ? "bg-slate-600 text-white" : "border border-solid border-slate-600 text-slate-600" }`}>Monthly</div>
          </section>
          <section className="shadow-xl rounded-[15px] border border-solid border-slate-200 w-[80%] mx-auto my-[20px] px-[20px] relative bg-white">
            {pricePackage == "Monthly" ? (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Monthly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$4/mo</p>
              </>
            ) : (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Yearly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$50/ye</p>
              </>
            )}
            <p className="text-slate-600 rubik-txwe text-[14px] mt-[10px]">A best package for beginner which include some basic feature to user. And let these user get a new experience in our website. Let's explore!</p>
            <div className="grid grid-cols-3 max-[890px]:grid-cols-2 max-[590px]:grid-cols-1 w-full mx-auto mt-[20px]">
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Get Expire Course Notification</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Buy 2 Courses Get 1 For Free</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">3% Point Growth</p>
              </div>
            </div>
            {/* <div className="text-white text-center bg-black py-[10px] rubik-txwe rounded-[25px] my-[20px] cursor-pointer duration-[0.5s] hover:bg-white hover:text-black hover:border hover:border-black active:bg-white active:text-black active:border active:border-black">Buy or Get 3 Days Trial</div> */}
            <div className="text-slate-500 text-center bg-slate-200 cursor-not-allowed py-[10px] rubik-txwe rounded-[25px] my-[20px] duration-[0.5s] active:bg-slate-300 hover:bg-slate-300 active:text-slate-600 hover:text-slate-600">Coming Soon</div>
            <div className="absolute text-black p-[7px] right-[20px] top-[20px] text-slate-600 text-[12px] border border-solid border-slate-600 rounded-lg">GOOD TO START</div>
            <div className="absolute text-black p-[7px] right-[15px] top-[50px] font-bold text-black text-[12px]">STARTER PACKAGE</div>
          </section>
          <section className="shadow-xl rounded-[15px] border border-solid border-slate-200 w-[80%] mx-auto my-[20px] px-[20px] relative bg-white">
            {pricePackage == "Monthly" ? (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Monthly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$10/mo</p>
              </>
            ) : (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Yearly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$125/ye</p>
              </>
            )}
            <p className="text-slate-600 rubik-txwe text-[14px] mt-[10px]">A Package which include many new feature than Starter Pack. We will authorize these user to get some event/challenge and useful experience. Let's explore!</p>
            <div className="grid grid-cols-4 max-[1300px]:grid-cols-3 max-[1100px]:grid-cols-2 max-[750px]:grid-cols-1 w-full mx-auto mt-[20px]">
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Chance to Get A Discount Package Ticket</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Authorize to use <Link to="*">StrikerX Anthem</Link></p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Disappear All Ads</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">5% Point Growth</p>
              </div>
            </div>
            {/* <div className="text-white text-center bg-black py-[10px] rubik-txwe rounded-[25px] my-[20px] cursor-pointer duration-[0.5s] hover:bg-white hover:text-black hover:border hover:border-black active:bg-white active:text-black active:border active:border-black">Buy Now</div> */}
            <div className="text-slate-500 text-center bg-slate-200 cursor-not-allowed py-[10px] rubik-txwe rounded-[25px] my-[20px] duration-[0.5s] active:bg-slate-300 hover:bg-slate-300 active:text-slate-600 hover:text-slate-600">Coming Soon</div>
            <div className="absolute text-black p-[7px] right-[20px] top-[20px] text-slate-600 text-[12px] border border-solid border-slate-600 rounded-lg">RECOMMENDED</div>
            <div className="absolute text-black p-[7px] right-[15px] top-[50px] font-bold text-black text-[12px]">PREMIUM PACKAGE</div>
          </section>
          <section className="shadow-xl rounded-[15px] border border-solid border-slate-200 w-[80%] mx-auto my-[20px] px-[20px] relative bg-white">
            {pricePackage == "Monthly" ? (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Monthly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$4.3/mo</p>
              </>
            ) : (
              <>
                <p className="text-slate-600 rubik-txwe mt-[20px] text-[15px]">Yearly</p>
                <p className="text-black rubik-txwe font-bold text-[25px]">$52/ye</p>
              </>
            )}
            <p className="text-slate-600 rubik-txwe text-[14px] mt-[10px]">The limit package which come for a while on Big event and have time for sell about 1-3 hours. This include a many higher feature for Pre-VIP user. Let's explore!</p>
            <div className="grid grid-cols-3 max-[1260px]:grid-cols-2 max-[870px]:grid-cols-1 w-full mx-auto mt-[20px]">
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Sent Request & Chance to Be DEV In Our Website</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">Chat With CEO About Website Directly</p>
              </div>
              <div className="center w-fit gap-[5px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#7c7c7c" fill-rule="evenodd" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25z" clip-rule="evenodd"/>
                </svg>
                <p className="translate-y-[-4px] text-slate-600 rubik-txwe text-[12px] mt-[10px]">5.5% Point Growth</p>
              </div>
            </div>
            {/* <div className="text-white text-center bg-black py-[10px] rubik-txwe rounded-[25px] my-[20px] cursor-pointer duration-[0.5s] hover:bg-white hover:text-black hover:border hover:border-black active:bg-white active:text-black active:border active:border-black">CLOSING</div> */}
            <div className="text-slate-500 text-center bg-slate-200 cursor-not-allowed py-[10px] rubik-txwe rounded-[25px] my-[20px] duration-[0.5s] active:bg-slate-300 hover:bg-slate-300 active:text-slate-600 hover:text-slate-600">Coming Soon</div>
            <div className="absolute text-black p-[7px] right-[20px] top-[20px] text-slate-600 text-[12px] border border-solid border-slate-600 rounded-lg">LIMITED</div>
            <div className="absolute text-black p-[7px] right-[15px] top-[50px] font-bold text-black text-[12px]">SPECIAL PACKAGE</div>
          </section>
        </div>
        <div className="mt-[20px]" id="container-3d8d4df0c6a6041d9d8ca120272411cf"></div>
        <Footer />
      </div>
    </>
  );
}

export function HeaderUser({ logoutHead, markdown }) {
  const location = useLocation();
  const setSwal = withReactContent(Swal)
  const [displayName, setDisplayName] = useState("");
  const [isemail, setEmail] = useState("");
  const [isuid, setUID] = useState("");
  const [openMarkProject, setOpenMarkProject] = useState(false);
  const nav = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const displayname = user.displayName;
      const uid = user.uid;
      const email = user.email;

      setEmail(email);
      setUID(uid);
      setDisplayName(displayname);
    } else {
      null;
    }
  });
  const handleLogout = () => {
    setSwal.fire({
      title: "Do you want to sign out?",
      confirmButtonText: "Yes",
      showDenyButton: true,
      denyButtonText: "No",
      icon: "question",
      confirmButtonColor: "green"
    }).then((result) => {
      if (result.isConfirmed) {
          setSwal.fire({
            title: "See you!",
            text: "Do not forget to come back in another time.",
            icon: "success"
          })
          localStorage.removeItem("user_token");
          logoutHead();
          nav("/signin");
      } else if (result.isDenied) null
    })
  };
  const MessageFromAdmin = async () => {
    get(child(ref(database), `utilities/notifications/message`)).then((snapshot) => {
      if (snapshot.exists()) {
        alert(snapshot.val().admin)
      } else {
        alert("No data available");
      }
    }).catch((error) => {
      alert(error);
    });
  }

  const [Down, setDown] = useState(false);
  const [Size, setSize] = useState("w-[0px] h-[0px] p-[0px]");
  const [ShowSearchPop, setShowSearchPop] = useState(false);
  const handlePopup = () => {
    setDown(!Down);
    if (!Down) {
      setSize(
        "w-[200px] h-fit px-[10px] pt-[10px] border border-solid border-[#BFBFBF]"
      );
    } else {
      setSize("w-[0px] h-[0px] p-[0px]");
    }
  };

  const [courseNav, setCourseNav] = useState("w-[0px] h-[0px] hidden");
  const [courseTrue, setCourseTrue] = useState(false);
  const handleNavMarkdown = () => {
    setCourseTrue(!courseTrue);
    if (courseTrue) setCourseNav("w-[250px]");
    else setCourseNav("w-[0px] h-[0px]");
  };
  const [markdownProject, setMarkdownProject] = useState("");
  const sendMarkProject = () => {
    const user = auth.currentUser;
    const uid = user.uid;
    const updates = {};
    updates["users/" + uid + "/courses/Markdown/Project"] = {
      Project: markdownProject,
    };
    if (markdownProject == "") {
      alert("You don't have any link of project!");
    } else {
      alert(
        "Thanks you! Please wait for 2 or 3 days to recieve the value from admin."
      );
      update(ref(database), updates);
      setOpenMarkProject(false);
    }
  };

  async function handleDeleteUser() {
    const user = auth.currentUser;
    const userRef = ref(database, `users/${user.uid}`);
    if (!user) {
      alert("Can't found a user's account.");
      return;
    }
    try {
      await set(userRef, null);
      await deleteUser(user);
      alert("Delete User Successfully!");
      localStorage.removeItem("user_token");
      logoutHead();
      nav("/");
    } catch (err) {
      if (err.code === "auth/requires-recent-login")
        alert(
          "An Error Occured : Please Log out and Log in again before delete this account"
        );
      else {
        alert("An Error Occured : " + err.message);
      }
      console.error(err);
    }
  }
  return (
    <div className="z-50 relative w-fit mx-auto bg-white shadow-xl h-[60px] border border-solid border-slate-200 center gap-[10px] sticky top-[10px] px-[20px] rounded-[30px]">
      <img src={CaptureLogo} className="w-[25px] h-[25px]" />
      <div
        onClick={handlePopup} data-tip="Profile"
        className="tooltip tooltip-bottom relative rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#BFBFBF"
            fill-rule="evenodd"
            d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
            clip-rule="evenodd"
          />
        </svg>
        <div
          className={`absolute bg-white rounded-[15px] ${Size} top-[60px] duration-[0.5s] shadow-lg cursor-default`}
        >
          <div className="center w-fit gap-[7px]">
            <section
              className={`${
                Down ? "w-[30px] h-[30px] rounded-full center bg-blue-500 " : ""
              }`}
            >
              <p className={`${Down ? "font-bold text-white" : "hidden"}`}>
                {displayName.charAt(0)}
              </p>
            </section>
            <section>
              <p
                className={`${
                  Down
                    ? "inter-txwe text-black text-[12px] font-bold"
                    : "hidden"
                }`}
              >
                {displayName}
              </p>
              <div className={`${Down ? "center mt-[-3px] gap-[5px] w-fit" : "hidden"}`}>
                <div className="inline-grid *:[grid-area:1/1]">
                  <div className="status status-success animate-ping"></div>
                  <div className="status status-success"></div>
                </div>
                <p className="text-black inter-txwe text-[10px] translate-y-[2px] translate-x-[-1px] text-green-400">
                  Online
                </p>
              </div>
            </section>
          </div>
          <Link to="/user/setting" state={{ from: location.pathname }} className={`${
              Down
                ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px] mt-[10px]"
                : "hidden"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="#BFBFBF"
                fill-rule="evenodd"
                d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
              />
            </svg>
            <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]": "hidden"}`}>
              Setting
            </p>
          </Link>
          <div onClick={MessageFromAdmin}
            className={`${
              Down
                ? "relative rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]"
                : "hidden"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 20 20"
            >
              <path
                fill="#BFBFBF"
                d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z"
              />
            </svg>
            <p
              className={`${
                Down
                  ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]"
                  : "hidden"
              }`}
            >
              Notification
            </p>
            <div className="absolute bg-red-500 rounded-full py-[1px] px-[6px] right-[10px] center font-bold text-[10px] inter-txwe">
              8
            </div>
          </div>
          <Link to="/user/community" className={`${
              Down
                ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]"
                : "hidden"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="#BFBFBF" d="M12 5a3 3 0 1 0 0 6a3 3 0 1 0 0-6m1 7h-2c-2.76 0-5 2.24-5 5v.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V17c0-2.76-2.24-5-5-5m-6.5-1c.47 0 .9-.12 1.27-.33a5.03 5.03 0 0 1-.42-4.52C7.09 6.06 6.8 6 6.5 6C5.06 6 4 7.06 4 8.5S5.06 11 6.5 11m-.39 1H5.5C3.57 12 2 13.57 2 15.5v1c0 .28.22.5.5.5H4c0-1.96.81-3.73 2.11-5m11.39-1c1.44 0 2.5-1.06 2.5-2.5S18.94 6 17.5 6c-.31 0-.59.06-.85.15a5.03 5.03 0 0 1-.42 4.52c.37.21.79.33 1.27.33m1 1h-.61A6.97 6.97 0 0 1 20 17h1.5c.28 0 .5-.22.5-.5v-1c0-1.93-1.57-3.5-3.5-3.5"/>
            </svg>
            <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]": "hidden"}`}>
              Community
            </p>
          </Link>
          <div
            className={`${
              Down
                ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]"
                : "hidden"
            }`}
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="#BFBFBF"
                d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17"
              />
            </svg>
            <p
              className={`${
                Down
                  ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]"
                  : "hidden"
              }`}
            >
              Sign Out
            </p>
          </div>
          <div className={`${Down? "relative rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]" : "hidden" }`} onClick={handleDeleteUser} >
            <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>
              Delete User Test
            </p>
          </div>
          <div className={`${Down? "center relative rounded-[7px] gap-[10px] py-[10px]" : "hidden" }`}>
            <p className={`${Down ? "text-black inter-txwe font-bold text-[11px]" : "hidden"}`}>
              English
            </p>
            <input type="checkbox" className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800 hover:toggle-primary" />
            <p className={`${Down ? "text-black inter-txwe font-bold text-[11px]" : "hidden"}`}>
              Thai
            </p>
          </div>
          <p
            className={`${
              Down ? "text-[#BFBFBF] text-[5px] text-center my-[3px]" : "hidden"
            }`}
          >
            {isuid}
          </p>
        </div>
      </div>
      {markdown ? (
        <>
          <div
            onClick={handleNavMarkdown}
            className="rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#BFBFBF"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M20 15c0 1.864 0 2.796-.304 3.53a4 4 0 0 1-2.165 2.165C16.796 21 15.864 21 14 21h-3c-3.772 0-5.658 0-6.83-1.172C3 18.657 3 16.771 3 13V7a4 4 0 0 1 4-4" />
                <path d="m10 8.5l.434 3.969a.94.94 0 0 0 .552.753c.686.295 1.971.778 3.014.778s2.328-.483 3.014-.778a.94.94 0 0 0 .553-.753L18 8.5m2.5-1v3.77M14 4L7 7l7 3l7-3z" />
              </g>
            </svg>
          </div>

          <div
            className={`${courseNav} duration-[0.5s] border border-solid border-[#BFBFBF] rounded-lg absolute top-[70px] bg-white`}
          >
            <section className={`${courseTrue ? "hidden" : ""}`}>
              <div className="duration-[0.5s] hover:bg-slate-200 active:bg-slate-200 cursor-pointer flex items-center mt-[20px] py-[5px]">
                <div className="flex items-center w-fit gap-[10px] ml-[10px]">
                  <section className="center w-[20px] h-[20px] rounded-full border-bf">
                    <p className="text-[#BFBFBF] text-[12px] inter-txwe">1</p>
                  </section>
                  <p className="inter-txwe text-[#BFBFBF] font-bold text-[13px]">
                    Basic Learning
                  </p>
                </div>
                <p className="text-[#BFBFBF] translate-x-[190px] absolute">
                  60%
                </p>
              </div>
              <div
                className="duration-[0.5s] hover:bg-slate-200 active:bg-slate-200 cursor-pointer flex items-center py-[5px] mb-[20px]"
                onClick={() => setOpenMarkProject(true)}
              >
                <div className="flex items-center w-fit gap-[10px] ml-[10px]">
                  <section className="center w-[20px] h-[20px] rounded-full border-bf">
                    <p className="text-[#BFBFBF] text-[12px] inter-txwe">2</p>
                  </section>
                  <p className="inter-txwe text-[#BFBFBF] font-bold text-[13px]">
                    Project
                  </p>
                </div>
                <p className="text-[#BFBFBF] translate-x-[190px] absolute">
                  40%
                </p>
              </div>
              <Dialog
                open={openMarkProject}
                as="div"
                className="relative z-10 focus:outline-none z-50"
                onClose={() => setOpenMarkProject(false)}
              >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 bg-black">
                    <DialogPanel
                      transition
                      className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                    >
                      <DialogTitle
                        as="h3"
                        className="text-base/7 font-medium text-white"
                      >
                        Project & Complication
                      </DialogTitle>
                      <p className="mt-2 text-sm/6 text-white/50">
                        This project You must to code some basic Markdown with
                        .md file. Inside your project need to contain:
                      </p>
                      <p className="ml-[15px] text-sm/6 text-white/50">
                        - Your name and surname with any Headling tags <br />
                        - Your school address with link tag <br />- Your 3 big
                        plans to do in the future with bold text
                      </p>
                      <p className="text-sm/6 text-white/50">
                        We have a link under this information to let you sent
                        your project. First you must to cover your .md file
                        under main folder. And then You have to host it on
                        Google Drive. make it as public and copy URL and paste
                        under here. GOOD LUCK
                      </p>
                      <div className="mt-4">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                          onClick={sendMarkProject}
                        >
                          Submit
                        </Button>
                        <input
                          value={markdownProject}
                          onChange={(e) => setMarkdownProject(e.target.value)}
                          className="border border-solid border-slate-600 outline-none rounded-xl px-3 py-1.5 ml-[10px] pr-[20px]"
                          type="text"
                          placeholder="Your URL Project"
                        />
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </section>
          </div>
        </>
      ) : (
        <>
          <div
            data-tip="Search"
            className="tooltip tooltip-bottom rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200"
            onClick={() => setShowSearchPop(!ShowSearchPop)}
          >
            <svg
              className={`duration-[1s] ${
                ShowSearchPop
                  ? "translate-x-[-123px] translate-y-[102px] z-50"
                  : "translate-x-[0px] translate-y-[0px]"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#BFBFBF"
                fill-rule="evenodd"
                d="m16.622 15.172l4.244 4.244l-1.414 1.415l-4.24-4.24a7 7 0 1 1 1.41-1.42zM16 11a5 5 0 1 0-10 0a5 5 0 0 0 10 0"
              />
            </svg>
          </div>
          <div
            className={`${
              ShowSearchPop
                ? "bg-white absolute top-[70px] border border-solid border-[#BFBFBF] shadow-xl rounded-lg p-[10px]"
                : "hidden"
            }`}
          >
            <section className="flex justify-end cursor-pointer">
              <div className="w-fit rounded-full duration-[0.5s] p-[5px] hover:bg-slate-200 active:bg-slate-200 mr-[4px] mb-[4px]">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#BFBFBF"
                    d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"
                  />
                </svg>
              </div>
            </section>
            <input
              type="text"
              className={`${
                ShowSearchPop
                  ? "w-[200px] h-[30px] bg-slate-200 rounded-[20px] pl-[30px] text-black text-[13px] inter-txwe outline-none"
                  : "hidden"
              }`}
              placeholder="Search a Courses"
            />
          </div>
        </>
      )}
      <Chat />
    </div>
  );
}
