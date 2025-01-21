import { IoSaveSharp } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import PasswordList from "../components/core/PasswordList";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { setAllCredentials, setCurrentCredential, setEditCredential } from '../slices/passwordSlice';
import {
    addCredentialsData,
    getAllCredentials,
    updateCredentialsData
} from '../services/operations/CredentialsApi';

const Home = () => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { allCredentials, currentCredential, editCredential } = useSelector((state) => state.password);
    const { handleSubmit, register, setValue, reset, formState: { errors } } = useForm();

    useEffect(() => { 

        if (editCredential) {
    
            setValue('username', currentCredential?.username);
            setValue('password', currentCredential?.password);
            setValue('webUrl', currentCredential?.url);
        }

    },[editCredential, currentCredential, setValue])

    const handleShowPassword = () => {

        setShowPassword(!showPassword);
    }

    const isFormChanged = (data) => { 

        if (data.username !== currentCredential?.username || data.password !== currentCredential?.password || data.webUrl !== currentCredential?.url) {

            return true;
        } else { 

            return false;
        }
    }

    const onSubmit = async (data) => {

        if (editCredential) {

            try {

                const formChanged = isFormChanged(data);
                if (formChanged) { 

                    const newForm = {};
                    if (data.username !== currentCredential?.username) { 

                        newForm.username = data.username;
                    }
                    if (data.password !== currentCredential?.password) {
                        
                        newForm.password = data.password;
                    }
                    if (data.webUrl !== currentCredential?.url) {
                        
                        newForm.webUrl = data.webUrl;
                    }

                    const result = await updateCredentialsData(newForm, currentCredential?._id);
                    if (result) { 

                        dispatch(setAllCredentials(
                            allCredentials.map((credential) => credential?._id === result?._id ? result : credential)
                        ));
                        dispatch(setEditCredential(false));
                        dispatch(setCurrentCredential([]));
                        reset();
                    }
                }

            } catch (error) { 

                console.log("Error occured : ", error);
            }


        } else {
            try {

                const result = await addCredentialsData(data);
                if (result) {

                    dispatch(setAllCredentials([...allCredentials, result]));
                    reset();
                }

            } catch (error) {

                console.log("Error occured : ", error);
            }
        }
    }

    useEffect(() => {

        console.log("Running state...");

        const fetchAllCredentialsData = async () => {

            try {

                const result = await getAllCredentials();
                if (result) {

                    dispatch(setAllCredentials(result));
                }
            } catch (error) {

                console.log("Error occured : ", error);
            }
        }
        fetchAllCredentialsData();

    }, [dispatch])



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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="webUrl"
                                className=" border-[0.1px] outline-none border-green-500 w-full px-2 py-2 rounded-2xl"
                                placeholder="Enter website URL"
                                {...register('webUrl', { required: true })}
                            />
                            {errors.webUrl && <span className="text-red-600">Website URL is required</span>}
                        </div>
                        <div className="w-full flex gap-3 mb-4 items-center">
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="username"
                                    className="border-[0.1px] outline-none border-green-500 w-full px-2 py-2 rounded-2xl"
                                    placeholder="Enter Username"
                                    {...register('username', { required: true })}
                                />
                                {errors.username && <span className="text-red-600">Username is required</span>}
                            </div>
                            <div className="w-full">
                                <div className="w-full relative">
                                    <input
                                        type={`${showPassword ? "text" : "password"}`}
                                        name="password"
                                        className="border-[0.1px] outline-none border-green-500 w-full px-4 py-2 rounded-2xl"
                                        placeholder="Enter Password"
                                        {...register('password', { required: true })}
                                    />
                                    <span className="absolute right-4 top-[50%] -translate-y-[50%]">
                                        {showPassword ?
                                            (<FaEye onClick={handleShowPassword} className="text-2xl cursor-pointer  text-gray-800" />) :
                                            (<FaEyeSlash onClick={handleShowPassword} className="text-2xl cursor-pointer text-gray-800" />)
                                        }
                                    </span>
                                </div>
                                {errors.username && <span className="text-red-600">Username is required</span>}
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
                <div className="w-full mt-4" ></div>
                <PasswordList setValue={setValue} reset={reset} />
            </div>
        </>
    )
}

export default Home