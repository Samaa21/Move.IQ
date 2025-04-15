import React, { useEffect } from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  // Add fade-in animation on scroll
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    fadeInElements.forEach((element) => observer.observe(element));

    return () => {
      fadeInElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="about-us" className="about-us-section">
      <div className="container">
        <h2 className="section-title fade-in">About Us</h2>
        <p className="section-subtitle fade-in">
          Your Fitness Journey, Simplified
        </p>

        {/* Mission Section */}
        <div className="mission-section fade-in">
          <h3>Our Mission</h3>
          <p>
            At <strong>MOVE.IQ</strong>, our mission is to empower individuals
            to achieve their fitness goals through accessible, personalized, and
            effective workout solutions. We believe that fitness should be
            inclusive, enjoyable, and tailored to everyone’s unique needs.
          </p>
        </div>

        {/* Vision Section */}
        <div className="vision-section fade-in">
          <h3>Our Vision</h3>
          <p>
            We envision a world where everyone has the tools and knowledge to
            lead a healthy and active lifestyle. By combining technology,
            community, and expert guidance, we aim to revolutionize the way
            people approach fitness.
          </p>
        </div>

        {/* Features Section */}
        <div className="features-grid">
          <div className="feature-card fade-in">
            <i className="icon-dumbbell">💪</i>
            <h3>Targeted Workouts</h3>
            <p>
              Explore exercises for specific body parts and equipment with ease.
            </p>
          </div>
          <div className="feature-card fade-in">
            <i className="icon-guide">📖</i>
            <h3>Step-by-Step Guides</h3>
            <p>
              Follow detailed instructions to ensure effective and safe workouts.
            </p>
          </div>
          <div className="feature-card fade-in">
            <i className="icon-community">👥</i>
            <h3>Community Support</h3>
            <p>
              Join a vibrant community of fitness enthusiasts and share your
              journey.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section fade-in">
          <h3>Meet Our Team</h3>
          <p>
            Our team is made up of passionate fitness experts, developers, and
            designers who are dedicated to helping you achieve your goals. We’re
            here to support you every step of the way.
          </p>
          <div className="team-members">
            <div className="team-member">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Team Member 1"
              /> */}
              <h4>Divyansh </h4>
              <p>Software Developer</p>
            </div>
            <div className="team-member">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Team Member 2"
              /> */}
              <h4>Aryan Verma</h4>
              <p>Pose Detection</p>
            </div>
            <div className="team-member">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Team Member 3"
              /> */}
              <h4>Samad Amir</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              {/* <img
                src="https://via.placeholder.com/100"
                alt="Team Member 3"
              /> */}
              <h4>Bhoomi Agarwal</h4>
              <p>Machine Learning Trainer</p>
            </div>

          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="cta-section fade-in">
          <h3>Ready to Start Your Fitness Journey?</h3>
          <p>
            Join <strong>Move.IQ</strong> today and take the first step towards a
            healthier, stronger, and happier you.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;