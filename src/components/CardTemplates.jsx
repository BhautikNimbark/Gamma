import React, { useState } from "react";
import { Card } from "./ui/card";
import { Grid2X2, Sparkles } from "lucide-react";
import CardTemplateTwoColumn from "./CardTempletTwoColumn";
import CardTemplateImgHeadingThree from "./CardTemplateImgHeadingThree";
import ImageCradText from "./ImageCardText";
import { CardMenu } from "./Menu/CardMenu";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import AddButton from "./AddButton";

export default function CardTemplates({ children, ...props }) {
  const [showTwoColumn, setShowTwoColumn] = useState(false);
  const [showImageText, setShowImageText] = useState(false);
  const [showThreeColumn, setShowThreeColumn] = useState(false);

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleDuplicate = () => {
    console.log("Duplicate clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  const handleDownload = () => {
    console.log("Download clicked");
  };

  if (showTwoColumn) {
    return <CardTemplateTwoColumn />;
  }
  if (showImageText) {
    return <ImageCradText />;
  }
  if (showThreeColumn) {
    return <CardTemplateImgHeadingThree />;
  }

  return (
    <div>
      <div className="min-h-screen w-full md:w-[70vw] md:min-h-[25vw] md:mt-[12vw] md:ml-[30vh] rounded-lg px-1 bg-[#342c4e] p-6 relative">
        <div className="absolute top-4 left-11">
          <CardMenu
            onEdit={handleEdit}
            onDelete={handleDelete}
            onDuplicate={handleDuplicate}
            onShare={handleShare}
            onDownload={handleDownload}
          />
        </div>

        <input
          type="text"
          className="w-full md:w-[60vw] h-16 px-6 md:ml-10 text-4xl mb-14 mt-10 rounded-md bg-[#342c4e] text-white focus:border-black"
          placeholder="Untitled card"
        />

        <div className="space-y-3">
          <h2 className="text-[#9d8ba7] text-lg px-10">
            Or start with a template
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-10">
            <Card
              className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors relative group"
              onClick={() => setShowImageText(true)}
            >
              <div className="h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={card1}
                  alt="Image And text"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm font-medium">
                    Image and Text
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors relative group"
              onClick={() => setShowTwoColumn(true)}
            >
              <div className="h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={card2}
                  alt="Two Columns"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm font-medium">Two Columns</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors relative group">
              <div className="h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={card3}
                  alt="Accent right"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm font-medium">Accent right</p>
                </div>
              </div>
            </Card>

            <Card
              className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors relative group"
              onClick={() => setShowThreeColumn(true)}
            >
              <div className="h-24 flex items-center justify-center overflow-hidden">
                <img
                  src={card4}
                  alt="3 Image Column"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-lg">
                  <p className="text-white text-sm font-medium">
                    3 Image Column
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
              <div className="h-24 flex flex-col items-center justify-center gap-2">
                <Grid2X2 className="w-6 h-6 text-[#9d8ba7]" />
                <span className="text-[#9d8ba7] text-sm">Templates</span>
              </div>
            </Card>

            <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
              <div className="h-24 flex flex-col items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-[#9d8ba7]" />
                <span className="text-[#9d8ba7] text-sm">Generate</span>
              </div>
            </Card>
          </div>
        </div>
        <div className="mt-10 absolute left-[33vw]">
          {/* This div is for the + and all other features */}
        </div>
      </div>
      <div
        className="flex w-full justify-center items-center relative"
        style={{ position: "relative", marginTop: "20px" }}
      >
        {" "}
        <AddButton />
      </div>
    </div>
  );
}
