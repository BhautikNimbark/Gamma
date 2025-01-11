import React, { useState } from "react";
import CardTemplates from "./CardTemplates.jsx";

const AddButton = () => {
  const [popupText, setPopupText] = useState("");
  const [showCardTemplates, setShowCardTemplates] = useState(false);

  const handleMouseEnter = (text) => {
    setPopupText(text);
  };

  const handleMouseLeave = () => {
    setPopupText("");
  };

  const handlePlusClick = () => {
    setShowCardTemplates(!showCardTemplates); // Toggles card templates visibility
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          display: "flex",
          backgroundColor: "#333",
          borderRadius: "8px",
          padding: "5px",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "18px",
            padding: "8px 12px",
            textAlign: "center",
            cursor: "pointer",
            border: "1px solid #555",
            margin: "0 2px",
            borderRadius: "4px",
            backgroundColor: "#444",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => handleMouseEnter("Add Card")}
          onMouseLeave={handleMouseLeave}
          onClick={handlePlusClick}
        >
          +
        </div>
        <div
          style={{
            color: "white",
            fontSize: "18px",
            padding: "8px 12px",
            textAlign: "center",
            cursor: "pointer",
            border: "1px solid #555",
            margin: "0 2px",
            borderRadius: "4px",
            backgroundColor: "#444",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => handleMouseEnter("Add Card with AI")}
          onMouseLeave={handleMouseLeave}
        >
          ✨
        </div>
        <div
          style={{
            color: "white",
            fontSize: "18px",
            padding: "8px 12px",
            textAlign: "center",
            cursor: "pointer",
            border: "1px solid #555",
            margin: "0 2px",
            borderRadius: "4px",
            backgroundColor: "#444",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => handleMouseEnter("Add from Template")}
          onMouseLeave={handleMouseLeave}
        >
          ⬇️
        </div>
      </div>
      {popupText && (
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#222",
            color: "white",
            padding: "8px 12px",
            fontSize: "14px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          {popupText}
        </div>
      )}
      {/* Render CardTemplates without changing button appearance */}
      {showCardTemplates && <CardTemplates />}
    </div>
  );
};

export default AddButton;
