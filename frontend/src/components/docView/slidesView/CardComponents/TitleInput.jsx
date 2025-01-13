import { useRef, useState } from 'react'
import { Bold, Italic, Underline, Code, AlignLeft, AlignCenter, AlignRight, Type, Palette } from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../../../ui/dropdown-menu'
import { Button } from '../../../ui/button'
import { Card, CardContent, CardHeader } from '../../../ui/card'

const COLORS = [
  { name: 'Default', value: 'inherit' },
  { name: 'Purple', value: '#9333ea' },
  { name: 'Blue', value: '#2563eb' },
  { name: 'Red', value: '#dc2626' },
  { name: 'Green', value: '#16a34a' },
  { name: 'Yellow', value: '#ca8a04' },
]

const SIZES = [
  { name: 'Small', value: '1rem' },
  { name: 'Normal', value: '1.5rem' },
  { name: 'Large', value: '2rem' },
  { name: 'Extra Large', value: '2.5rem' },
]

export default function TextEditor() {
  const editorRef = useRef(null)
  const [alignment, setAlignment] = useState('left')

  const applyCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
  }

  const applyAlignment = (newAlignment) => {
    setAlignment(newAlignment)
    applyCommand('justify' + newAlignment)
  }

  const applyColor = (color) => {
    applyCommand('foreColor', color)
  }

  const applyFontSize = (size) => {
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const span = document.createElement('span')
      span.style.fontSize = size
      range.surroundContents(span)
    }
  }

  const handlePlaceholder = (event) => {
    const text = editorRef.current?.textContent || ''
    if (!text.trim()) {
      if (event.type === 'blur') {
        editorRef.current.innerHTML = '<span class="text-muted-foreground">Untitled Card</span>'
      } else {
        editorRef.current.innerHTML = ''
      }
    }
  }

  return (
    <Card className="w-full flex justify-start w-2xl mx-auto bg-transparent border-transparent mt-[20px] mb-2  ">
      <CardHeader className="flex flex-row justify-between space-y-0 px-4 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-center bg-white/90 rounded-full hover:bg-white p-1 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-700"
                >
                  <circle cx="12" cy="6" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                </svg>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white">
            <DropdownMenuItem onClick={() => applyCommand('bold')}>
              <Bold className="mr-2 h-4 w-4" />
              <span>Bold</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyCommand('italic')}>
              <Italic className="mr-2 h-4 w-4" />
              <span>Italic</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyCommand('underline')}>
              <Underline className="mr-2 h-4 w-4" />
              <span>Underline</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyCommand('formatBlock', 'pre')}>
              <Code className="mr-2 h-4 w-4" />
              <span>Code</span>
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Type className="mr-2 h-4 w-4" />
                <span>Font Size</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {SIZES.map((size) => (
                  <DropdownMenuItem key={size.value} onClick={() => applyFontSize(size.value)}>
                    <span style={{ fontSize: size.value }}>{size.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>Text Color</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                {COLORS.map((color) => (
                  <DropdownMenuItem 
                    key={color.value} 
                    onClick={() => applyColor(color.value)}
                    className="flex items-center gap-2"
                  >
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-200" 
                      style={{ backgroundColor: color.value }}
                    />
                    <span>{color.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => applyAlignment('left')}>
              <AlignLeft className="mr-2 h-4 w-4" />
              <span>Align Left</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyAlignment('center')}>
              <AlignCenter className="mr-2 h-4 w-4" />
              <span>Align Center</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => applyAlignment('right')}>
              <AlignRight className="mr-2 h-4 w-4" />
              <span>Align Right</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-1 py-1 w-full">
        <div 
          className="min-h-[5px] w-full rounded-lg  bg-transparent p-6 text-white/90 focus:outline-none  text-3xl"
          style={{
            textAlign: alignment
          }}
          contentEditable
          suppressContentEditableWarning
          ref={editorRef}
          onFocus={handlePlaceholder}
          onBlur={handlePlaceholder}
        >
          <span type="text" className="text-white/50 w-full bg-transparent text-3xl">Untitle Card </span>
        </div>
      </CardContent>
    </Card>
  )
}