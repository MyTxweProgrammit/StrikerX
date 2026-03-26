import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import {
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, provider } from "./../firebase-config";

const LoginPage = ({ login }) => {
  // New Zone (firebase)
  const nav = useNavigate();
  const [emailFirebase, setEmailFirebase] = useState("");
  const [passwordFirebase, setPasswordFirebase] = useState("");
  const [error, setError] = useState("");
  const [authentication, setAuthentication] = useState(false);
  async function handleFirebaseLogin() {
    setAuthentication(true);
    setError("");

    signInWithEmailAndPassword(auth, emailFirebase, passwordFirebase)
      .then((userCredential) => {
        nav("/user");
      })
      .catch((error) => {
        setError(error.message);
        setAuthentication(false);
        alert("Error to Auth");
        nav("/signin");
      });
  }

  // Old Zone
  const [checkedBox, setCheckedBox] = useState(true);
  const [userId, setUserId] = useState("");
  const [openEye, setOpenEye] = useState("password");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const username = import.meta.env.VITE_API_ADMIN_USER;
  const password = import.meta.env.VITE_API_ADMIN_PASS;
  const regex = /@.+\..+$/;

  Date.prototype.addMinute = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000) / 60);
    return this;
  };
  Date.prototype.addHour = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
  };

  const SESSION = localStorage.ss_token
    ? JSON.parse(localStorage.ss_token)
    : ""; // Admin Session
  if (SESSION.remember && SESSION.exp >= new Date().getTime()) {
    login(SESSION.username, SESSION.password);
    navigate("/dashboard");
  } else {
    localStorage.removeItem("ss_token");
  }

  const SESSION_USER = localStorage.user_token
    ? JSON.parse(localStorage.user_token)
    : ""; // User Session
  if (SESSION_USER.remember) {
    login(SESSION_USER.userId, SESSION_USER.pass);
    navigate("/user");
  } else {
    localStorage.removeItem("user_token");
  }

  const handleLogin = async (userId, pass) => {
    // this original were constant type not function
    if (userId === username && pass === password) {
      // Admin
      var session = {
        token: "2dc1c45d-575c-4658-8ef1-8c0a79d2510b",
        exp: new Date().addMinute(2).getTime(),
        expdate: new Date().addMinute(2).addHour(7),
        remember: checkedBox,
      };
      localStorage.setItem("ss_token", JSON.stringify(session));
      login(userId, pass);
      navigate("/dashboard");
    } else if (
      userId !== username &&
      pass !== password &&
      regex.test(userId) &&
      userId !== "" &&
      pass !== ""
    ) {
      // User
      var sessionUser = {
        token: "bdd293e6-5b3e-4cce-8a54-7be422fdbb70",
        remember: checkedBox,
      };
      setAuthentication(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          userId,
          pass
        );
        const user = userCredential.user;

        if (user.emailVerified === false) {
          alert("คุณยังไม่ได้ยืนยันอีเมล! กรุณากดลิงก์ในอีเมลก่อน");
          setAuthentication(false);
          await signOut(auth);
        } else {
          alert("ยินดีต้อนรับ!");
          login(userId, pass);
          localStorage.setItem("user_token", JSON.stringify(sessionUser));
          nav("/user");
        }
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Invalid login!");
    }
  };
  const handlePopupSignin = async () => {
    // Have a problem
    let userCredential;
    try {
      console.log("Starting Sign-In...");
      userCredential = await signInWithPopup(auth, provider);
      console.log("Sign-In Success!");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.warn(
          "Popup was closed, but let's check if user actually logged in."
        );
      } else {
        alert("Firebase Error: " + error.code);
      }
      return;
    }
    if (userCredential) {
      login(userCredential.user.email, userCredential.user.displayName);
      nav("/user");
    }
  };
  const handleOpenEye = () => {
    if (openEye === "password") setOpenEye("text");
    else setOpenEye("password");
  };
  async function handleResetPassword() {
    if (!userId) {
      alert("Please fill your email correctly!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, userId);
      alert(
        "Password reset email sent! Please check in your spam email options."
      );
    } catch (err) {
      console.log(err.code);
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="absolute bg-white w-screen h-[60px]"></div>
      <Header wants={true} />
      <div className="w-screen height-change bg-white relative">
        <title>StrikerX - Login</title>
        <div className="center py-[30px]">
          <div className="w-[80%] center">
            <div className="w-[50%] bg-linear-to-r from-[#1a227e] via-[#434ba1] to-[#7178c9]">
              <p className="text-white font-bold text-[13px] mt-[80px] ml-[20px]">
                FOR EDUCATION
              </p>
              <p className="text-white font-bold text-[25px] ml-[20px] leading-[1.3] my-[7px]">
                Master the <hr className="border-none" /> Digital Craft
              </p>
              <p className="text-slate-300 text-[12px] ml-[20px] mb-[20px]">
                Join the elite circle of technical architects. High-end
                curriculum designed for the next generation of engineers.
              </p>
            </div>
            <div className="w-[50%] border-test px-[20px]">
              <p className="font-bold text-black">Welcome Back</p>
              <p className="text-slate-700 text-[8px]">
                Please enter your credentials to access your console
              </p>
              <div className="center bg-slate-200 rounded-lg relative h-[27px]">
                <p className="font-bold text-[#1a227e] text-[10px] w-[50%] text-center z-20 cursor-pointer">
                  Sign In
                </p>
                <p className="font-bold text-slate-700 text-[10px] w-[50%] text-center z-20 cursor-pointer">
                  Create Account
                </p>
                <div className="w-[50%] h-[85%] absolute bg-white z-10 left-[2px] rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
};

export default LoginPage;
