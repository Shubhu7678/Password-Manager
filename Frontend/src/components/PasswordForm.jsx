import React, { useState } from "react";
import styled from "styled-components";

const PasswordForm = () => {

    const [form,setForm] = useState({url:'',username: "",password:""});

    const handleChange = (event) => {

      setForm({...form,[event.target.name]:event.target.value});
    }

    const handleSubmit = () => {

        try{
               
            const payload = {
                url: form.url,
                username: form.username,
                password: form.password
            }

            console.log("Payload",payload);

        }catch(error){

            console.log("Error occured :",error);
        }
    }
  return (
    <PasswordFormWrapper>
      <div className="">
        <div className="w-[80%] mx-auto ">
          <div className="password-header">
            <h4 className="text-center password-title">
              <span className="text-green-400">{"<"}</span>
              <span className="text-black">Pass</span>
              <span className="text-green-400">OP{">"}</span>
            </h4>
            <p className="text-center">Your own password manager</p>
          </div>
          <div className="password-form mt-4">
            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <input value={form.url} name="url" className="w-full form-input" placeholder="enter password url" type="text" onChange={handleChange} />
              </div>
              <div className="flex gap-2 mt-2 w-full">
                <input value={form.username} name="username" className="form-input w-full" type="text" placeholder="enter username" onChange={handleChange} />
                <input value={form.password} name="password" className="form-input w-full" type="password" placeholder="enter password" onChange={handleChange} />
              </div>
              <div className="w-full text-center">

              <button type="submit" className="px-4 py-2 bg-green-400 text-center text-white mt-4 rounded-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PasswordFormWrapper>
  );
};

const PasswordFormWrapper = styled.div`
  .password-title {
    font-size: 20px;
  }
  .password-header {
    padding-top: 16px;
  }
  .form-input{
    border: 1px solid #a8f0c6;
    outline: none;
    padding: 4px 12px;
    border-radius: 8px;
  }
`;

export default PasswordForm;
