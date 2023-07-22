import UncontrolledExample from './Components/Home';
import './App.css';
import CourseOfHome from './Components/CourseOfHome';
import OurInstructor from './Components/OurInstructor';
import AboutUs from './Components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './Components/testimonial';
import SocialMedia from './Components/SocialMedia';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
 <div id='App'>
  <Navbar/>
   <UncontrolledExample/>
   <CourseOfHome/>
   <OurInstructor/>
   <Testimonial/>
   <AboutUs/>
   <SocialMedia/> 
   <Footer/>
 </div>
  );
}

export default App;
