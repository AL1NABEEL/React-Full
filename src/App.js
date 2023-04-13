import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
function App() {
  return (
  <div>
  <Navbar/>
  <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<div>404 NOT FOUND</div>} />
      </Routes>
  {/* <Home/> */}
  </div>
);
}

export default App;
