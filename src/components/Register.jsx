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
    const [bithDate, setBirthDate] = useState('')
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
                <div className='border border-solid border-[#BFBFBF] shadow-xl p-[20px] rounded-[10px] w-[250px] mx-auto translate-y-[30px]'>
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
                                <path fill="#A7A7A7" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
                            </svg>
                        </section>
                    </div>
                    <section className="flex gap-[7px] my-[10px]">
                        <input type="checkbox" onChange={(e) => setTermTrue(e.target.checked)}/>
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
                    <Link></Link>
                    <p className='text-black inter-txwe text-[12px] text-center mt-[10px]'>
                        Already have an account?
                        <Link to='/signin'> Sign in</Link>
                    </p>
                </div>
            </div>
        </>
    )
}