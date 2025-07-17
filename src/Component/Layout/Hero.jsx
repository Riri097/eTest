import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Master Your <span className="text-slate-800">Exams</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Prepare for success with our comprehensive exam preparation platform. 
          Practice with real-time feedback and achieve your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/exams">
            <Button variant="primary" className="text-lg px-8 py-3">
              Start Practicing
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="outline" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
