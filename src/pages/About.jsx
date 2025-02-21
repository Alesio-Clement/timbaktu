import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import about from "../assets/img/abt1.jpg";
import about2 from "../assets/img/abt2.jpg";
import about3 from "../assets/img/abt3.jpg";


const About = () => {
  return (
    <>
      <Breadcrumb current='About TimBaktu' />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 box">
              <div className="about Us">
                <h2 className="mb-4 fw-bold">About TimBaktu</h2>
               <p>'TimBaktu' Academy, we are inspired by the rich scholarly history of Timbuktu, a legendary center of knowledge and innovation in Africa. We are building a community of future African tech giants by equipping students with hands-on, market-ready skills that drive technological and economic transformation across the continent.</p>
                <h3 className="my-4 fw-bold">Our Mission</h3>
                <p>To accelerate market harmony by developing a skillset that perfectly aligns with today’s dynamic industry demands.</p>
                <h3 className="my-4 fw-bold">Our Vision</h3> 
                <p>A technologically advanced society in an empowered economy.</p>
                <h3 className="my-4 fw-bold">Our Core Values</h3> 
                <ul>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Coaching</span> – Guiding learners toward mastery.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Community</span> – Building a network of tech innovators.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Access to Opportunities</span> – Bridging talent with industry needs.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Determination</span> –  Empowering students to push boundaries.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Consistency </span> – Ensuring continuous learning and growth.</li>
                </ul>

                <h3 className="my-4 fw-bold">Our Approach</h3> 
                <p>We offer a practical, self-paced, and experiential learning environment. Our blended approach combines video-based lectures, virtual instructions, hands-on projects, and real-world simulations, ensuring students learn by doing.</p>
             
                <h3 className="my-4 fw-bold">Our Program</h3> 
                <p>Students undergo Short or Extended Training in four key areas:</p>
                <ul>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i>Software Development</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i>Infrastructure & Networks</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i>Digital Marketing</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i>Interactive & User-Centered Design</li>
              </ul>

              <h3 className="my-4 fw-bold">How We Ensure Impact</h3> 
              <ul>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Personalized Learning:</span> – Data-driven insights for customized training.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Mentorship & Industry Linkages</span> – Direct connections with tech professionals.</li>
                  <li><i className="fas fa-check-circle pe-2 my-2"></i><span className="fw-bold">Hackathons & Real-World Scenarios</span> –  Hands-on learning through challenges and projects.</li>
                </ul>
              </div>

              <p>At Timbuktu Academy, we don't just teach tech—we create opportunities, foster innovation, and build Africa’s next generation of tech leaders.</p>
              <p>Join us today and be part of Africa’s tech revolution!   <Link to="/signup">Join now</Link></p>
            </div>
            <div className="col-md-4">
            <img src={about} alt="banner img" />
            <img className="my-5" src={about3} alt="img" />
            <img src={about2} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
