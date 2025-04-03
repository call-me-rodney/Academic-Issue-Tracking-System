"use client"

import { useState } from "react"

const button = () => {
  const [count, setcount] = useState(0)
  const [show, setshow] = useState(false)
  return (
    <div>
      <div>
        <h1 className="bg-yellow-800 text-white p-2 text-center">{count}</h1>
        <button onClick={() => setshow(!show)}>{show ? "Hide" : "Show"}</button>
        {show && (
          <div>
            <button onClick={() => setcount(count + 1)}>ADD</button>
            <button onClick={() => setcount(count - 1)}>SUBTRACT</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default button

