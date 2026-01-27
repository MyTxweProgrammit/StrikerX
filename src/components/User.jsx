import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth, database } from "./../firebase-config"
import { ref, set, get, child } from "firebase/database"
import CaptureLogo from "../assets/CaptureLogo.png"
import Markdown from "../assets/Markdown.png"
import { Link } from "react-router"

export default function User({ logout }) {

    const [MarkdownDate, setMarkdownDate] = useState(new Date().toLocaleString())
    const [MarkdownExpire, setMarkdownExpire] = useState("")
    const [disappearMarkDown, setDissappearMarkDown] = useState(false)
    const [expireMarkdown, setExpireMarkdown] = useState("")
    useEffect(() => {
        const date = new Date()
        date.setMonth(date.getMonth() + 2)
        date.getMonth() + 1
        setMarkdownExpire(date.toLocaleString())

        const dbRef = ref(database)
        const user = auth.currentUser
        get(child(dbRef, `users/${user.uid}/courses/Markdown`)).then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().Enroll) { setDissappearMarkDown(true) }
                setExpireMarkdown(snapshot.val().Expire)
            } else { console.log("No Data Aviliable") }
        }).catch((err) => { console.error(err) })
    }, [])
    const EnrollMarkDown = async () => {
        try {
            const user = auth.currentUser
            if (user) {
                const uid = user.uid
                await set(ref(database, 'users/' + uid + '/courses/Markdown/'), {
                    EnrollDate: MarkdownDate,
                    Expire: MarkdownExpire,
                    Enroll: true
                });
                alert("You can start to learn now!");
                document.getElementById('my_modal').close()
            } else {
                alert("Please sign in to enroll in a course.");
            }
        } catch (err) { alert(err.message) }
    }
    return (
        <>
            <title>StrikerX - Dashboard</title>
            <div className="w-screen h-screen bg-white">
                <HeaderUser logoutHead={logout} />
                <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px]">Your Course (0) :</p>
                {disappearMarkDown ? (
                    <Link to="/user/markdown">
                        <div className="border border-solid border-[#BFBFBF] shadow-lg cursor-pointer w-[220px] h-[60px] enroll-rounded ml-[20px] mt-[10px] flex center gap-[20px] bg-white relative duration-[0.5s] hover:scale-[1.1] active:scale-[1.1]">
                            <section className="translate-y-[-5px]">
                                <div className="center w-fit gap-[5px]">
                                    <p className="inter-txwe text-black text-[13px] font-bold">Markdown</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 128 128">
                                        <radialGradient id="SVG6bAUKdJt" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
                                            <stop offset=".314" stop-color="#ff9800" />
                                            <stop offset=".662" stop-color="#ff6d00" />
                                            <stop offset=".972" stop-color="#f44336" />
                                        </radialGradient>
                                        <path fill="url(#SVG6bAUKdJt)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5" />
                                        <radialGradient id="SVG5R9TgbPb" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
                                            <stop offset=".214" stop-color="#fff176" />
                                            <stop offset=".328" stop-color="#fff27d" />
                                            <stop offset=".487" stop-color="#fff48f" />
                                            <stop offset=".672" stop-color="#fff7ad" />
                                            <stop offset=".793" stop-color="#fff9c4" />
                                            <stop offset=".822" stop-color="#fff8bd" stop-opacity="0.804" />
                                            <stop offset=".863" stop-color="#fff6ab" stop-opacity="0.529" />
                                            <stop offset=".91" stop-color="#fff38d" stop-opacity="0.209" />
                                            <stop offset=".941" stop-color="#fff176" stop-opacity="0" />
                                        </radialGradient>
                                        <path fill="url(#SVG5R9TgbPb)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88" />
                                    </svg>
                                </div>
                                <p className="inter-txwe text-[#BFBFBF] text-[10px] mt-[-3px]">You're on the way to beat it.</p>
                            </section>
                            <div className="translate-y-[-5px] radial-progress text-primary text-[10px]" style={{ "--value": 0, "--size": "30px" }}
                                aria-valuenow={0} role="progressbar">0%</div>
                            <p className="absolute text-[#BFBFBF] text-[8px] bottom-[0px]">Expire : {expireMarkdown}</p>
                        </div>
                    </Link>
                ) : null}
                <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px]">All Courses :</p>
                {!disappearMarkDown ? (
                    <><div
                    onClick={() => document.getElementById('my_modal').showModal()}
                    className="py-[5px] overflow-hidden relative center duration-[0.5s] hover:scale-[1.1] gap-[10px] border border-solid border-slate-300 bg-white w-[165px] rounded-lg shadow-xl ml-[20px] mt-[10px] cursor-pointer">
                    <div>
                        <img src={Markdown} className="w-[26px] h-[26px]" />
                    </div>
                    <p className="inter-txwe text-slate-400 font-bold text-[13px]">Markdown</p>
                    <section className="absolute bg-red-500 w-[60px] h-[12px] text-white inter-txwe text-[7px] text-center font-bold right-[-20px] top-[6px] rotate-[45deg]">NEW</section>
                    </div>
                    <dialog id="my_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Markdown Language</h3>
                        <p className="py-4">
                            In this course You will learn an easiest programming language in the world.
                            It's not like python because It just a lightweight markup language that you need to know it first. You will know about .md file and Its syntax.
                        </p>
                        <div className="modal-action">
                            <div onClick={EnrollMarkDown}
                                className="bg-blue-600 center px-[10px] py-[3px] rounded-[10px] cursor-pointer duration-[0.5s] hover:bg-blue-500 active:bg-blue-500">
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
                    </dialog></>
                ) : null }
            </div>
        </>
    )
}

