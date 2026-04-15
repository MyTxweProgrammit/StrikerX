import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import ThemeToggle from './ThemeToggle';
import { signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './../firebase-config'
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const LoginPage = ({ login }) => {
    const setSwal = withReactContent(Swal);
    // New Zone (firebase)
    const nav = useNavigate();
    const [emailFirebase, setEmailFirebase] = useState('');
    const [passwordFirebase, setPasswordFirebase] = useState('');
    const [error, setError] = useState('');
    const [authentication, setAuthentication] = useState(false);
    async function handleFirebaseLogin() {
        setAuthentication(true);
        setError('');

        signInWithEmailAndPassword(auth, emailFirebase, passwordFirebase)
            .then((userCredential) => {
                nav('/user')
            }).catch((error) => {
                setError(error.message);
                setAuthentication(false);
                alert("Error to Auth")
                nav('/signin')
            });
    }

    // Old Zone
    const [checkedBox, setCheckedBox] = useState(true);
    const [userId, setUserId] = useState('');
    const [openEye, setOpenEye] = useState('password');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const username = import.meta.env.VITE_API_ADMIN_USER
    const password = import.meta.env.VITE_API_ADMIN_PASS
    const regex = /@.+\..+$/;

    Date.prototype.addMinute = function (h) {
        this.setTime(this.getTime() + ((h * 60 * 60 * 1000) / 60));
        return this;
    }
    Date.prototype.addHour = function (h) {
        this.setTime(this.getTime() + (h * 60 * 60 * 1000));
        return this;
    }

    const SESSION = localStorage.ss_token ? JSON.parse(localStorage.ss_token) : '' // Admin Session
    if (SESSION.remember && SESSION.exp >= new Date().getTime()) {
        login(SESSION.username, SESSION.password);
        navigate('/dashboard');
    } else { localStorage.removeItem('ss_token') }

    const SESSION_USER = localStorage.user_token ? JSON.parse(localStorage.user_token) : '' // User Session
    if (SESSION_USER.remember) {
        login(SESSION_USER.userId, SESSION_USER.pass);
        navigate('/user');
    } else { localStorage.removeItem('user_token') }

    const handleLogin = async (userId, pass) => { // this original were constant type not function
        if (userId === username && pass === password) { // Admin
            var session = {
                token: '2dc1c45d-575c-4658-8ef1-8c0a79d2510b',
                exp: new Date().addMinute(2).getTime(),
                expdate: new Date().addMinute(2).addHour(7),
                remember: checkedBox,
            }
            localStorage.setItem('ss_token', JSON.stringify(session))
            login(userId, pass);
            navigate('/dashboard');
        }
        else if (userId !== username && pass !== password && regex.test(userId) && userId !== '' && pass !== '') { // User
            var sessionUser = {
                token: 'bdd293e6-5b3e-4cce-8a54-7be422fdbb70',
                remember: checkedBox,
            }
            setAuthentication(true);
            try {
                const userCredential = await signInWithEmailAndPassword(auth, userId, pass);
                const user = userCredential.user;

                if (user.emailVerified === false) {
                    setSwal.fire({
                        title: "Invalid Login!",
                        text: "Please verify your identify in the email and come to login again.",
                        icon: "error"
                    })
                    setAuthentication(false)
                    await signOut(auth);
                } else {
                    setSwal.fire({
                        title: "Welcome Back!",
                        text: "Let's see what you've missed.",
                        icon: "success"
                    })
                    login(userId, pass);
                    localStorage.setItem('user_token', JSON.stringify(sessionUser))
                    nav('/user');
                }
            } catch (err) {
                setSwal.fire({
                    title: "Invalid Login!",
                    text: "Authenthication is invalid.",
                    icon: "error"
                })
            }
        }
        else {
            setSwal.fire({
                title: "Invalid Login!",
                text: "Please type a correct information again.",
                icon: "error"
            })
        }
    }
    const handlePopupSignin = async () => { // Have a problem
        let userCredential;
        try {
            console.log("Starting Sign-In...");
            userCredential = await signInWithPopup(auth, provider);
            console.log("Sign-In Success!");
        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.warn("Popup was closed, but let's check if user actually logged in.");
            } else {
                alert("Firebase Error: " + error.code);
            }
            return;
        }
        if (userCredential) {
            login(userCredential.user.email, userCredential.user.displayName);
            nav('/user');
        }
    }
    const handleOpenEye = () => {
        if (openEye === "password") setOpenEye("text")
        else setOpenEye("password")
    }

    return (
        <>  
            <div className="absolute bg-white w-screen h-[60px]"></div>
            <Header wants={true} />
            <div className='w-screen height-change bg-white relative'>
                <title>StrikerX - Login</title>
                <div className='center py-[30px]'>
                    <div className='border border-solid border-[#BFBFBF] w-[270px] pt-[20px] rounded-[10px] shadow-xl center'>
                        <div>
                            <p className='text-black font-bold inter-txwe text-[28px]'>Sign In</p>
                            <p className='text-black inter-txwe text-[15px] mt-[-5px]'>Welcome Back My Friend!</p>
                            <section className='mt-[20px]'>
                                <p className='text-black inter-txwe text-[12px] font-bold'>Username or Email Address</p>
                                <input
                                    className='text-[#A7A7A7] border border-solid border-[#A7A7A7] rounded-[5px] w-[212.4px] px-[15px] py-[6px] outline-none'
                                    type="text"
                                    placeholder="Example@gmail.com"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </section>
                            <section className='mt-[20px] w-fit'>
                                <aside className='flex justify-between items-center'>
                                    <p className='text-black inter-txwe text-[12px] font-bold'>Password</p>
                                    <Link className='text-[12px]'>Forgot Password?</Link>
                                </aside>
                                <div className='relative'>
                                    <input
                                        className='text-[#A7A7A7] border border-solid border-[#A7A7A7] rounded-[5px] w-[212.4px] pl-[15px] pr-[42px] py-[6px] outline-none'
                                        type={openEye}
                                        placeholder="Password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                    <svg onClick={handleOpenEye}
                                        className='absolute right-[15px] top-[7px] cursor-pointer'
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#A7A7A7" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                    </svg>
                                </div>
                            </section>
                            <section className="flex gap-[7px] mt-[10px]">
                                <input type="checkbox" checked={checkedBox} onChange={(e) => setCheckedBox(e.target.checked)} />
                                <p className='text-black text-[12px] inter-txwe'>Remember Me</p>
                            </section>
                            <div
                                onClick={() => handleLogin(userId, pass)}
                                className='cursor-pointer bg-linear-to-r from-[#89CCFF] to-[#005DA4] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] mt-[10px] text-white'>
                                Submit
                            </div>
                            <div className='relative mt-[15px]'>
                                <section className='w-fit mx-auto z-10 relative bg-white'>
                                    <p className='text-[#A7A7A7] inter-txwe px-2 text-[12px]'>OR</p>
                                </section>
                                <div className='bg-[#A7A7A7] w-full h-[1px] absolute top-1/2 transform -translate-y-1/2 rounded-full'></div>
                            </div>
                            <div onClick={handlePopupSignin} className='cursor-pointer bg-white border border-solid border-[#CDCDCD] inter-txwe text-[13px] text-center py-[8px] rounded-[20px] mt-[10px] hover:bg-[#CDCDCD] duration-[0.5s] active:bg-[#CDCDCD]'>
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
                            <p className='w-fit mx-auto my-[10px]'><Link to='/signup'>Create an Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeToggle />
        </>
    );
};

export default LoginPage;