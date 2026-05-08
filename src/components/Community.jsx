import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, database } from "./../firebase-config"
import Footer from "./../components/Footer"
import { push, ref ,set, onValue } from 'firebase/database'

export default function Community() {
    const [nameProfile, setNameProfile] = useState('')
    const [classAnimateWrite, setClassAnimateWrite] = useState('w-[80px] h-[50px] center')
    const [classAnimateSVG, setClassAnimateSVG] = useState('rotate-[0deg]')
    const [classAnimateProfile, setClassAnimateProfile] = useState('center')
    const [ShowStatus, setShowStatus] = useState('default_name')
    const [detail, setDetail] = useState('')
    const [dateCreated, setDateCreated] = useState(new Date().toLocaleString())
    const [data, setData] = useState(null)
    onAuthStateChanged(auth, (user) => {
        if (user) setNameProfile(user.displayName)
    })
    const handleShowWriteTab = () => {
        if (classAnimateWrite === 'w-[80px] h-[50px] center' && classAnimateSVG === "rotate-[0deg]") {
            setClassAnimateWrite('w-[80%]')
            setClassAnimateSVG('rotate-[90deg]')
            setClassAnimateProfile('flex items-center justify-between')
        } else {
            setClassAnimateWrite('w-[80px] h-[50px] center')
            setClassAnimateSVG('rotate-[0deg]')
        }
    }
    const handleSendPost = async () => {
        try {
            const data = {
                status: ShowStatus,
                detail: detail,
                dated: dateCreated,
                username: nameProfile
            }
            const newKey = push(ref(database, 'post/'))
            await set(newKey, data).then(() => {
                alert("Add data Successfully!")
            })
            window.location.reload();
        } catch(err) { alert("Can't add data") }
    }
    useEffect(() => {
        const unsubscribe = onValue(ref(database, 'post/'), (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
                console.log(snapshot.val())
            } else {
                setData(null);
            }
        }, (error) => {
            console.error("Firebase error:", error);
        });
        return () => unsubscribe();
    }, []) // Get Post & Comment Data
    // useEffect(() => {
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
    //  }, []) // Adsterra PopUp
    return (
        <>
            <title>StrikerX - Community</title>
            <script>
                <script async="async" data-cfasync="false" src="https://pl29156561.profitablecpmratenetwork.com/3d8d4df0c6a6041d9d8ca120272411cf/invoke.js"></script>
            </script>
            <div className="w-screen bg-white pt-[30px] px-[30px]">
                <p className="outfit-txwe text-black font-bold text-[30px]">Community</p>
                <hr className="border-slate-300 mt-[10px] w-[80%]"/>
                <div className={`bg-slate-200 shadow-xl duration-[0.7s] ${classAnimateWrite} gap-[10px] py-[7px] px-[10px] mt-[10px] rounded-xl`}>
                    <div className={`duration-500 ${classAnimateProfile} h-fit gap-[7px]`}>
                        <section className='rounded-full center bg-blue-500 w-[30px] h-[30px]'>
                            <p className='text-white outfit-txwe'>{nameProfile.charAt(0)}</p>
                        </section>
                        <div onClick={handleShowWriteTab} className={`duration-[0.7s] ${classAnimateSVG} cursor-pointer`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="#BFBFBF" d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                    { classAnimateWrite === 'w-[80%]' ? (
                        <div>
                            <select value={ShowStatus} onChange={e => setShowStatus(e.target.value)}
                                className='bg-white text-black border-slate-300 cursor-pointer text-[14px] py-[5px] px-[10px] outfit-txwe rounded-[5px] duration-500 hover:bg-slate-300 active:bg-slate-300 outline-none'>
                                <option value="default_name">Default Name</option>
                                <option value="incognito">Incognito</option>
                            </select> <br />
                            <textarea 
                                value={detail} onChange={(e) => setDetail(e.target.value)}
                                style={{ resize: "none" }} className='bg-white w-full text-black outfit-txwe mt-[10px] h-[100px] px-[10px] py-[10px] text-[14px] outline-none' 
                                placeholder='Write a content or question...'></textarea>
                            <div onClick={handleSendPost} className='bg-blue-700 w-full py-[7px] rounded-xl my-[5px] cursor-pointer duration-500 hover:bg-blue-900 active:bg-blue-900'>
                                <p className="text-white text-center outfit-txwe">Post Comment</p>
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* Post User */}
                <div className='w-full h-[200px] mt-[20px]'>
                    {data && Object.entries(data).map(([id, value]) => (
                        <div key={id} className="bg-slate-100 w-full p-[10px] mb-[15px] border-slate-300 shadow-xl rounded-xl">
                            <div className='center w-fit gap-[7px]'>
                                <section className='bg-slate-200 w-fit rounded-full p-[5px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#BFBFBF" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/>
                                    </svg>
                                </section>
                                <div className='grid grid-cols-2 w-fit max-[360px]:grid-cols-1'>
                                    <p className="text-slate-800 outfit-txwe text-[14px]">{value.username}</p>
                                    <p className="text-slate-400 outfit-txwe text-[11px] ml-[5px] h-fit max-[360px]:ml-[0px]">{value.dated}</p>
                                </div>
                            </div>
                            <p className="text-black outfit-txwe text-[18px] mt-[10px] ml-[10px]">{value.detail}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-[20px]" id="container-3d8d4df0c6a6041d9d8ca120272411cf"></div>
                <Footer />
            </div>
        </>
    )
}