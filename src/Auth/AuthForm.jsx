import { useState } from "react";
// import closedEye from "./Asets/closed-eye.png" // ts is not working try another one later
// import openedEye from "./Asets/opened-eye.png" // ts is not working try another one later
import LogIn from "./LogIn";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import LogOut from "./LogOut";
export default function AuthForm({ page, setPage, isActive, setUser, setIsAuthForm }) {

    switch (page) {
        case "login":
            return <div style={{ display: isActive ? "block" : "none" }}><LogIn setIsAuthForm={setIsAuthForm} setPage={setPage} setUser={setUser} /></div>

        case "register":
            return <div style={{ display: isActive ? "block" : "none" }}><Register setIsAuthForm={setIsAuthForm} setPage={setPage} setUser={setUser} /></div>

        case "forget":
            return <div style={{ display: isActive ? "block" : "none" }}><ForgotPassword setPage={setPage} /></div>

        case "logout":
            return <div style={{ display: isActive ? "block" : "none" }}><LogOut setIsAuthForm={setIsAuthForm} /></div>
    }
}
