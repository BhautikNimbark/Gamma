import { useState, useRef, useEffect } from "react";

const ParagraphInput = ({ placeholder = "Start typing your paragraph..." }) => {
  const [paragraph, setParagraph] = useState("");
  const paragraphRef = useRef(null);
  const defaultHeight = 60; // Default minimum height

  const adjustHeight = () => {
    if (paragraphRef.current) {
      paragraphRef.current.style.height = "auto"; // Reset height
      paragraphRef.current.style.height = `${Math.max(
        paragraphRef.current.scrollHeight,
        defaultHeight
      )}px`; // Adjust height
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [paragraph]); // Adjust height whenever the paragraph changes

  const handleChange = (value) => {
    setParagraph(value);
  };

  return (
    <textarea
      className="w-full h-auto border-none outline-none text-lg p-4 rounded-md bg-[#2e294e] text-white placeholder:text-gray-400 focus:outline-none resize-none overflow-hidden"
      placeholder={placeholder}
      ref={paragraphRef}
      value={paragraph}
      onChange={(e) => handleChange(e.target.value)}
      style={{ minHeight: `${defaultHeight}px` }}
    />
  );
};

export default ParagraphInput;