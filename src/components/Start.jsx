import React from 'react'
import { useNavigate } from 'react-router-dom'

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#fff] rounded-[7px]  bg-gradient-to-r from-fuchsia-500 to-cyan-500">
    <button className="text-[25px] text-red-600 text-center px-4 py-1 rounded-[7px] hover:bg-blue-300 transition ease-in-out delay-150" onClick={() => navigate("/quiz")}>Start</button>
    </div>
  )
}

export default Start

