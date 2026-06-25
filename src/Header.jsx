import { useState, useEffect } from "react";
import { styles } from "./Constants"
// import { signOut } from "firebase/auth";
import masterClassLogo from "./Asets/masterClassLogo.png"
import FilterPopUp from "./FilterPopUp";
import AuthForm from "./Auth/AuthForm";
import { auth, db } from "./firestore";
import { doc, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from 'firebase/auth';
import AdminPage from "./Auth/AdminPage";

export default function Header({ setSearch, setIsMenuNav, setUser }) {

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (!currentUser) {
                setRole("user");  // 👈 when logged out, reset role immediately
                return;
            }

            const userRef = doc(db, "users", currentUser.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                setRole(userSnap.data().role);
            } else {
                setRole("user");
            }
        });

        return () => unsubscribe(auth.currentUser);
    }, []);

    const [role, setRole] = useState("user")
    const [isFilterPopUp, setIsFilterPopUp] = useState(false)
    const [isAuthForm, setIsAuthForm] = useState(false)
    const [isAdminPage, setIsAdminPage] = useState(false)
    const [authPage, setAuthPage] = useState("login")

    const onAuth = function () {
        if (auth.currentUser) {
            setAuthPage("logout")
            setIsAuthForm((prev) => !prev);
        } else {
            setAuthPage("login")
            setIsAuthForm((prev) => !prev);
        }
    };


    return (
        <header style={styles.header}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <img alt="home page" style={{ height: "50px" }} src={masterClassLogo} />
            </div>

            {/* Menu */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "0 6px" }}>
                <button style={styles.menuBtn} aria-label="Menu" onClick={() => { setIsMenuNav((prev) => !prev) }}>
                    <span style={styles.menuBar} />
                    <span style={styles.menuBar} />
                    <span style={styles.menuBar} />
                </button>
                <div style={styles.menuLabel}>Menu</div>
            </div>

            {/* Search */}
            <div style={styles.searchWrap}>
                <input
                    style={styles.searchInput}
                    type="text"
                    placeholder="I want to buy..."
                    // value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* Search icon (inline SVG) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>

            {/* Filter Button */}
            <div style={styles.navActions}>

                <button style={styles.navBtn} aria-label="Filter" onClick={() => { setIsFilterPopUp((prev) => !prev) }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
                    </svg>
                    <span style={styles.navBtnLabel}>Filter</span>
                </button>

                <FilterPopUp isActive={isFilterPopUp} />

                {/* Log In Button */}
                <button style={styles.navBtn} aria-label="Log in" onClick={onAuth}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <span style={styles.navBtnLabel}>{auth.currentUser ? "Log Out" : "Log In / Register"}</span>
                </button>

                <AuthForm page={authPage} setPage={setAuthPage} isActive={isAuthForm} setUser={setUser} setIsAuthForm={setIsAuthForm} />

                {/* Admin Panel */}
                <button style={{ ...styles.navBtn, display: role === "admin" ? "flex" : "none" }} aria-label="Admin" onClick={() => { setIsAdminPage((prev) => (!prev)) }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <span style={styles.navBtnLabel}>{"Admin"}</span>
                </button>

                <AdminPage isActive={isAdminPage} />

                {/* Fav Button */}
                <button style={styles.navBtn} aria-label="Favourites">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <span style={styles.navBtnLabel}>Favourites</span>
                </button>

                {/* Cart Button */}
                <button style={styles.navBtn} aria-label="Cart">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span style={styles.navBtnLabel}>Cart</span>
                </button>

            </div>

        </header>
    );
}