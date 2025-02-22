/* eslint-disable react/prop-types */

import Template from '../components/Template'
import loginImg from '../assets/login.png'

const LogIn = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="LogIn"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default LogIn
