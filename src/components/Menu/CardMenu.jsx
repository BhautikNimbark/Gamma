import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { MoreVertical, Copy, Trash, Link, Share,Download } from 'lucide-react'
  import { Button } from "@/components/ui/button"
  
  export function CardMenu({ onEdit, onDelete, onDuplicate, onShare,onDownload }) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 absolute top-2 right-2 hover:bg-[#3a3347]">
            <MoreVertical className="h-4 w-4 text-white" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white border-black text-black font-semibold">
          <DropdownMenuItem onClick={onEdit} className="hover:bg-[#3a3347] cursor-pointer">
            <Link className="mr-2 h-4 w-4" />
            Link
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onDuplicate} className="hover:bg-[#3a3347] cursor-pointer">
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onShare} className="hover:bg-[#3a3347] cursor-pointer">
            <Share className="mr-2 h-4 w-4" />
            Merge
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onDownload} className="hover:bg-[#3a3347] cursor-pointer">
            <Download className="mr-2 h-4 w-4" />
            Export
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-[#3a3347]" />
          
          <DropdownMenuItem onClick={onDelete} className="text-red-500 hover:bg-[#3a3347] hover:text-red-400 cursor-pointer">
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }