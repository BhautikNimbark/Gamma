'use client';

import { useState, useRef, useEffect } from 'react';
import { SlidePreview } from './SlidePreview';
import { MinimizeIcon as ResizeIcon } from 'lucide-react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Copy, Scissors, CopyIcon as Duplicate, PlusCircle, Link, Trash2 } from 'lucide-react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
const MIN_WIDTH = 150;
const MAX_WIDTH = 300;
const DEFAULT_WIDTH = 200;
export function ResizableSidebar({ setCurrentSlide, slidesPreview,setSlidesPreview }) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      let newWidth = e.clientX;
      if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
      if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;

      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleDelete = (slide) => {
    setSlidesPreview(slidesPreview.filter((item) => {
      console.log(item,slide);
      return slide!=item.id
    }))
      }
  return (
    <div
      ref={sidebarRef}
      className="relative h-[calc(100vh-48px)] border-r bg-background flex"
      style={{ width }}
    >
      <div className="flex-1 overflow-y-auto scrollbar-hide p-2 space-y-2 ">
        <SortableContext items={slidesPreview} strategy={verticalListSortingStrategy}>
          {slidesPreview.map((slide, index) => (


            <ContextMenu key={slide.id}>
              <ContextMenuTrigger >
                <SlidePreview
                  isActive={true}
                  {...slide}
                  onClick={slide.onClick}
                  id={slide.id}
                />
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <div className="px-2 py-2 text-sm text-muted-foreground">
                  {slide.title}
                </div>
                <ContextMenuSeparator />
                <ContextMenuItem className="gap-3">
                  <Scissors className="h-4 w-4" />
                  <span>Cut</span>
                  <kbd className="ml-auto text-xs tracking-widest text-muted-foreground">
                    Ctrl+X
                  </kbd>
                </ContextMenuItem>
                <ContextMenuItem className="gap-3" onClick={()=>alert("hel")}>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                  <kbd className="ml-auto text-xs tracking-widest text-muted-foreground">
                    Ctrl+C
                  </kbd>
                </ContextMenuItem>
                <ContextMenuItem className="gap-3">
                  <Duplicate className="h-4 w-4" />
                  <span>Duplicate</span>
                  <kbd className="ml-auto text-xs tracking-widest text-muted-foreground">
                    Ctrl+D
                  </kbd>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="gap-3">
                  <PlusCircle className="h-4 w-4" />
                  <span>Add card below</span>
                </ContextMenuItem>
                <ContextMenuItem className="gap-3">
                  <Link className="h-4 w-4" />
                  <span>Copy card link</span>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="gap-3 text-red-600 focus:text-red-600" onClick={()=>handleDelete(slide.id)}>
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </SortableContext>

      </div>

      <div
        onMouseDown={() => setIsResizing(true)}
        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize group hover:w-2 transition-all"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 -translate-x-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity bg-accent flex items-center justify-center">
          <ResizeIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
