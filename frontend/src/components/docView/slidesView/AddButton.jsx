import React, { useState } from "react";
import CardTemplates from "./CardTemplates.jsx";

const AddButton = ({ slidesPreview, setSlidesPreview }) => {
  const [popupText, setPopupText] = useState("");

  const handleMouseEnter = (text) => setPopupText(text);
  const handleMouseLeave = () => setPopupText("");

  const handlePlusClick = () => {
    const newSlideId = slidesPreview.length + 1;
    const newSlide = {
      number: newSlideId,
      id: newSlideId,
      title: `Slide ${newSlideId}`,
      content: <div className="flex justify-center"><CardTemplates /></div>,
      onClick: () => console.log(`Slide ${newSlideId} clicked`),
    };
    setSlidesPreview([...slidesPreview, newSlide]);
  };

  return (
    <div id="AddButton" style={{ position: "relative", display: "inline-block" }}>
      <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
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
            backgroundColor: "#342c4e",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => handleMouseEnter("Add Card")}
          onMouseLeave={handleMouseLeave}
          onClick={handlePlusClick}
        >
          +
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
    </div>
  );
};

export default AddButton;
