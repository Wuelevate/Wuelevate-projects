import { useState } from 'react'

function App() {

  const initialFormState ={
    firstName:"" ,
    lastName:"" ,
    email:"",
    country:"India",
    city:"",
    streetAddress:"",
    state:"",
    zipCode:"",
    comments:false,
    candidates:false,
    offers:false,
    notificationType:""
  }

  const [formData , setFormData] = useState(initialFormState)


  const isFormValid = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      emailRegex.test(formData.email) &&
      formData.streetAddress.trim() &&
      formData.city.trim() &&
      formData.state.trim() &&
      formData.zipCode.trim()
    );
  };

  function changeHandler(event){
    
    let {name , type , value , checked} = event.target;

      setFormData((prevFormData) => 
        ({...prevFormData , 
          [name] : type === "checkbox" ? checked : value})
        )
  }

  function submitHandler(event){
      event.preventDefault();
      setFormData(initialFormState);
      console.log(formData);
  }

  return (
    <div className="App bg-gray-400 w-full flex justify-center  py-10 ">

      <form onSubmit={submitHandler} className='w-[60%] border-black border rounded-md py-5 px-8 bg-white'>

        <label htmlFor='firstName'>First name</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.firstName}
        name='firstName'
        id='firstName'/>

        <label htmlFor="lastName" >Last name</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.lastName}
        name='lastName'
        id='lastName'/>

        <label htmlFor='email' >Email</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="email"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.email}
        name='email'
        id='email'/>

        <label htmlFor='country'>Country</label>
        <select
        name='country'
        onChange={changeHandler}
        id='country'
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Dubai">Dubai</option>
          <option value="Paris">Paris</option>
        </select>


        <label htmlFor='streetAddress' >Street Address</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.streetAddress}
        name='streetAddress'
        id='streetAddress'/>

        <label htmlFor='city' >City</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.city}
        name='city'
        id='city'/>

        <label htmlFor='state' >State/Province</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-4 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.state}
        name='state'
        id='state'/>

        <label htmlFor='zipCode' >Zip/Postal code</label>
        <input
        className='w-full px-2 py-2 border-black border rounded-md mb-8 '
        type="text"
        placeholder="type here"
        onChange={changeHandler}
        value={formData.zipCode}
        name='zipCode'
        id='zipCode'/>

        <fieldset>

          <legend className='mb-4 font-semibold'>By Email</legend>

          <input
            name='comments'
            type='checkbox'
            id='comments'
            checked={formData.comments}
            onChange={changeHandler}
            className='mt-3 cursor-pointer'/>
            <label className='ml-3 font-medium cursor-pointer ' htmlFor='comments'>Comments</label>
            <p className='ml-6 text-gray-700'>Get notified when someones posts a common on a posting.</p>

          <input
            name='candidates'
            type='checkbox'
            id='candidates'
            checked={formData.candidates}
            onChange={changeHandler}
            className='mt-3 cursor-pointer'/>
            <label className='ml-3 font-medium cursor-pointer ' htmlFor='candidates'>Candidates</label>
            <p className='ml-6 text-gray-700'>Get notified when a candidate applies for a job.</p>

          <input
            name='offers'
            type='checkbox'
            id='offers'
            checked={formData.offers}
            onChange={changeHandler}
            className='mt-3 cursor-pointer'/>
            <label className='ml-3 font-medium cursor-pointer ' htmlFor='offers'>Offers</label>
            <p className='ml-6 text-gray-700'>Get notified when a candidate accepts and rejects an offer.</p>

        </fieldset>

        <fieldset className='mt-8 font-medium '>

          <legend>Push Notifications</legend>

          <p className='text-gray-700 '>These are delivered via sms to your mobile phone.</p>

          <div className='flrx flex-col'>
          <input
            type='radio'
            id='everything'
            onChange={changeHandler}
            name="notificationType"
            value='Everything'
            className='mt-7 cursor-pointer'/>
          <label className='font-medium ml-3 cursor-pointer' htmlFor='everything'>Everything</label>
          <br/>

          <input
            type='radio'
            id='sameAsEmail'
            onChange={changeHandler}
            name="notificationType"
            value='Same as email'
            className='mt-4 cursor-pointer'/>
          <label className='font-medium ml-3 cursor-pointer ' htmlFor='sameAsEmail'>Same as email</label>
          <br/>

          <input
            type='radio'
            id='noPushNotifications'
            onChange={changeHandler}
            name="notificationType"
            value='No push notifications'
            className='mt-4 cursor-pointer'/>
          <label className='font-medium ml-3 cursor-pointer ' htmlFor='noPushNotifications'>No push notifications</label>

          </div>
        </fieldset>

        <button
              disabled={!isFormValid()}
              className={`font-bold px-4 py-2 rounded mt-8 text-white ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
        >Save</button>

      </form>

    </div>
  );
}

export default App;