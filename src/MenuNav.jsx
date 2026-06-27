import { useState } from "react";
import { categories } from "./Constants";

export default function MenuNav({ isMenuNav }) {

    const [active, setActive] = useState("");

    function handleClick(id) {
        if (active === id) {
            // if i click the SAME one that's already green → turn it off
            setActive("");
        } else {
            // if i click a different one → make it green
            setActive(id);
        }
    }

    return (
        <div style={{ display: isMenuNav ? "block" : "none", width: 220, background: "#fff", borderRight: "1px solid #ddd", minHeight: "100vh", position: "absolute", top: 65, left: -4 }}>


            {/* Close Button */}
            {/* <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 10px" }}>
                <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>
                    ✕
                </button>
            </div> */}

            {/* Category List */}
            {categories.map((category) => {

                const isActive = active === category.id; // true or false

                return (
                    <div
                        key={category.id}
                        onClick={() => handleClick(category.id)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "9px 16px",
                            cursor: "pointer",
                            fontSize: 13,
                            color: isActive ? "#2e7d32" : "#222",         // green or black
                            fontWeight: isActive ? 600 : 400,             // bold or normal
                            borderLeft: isActive ? "3px solid #2e7d32" : "3px solid transparent", // green bar or nothing
                            background: isActive ? "#f0f7f0" : "transparent", // light green or white
                        }}
                    >
                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                            {category.emoji}
                        </div>
                        {category.label}
                    </div>
                );
            })}

        </div>
    );
}