// // Understand useEffect & useRef for managing side effects and references



// // The useEffect hook in React is designed to handle side effects, such as data fetching or subscriptions, during a component's lifecycle. In contrast, useRef creates mutable references to DOM elements or values that persist across renders without causing re-renders. ### Understanding useEffect

// // Purpose: The useEffect hook allows you to perform side effects in functional components, such as data fetching, DOM manipulation, and setting up subscriptions.

// // Execution: By default, the effect runs after every render. You can control its execution by providing a dependency array:

// // Empty Array: useEffect(() => { /* effect */ }, []) runs only once after the initial render.
// // With Dependencies: useEffect(() => { /* effect */ }, [dependencies]) runs when any of the dependencies change.


// // Cleanup: You can return a cleanup function from the effect to clean up resources when the component unmounts or before the effect runs again:
// useEffect(() => {
//     // Side effect logic
//     return () => {
//       // Cleanup logic
//     };
//   }, [dependencies]);






// //   Understanding useRef
// // Purpose: The useRef hook is used to create a mutable reference that persists for the full lifetime of the component. It is often used to access DOM elements directly or to store mutable values without causing re-renders.

// // Usage:

// // To create a ref, use const myRef = useRef(initialValue);.
// // Access the current value with myRef.current.
// // Modifying myRef.current does not trigger a re-render of the component.


// function MyComponent() {
//     const inputRef = useRef(null);
  
//     const focusInput = () => {
//       inputRef.current.focus();
//     };
  
//     return (
//       <div>
//         <input ref={inputRef} type="text" />
//         <button onClick={focusInput}>Focus Input</button>
//       </div>
//     );
//   }



// //   Learn the difference between Controlled & Uncontrolled Components



// // Controlled Components
// // Definition: In controlled components, the form data is handled by the React component's state. The input elements derive their values from the state, and any changes to the input are communicated back to the state through event handlers.

// // Key Characteristics:

// // State Management: The component maintains the current value of the input in its state.
// // Single Source of Truth: The state is the single source of truth for the input value, making it easier to manage and validate.
// // Event Handling: Changes to the input are handled through event handlers (e.g., onChange), which update the state.
// // Example:

// import React, { useState } from 'react';

// function ControlledComponent() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Submitted value: ${inputValue}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={inputValue} onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }




// // Uncontrolled Components
// // Definition: In uncontrolled components, the form data is handled by the DOM itself rather than by the React component's state. The input elements maintain their own state, and you can access their values using refs.

// // Key Characteristics:

// // DOM Management: The input elements manage their own state, and React does not control their values.
// // Refs for Access: You can use the useRef hook to access the input values when needed, typically during form submission.
// // Less Boilerplate: Uncontrolled components can lead to less boilerplate code since you don’t need to manage state for every input.
// // Example:

// import React, { useRef } from 'react';

// function UncontrolledComponent() {
//   const inputRef = useRef(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Submitted value: ${inputRef.current.value}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// // Implement form handling techniques in React

// // (1):- Controlled Component techniques
// // (2):- Uncontrolled Components techniques
// // (3):- form validation techniques


// // (3):- form validation techniques:-

// import React, { useState } from 'react';

// function ValidatedForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       alert(`Name: ${formData.name}, Email: ${formData.email}`);
//       setErrors({}); // Clear errors on successful submission
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
//       </div>
//       <div>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//       </div>





