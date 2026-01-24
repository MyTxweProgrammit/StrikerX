import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from './components/Main'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import ProtectedRoute from './components/ProtectedRoute'
import User from './components/User'
// import { database } from './firebase-config'
// import { ref, set } from 'firebase/database'

export default function App() {
  // const addDatabase = async () => { I will do it soon
  //   try {
  //     await set(ref(database, 'utilities/'), {darkmode: 'off'})
  //   } catch(error) { console.log("Can't add a Database") }
  // }
  // useEffect(() => {
  //   addDatabase();
  // }, [])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const login = () => { setIsAuthenticated(true) }
  const logout = () => { setIsAuthenticated(false) }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />} >
          <Route path="dashboard" element={<Dashboard logout={logout} />} />
          <Route path="/user" element={<User logout={logout} />} />
        </Route>
        <Route path="/signin" element={<LoginPage login={login}/>} />
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
