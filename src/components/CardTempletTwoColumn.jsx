import React from "react";
import TitleInput from "./CardComponents/TitleInput"
import ParagraphInput from "./CardComponents/ParagraphInput"
import { CardMenu } from "./Menu/CardMenu";

function CardTemplateTwoColumn({ children, ...props }) {

  const handleEdit = () => {
    console.log("Edit clicked")
  }

  const handleDelete = () => {
    console.log("Delete clicked")
  }

  const handleDuplicate = () => {
    console.log("Duplicate clicked")
  }

  const handleShare = () => {
    console.log("Share clicked")
  }

  const handleDownload = () => {
    console.log("Download clicked")
  }

  return (
    <div className="min-h-screen w-full md:w-[70vw] md:min-h-[25vw] md:mt-[12vw] md:ml-[30vh] rounded-lg  bg-[#342c4e] p-16 relative">

      <div className="absolute top-4 left-11">
        <CardMenu
               onEdit={handleEdit}
               onDelete={handleDelete}
               onDuplicate={handleDuplicate}
               onShare={handleShare}
               onDownload={handleDownload}
             />
           </div>
      <TitleInput />
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        
        <ParagraphInput placeholder="Start typing the first paragraph..." />
        <ParagraphInput placeholder="Start typing the second paragraph..." />
      </div>
    </div>
  );
}

export default CardTemplateTwoColumn;