import React, { useState, useEffect } from "react";
import { Header } from "@/components/docView/Header";
import { ResizableSidebar } from "@/components/docView/ResizableSidebar";
import { Slide1 } from "@/components/docView/Slides";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import AddButton from "./slidesView/AddButton";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const slideElement = document.getElementById(`at-${currentSlide}`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSlide]);

  const [slidesPreview, setSlidesPreview] = useState([
    {
      number: 1,
      id: 1,
      title: "Customer Targeting Strategy",
      content: <Slide1 />,
      onClick: () => setCurrentSlide(1),
    },
  ]);

  const [slides, setSlides] = useState([
    {
      id: 1,
      Slide: <Slide1 />,
    },
  ]);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) return;

    setSlidesPreview((prev) => {
      const originalPos = prev.findIndex((item) => item.id === active.id);
      const currentPos = prev.findIndex((item) => item.id === over.id);
      const updated = arrayMove(prev, originalPos, currentPos);

      return updated.map((item, index) => ({
        ...item,
        number: index + 1,
      }));
    });
  };

  useEffect(() => {
    setSlides(
      slidesPreview.map((p) => ({
        Slide: p.content,
        id: p.id,
      }))
    );
  }, [slidesPreview]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <ResizableSidebar
            setCurrentSlide={setCurrentSlide}
            slidesPreview={slidesPreview}
            setSlidesPreview={setSlidesPreview}
          />
        </DndContext>
        <main className="flex-1 overflow-y-auto">
          <div>
            {slides.map(({ Slide, id }, index) => (
              <div key={index} className="" id={`at-${id}`}>
                {Slide}
              </div>
            ))}
            <div
              className="flex w-full justify-center items-center relative"
              style={{ position: "relative", marginTop: "20px" }}
            >
              <AddButton
                slidesPreview={slidesPreview}
                setSlidesPreview={setSlidesPreview}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
