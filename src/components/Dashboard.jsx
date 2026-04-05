import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./../firebase-config";
import { motion } from "motion/react"
import { ref, update, child, get, push, set } from "firebase/database";

const Dashboard = ({ logout }) => {
  const [message, setMessage] = useState("");
  const [errorPassword, setErrorPassword] = useState(false)
  const [lockChat, setLockChat] = useState(true)
  const [passwordChat, setPasswordChat] = useState('')
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("ss_token");
    logout();
    navigate("/signin");
  };
  const handleAddNotification = async (data) => {
    try {
      const newKey = push(ref(database, 'utilities/notifications/message'))
      await set(newKey, data).then(() => {
        alert("Add data Successfully!")
      })
    } catch (err) {
      alert("Can't Send a message");
      console.log(err.message);
    }
  };
  const handleProcessChat = () => {
    if (passwordChat === import.meta.env.VITE_UNLOCK_CHAT) {
      setLockChat(false)
      setErrorPassword(false)
    }
    else setErrorPassword(true)
  }

  return (
    <div className="w-screen h-screen bg-white">
      <title>StrikerX - Admin Dashboard</title>
      <h1 className="text-black font-bold ml-[20px] pt-[20px]">Hello Admin!</h1>
        <div className="mx-auto w-[90%] h-[300px] rounded-xl bg-slate-200 mt-[20px] shadow-xl overflow-hidden relative">
          {lockChat ? (
            <>
              <div className="h-full center relative">
                { errorPassword ? (
                  <>
                    <motion.div 
                      initial={{ translateX: -200 }}
                      animate={{ translateX: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-red-600 absolute top-[20px] left-[20px] center py-[10px] px-[15px] rounded-[20px] gap-[10px] shadow-xl cursor-pointer duration-[0.5s] hover:bg-red-300 active:bg-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                          <path fill="#ffffff" d="M11 17h2v-6h-2zm1.713-8.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>
                        </svg>
                        <p className="text-red-100">Password in Invalid.</p>
                    </motion.div>
                  </>) : null }
                <section>
                  <div className="mx-auto w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                      <g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#f2c94c" d="M19.833 38.25c-1.012 0-1.833.82-1.833 1.833v26.334c0 1.012.82 1.833 1.833 1.833h40.334c1.012 0 1.833-.82 1.833-1.833V40.083c0-1.012-.82-1.833-1.833-1.833zM43 56.25a4.243 4.243 0 1 1-6-6a4.243 4.243 0 0 1 6 6"/><path fill="#828282" d="M40 14.25c-8.56 0-15.5 6.94-15.5 15.5v8.5h4v-8.5c0-6.351 5.149-11.5 11.5-11.5s11.5 5.149 11.5 11.5v8.5h4v-8.5c0-8.56-6.94-15.5-15.5-15.5"/></g>
                    </svg>
                  </div>
                  <p className="text-black text-center">This content is locking. <br/> You need to type a password to unlock it.</p>
                  <div className="center w-fit mx-auto mt-[10px] gap-[5px]">
                    <input 
                      className="border border-solid border-solid-500 text-black py-[5px] px-[10px] rounded-[20px]"
                      type="password" 
                      placeholder="Password" 
                      onChange={(e) => setPasswordChat(e.target.value)}
                      value={passwordChat}
                    />
                    <div className="text-black cursor-pointer bg-blue-900 text-white p-[6px] rounded-lg duration-[0.5s] hover:bg-blue-700 active:bg-blue-700" onClick={handleProcessChat}>Unlock</div>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <>
              <p className="text-black font-bold ml-[20px] pt-[20px]">Chat System</p>
              <div
                onClick={() => setLockChat(true)}
                className="rounded-full absolute cursor-pointer top-[20px] right-[20px] p-[8px] w-fit duration-[0.5s] hover:bg-slate-300 active:bg-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#717171" d="M6 8a6 6 0 1 1 12 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm6-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m2 10a2 2 0 0 1-1 1.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12a2 2 0 0 1 2 2"/></g>
                </svg>
              </div>
              <div className="w-fit mx-auto bg-slate-900 p-[15px] rounded-xl flex gap-[10px] mt-[20px]">
                <input
                  type="text"
                  className="text-white py-[5px] px-[10px]"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
                <input
                  className="text-white bg-blue-500 cursor-pointer py-[5px] px-[10px] rounded-xl hover:bg-blue-700 duration-[0.5s] active:bg-blue-700"
                  type="submit"
                  value="SEND"
                  onClick={() => handleAddNotification(message)}
                />
              </div>
              <table class="mt-[20px] table-auto text-black mx-auto border border-solid border-slate-500">
                <thead>
                  <tr>
                    <th className="border border-solid border-slate-500 py-[6px]">Index</th>
                    <th className="border border-solid border-slate-500">Detail</th>
                    <th className="border border-solid border-slate-500">Date</th>
                    <th className="border border-solid border-slate-500">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-solid border-slate-500">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-solid border-slate-500">Malcolm Lockyer</td>
                    <td className="border border-solid border-slate-500">1961</td>
                    <td className="center gap-[5px] mx-[10px] my-[10px]">
                      <div className="bg-slate-300 w-[35px] h-[35px] rounded-lg cursor-pointer center"></div>
                      <div className="bg-red-600 w-[35px] h-[35px] rounded-lg cursor-pointer center"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
