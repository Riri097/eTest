import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { FaBrain, FaChartLine, FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero.png";

const features = [
  {
    icon: FaBrain,
    title: "Personalized MCQs",
    description: "Quizzes tailored to your interests and learning needs.",
  },
  {
    icon: FaChartLine,
    title: "Instant Feedback",
    description: "Get real-time results and improve quickly.",
  },
  {
    icon: FaClipboardList,
    title: "Progress Tracking",
    description: "Monitor your growth and stay motivated.",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A] flex flex-col justify-center items-center px-6">
      
      {/* Top Hero Section with split layout */}
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center py-5 gap-12">
        
        {/* Left side: text content */}
        <div className="md:w-1/1 text-left mt-15">
          <h1 className="text-5xl font-bold mb-6">Welcome to VedantaQ</h1>
          <p className="text-lg mb-8 text-[#6B7B68]">
            Unlock your potential with personalized MCQs tailored to your interests.
            Track your progress and elevate your learning journey.
          </p>

          <div className="flex gap-6 mb-9">
            <Button variant="primary" onClick={() => navigate("/login")}>
              Get Started
            </Button>
            <Button variant="secondary" onClick={() => navigate("/features")}>
              Learn More
            </Button>
          </div>
        </div>

        {/* Right side: image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Learning illustration"
            className="max-w-100 h-auto"
          />
        </div>
      </section>

      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 mt-17">
        {features.map(({ icon, title, description }) => (
          <Card key={title} icon={icon} title={title} description={description} />
        ))}
      </section>

      <section className="w-full bg-[#E7F2F8] py-16 px-6 text-center rounded-lg shadow-md max-w-4xl">
        <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
          Ready to take your learning to the next level?
        </h2>
        <p className="mb-6 text-[#6B7B68] max-w-xl mx-auto">
          Join thousands of learners and start your personalized quiz journey today!
        </p>
        <Button variant="primary" onClick={() => navigate("/signup")}>
          Sign Up Now
        </Button>
      </section>
    </div>
  );
};

export default Hero;
