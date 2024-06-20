"use client"

import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react"

export default function Home() {

  const[text, setText] = useState("")
  const store = useMutation(api.item.store)
  const items = useQuery(api.item.items)

  const handleSubmit = () => {
    store({
      text: text
    })

    setText('')
  }

  return (
    <div className="h-screen w-screen grainy px-32">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h2>Using Convex</h2>
          <div className="flex gap-3">
            <input value={text} onChange={(e) => setText(e.target.value)} className="rounded-md py-[2px] px-2 no-outline no-border bg-gray-300" type="text" />
            <button onClick={handleSubmit} className=" py-1 px-2 bg-blue-500 rounded-lg text-white hover:bg-transparent hover:text-blue-500 hover:border-blue-500">Add</button>
          </div>
          <div className="overflow-y-scroll max-h-24 w-full">
            {items?.map(item => (
              <li key={item}>
                {item.text}
              </li>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
