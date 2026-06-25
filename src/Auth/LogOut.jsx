import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../firestore";
export default function LogOut({ setIsAuthForm }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        async function handleUserInfo() {
            if (!auth.currentUser) return;

            const userRef = doc(db, "users", auth.currentUser.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                setName(userSnap.data().name);
                setEmail(userSnap.data().email);
            }
        }

        handleUserInfo();
    }, []);


    async function handleLogOut() {
        await signOut(auth);
        setIsAuthForm(false)
        console.log("User logged out");
    }

    function handleCancel() {
        setIsAuthForm(false)
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
            {/* User Info */}
            <h2 style={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginBottom: 4 }}>
                {name}
            </h2>

            <p style={{ fontSize: 13, color: "#888", textAlign: "center" }}>
                {email}
            </p>

            <span style={{ position: "absolute", left: "25%", fontSize: 12, color: "#888", textAlign: "center", marginBottom: "20px" }}>
                {auth.currentUser?.uid}
            </span>

            <br></br>
            {/* Divider */}
            <div style={{ height: 1, background: "#c9c9c9", marginBottom: 10, marginTop: 20 }} />

            {/* Question */}
            <p style={{ fontSize: 15, color: "#333", textAlign: "center", marginBottom: 24 }}>
                Are you sure you want to log out?
            </p>

            {/* Logout Button */}
            <button
                onClick={handleLogOut}
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
                    marginBottom: 12,
                }}
            >
                Yes, log out
            </button>

            {/* Cancel Button */}
            <button
                onClick={handleCancel}
                style={{
                    width: "100%",
                    padding: "14px",
                    background: "#fff",
                    color: "#333",
                    border: "1px solid #ddd",
                    borderRadius: "24px",
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: "pointer",
                }}
            >
                Cancel
            </button>

        </div>
    );
}
