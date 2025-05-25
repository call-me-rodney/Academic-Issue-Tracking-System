import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate("/submitissue/")}>ADD ISSUE</button>
      </div>
    </div>
  )
}

export default Button