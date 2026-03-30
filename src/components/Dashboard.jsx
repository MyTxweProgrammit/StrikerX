import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./../firebase-config";
import { ref, update, child, get, push, set } from "firebase/database";

const Dashboard = ({ logout }) => {
  const [message, setMessage] = useState("");
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

  return (
    <div className="w-screen h-screen bg-white">
      <title>StrikerX - Admin Dashboard</title>
      <h1 className="text-black font-bold">Hello CEO!</h1>
      <div className="border-test w-fit">
        <input
          type="text"
          className="text-black"
          placeholder="Text to people"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input
          className="text-black cursor-pointer"
          type="submit"
          value="SEND"
          onClick={() => handleAddNotification(message)}
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
