import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "./../firebase-config";
import { ref, update, child, get } from "firebase/database";

const Dashboard = ({ logout }) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("ss_token");
    logout();
    navigate("/signin");
  };
  const handleAddNotification = async () => {
    try {
      await update(ref(database, "utilities/notifications/message"), { "admin": message }).then(() => {
        alert("Message Send!");
      }).catch((err) => {
        alert("Can't send a message")
        console.log(err.message);
      }) // Add Message
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
          onClick={handleAddNotification}
        />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
