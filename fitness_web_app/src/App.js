import UncontrolledExample from './Components/Home';
import './App.css';
import CourseOfHome from './Components/CourseOfHome';
import OurInstructor from './Components/OurInstructor';
import AboutUs from './Components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonial from './Components/testimonial';
import SocialMedia from './Components/SocialMedia';
function App() {
  return (
 <div id='App'>
   <UncontrolledExample/>
   <CourseOfHome/>
   <OurInstructor/>
   <Testimonial/>
   <AboutUs/>
   <SocialMedia/>
 </div>
  );
}

export default App;
