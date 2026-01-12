import React, { useState } from  'react'
import Header from './Header'
import { useNavigate, Link } from 'react-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../firebase-config'

export default function Register({ login }) {
    const nav = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authentication, setAuthentication] = useState(false)
    async function handleCreateUser() {
        setAuthentication(true)
        login(username, password)
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('User Created:', userCredential.user)
            nav('/user')
        }).catch((error) => {
            setAuthentication(false)
            alert('Invalid to Create User!')
            nav('/signup')
        })
    }

    return (
        <>
            <title>StrikerX - Register</title>
            <Header />
            <div className='w-screen h-screen bg-white'>
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
        </>
    )
}