import React, { useState } from "react"
import { Card } from "./ui/card"
import { Grid2X2,Sparkles } from 'lucide-react'




export default function CardTemplates() {


  return (
    <div className="min-h-screen w-full md:w-[70vw] md:min-h-[25vw] md:mt-10 md:ml-[20vh] rounded-lg px-1 bg-[#342c4e] p-6">
      <input type="text" className="w-full md:w-[60vw] h-16 px-6 md:ml-10 text-4xl mb-14 mt-10 rounded-md bg-[#342c4e] text-white focus:border-black"  placeholder="Untitled card" name="" id="" />
      
      <div className="space-y-3">
        <h2 className="text-[#9d8ba7] text-lg px-10">Or start with a template</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-10">
        <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
                <div className="h-24 flex flex-col gap-2">
                  <div className="w-8 h-8 bg-[#3a3347] rounded" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-[#3a3347] rounded" />
                    <div className="h-2 w-2/3 bg-[#3a3347] rounded" />
                  </div>
                </div>
        </Card>
        
          <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
            <div className="h-24 flex flex-col gap-2">
              <div className="space-y-2">
                <div className="h-2 w-full bg-[#3a3347] rounded" />
                <div className="h-2 w-full bg-[#3a3347] rounded" />
                <div className="h-2 w-3/4 bg-[#3a3347] rounded" />
              </div>
            </div>
          </Card>

  
          <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
            <div className="h-24 flex flex-col gap-2">
              <div className="space-y-2">
                <div className="h-2 w-2/3 bg-[#3a3347] rounded" />
                <div className="h-2 w-1/2 bg-[#3a3347] rounded" />
              </div>
              <div className="w-8 h-8 bg-[#3a3347] rounded ml-auto" />
            </div>
          </Card>

          <Card className="p-4 bg-[#2a2438] border-[#3a3347] hover:border-[#4a4357] cursor-pointer transition-colors">
            <div className="h-24 grid grid-cols-2 gap-2">
              <div className="w-full h-full bg-[#3a3347] rounded" />
              <div className="w-full h-full bg-[#3a3347] rounded" />
              <div className="w-full h-full bg-[#3a3347] rounded" />
              <div className="w-full h-full bg-[#3a3347] rounded" />
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
    </div>
  )
}
