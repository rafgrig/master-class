import { useState } from "react";
import { styles } from "./Constants"
import masterClassLogo from "./Asets/masterClassLogo.png"
import FilterPopUp from "./FilterPopUp";
import AuthForm from "./Auth/AuthForm";

export default function Header({ setSearch, setIsMenuNav }) {
    const [isFilterPopUp, setIsFilterPopUp] = useState(false)
    const [isAuthForm, setIsAuthForm] = useState(false)

    return (
        <header style={styles.header}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <img style={{ height: "50px" }} src={masterClassLogo} />
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
                <button style={styles.navBtn} aria-label="Log in" onClick={() => { setIsAuthForm((prev) => !prev) }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <span style={styles.navBtnLabel}>Log in / Register</span>
                </button>

                {/* <div style={{ display: 'flex', justifyContent: "center", alignContent: "center" }}> */}
                <AuthForm isActive={isAuthForm} />
                {/* </div> */}

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