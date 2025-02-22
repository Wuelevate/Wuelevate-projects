import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ensure React waits for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
        const root = ReactDOM.createRoot(rootElement);
        root.render(<App />);
    } else {
        console.error("❌ ERROR: 'root' div not found in index.html!");
    }
});
