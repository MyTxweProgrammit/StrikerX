import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./../firebase-config"
import CaptureLogo from "../assets/CaptureLogo.png"

export default function User({ logout }) {
    return (
        <>
            <title>StrikerX - Dashboard</title>
            <div className="w-screen h-screen bg-white">
                <HeaderUser logoutHead={logout} />
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
    const handlePopup = () => {
        setDown(!Down)
        if (!Down) { 
            setSize("w-[200px] h-fit px-[10px] py-[10px] border border-solid border-[#BFBFBF]") 
        }
        else { setSize("w-[0px] h-[0px] p-[0px]") }
    }
    return (
        <div className="w-fit mx-auto bg-white shadow-xl h-[60px] border border-solid border-slate-200 center gap-[10px] sticky top-[10px] px-[20px] rounded-[30px]">
            <img src={CaptureLogo} className="w-[25px] h-[25px]"/>
            <div onClick={handlePopup} 
                className="relative rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#BFBFBF" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/>
                </svg>
                <div className={`absolute rounded-[15px] ${Size} top-[60px] duration-[0.5s] shadow-lg cursor-default`}>
                    <div className="center w-fit gap-[7px]">
                        <section className={`${Down ? "w-[30px] h-[30px] rounded-full center bg-blue-500 " : ""}`}>
                            <p className={`${Down ? "font-bold" : "hidden"}`}>{displayName.charAt(0)}</p>
                        </section>
                        <p className={`${Down ? "inter-txwe text-black text-[12px] font-bold" : "hidden"}`}>{displayName}</p>
                    </div>
                    <div className={`${Down ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px] mt-[10px]" : "hidden"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
	                        <path fill="#BFBFBF" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                        </svg>
                        <p className={`${ Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>Setting</p>
                    </div>
                    <div className={`${Down ? "rounded-[7px] flex items-center hover:bg-slate-100 active:bg-slate-100 duration-[0.5s] gap-[5px] cursor-pointer py-[5px] pl-[5px]" : "hidden"}`} onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
	                        <path fill="#BFBFBF" d="M124 216a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H60v152h52a12 12 0 0 1 12 12m108.49-96.49l-40-40a12 12 0 0 0-17 17L195 116h-83a12 12 0 0 0 0 24h83l-19.52 19.51a12 12 0 0 0 17 17l40-40a12 12 0 0 0 .01-17" />
                        </svg>
                        <p className={`${Down ? "text-[#BFBFBF] inter-txwe font-bold text-[11px]" : "hidden"}`}>Sign Out</p>
                    </div>
                </div>
            </div>
            <div className="relative rounded-full w-[35px] h-[35px] cursor-pointer center duration-[0.5s] hover:bg-slate-200 active:bg-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	                <path fill="#BFBFBF" fill-rule="evenodd" d="m16.622 15.172l4.244 4.244l-1.414 1.415l-4.24-4.24a7 7 0 1 1 1.41-1.42zM16 11a5 5 0 1 0-10 0a5 5 0 0 0 10 0" />
                </svg>
                {/* DO IT HERE SOON */}
                {/* <div className="absolute top-[60px] border-test w-[200px]"></div>*/}
            </div>
        </div>
    )
}