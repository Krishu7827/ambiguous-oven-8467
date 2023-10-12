import React from 'react'
import UncontrolledExample from './Home';
import CourseOfHome from './CourseOfHome';
import OurInstructor from './OurInstructor';
import AboutUs from './AboutUs';
import Testimonial from './testimonial';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <UncontrolledExample />
            <CourseOfHome />
            <OurInstructor />
            <Testimonial />
            <AboutUs />
            <SocialMedia />
            <Footer />
        </div>
    )
}

export default HomePage