/* eslint-disable react/prop-types */
import {Link, NavLink} from 'react-router-dom'

import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';

const NavBar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <nav className="flex justify-between items-center w-10/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
          <img src={Logo} alt='logo' height={32} width={160} loading='lazy'/>
      </Link>
      <div className="flex gap-x-6 text-[#AFB2BF] ">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>

        <NavLink to="/CounterApp">
          <span>CounterApp</span>
        </NavLink>
        
        <NavLink to="/Form"> 
          <span>Form</span>
          {/* Contact */}
        </NavLink>
      </div>
      <div className="flex items-center gap-x-4 text-[#AFB2BF]">

        {
          !isLoggedIn && <Link to="/LogIn">
          <button className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]">Log in</button>
          </Link>
        }

        {
          !isLoggedIn && <Link to="/SignUp">
          <button className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]">Sign up</button>
        </Link>
        }

        {
          isLoggedIn && <Link to="/">
          <button onClick={() => 
          {
              setIsLoggedIn(false);
              toast.success("Logged out");
          }} className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]">Log out</button>
        </Link>
        }

        {
          isLoggedIn && <Link to="/Dashboard">
          <button className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]">Dashboard</button>
        </Link>
        }

      </div>
    </nav>
  )
}

export default NavBar
