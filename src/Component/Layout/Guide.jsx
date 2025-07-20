import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button"; // Assuming you have a reusable Button component

function Guide() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-8">
      {/* Welcome Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#0B1F3A] mb-2">
          Welcome to VedantaQ!
        </h1>
        <p className="text-gray-700 text-lg">
          Ready to level up your exam prep? Here's how you can explore VedantaQ
          as a guest before creating your account.
        </p>
      </header>

      <section className="space-y-10">
        {/* Step 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
            1. Discover What We Offer
          </h2>
          <p className="text-gray-700">
            Browse our <strong>Home</strong> and <strong>About</strong> sections to understand how VedantaQ helps you learn smarter with topic-based MCQs and performance insights.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
            2. Preview the Experience
          </h2>
          <p className="text-gray-700">
            Check out sample quizzes, view features, and explore available exam plans. Get a feel for how personalized and efficient your learning journey can be.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
            3. Create Your Free Account
          </h2>
          <p className="text-gray-700">
            To start your first custom quiz and track your performance, simply sign up or log in. It only takes a minute, and it's completely free!
          </p>
        </div>

        {/* Step 4 */}
        <div className="text-center">
          <Button onClick={() => navigate("/login")}>
            Login or Sign Up
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          We're excited to help you succeed. Let’s begin your smart learning journey today!
        </p>
      </footer>
    </div>
  );
}

export default Guide;
