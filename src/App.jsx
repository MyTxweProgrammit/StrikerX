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
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
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
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          }
        >
          <Route path="dashboard" element={<Dashboard logout={logout} />} />
          <Route path="/user" element={<User logout={logout} />} />
          <Route path="/user/markdown" element={<Markdown logout={logout} />} />
        </Route>
        <Route path="/signin" element={<LoginPage login={login} />} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
