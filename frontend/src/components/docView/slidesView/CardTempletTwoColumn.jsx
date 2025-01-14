//two image text
import React from "react"
import TitleInput from "./CardComponents/TitleInput"
import ParagraphInput from "./CardComponents/ParagraphInput"
import { CardMenu } from "./Menu/CardMenu"
import AddButton from "./AddButton"

function CardTemplateTwoColumn({ children, ...props }) {
  const handleEdit = () => {
    console.log("Edit clicked")
  }

  const handleDelete = () => {
    console.log("Delete clicked")
  }

  const handleDuplicate = () => {
    console.log("Duplicate clicke")
  }

  const handleShare = () => {
    console.log("Share clicked")
  }

  const handleDownload = () => {
    console.log("Download clicked")
  }

  return (
    <div className="flex flex-col items-center ">
    <div className="min-h-screen w-full md:w-[60vw] md:min-h-[25vw] rounded-lg bg-[#342c4e] p-6 relative">
      <div className="absolute top-4 left-11">
        <CardMenu
          onEdit={handleEdit}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          onShare={handleShare}
          onDownload={handleDownload}
        />
      </div>

      <div className="mt-16 space-y-6">
        <TitleInput />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <ParagraphInput 
              placeholder="Start typing the first paragraph..." 
              className="h-full min-h-[30px] bg-[#2a2438] text-[#9d8ba7] border border-[#3a3347] hover:border-[#4a4357] focus:border-[#4a4357] rounded-lg p-4 transition-colors"
            />
          </div>
          <div className="w-full">
            <ParagraphInput 
              placeholder="Start typing the second paragraph..." 
              className=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5">
    <AddButton />
    </div>
    </div>
  )
}

export default CardTemplateTwoColumn