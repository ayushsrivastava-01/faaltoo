import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  return (
    <>
      <Router>
      {/* <ScrollToTop />  */}
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes> */}
      <Footer />
    </Router>
    </>
  )
}

export default App;
