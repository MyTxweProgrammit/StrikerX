import React, { useState } from "react"
import { useNavigate } from "react-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./../firebase-config"

export default function User({ logout }) {
    const [isemail, setEmail] = useState('')
    const [isuid, setUID] = useState('')
    const nav = useNavigate()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid
            const email = user.email
            setEmail(email);
            setUID(uid)
            console.log(uid);
            console.log(email)
        } else {
            null
        }
    })

    const handleLogout = () => {
        localStorage.removeItem('user_token')
        logout()
        nav('/signin')
    }
    return (
        <>
            <title>StrikerX - Dashboard</title>
            <div className="w-screen h-screen bg-white">
                <p className="text-black">Welcome, User!</p>
                <p className="text-black">Your Email : {isemail}</p>
                <p className="text-black">Your secret UID : {isuid}</p>
                <div className="text-black cursor-pointer border-test" onClick={handleLogout}>Logout</div>
            </div>
        </>
    )
}