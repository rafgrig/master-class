import { useState } from "react";

export default function FilterPopUp({ isActive, onApply }) {

    const [fromPrice, setFromPrice] = useState(1150);
    const [toPrice, setToPrice] = useState(2150);

    function handleApply() {
        onApply({ from: fromPrice, to: toPrice });
    }

    return (
        <div style={{ display: isActive ? "block" : "none", position: "absolute", marginBottom: "-250px", marginLeft: "-200px", padding: "10px", background: "#fff", width: "260px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", borderRadius: "5px" }}>

            {/* Title Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontWeight: 600, fontSize: 14 }}>Price, AMD</span>
            </div>

            {/* From / To Inputs */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>

                <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "6px", padding: "8px 10px" }}>
                    <span style={{ fontSize: 11, color: "#999", display: "block" }}>from</span>
                    <input
                        type="number"
                        value={fromPrice}
                        onChange={(e) => setFromPrice(e.target.value)}
                        style={{ border: "none", outline: "none", width: "100%", fontSize: 13, color: "#202020", fontWeight: 500 }}
                    />
                </div>

                <div style={{ flex: 1, border: "1px solid #ddd", borderRadius: "6px", padding: "8px 10px" }}>
                    <span style={{ fontSize: 11, color: "#999", display: "block" }}>to</span>
                    <input
                        type="number"
                        value={toPrice}
                        onChange={(e) => setToPrice(e.target.value)}
                        style={{ border: "none", outline: "none", width: "100%", fontSize: 13, color: "#202020", fontWeight: 500 }}
                    />
                </div>

            </div>

            {/* Apply Button */}
            <button
                onClick={handleApply}
                style={{
                    width: "100%",
                    padding: "12px",
                    background: "#c90000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                }}
            >
                Choose filters
            </button>

        </div>
    );
}