export function HeaderUser({ logoutHead }) {
    const [displayName, setDisplayName] = useState('')
    const [isemail, setEmail] = useState('')
    const [isuid, setUID] = useState('')
    const nav = useNavigate()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            const displayname = user.displayName
            const uid = user.uid
            const email = user.email

            setEmail(email);
            setUID(uid)
            setDisplayName(displayname)
        } else {
            null
        }
    })
    const handleLogout = () => {
        if (confirm("Are you sure to sign out?")) {
            alert("See you!")
            localStorage.removeItem('user_token')
            logoutHead()
            nav('/signin')
        }
    }

    const [Down, setDown] = useState(false)
    const [Size, setSize] = useState("w-[0px] h-[0px] p-[0px]")
    const [ShowSearchPop, setShowSearchPop] = useState(false)
    const [SizeSearch, setSizeSearch] = useState("w-[0px] h-[0px]")
    const handlePopup = () => {
        setDown(!Down)
        if (!Down) {
            setSize("w-[200px] h-fit px-[10px] pt-[10px] border border-solid border-[#BFBFBF]")
        }
        else { setSize("w-[0px] h-[0px] p-[0px]") }
    }
    return (
        <div className="z-50 relative w-fit mx-auto bg-white shadow-xl h-[60px] border border-solid border-slate-200 center gap-[10px] sticky top-[10px] px-[20px] rounded-[30px]">
            <img src={CaptureLogo} className="w-[25px] h-[25px]" />
            <div onClick={handlePopup}
                className="relative rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#BFBFBF" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd" />
                </svg>
                <div className={`absolute bg-white rounded-[15px] ${Size} top-[60px] duration-[0.5s] shadow-lg cursor-default`}>
                    <div className="center w-fit gap-[7px]">
                        <section className={`${Down ? "w-[30px] h-[30px] rounded-full center bg-blue-500 " : ""}`}>
                            <p className={`${Down ? "font-bold text-white" : "hidden"}`}>{displayName.charAt(0)}</p>
                        </section>
                        <section>
                            <p className={`${Down ? "inter-txwe text-black text-[12px] font-bold" : "hidden"}`}>{displayName}</p>
                            <div className={`${Down ? "center mt-[-3px]" : "hidden"}`}>
                                <div className="inline-grid *:[grid-area:1/1] translate-x-[-5px]">
                                    <div className="status status-success animate-ping"></div>
                                    <div className="status status-success"></div>
                                </div>
                                <p className="text-black inter-txwe text-[10px] translate-y-[2px] translate-x-[-1px] text-green-400">Online</p>
                            </div>
                        </section>
                    </div>
                    <div className={`${Down ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px] mt-[10px]" : "hidden"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#BFBFBF" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                        </svg>
                        <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>Setting</p>
                    </div>
                    <div className={`${Down ? "relative rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]" : "hidden"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 20 20">
                            <path fill="#BFBFBF" d="M4 8a6 6 0 0 1 4.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2zm8 10a2 2 0 1 1-4 0z" />
                        </svg>
                        <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>Notification</p>
                        <div className="absolute bg-red-500 rounded-full py-[1px] px-[6px] right-[10px] center font-bold text-[10px] inter-txwe">8</div>
                    </div>
                    <div className={`${Down ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]" : "hidden"}`} onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                            <path fill="#BFBFBF" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17" />
                        </svg>
                        <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>Sign Out</p>
                    </div>
                    <p className={`${Down ? "text-[#BFBFBF] text-[5px] text-center my-[3px]" : "hidden"}`}>{isuid}</p>
                </div>
            </div>
            <div className="rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200" onClick={() => setShowSearchPop(!ShowSearchPop)}>
                <svg className={`duration-[1s] ${ShowSearchPop ? "translate-x-[-123px] translate-y-[102px] z-50" : "translate-x-[0px] translate-y-[0px]"}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#BFBFBF" fill-rule="evenodd" d="m16.622 15.172l4.244 4.244l-1.414 1.415l-4.24-4.24a7 7 0 1 1 1.41-1.42zM16 11a5 5 0 1 0-10 0a5 5 0 0 0 10 0" />
                </svg>
            </div>
            <div className={`${ShowSearchPop ? "bg-white absolute top-[70px] border border-solid border-[#BFBFBF] shadow-xl rounded-lg p-[10px]" : "hidden"}`}>
                <section className="flex justify-end cursor-pointer">
                    <div className="w-fit rounded-full duration-[0.5s] p-[5px] hover:bg-slate-200 active:bg-slate-200 mr-[4px] mb-[4px]">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                            <path fill="#BFBFBF" d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z" />
                        </svg>
                    </div>
                </section>
                <input
                    type="text"
                    className={`${ShowSearchPop ? "w-[200px] h-[30px] bg-slate-200 rounded-[20px] pl-[30px] text-black text-[13px] inter-txwe outline-none" : "hidden"}`}
                    placeholder="Search a Courses"
                />
            </div>
        </div>
    )
}