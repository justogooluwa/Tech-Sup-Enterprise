import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import AboutUs from './Components/Home/AboutUs';
import PapOrderForm from './Components/Home/Form';
import Footer from './Components/Footer'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,     // animate only once
    });
  }, []);


  return (
    <>
      <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<PapOrderForm />} />
      </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
