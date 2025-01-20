import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
      <div className="w-full  bg-gray-800 text-white">
          <div className="max-w-3xl h-14 px-2 mx-auto">
          <div className="w-full h-full flex items-center justify-between">
                  <h1 className="text-3xl font-semibold">
                      <span className="text-green-500">&lt;</span>
                      Pass
                      <span className="text-green-500">X/&gt;</span>
              </h1>
              <ul className="flex gap-8 items-center">
                  <li><NavLink to="/" className="hover:font-semibold transition duration-300">Home</NavLink></li>
                  <li><NavLink to="/about" className="hover:font-semibold transition duration-300">About</NavLink></li>
                  <li><NavLink to="/contact" className="hover:font-semibold transition duration-300">Contact</NavLink></li>
              </ul>
          </div>
          </div>
    </div>
  )
}

export default Navbar