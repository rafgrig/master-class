import { useState } from "react";
// import closedEye from "./Asets/closed-eye.png" // ts is not working try another one later
// import openedEye from "./Asets/opened-eye.png" // ts is not working try another one later

export default function LogIn({ setPage }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // const width = screen.width;

    function handleLogin() {
        console.log("Email:", email, "Password:", password);
    }

    function handleGoogle() {
        console.log("Google login clicked");
    }

    return (
        <div style={{
            display: "block",
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
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Welcome back</h2>

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
            <div style={{ marginBottom: 8, position: "relative" }}>
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
                {/* Show/Hide Password */}
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

            {/* Forgot Password */}
            <a onClick={() => { setPage("forget") }} href="#" style={{ fontSize: 13, color: "#e60023", textDecoration: "none", display: "block", marginBottom: 20 }}>
                Forgot password?
            </a>

            {/* Login Button */}
            <button
                onClick={handleLogin}
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
                Log in
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

            {/* Sign Up Link */}
            <p style={{ fontSize: 13, color: "#333", marginBottom: 16 }}>
                Don't have an account?{" "}
                <a onClick={() => { setPage("register") }} href="#" style={{ color: "#333", fontWeight: 700, textDecoration: "underline" }}>
                    Register for free
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
