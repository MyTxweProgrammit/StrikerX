import React from "react";
import Not_Found from "./../assets/Not_Found.png";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-white center">
      <div className="w-[50%] h-[50%] bg-white shadow-xl border border-solid border-slate-300 rounded-xl">
        <img src={Not_Found} className="w-[200px] mx-auto my-[20px]" />
        <p className="text-black font-bold text-center inter-txwe text-[20px]">
          404 Not Found
        </p>
        <div className="w-full px-[20px]">
          <p className="text-black text-[15px]">
            This Page might not created or You prompt a wrong path. Please Try
            Again later.
          </p>
        </div>
      </div>
    </div>
  );
}
