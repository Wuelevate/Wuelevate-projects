import Form from './components/Form'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Foreground from './components/Foreground'
import Contact from './components/Contact';


function App() {

  return (
    <>
      <div className="w-full min-h-screen flex justify-center  bg-[#101828] ">
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/form' element={<Form />} />
            <Route path='/Foreground' element={<Foreground />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="*" element={<NotFound />} />  // if page not found show NotFound component.
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
