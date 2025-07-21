import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button"; // Assuming you have a reusable Button component

function Guide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-500 to-slate-900 overflow-hidden px-6 py-10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg border border-gray-600 p-8">
        {/* Welcome Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to VedantaQ!
          </h1>
          <p className="text-gray-300 text-lg">
            Ready to level up your exam prep? Here's how you can explore VedantaQ
            as a guest before creating your account.
          </p>
        </header>

        <section className="space-y-10">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              1. Discover What We Offer
            </h2>
            <p className="text-gray-300">
              Browse our <strong>Home</strong> and <strong>About</strong> sections to understand how VedantaQ helps you learn smarter with topic-based MCQs and performance insights.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              2. Preview the Experience
            </h2>
            <p className="text-gray-300">
              Check out sample quizzes, view features, and explore available exam plans. Get a feel for how personalized and efficient your learning journey can be.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-gray-600">
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
              3. Create Your Free Account
            </h2>
            <p className="text-gray-300">
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
      </div>
    </div>
  );
}

export default Guide;
