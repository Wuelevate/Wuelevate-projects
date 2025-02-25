/* eslint-disable react/prop-types */
import {useState} from 'react';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const [formData , setFormdata] = useState({
        firstName:"" ,
        lastName:"" ,
        email:"" , 
        password:"" ,
        confirmPassword:""
    })

    function changeHandler(event){
        setFormdata((prevstate) => {
            return{
                ...prevstate , 
                [event.target.name] : event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        toast.success("Account Created")
        setIsLoggedIn(true);
        navigate("/Dashboard");
        const finalData = {
            ...formData , accountType
        }
        console.log(finalData);
        
    }

  return (
    <div>
      <div className='flex bg-[#161D29] p-1 gap-x-1 rounded-full max-w-max mt-4'>
        <button
        onClick={() => setAccountType("student")}
        className={`${
            accountType === "student"
              ? "bg-[#000814] text-[#F1F2FF]"
              : "bg-transparent text-[#999DAA] "
            } py-2 px-5 rounded-full transition-all`}>
            Student
        </button>
        <button
        onClick={() => setAccountType("instructor")}
        className={`${
            accountType === "instructor"
              ? "bg-[#000814] text-[#F1F2FF]"
              : "bg-transparent text-[#999DAA] "
            } py-2 px-5 rounded-full transition-all`}>
            Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        
        <div className="flex gap-x-4 mt-4 mb-4">
            <label className="w-full">
                <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">First firstName <sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type='text'
                    name='firstName'
                    placeholder='Enter first Name'
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
                />
            </label>
    
            <label className="w-full">
                <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup></p>
                <input
                    required
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
                />
            </label>
        </div>

        <label className="w-full mt-4 ">
            <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Email Address <sup className="text-pink-200">*</sup></p>
            <input
                required
                type='email'
                name='email'
                placeholder='Enter Email Address'
                value={formData.email}
                onChange={changeHandler}
                    className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
            />
        </label>

        <div className="flex gap-x-4 mt-4 ">
            <label className="w-full relative">
                <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Create Password <sup className="text-[#EF476F]">*</sup></p>
                <input
                    required
                    type={ showPassword ? "text" : "password"}
                    name='password'
                    placeholder='Enter Password'
                    value={formData.password}
                    onChange={changeHandler}
                    className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
                />
                <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
            </label>
    
            <label className="w-full relative">
                <p className="text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]">Confirm Password <sup className="text-[#EF476F]">*</sup></p>
                <input
                    required
                    type={ showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    placeholder='Re-Enter Password'
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    className="bg-[#161D29] rounded-[0.75rem] w-full p-[12px] text-[#F1F2FF]"
                />
                <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
            </label>
        </div>
        <button className="bg-[#FFD60A] py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-[#000814] w-full">Create Accout</button>
      </form>
    </div>
  )
}

export default SignUpForm
