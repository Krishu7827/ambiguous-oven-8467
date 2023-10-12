import './App.css';
import AboutUs from './Components/AboutUs';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom"
import Signup from './Components/Signup';
import SignInn from './Components/SignInn';
function App() {
  return (
    <div id='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<SignInn />} />
        
      </Routes>

    </div>
  );
}

export default App;
