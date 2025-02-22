/* eslint-disable react/prop-types */
import {useState} from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import {Link , useNavigate} from 'react-router-dom'

const LogInForm = ({setIsLoggedIn}) => {


    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);

    const [formData , setFormData] = useState({
        email:"" , 
        password:""
    })

    function changeHandler(event){
        setFormData((prevState) => {
            return {
                ...prevState , 
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        navigate("/Dashboard");
        console.log(formData);
        
    }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Email Address <sup className="text-[#EF476F]">*</sup></p>
        <input
            required
            type='email'
            name='email'
            placeholder='Enter email address'
            onChange={changeHandler}
            value={formData.email}
            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
        />
      </label>

      <label className="w-full relative">
          <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Password <sup className="text-[#EF476F]">*</sup></p>
        <input
            required
            type={ showPassword ? "text" : "password"}
            name='password'
            placeholder='Enter password'
            onChange={changeHandler}
            value={formData.password}
            className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
        />
        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
        </span>
      </label>
      <Link to="#">
            <p className="text-xs mt-[-10px] text-[#47A5C5] max-w-max ml-auto">Forgot Password</p>
      </Link>

      <button className="bg-[#FFD60A] py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-[#000814]">Sign In</button>
    </form>
  )
}

export default LogInForm
