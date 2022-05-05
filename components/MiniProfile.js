import React from "react"

const MiniProfile = () => {
  return (
    <div className="flex gap-2 items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px] "
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
      />

      <div className="">
        <h2 className="font-bold first-letter:">RAAAAM</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram CLONE</h3>
      </div>
      <button className="text-sm text-blue-400 font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile
