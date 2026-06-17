import { useState } from "react";

export default function ForgotPassword({ setPage }) {

    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    function handleSend() {
        if (email === "") {
            alert("Please enter your email!");
            return;
        }
        setSent(true);
        console.log("Reset link sent to:", email);
    }

    // Show this after the email is sent
    if (sent) {
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
                textAlign: "center",
            }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Check your email</h2>
                <p style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
                    We sent a password reset link to <strong>{email}</strong>
                </p>
                <button
                    onClick={() => setSent(false)}
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
                    }}
                >
                    Send again
                </button>
            </div>
        );
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
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Forgot password?</h2>
            <p style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
                No worries! Enter your email and we'll send you a reset link.
            </p>

            {/* Email Input */}
            <div style={{ marginBottom: 20 }}>
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

            {/* Send Button */}
            <button
                onClick={handleSend}
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
                    marginBottom: 20,
                }}
            >
                Send reset link
            </button>

            {/* Back to Login */}
            <p style={{ fontSize: 13, color: "#333", textAlign: "center" }}>
                Remember your password?{" "}
                <a onClick={() => { setPage("login") }} style={{ color: "#333", fontWeight: 700, textDecoration: "underline" }}>
                    Log in
                </a>
            </p>

        </div>
    );
}
