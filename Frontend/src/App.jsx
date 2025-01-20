import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}