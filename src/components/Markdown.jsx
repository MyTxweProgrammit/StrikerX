import React from "react"
import { HeaderUser } from "./User"

export default function Markdown({ logout }) {
    return (
        <div className="w-screen h-screen bg-white">
            <HeaderUser logoutHead={logout}/>
            <p className="text-black">Markdown</p>
        </div>
    )
}