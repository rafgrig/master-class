import { useState } from "react";
// import closedEye from "./Asets/closed-eye.png" // ts is not working try another one later
// import openedEye from "./Asets/opened-eye.png" // ts is not working try another one later
import LogIn from "./LogIn";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

export default function AuthForm({ isActive }) {
    const [page, setPage] = useState("login")

    switch (page) {
        case "login":
            return <div style={{ display: isActive ? "block" : "none" }}><LogIn setPage={setPage} /></div>

        case "register":
            return <div style={{ display: isActive ? "block" : "none" }}><Register setPage={setPage} /></div>

        case "forget":
            return <div style={{ display: isActive ? "block" : "none" }}><ForgotPassword setPage={setPage} /></div>
    }
}
