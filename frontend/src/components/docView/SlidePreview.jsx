import { cn } from '@/lib/utils';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
export function SlidePreview({ number, title, content, isActive, onClick, id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transition,
    transform:CSS.Transform.toString(transform)
  }
  return (
    
    <div 
      onClick={onClick}
      className={cn(
        "p-2 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors",
        isActive && "bg-accent"
      )}

      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <div className="aspect-[16/9] bg-background border rounded-lg p-3 mb-1 overflow-hidden ">
        <div className="transform scale-[0.2] origin-top-left w-[500%] h-[500%]">
          {content}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{number}</span>
        <span className="text-xs truncate flex-1">Untitle Card </span>
      </div>
      </div>
      // </ContextMenuTrigger>
  );
}
