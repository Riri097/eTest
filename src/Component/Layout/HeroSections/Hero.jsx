import React from "react";
import Button from "../../UI/Button";
import hero from "../../../assets/herobg.png";

const Hero = () => {
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div
      className="h-[90vh] sm:h-[85vh] md:h-[90vh] bg-cover bg-center bg-no-repeat flex items-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="lg:w-1/2 text-left">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ color: "#0B1F3A" }}
          >
            Awaken The Mind,
            <span className="block" style={{ color: "#0B1F3A" }}>
              Master The Test
            </span>
          </h1>
          <p
            className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed"
            style={{ color: "#333" }}
          >
            Transform your knowledge with personalized AI quizzes, adaptive
            learning paths, and real-time progress tracking. Join thousands of
            learners achieving their goals.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Button 
              variant="primary" 
              onClick={() => navigate("/login")}
              className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
