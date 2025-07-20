import React from "react";
import { BookOpen, Users, TrendingUp, CalendarClock, Star } from "lucide-react";

const About = () => {
  const sectionClass = "bg-[#E7F2F8] p-6 rounded-lg shadow-md";
  const iconClass = "text-[#0B1F3A] w-8 h-8 mb-1 mt-2";

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A] px-6 py-16 max-w-6xl mx-auto">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4">About VedantaQ</h1>
        <p className="text-[#0B1F3A] text-lg">
          VedantaQ is an intelligent learning platform designed to empower students, aspirants, and learners with personalized MCQs tailored to their interests.
        </p>
      </section>

      {/* Two-column grid for info sections */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <section className={sectionClass}>
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <Star className={iconClass}/> Our Mission
          </h2>
          <p>
            To empower learners by delivering targeted, high-quality questions that adapt to their needs. Whether you're preparing for exams or deepening knowledge, VedantaQ supports your journey.
          </p>
        </section>

        {/* Who It’s For */}
        <section className={sectionClass}>
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <Users className={iconClass} /> Who It's For
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Students preparing for school or university exams</li>
            <li>Competitive exam aspirants aiming to succeed</li>
            <li>Lifelong learners looking to master topics</li>
          </ul>
        </section>

        {/* What We Offer */}
        <section className={sectionClass}>
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className={iconClass} /> What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-generated MCQs based on your topics and descriptions</li>
            <li>Easy progress tracking to monitor your growth</li>
            <li>Intuitive and clean interface for focused learning</li>
          </ul>
        </section>

        {/* Future Plans */}
        <section className={sectionClass}>
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className={iconClass} /> Future Plans
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Topic-wise mini courses and learning modules</li>
            <li>PDF upload to auto-generate questions from notes</li>
            <li>Detailed analytics dashboard for performance insights</li>
            <li>Mock exams and timed quizzes for practice</li>
          </ul>
        </section>
      </div>

      {/* Motivational Quote */}
      <section className="mt-20 text-center italic text-[#0B1F3A] text-lg max-w-2xl mx-auto border-[#0B1F3A] pl-6">
        “Learning never exhausts the mind.” – Leonardo da Vinci
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <button
          onClick={() => window.location.href = "/features"}
          className="bg-[#0B1F3A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#071628] transition duration-300"
        >
          Explore Features
        </button>
      </section>
    </div>
  );
};

export default About;
