import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    gender: '',
    course: '',
    linkedin: '',
    resume: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(values);
  };

  const ResetFun = (e) => {
    setValues({
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      linkedin: '',
      resume: '',
    });
  };

  return (
    <div className="container">
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={handleChange}
          required
          value={values.firstname}
        />

        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={handleChange}
          required
          value={values.lastname}
        />

        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
          required
          value={values.email}
        />

        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          onChange={handleChange}
          required
          value={values.contact}
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={handleChange}
        /> Other

        <label htmlFor="course">Select Course</label>
        <select name="course" id="course" onChange={handleChange}>
          <option value="B.Tech CSE">B.Tech CSE</option>
          <option value="BBA">BBA</option>
          <option value="BCA">BCA</option>
          <option value="MBA">MBA</option>
        </select>

        <label htmlFor="linkedin">LinkedIn URL*</label>
        <input
          type="text"
          name="linkedin"
          placeholder="Enter link"
          onChange={handleChange}
          required
          value={values.linkedin}
        />

        <label htmlFor="resume">Resume*</label>
        <input
          type="file"
          name="resume"
          onChange={handleChange}
          required
        />

        <button type="button" onClick={ResetFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;