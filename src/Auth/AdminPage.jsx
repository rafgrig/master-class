import { useState } from "react";

export default function AdminPage({ isActive }) {

    // Product form state
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);
    const [dragOver, setDragOver] = useState(false);

    // New admin state
    const [adminUid, setAdminUid] = useState("");
    const [adminSent, setAdminSent] = useState(false);

    // Product posted state
    const [posted, setPosted] = useState(false);


    // --- Product Functions ---

    function handleDrop(e) {
        e.preventDefault();
        setDragOver(false);
        const files = Array.from(e.dataTransfer.files);
        const imageFiles = files.filter((file) => file.type.startsWith("image/"));
        setImages(imageFiles);
    }

    function handleFileInput(e) {
        const files = Array.from(e.target.files);
        setImages(files);
    }

    function handlePost() {
        if (name === "" || description === "" || price === "") {
            alert("Please fill in all product fields!");
            return;
        }
        setPosted(true);
        console.log("Product posted:", { name, description, price, images });
        // Reset form
        setName("");
        setDescription("");
        setPrice("");
        setImages([]);
        setTimeout(() => setPosted(false), 3000);
    }

    // --- Admin Functions ---

    function handleAddAdmin() {
        if (adminUid === "") {
            alert("Please enter an email!");
            return;
        }
        setAdminSent(true);
        console.log("Admin registered:", adminUid);
        setAdminUid("");
        setTimeout(() => setAdminSent(false), 3000);
    }

    const inputStyle = {
        width: "100%",
        padding: "12px 14px",
        fontSize: 14,
        border: "1px solid #ddd",
        borderRadius: "16px",
        outline: "none",
        boxSizing: "border-box",
    };

    const labelStyle = {
        fontSize: 12,
        color: "#555",
        display: "block",
        marginBottom: 4,
    };

    const redBtnStyle = {
        width: "100%",
        padding: "14px",
        background: "#e60023",
        color: "#fff",
        border: "none",
        borderRadius: "24px",
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer",
    };

    return (
        <div style={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            minHeight: "100vh",
            background: "#f5f5f5",
            display: isActive ? "flex" : "none",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "10px 20px",
            boxSizing: "border-box",
            borderRadius: 20
        }}>
            <div style={{ width: "100%", maxWidth: "480px", display: "flex", flexDirection: "column", gap: 24 }}>

                {/* Header */}
                <div>
                    <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>Admin Panel</h1>
                    <p style={{ fontSize: 14, color: "#e4e4e4" }}>Manage products and administrators</p>
                </div>

                {/* ---- ADD PRODUCT CARD ---- */}
                <div style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Add New Product</h2>

                    {/* Success message */}
                    {posted && (
                        <div style={{ background: "#e8f5e9", color: "#2e7d32", borderRadius: "12px", padding: "10px 14px", fontSize: 13, marginBottom: 16 }}>
                            ✅ Product posted successfully!
                        </div>
                    )}

                    {/* Name */}
                    <div style={{ marginBottom: 12 }}>
                        <label style={labelStyle}>Product name</label>
                        <input
                            type="text"
                            placeholder="e.g. Chicken Shawarma"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    {/* Description */}
                    <div style={{ marginBottom: 12 }}>
                        <label style={labelStyle}>Description</label>
                        <textarea
                            placeholder="Describe the product..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            style={{
                                ...inputStyle,
                                resize: "vertical",
                                fontFamily: "inherit",
                            }}
                        />
                    </div>

                    {/* Price */}
                    <div style={{ marginBottom: 20 }}>
                        <label style={labelStyle}>Price (AMD)</label>
                        <input
                            type="number"
                            placeholder="e.g. 1250"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    {/* Image Drop Zone */}
                    <div style={{ marginBottom: 20 }}>
                        <label style={labelStyle}>Images</label>
                        <div
                            onDrop={handleDrop}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onClick={() => document.getElementById("fileInput").click()}
                            style={{
                                display: images[0] ? "none" : "block",
                                border: `2px dashed ${dragOver ? "#e60023" : "#ddd"}`,
                                borderRadius: "16px",
                                padding: "28px 16px",
                                textAlign: "center",
                                cursor: "pointer",
                                background: dragOver ? "#fff5f5" : "#fafafa",
                                transition: "all 0.2s",
                            }}
                        >
                            <div style={{ fontSize: 32, marginBottom: 8 }}>🖼️</div>
                            <p style={{ fontSize: 14, color: "#888", marginBottom: 4 }}>
                                Drag & drop images here
                            </p>
                            <p style={{ fontSize: 12, color: "#bbb" }}>or click to browse</p>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileInput}
                                style={{ display: "none" }}
                            />
                        </div>

                        {/* Image Previews */}
                        {images.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
                                <div key={images[0].name} style={{ position: "relative" }}>
                                    <img
                                        src={URL.createObjectURL(images[0])}
                                        alt={images[0].name}
                                        style={{ width: 72, height: 72, objectFit: "cover", borderRadius: "12px", border: "1px solid #eee" }}
                                    />
                                    <button
                                        onClick={() => setImages([])}
                                        style={{
                                            position: "absolute",
                                            top: -6,
                                            right: -6,
                                            width: 20,
                                            height: 20,
                                            borderRadius: "50%",
                                            background: "#e60023",
                                            color: "#fff",
                                            border: "none",
                                            fontSize: 11,
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Post Button */}
                    <button onClick={handlePost} style={redBtnStyle}>
                        Post Product
                    </button>
                </div>

                {/* ---- ADD ADMIN CARD ---- */}
                <div style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Register New Admin</h2>
                    <p style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>
                        Enter the UID of the person you want to give admin access to.
                    </p>

                    {/* Success message */}
                    {adminSent && (
                        <div style={{ background: "#e8f5e9", color: "#2e7d32", borderRadius: "12px", padding: "10px 14px", fontSize: 13, marginBottom: 16 }}>
                            ✅ Admin registered successfully!
                        </div>
                    )}

                    <div style={{ marginBottom: 16 }}>
                        <label style={labelStyle}>Admin UID</label>
                        <input
                            type="text"
                            placeholder="Enter the UID"
                            value={adminUid}
                            onChange={(e) => setAdminUid(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    <button onClick={handleAddAdmin} style={redBtnStyle}>
                        Register Admin
                    </button>
                </div>

                {/* Footer */}
                <p style={{ fontSize: 11, color: "#bbb", textAlign: "center" }}>
                    Admin Panel · All actions are logged
                </p>

            </div>
        </div>
    );
}
