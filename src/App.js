import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Home/Contact/Contact.js'
import Education from './pages/Home/Education/Education.js';
import Expirence from './pages/Home/Expirence/Expirence.js';
import Project from './pages/Home/Projects/Projects.js';
import Error from './pages/Home/Error/Error.js';
import Navbar from './common/navbar/Navbar';
import Footer from './common/footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/expirence" element={<Expirence />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='*' element={<Error />} />
        </Routes>
    <Footer />

    </BrowserRouter>

  );
}

export default App;
