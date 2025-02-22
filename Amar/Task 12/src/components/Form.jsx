import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Form = () => {

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    DOB: "",
    StreetName: "",
    CityName: "",
    StateName: "",
    CountryName: "",
    ZIPCode: "",
    email: "",
    phoneNumber: "",
    gender: "",
    course: "",
    branch: "",
  });

  const inputChange = (event) => {

    const { name, value } = event.target;
    let error = "";


    if (name === "firstName" || name === "lastName" || name === "StreetName" || name === "CityName" || name === "CountryName" || name === "StateName") {
      if (!/^[A-Za-z\s]+$/.test(value)) error = "Only letters are allowed";
    }
    if (name === "studentId") {
      if (!/^\d{5,10}$/.test(value)) error = "Student ID must be 5-10 digits";
    }
    if (name === "phoneNumber") {
      if (!/^\d{10}$/.test(value)) error = "Student ID must be 5-10 digits";
    }
    if (name === "email") {
      if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email format";
    }
    if (name === "phoneNumber") {
      if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits";
    }
    if (name === "ZIPCode") {
      if (!/[0-9]/.test(value)) error = "ZIP code must be Integer";
    }
    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  // check form is valid or not, all input fields are field or not 
  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");


  const submitData = (event) => {
    event.preventDefault()
    toast.success("Form Submitted Successfully!");
    
    console.log(formData)

    setFormData(
      {
        firstName: "",
        lastName: "",
        studentId: "",
        DOB: "",
        StreetName: "",
        CityName: "",
        StateName: "",
        CountryName: "",
        ZIPCode: "",
        email: "",
        phoneNumber: "",
        gender: "",
        course: "",
        branch: "",
      }
    )
    setErrors({});
  }

  return (
    <div className="w-[60%] my-5 mx-auto bg-gray-100 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="w-full bg-blue-500 text-white flex gap-4 p-5 rounded-t-lg">
        <img src="/logo.jfif" width={100} alt="Logo" className="rounded-full shadow-md relative z-9" />
        <div>
          <h1 className="text-3xl font-semibold">Student Registration Form</h1>
          <p className="text-sm">
            Fill out the form to apply for training courses. You can consider your application
            accepted after receiving a confirmation email.
          </p>
        </div>
      </div>
      {/* Form Section */}
      <div className="p-6">
        <form action="" onSubmit={submitData}>
          {/* Student Information */}
          <div className="mb-5">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Student Information<span className="text-red-500">*</span>
            </h2>
            <div className="flex gap-3 mt-2">
              <input
                name='firstName'
                value={formData.firstName} onChange={inputChange}
                className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="First Name"
              />
              <input
                name='lastName'
                value={formData.lastName} onChange={inputChange}
                className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Last Name"
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}

            <div className="flex gap-3 mt-2">
              <input
                name='DOB'
                value={formData.DOB} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
              />
              <input
                name='studentId'
                value={formData.studentId} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Student ID"
              />
            </div>
            {errors.studentId && <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>}

            {/* Gender Selection */}
            <div className="flex items-center mt-3">
              <label className="mr-3 text-gray-700 font-medium">Gender:</label>
              <label className="flex items-center mr-4">
                <input value="Male" onChange={inputChange} checked={formData.gender === "Male"} type="radio" name="gender" className="mr-2" />
                Male
              </label>
              <label className="flex items-center mr-4">
                <input value="Female" onChange={inputChange} checked={formData.gender === "Female"} type="radio" name="gender" className="mr-2" />
                Female
              </label>
              <label className="flex items-center">
                <input value="Other" onChange={inputChange} checked={formData.gender === "Other"} type="radio" name="gender" className="mr-2" />
                Other
              </label>
            </div>
          </div>

          {/* Address */}
          <div className="mb-5">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Address<span className="text-red-500">*</span>
            </h2>
            <input
              name='StreetName'
              value={formData.StreetName} onChange={inputChange}
              className="w-full mt-2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Street Name"
            />
            {errors.StreetName && <p className="text-red-500 text-sm mt-1">{errors.StreetName}</p>}
            <div className="flex gap-3 mt-2">
              <input
                name='CityName'
                value={formData.CityName} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="City"
              />

              <input
                name='StateName'
                value={formData.StateName} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="State"
              />
            </div>
            {errors.CityName && <p className="text-red-500 text-sm mt-1">{errors.CityName}</p>}
            {errors.StateName && <p className="text-red-500 text-sm mt-1">{errors.StateName}</p>}
            <div className="flex gap-3 mt-2">
              <input
                name='CountryName'
                value={formData.CountryName} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Country"
              />
              <input
                name='ZIPCode'
                value={formData.ZIPCode} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="ZIP Code"
              />
            </div>
            {errors.CountryName && <p className="text-red-500 text-sm mt-1">{errors.CountryName}</p>}
            {errors.ZIPCode && <p className="text-red-500 text-sm mt-1">{errors.ZIPCode}</p>}

          </div>

          {/* Contact Information */}
          <div className="mb-5">
            <h2 className="text-2xl text-gray-700 font-semibold">Contact Information</h2>
            <div className="flex gap-3 mt-2">
              <input
                name='email'
                value={formData.email} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
              />
              <input
                name='phoneNumber'
                value={formData.phoneNumber} onChange={inputChange}
                className="w-1/2 p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* Course Selection */}
          <div className="mb-5">
            <h2 className="text-2xl text-gray-700 font-semibold">
              Course<span className="text-red-500">*</span>
            </h2>
            <div className="flex gap-5 mt-2">
              <div>
                <label className="text-gray-700 font-medium">Choose Course:</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={inputChange}
                  required
                  className="w-40 p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="">Select Course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>
              <div>
                <label className="text-gray-700 font-medium">Choose Branch:</label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={inputChange}
                  required
                  className="w-72 p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="">Select Branch</option>
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={!isFormValid}
            className={`w-full mt-4 p-2 rounded-lg text-white font-semibold transition-all ${isFormValid ? "bg-blue-500 hover:bg-blue-600 cursor-pointer" : "bg-blue-300 cursor-not-allowed"
              }`}
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Form;
