import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This platform helped me ace my certification exam. The interactive quizzes are amazing!",
      author: "Sarah Johnson",
      title: "Data Scientist",
      rating: 5,
    },
    {
      quote: "Amazing platform for learning. The quizzes are well-structured and truly test your knowledge.",
      author: "Alex Chen", 
      title: "Software Engineer",
      rating: 5,
    },
    {
      quote: "I've tried many online learning platforms, but this one stands out. Highly recommended!",
      author: "Emily Davis",
      title: "Product Manager",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#75E6DA]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Join thousands of successful learners who have transformed their careers with eTest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-semibold text-slate-900 text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-slate-500 text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
