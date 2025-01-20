import { IoSaveSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Home = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => { 

        setShowPassword(!showPassword);
    }
    return (
        <>
            <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className="max-w-3xl mx-auto">
                <div className="text-center mt-6">
                    <h1 className="text-3xl font-semibold">
                        <span className="text-green-600">&lt;</span>
                        Pass
                        <span className="text-green-600">X/&gt;</span>
                    </h1>
                    <p>Your own password manager</p>
                </div>
                <div className="mt-5">
                    <form action="">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="webUrl"
                                className=" border-[0.1px] outline-none border-green-500 w-full px-2 py-2 rounded-2xl"
                                placeholder="Enter website URL"
                            />
                        </div>
                        <div className="w-full flex gap-3 mb-4 items-center">
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="username"
                                    className="border-[0.1px] outline-none border-green-500 w-full px-2 py-2 rounded-2xl"
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="password"
                                    name="password"
                                    className="border-[0.1px] outline-none border-green-500 w-full px-4 py-2 rounded-2xl"
                                    placeholder="Enter Password"
                                />
                                <span className="absolute right-4 top-[50%] -translate-y-[50%]">
                                    {showPassword ?
                                        (<FaEye onClick={handleShowPassword} className="text-2xl cursor-pointer  text-gray-800" />) :
                                        (<FaEyeSlash  onClick={handleShowPassword} className="text-2xl cursor-pointer text-gray-800" />)
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button type="submit" className="flex bg-green-600 text-white px-2 py-2 rounded-md items-center gap-1">
                                <span>
                                    Save
                                </span>
                                <IoSaveSharp />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home