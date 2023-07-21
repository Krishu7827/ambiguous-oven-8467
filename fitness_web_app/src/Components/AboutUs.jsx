import React ,{useState}from "react";



function AboutUs(){

    const [showAnswer, setShowAnswer] = useState({});

    const handleToggleAnswer = (index) => {
      setShowAnswer((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };
    const faqData = [
        { question: 'Why Choose Us?', answer: "At Joesthetics Club, we stand out as your ideal fitness partner with expert instructors who are certified and dedicated to guiding you on your fitness journey. Our wide range of courses caters to all levels, from beginners to experienced fitness enthusiasts, ensuring there's something for everyone. Experience interactive learning with live workouts, personalized feedback, and community support, making your fitness journey engaging and enjoyable. Our user-friendly web app offers flexibility and convenience, allowing you to access courses anytime, anywhere, and progress at your own pace." },
        { question: 'How do I access the fitness courses on your platform?', answer: "Accessing our fitness courses is easy and convenient. Simply sign up for an account on our website and log in to gain full access to our course library. Once you're in, you can browse through the diverse selection of courses, choose the ones that align with your fitness goals, and start your learning journey right away. Our user-friendly web app allows you to access the courses from any device, be it your computer, tablet, or smartphone, ensuring flexibility and accessibility for your convenience." },
        {question:"Are the instructors experienced and certified?",answer:"Absolutely! We take pride in the expertise and dedication of our instructors. All our fitness courses are led by experienced professionals who hold relevant certifications in their respective fields. They are passionate about fitness and are committed to helping you succeed in your fitness journey. With their guidance and support, you can rest assured that you're learning from the best in the industry."},

        {question:"What can I expect from the interactive learning experience?", answer:"Our courses are designed to offer an engaging and interactive learning experience like no other. You'll not only gain theoretical knowledge but also have the opportunity to participate in live workouts, receive personalized feedback, and engage with a supportive fitness community. Through interactive elements, you'll stay motivated and inspired throughout your learning process, making it a fun and enjoyable experience."},
        {question:"Can I progress at my own pace?",answer:"Absolutely! We understand that everyone has a unique fitness journey, which is why we offer the flexibility for you to progress at your own pace. Our courses are self-paced, allowing you to take the time you need to master each concept and skill. Whether you prefer to complete a course quickly or take it step by step, our platform is tailored to accommodate your learning style and schedule."},
        {question:"What if I need assistance or have questions during the course?",answer:"You are never alone on your fitness journey with us. Our team is here to support you every step of the way. If you have any questions or need assistance during the course, feel free to reach out to our dedicated support team. We're here to provide timely and helpful responses, ensuring that you have a smooth and rewarding learning experience."},
        {question:"Do you offer courses for all fitness levels?",answer:"Absolutely! Our course selection is diverse and caters to all fitness levels, from beginners to advanced fitness enthusiasts. Whether you're just starting your fitness journey or looking to take your skills to the next level, we have courses that suit your needs. Each course is thoughtfully designed to accommodate different skill levels, ensuring that you find the perfect fit for your current fitness level and goals."},
        {question:" Is there a community aspect to the platform?",answer:"Yes, we take pride in fostering a vibrant fitness community. When you join our platform, you become part of a supportive network of like-minded individuals who share a passion for fitness. Through our community forums and interactive features, you can connect with fellow learners, share your progress, exchange ideas, and celebrate achievements together. Our community is a valuable resource for staying motivated, inspired, and connected on your fitness journey."},
        {question:"What sets your fitness courses apart from others?",answer:"At Joesthetics Club, we strive to offer a holistic and exceptional learning experience. Our courses are led by expert instructors, and our interactive approach ensures that you not only learn but also enjoy the process of achieving your fitness goals. With a wide range of courses, flexible learning options, and a supportive community, we are committed to being your ideal fitness partner, providing you with all the tools and support you need to succeed on your fitness journey."}
        // Add more question-answer pairs as needed
      ];

    return(
        <div id="AboutUs">
            <div className="AboutUs-header">
                <h3>About Us</h3>
            </div>
            <hr />
            <br />
            <br />
        <div className="AboutUs-description">
     <h4 >"At [Your Fitness Course Platform Name], we are passionate about empowering individuals to achieve their fitness goals and lead healthier lives. Our platform is designed to provide you with a comprehensive selection of high-quality fitness courses, tailored to meet your unique needs and preferences."</h4>
</div>
<div className="FrequentlyQuestion">

<section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <ul className="faq">
          {faqData.map((item, index) => (
            <li key={index} className={showAnswer[index] ? 'show-answer' : ''}>
              <div className="question" onClick={() => handleToggleAnswer(index)}>
                {item.question}
              </div>
              <div className="answer">{item.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>


</div>
        </div>
        
    )
}

export default AboutUs