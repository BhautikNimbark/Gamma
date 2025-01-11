import React, { useState, useRef, useEffect } from "react";

const TitleInput = ({ placeholder = "Untitled card" }) => {
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
  const defaultHeight = 20; // Default minimum height

  const adjustHeight = () => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto"; // Reset height
      titleRef.current.style.height = `${Math.max(
        titleRef.current.scrollHeight,
        defaultHeight
      )}px`; // Set new height
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  const handleChange = (value) => {
    setTitle(value);
    adjustHeight();
  };

  return (
    <div className="">
      <textarea
      className="w-full h-auto border-none outline-none ml-2 text-4xl mb-6 rounded-md bg-[#342c4e] text-white placeholder:text-gray-400 focus:outline-none resize-none overflow-hidden"
      placeholder={placeholder} // Use the placeholder prop here
      ref={titleRef}
      value={title}
      onChange={(e) => handleChange(e.target.value)}
      style={{ minHeight: `${defaultHeight}px` }}
    />
    </div>
  );
};

export default TitleInput;