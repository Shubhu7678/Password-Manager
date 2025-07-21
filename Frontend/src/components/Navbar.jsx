import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-purple-200 flex justify-between px-4 py-2">
        <div className="logo">
            PassMR
        </div>
        <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar