import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./components/User";
import Markdown from "./components/Markdown";
import NotFound from "./components/NotFound";
import { auth } from "./firebase-config";
import RoleBasedRoute from "./components/Auth/RoleBasedRoute";
import Setting from "./components/Setting"
import SuccessPayment from "./components/SuccessPayment";
import CancelPayment from "./components/CancelPayment";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const checkTokenExpiration = () => {
      const sessionAdmin = localStorage.ss_token ? JSON.parse(localStorage.ss_token) : null;
      if (sessionAdmin?.exp && new Date().getTime() > sessionAdmin.exp) localStorage.removeItem("ss_token")
    }
    checkTokenExpiration();
  }, [])
  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("ss_token");
    localStorage.removeItem("user_token")
    signOut(auth).then(() => {
      setIsAuthenticated(false);
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RoleBasedRoute requiredRole="admin" isLoading={isLoading} />}>
          <Route path="dashboard" element={<Dashboard logout={logout}/>} />
        </Route>
        <Route element={<RoleBasedRoute requiredRole="user" isLoading={isLoading} />}>
          <Route path="/user" element={<User logout={logout} />} />
          <Route path="/user/markdown" element={<Markdown logout={logout} />} />
          <Route path="/user/setting" element={<Setting logout={logout}/>} />
          <Route path="/success" element={<SuccessPayment />} />
          <Route path="/cancel" element={<CancelPayment />} />
        </Route>
        <Route path="/signin" element={<LoginPage login={login} />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
