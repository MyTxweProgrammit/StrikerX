import React, { useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router'
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from 'firebase/auth'
import { auth, database } from './../firebase-config'
import { ref, set } from 'firebase/database'

export default function Register() {
    const nav = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleCreateUser = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            await updateProfile(userCredential.user, { displayName: username })
            await set(ref(database, 'users/' + userCredential.user.uid), {
                username: username,
                email: email,
            })
            await sendEmailVerification(userCredential.user)
            await signOut(auth)
            
            alert('ส่งอีเมลยืนยันแล้ว! กรุณาเช็คเมล์ก่อนเข้าสู่ระบบ หากไม่พบอีเมลในกล่องจดหมายเข้า กรุณาตรวจสอบในโฟลเดอร์ อีเมลขยะ (Spam) เพื่อให้ได้รับข่าวสารจากเราในอนาคต');
            nav('/signin');
        } catch(err) {
            alert(err.message);
        }
    }

    return (
        <>
            <title>StrikerX - Register</title>
            <Header wants={true} />
            <div className='w-screen h-screen bg-white center'>
                <div className='border-test'>
                    <p className='text-black font-bold inter-txwe'>Create an Account</p>
                    
                    <input type="text"
                        placeholder='Create Username'
                        className='text-black input bg-white'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="email"
                        placeholder='Create Email'
                        className='text-black input bg-white'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        placeholder='Create Password'
                        className='text-black input bg-white'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                        className='text-black cursor-pointer border-test'
                        onClick={handleCreateUser}
                    >Create User</div>
                </div>
            </div>
        </>
    )
}