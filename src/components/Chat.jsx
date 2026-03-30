import React, { useState, useEffect, useRef } from 'react'
import CaptureLogo from './../assets/CaptureLogo.png'
import { database } from './../firebase-config'
import { ref,  onValue } from 'firebase/database'

export default function Chat() {
    const [transform, setTransform] = useState(false)
    const [data, setData] = useState(null)
    const messageEnd = useRef(null)
    const scrollToBottom = () => { messageEnd.current?.scrollIntoView({ behavior: "smooth" }) }
    useEffect(() => {
        if (transform) scrollToBottom()
    }, [data, transform])
    useEffect(() => {
        const unsubscribe = onValue(ref(database, 'utilities/notifications/message'), (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                setData(null);
            }
        }, (error) => {
            console.error("Firebase error:", error);
        });
        return () => unsubscribe();
    }, [])
    return (
        <div onClick={() => setTransform(true)}
            className={`bg-slate-200 shadow-xl ${transform ? "w-[270px] h-[350px] rounded-[10px]" : "center w-[50px] h-[50px] rounded-[50%] hover:scale-[1.2] active:scale-[1.2] cursor-pointer"} fixed bottom-[20px] right-[20px] duration-[0.4s] overflow-hidden`} >
            {transform ? (
                <div className='h-full flex flex-col'>
                    <div className="h-[15%] flex items-center justify-around bg-green-200 shrink-0">
                        <div className='center gap-[5px]'>
                            <div className='bg-white rounded-[50%] p-[5px]'>
                                <img className='w-[20px] h-[20px]' src={CaptureLogo} />
                            </div>
                            <p className='text-green-700 font-bold text-[12px]'>StrikerX Admin</p>
                        </div>
                        <div className='cursor-pointer' onClick={(e) => {e.stopPropagation(); setTransform(false);}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="none" stroke="#717171" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 4.75-6.5 6.5m0-6.5 6.5 6.5"/>
                            </svg>
                        </div>
                    </div>
                    <div className='h-[85%] pl-[10px] overflow-y-auto flex flex-col'>
                        {/* <div className='flex-grow'/> */}
                        {data && Object.keys(data).map((key) => (
                            <div key={key} className='w-fit max-w-[85%] break-words bg-white rounded-[20px] py-[4px] px-[5px] mt-[7px]'>
                                <p className='text-black text-[11px]'>{data[key]}</p>
                            </div>
                        ))}
                        {/* <div ref={messageEnd} /> */}
                    </div>
                </div>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#717171" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1.252 11H8.75l-.102.007a.75.75 0 0 0 0 1.486l.102.007h4.502l.101-.007a.75.75 0 0 0 0-1.486zm1.998-3.5h-6.5l-.102.007a.75.75 0 0 0 0 1.486L8.75 11h6.5l.102-.007a.75.75 0 0 0 0-1.486z"/>
                </svg>
            )}
        </div>
    )
}