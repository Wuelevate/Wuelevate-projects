import './App.css'
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const route = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home/>
      </div>   
  },
  {
    path: "/dashboard",
    element:<div>
      <Navbar />
      <Dashboard/>
      </div>  
   },
  {
    path: "/about",
    element:<div>
      <Navbar />
      <About/>
      </div>  
  },

   {
    path: "/contact",
    element:<div>
      <Navbar />
      <Contact/>
      </div>  
  }
]);



function App() {

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}

export default App
