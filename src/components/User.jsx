import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth, database } from "./../firebase-config"
import { ref, set } from "firebase/database"
import CaptureLogo from "../assets/CaptureLogo.png"
import Markdown from "../assets/Markdown.png"

export default function User({ logout }) {

    const [MarkdownDate, setMarkdownDate] = useState(new Date().toLocaleString())
    const [MarkdownExpire, setMarkdownExpire] = useState("")
    useEffect(() => {
        const date = new Date()
        date.setMonth(date.getMonth() + 2)
        date.getMonth() + 1
        setMarkdownExpire(date.toLocaleString())
    }, [])
    const EnrollMarkDown = async () => {
        try {
            const user = auth.currentUser
            if (user) {
                const uid = user.uid
                await set(ref(database, 'users/' + uid + '/courses/Markdown/'), { // ใช้ uid ตรงนี้
                    EnrollDate: MarkdownDate,
                    Expire: MarkdownExpire,
                });
                alert("You can start to learn now!");
                document.getElementById('my_modal').close()
            } else {
                alert("Please sign in to enroll in a course.");
            }
        } catch(err) { alert(err.message) }
    }
    return (
        <>
            <title>StrikerX - Dashboard</title>
            <div className="w-screen h-screen bg-white">
                <HeaderUser logoutHead={logout} />
                <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px]">Your Course (0) :</p>
                <p className="text-black inter-txwe font-bold text-xl ml-[10px] mt-[30px]">All Courses :</p>
                <div 
                    onClick={()=>document.getElementById('my_modal').showModal()}
                    className="py-[5px] overflow-hidden relative center duration-[0.5s] hover:scale-[1.1] gap-[10px] border border-solid border-slate-300 bg-white w-[165px] rounded-lg shadow-xl ml-[20px] mt-[10px] cursor-pointer">
                    <div>
                        <img src={Markdown} className="w-[26px] h-[26px]"/>
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
                </dialog>
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