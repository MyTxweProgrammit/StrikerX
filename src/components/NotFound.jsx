import React from "react";
import Not_Found from "./../assets/Not_Found.png";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-white center">
      <div className="w-[50%] h-[50%] bg-white shadow-xl border border-solid border-slate-300">
        <img src={Not_Found} />
        <p className="text-black font-bold text-center inter-txwe">
          404 Not Found
        </p>
      </div>
    </div>
  );
}
