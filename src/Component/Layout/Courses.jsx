import React, { useState, useEffect } from "react";
import { GraduationCap, Clock } from "lucide-react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(baseUrl + "/courses/") 
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch courses");
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-center">Loading courses...</p>;
  if (error) return <p className="p-6 text-center text-red-600">{error}</p>;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Our Courses
          </h1>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive course offerings designed to help you excel in your studies
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(({ id, title, description, duration, price, icon }) => (
            <div
              key={id}
              className="group bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-400"
            >
              <div className="flex items-center mb-4 gap-3">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                  <i
                    className={`fab ${icon || "fa-book"} text-xl text-slate-900`}
                    aria-hidden="true"
                  ></i>
                </div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h2>
              </div>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {description}
              </p>
              
              <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {duration} days
                </span>
                <span className="text-lg font-bold text-green-600">${parseFloat(price).toFixed(2)}</span>
              </div>
              
              <button className="w-full bg-blue-400 hover:bg-blue-500 text-slate-900 font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;