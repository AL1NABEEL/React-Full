import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import SignUp from './components/Signup';
import Footer from './components/Footer';
function App() {
  return (
  <div>
  <Navbar/>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='*' element={<div>404 NOT FOUND</div>} />
      </Routes>
  <Footer/>
  </div>
);
}

export default App;
