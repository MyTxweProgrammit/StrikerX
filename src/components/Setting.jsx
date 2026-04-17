import React from 'react'
import { useNavigate } from 'react-router'

export default function Setting({ logout }) {
    const navigate = useNavigate();
    return (
        <div className='w-screen h-screen bg-white flex'>
            <nav className='shadow-xl w-[200px] h-screen'>
                <p className='rubik-txwe text-black font-bold mt-[30px] ml-[10px] text-[20px]'>Setting</p>
                <div className='flex items-center mt-[40px] py-[5px] cursor-pointer gap-[10px]'>
                    <svg className='ml-[10px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#7c7c7c" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/>
                    </svg>
                    <p className='rubik-txwe text-slate-400 text-[17px]'>Profile</p>
                </div>
            </nav>
            <div className='w-full h-fulll'>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}