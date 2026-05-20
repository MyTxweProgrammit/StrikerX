import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { TextField } from '@mui/material'
import Footer from './Footer'
import Header from './Header'

export default function FeaturePage() {
    const [url, setURL] = useState('')

    return (
        <>
            <Header />
            <div className="bg-white w-screen h-screen pl-[20px] pt-[40px]">
                <p className='text-black font-bold rubik-txwe text-[30px]'>All Features</p>
                <div className='w-[90%] bg-slate-100 shadow-xl border border-solid border-slate-200 py-[10px] px-[20px] mt-[20px] rounded-xl dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700'>
                    <p className='text-black font-bold rubik-txwe text-[20px] mb-[10px] dark:text-white'>QRcode Generator</p>
                    <div className='flex min-[400px]:items-center grid min-[400px]:grid-cols-2 grid-cols-1'>
                        <div className='w-fit max-[400px]:mx-auto max-[400px]:mb-[15px]'>
                            <QRCode className='w-[80px] h-[80px]' value={url} />
                        </div>
                        <TextField 
                            className='text-black bg-white' 
                            variant='outlined'
                            label='URL website'
                            value={url} 
                            onChange={(e) => setURL(e.target.value)} />
                    </div>
                    <p className='text-slate-400 dark:text-slate-200 rubik-txwe text-[11px] mt-[20px]'>Created by StrikerX (20 May 2026)</p>
                </div>
            </div>
            <Footer />
        </>
    )
}