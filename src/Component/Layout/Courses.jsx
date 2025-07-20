import React, { useState, useEffect } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://42scszck-8000.inc1.devtunnels.ms/courses/") 
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-[#0B1F3A]">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {courses.map(({ id, title, description, duration, price, icon }) => (
          <div
            key={id}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4 gap-4">
              {/* Use 'fab' for brand icons */}
              <i
                className={`fab ${icon || "fa-book"} text-4xl text-[#0B1F3A]`}
                aria-hidden="true"
              ></i>
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
            <p className="mb-4 text-gray-700">{description}</p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Duration:</strong> {duration} days
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fee:</strong> ${parseFloat(price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;