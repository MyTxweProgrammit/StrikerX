import React, { useState } from 'react'
import Header from './Header'
import { useNavigate, Link } from 'react-router'
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from 'firebase/auth'
import { auth, database } from './../firebase-config'
import { ref, set } from 'firebase/database'

export default function Register() {
    const nav = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateCreated, setDateCreated] = useState(new Date().toLocaleString())
    const [openEye, setOpenEye] = useState('password')
    const [termTrue, setTermTrue] = useState(false)
    const [isOut, setIsOut] = useState(false)
    const handleOpenEye = () => {
        if (openEye === 'password') setOpenEye('text')
        else setOpenEye('password')
    }
    const handleCreateUser = async () => {
        if (termTrue) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                await updateProfile(userCredential.user, { displayName: username })
                await set(ref(database, 'users/' + userCredential.user.uid), {
                    username: username,
                    email: email,
                    Created: dateCreated
                })
                await sendEmailVerification(userCredential.user)
                await signOut(auth)

                alert('ส่งอีเมลยืนยันแล้ว! กรุณาเช็คเมล์ก่อนเข้าสู่ระบบ หากไม่พบอีเมลในกล่องจดหมายเข้า กรุณาตรวจสอบในโฟลเดอร์ อีเมลขยะ (Spam) เพื่อให้ได้รับข่าวสารจากเราในอนาคต');
                nav('/signin');
            } catch (err) {
                alert(err.message);
            }
        } else { alert('Please accept the our condition!') }
    }


    return (
        <>
            <title>StrikerX - Register</title>
            <Header wants={true} />
            <div className='w-screen h-screen bg-white'>
                <div className='border border-solid border-[#BFBFBF] shadow-xl rounded-[10px] w-[250px] mx-auto translate-y-[30px] relative flex overflow-hidden'>
                    <div className={`p-[20px] rounded-[10px] w-[250px] duration-[0.5s] ${isOut ? 'translate-x-[-250px]' : 'translate-x-[0px]'} `}> {/* inner first authentication */}
                        <div className='flex justify-end items-center'>
                            <section className='center cursor-pointer' onClick={() => setIsOut(true)}>
                                <p className="text-[#A7A7A7] inter-txwe text-[12px]">Other auth</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#A7A7A7" stroke="#A7A7A7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 17l5-5m0 0l-5-5" />
                                </svg>
                            </section>
                        </div>
                        <p className='text-black font-bold inter-txwe text-[20px]'>Create an Account</p>
                        <p className='text-black inter-txwe text-[10.5px]'>Let's become part of our journey!</p>
                        <div className='mt-[10px]'>
                            <p className='font-bold text-black inter-txwe text-[12px]'>Username</p>
                            <input type="text"
                                placeholder='Username'
                                className='text-black input bg-white w-full border border-solid border-[#A7A7A7]'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='mt-[10px]'>
                            <p className='font-bold text-black inter-txwe text-[12px]'>Email Address</p>
                            <input type="email"
                                placeholder='Email'
                                className='text-black input bg-white w-full border border-solid border-[#A7A7A7]'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='my-[10px]'>
                            <p className='font-bold text-black inter-txwe text-[12px]'>Password</p>
                            <section className='relative'>
                                <input type={openEye}
                                    placeholder='Password'
                                    className='text-black input bg-white w-full border border-solid border-[#A7A7A7] pr-[40px]'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <svg
                                    onClick={handleOpenEye}
                                    className='absolute right-[10px] top-[9px] cursor-pointer'
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#A7A7A7" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                </svg>
                            </section>
                        </div>
                        <section className="flex gap-[7px] my-[10px]">
                            <input type="checkbox" onChange={(e) => setTermTrue(e.target.checked)} />
                            <div className='text-black text-[10px] inter-txwe gap-[3px]'>
                                I accept the term
                                <Link> Terms & Conditions </Link>
                                and the
                                <Link> Privacy Policy</Link>
                            </div>
                        </section>
                        <div
                            className='text-black cursor-pointer bg-linear-to-r from-[#FF8989] to-[#B00000] text-white inter-txwe text-[13px] text-center py-[8px] rounded-[20px]'
                            onClick={handleCreateUser}
                        >Create User</div>
                    </div>
                    <div className={`p-[10px] rounded-[10px] center w-full absolute h-[427.25px] duration-[0.5s] ${isOut ? 'translate-x-[0px]' : 'translate-x-[250px]'} `}>
                        <div className='absolute top-[20px] w-full pl-[10px]'>
                            <section className='flex items-center cursor-pointer' onClick={() => setIsOut(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#A7A7A7" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"/>
                                </svg>
                                <p className="text-[#A7A7A7] inter-txwe text-[12px]">Back</p>
                            </section>
                        </div>
                        <div className='w-full bg-[#FFCBCB] px-[10px] py-[20px]'>
                            <div className='relative mb-[10px]'>
                                <section className='w-fit mx-auto z-10 relative bg-[#FFCBCB]'>
                                    <p className='text-[#A7A7A7] inter-txwe px-2 text-[12px]'>OR</p>
                                </section>
                                <div className='bg-[#A7A7A7] w-full h-[1px] absolute top-1/2 transform -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div className='cursor-pointer bg-white border border-solid border-[#CDCDCD] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] hover:bg-[#CDCDCD] duration-[0.5s] active:bg-[#CDCDCD]'>
                                <div className='center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" />
                                    </svg>
                                    <p className='text-[#5C5C5C]'>Continue with Google</p>
                                </div>
                            </div>
                            <div className='cursor-pointer bg-[#1877F2] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] mt-[10px] hover:bg-[#085cc9] duration-[0.5s] active:bg-[#085cc9]'>
                                <div className='center gap-[2px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                                    </svg>
                                    <p className='text-white'>Continue with Facebook</p>
                                </div>
                            </div>
                            <div className='cursor-pointer bg-[#FF0059] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] mt-[10px] hover:bg-[#d4004a] duration-[0.5s] active:-[#d4004a]'>
                                <div className='center gap-[2px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                        <path fill="#fff" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43a4.9 4.9 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.8 4.8 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.8 4.8 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.2 3.2 0 0 1-1.15.75a5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3a3.3 3.3 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.1 3.1 0 0 1 .75 1.1a5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33" />
                                    </svg>
                                    <p className='text-white'>Continue with Instagram</p>
                                </div>
                            </div>
                        </div>
                        <p className='absolute bottom-[90px] text-black inter-txwe text-[12px] text-center mt-[10px]'>
                            Already have an account?
                            <Link to='/signin'> Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}