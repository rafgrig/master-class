import { useState } from "react";
import { db, auth } from "../firestore";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Register({ setPage, setUser, setIsAuthForm }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const createUser = async (userId, userData) => {
        try {
            await setDoc(doc(db, "users", userId), userData)
        } catch (e) {
            console.log(e)
        }
    }

    function handleRegister() {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        } else {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    return createUser(user.uid, { 'email': email, "name": name, "cart": [], "fav": [] })

                }).catch((error) => {
                    console.log(error.code, error.message);
                });

            if (email || password) setIsAuthForm(false)

        }
    }

    function handleGoogle() {
        console.log("Google register clicked");
    }

    return (
        <div style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "360px",
            background: "#fff",
            borderRadius: "16px",
            padding: "32px 24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}>

            {/* Title */}
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Create account</h2>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
                Sign up to get started
            </p>

            {/* Name Input */}
            <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, color: "#555", display: "block", marginBottom: 4 }}>
                    Full name
                </label>
                <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px 14px",
                        fontSize: 14,
                        border: "1px solid #ddd",
                        borderRadius: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                    }}
                />
            </div>

            {/* Email Input */}
            <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 12, color: "#555", display: "block", marginBottom: 4 }}>
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px 14px",
                        fontSize: 14,
                        border: "1px solid #ddd",
                        borderRadius: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                    }}
                />
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: 12, position: "relative" }}>
                <label style={{ fontSize: 12, color: "#555", display: "block", marginBottom: 4 }}>
                    Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px 40px 12px 14px",
                        fontSize: 14,
                        border: "1px solid #ddd",
                        borderRadius: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                    }}
                />
                <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: "absolute",
                        right: 12,
                        bottom: 12,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 16,
                        color: "#888",
                    }}
                >
                    {showPassword ? "🙈" : "👁️"}
                </button>
            </div>

            {/* Confirm Password Input */}
            <div style={{ marginBottom: 20, position: "relative" }}>
                <label style={{ fontSize: 12, color: "#555", display: "block", marginBottom: 4 }}>
                    Confirm password
                </label>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "12px 40px 12px 14px",
                        fontSize: 14,
                        border: "1px solid #ddd",
                        borderRadius: "16px",
                        outline: "none",
                        boxSizing: "border-box",
                    }}
                />
                <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                        position: "absolute",
                        right: 12,
                        bottom: 12,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: 16,
                        color: "#888",
                    }}
                >
                    {showConfirmPassword ? "🙈" : "👁️"}
                </button>
            </div>

            {/* Register Button */}
            <button
                onClick={handleRegister}
                style={{
                    width: "100%",
                    padding: "14px",
                    background: "#e60023",
                    color: "#fff",
                    border: "none",
                    borderRadius: "24px",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                    marginBottom: 16,
                }}
            >
                Create account
            </button>

            {/* OR divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ flex: 1, height: 1, background: "#eee" }} />
                <span style={{ fontSize: 13, color: "#999" }}>or</span>
                <div style={{ flex: 1, height: 1, background: "#eee" }} />
            </div>

            {/* Google Button */}
            <button
                onClick={handleGoogle}
                style={{
                    width: "100%",
                    padding: "12px",
                    background: "#fff",
                    color: "#333",
                    border: "1px solid #ddd",
                    borderRadius: "24px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    marginBottom: 24,
                }}
            >
                Continue with Google
            </button>

            {/* Log In Link */}
            <p style={{ fontSize: 13, color: "#333", marginBottom: 16 }}>
                Already have an account?{" "}
                <a onClick={() => { setPage("login") }} href="#" style={{ color: "#333", fontWeight: 700, textDecoration: "underline" }}>
                    Log in
                </a>
            </p>

            {/* Footer Links */}
            <div style={{ fontSize: 11, color: "#999" }}>
                <a href="#" style={{ color: "#999" }}>Terms of Service</a>
                {" · "}
                <a href="#" style={{ color: "#999" }}>Privacy Policy</a>
                {" · "}
                <a href="#" style={{ color: "#999" }}>Cookie Notice</a>
            </div>

        </div>
    );
}
