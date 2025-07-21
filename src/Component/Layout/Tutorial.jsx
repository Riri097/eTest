import React from "react";

function Tutorial() {
  return (
    <div className="flex-1 bg-[#E7F2F8] min-h-screen p-8">
      <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-lg border border-[#E7F2F8]">
        {/* Welcome Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-[#0B1F3A] mb-4">
            Welcome to VedantaQ!
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Thank you for choosing us to support your exam preparation journey. You're now ready to start learning smartly and confidently.
          </p>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
              1. Start a New Exam
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Head over to your <strong>Dashboard</strong> and click the{" "}
              <strong>"Start New Exam"</strong> button. Fill in the topic, a short description, number of questions, and select the difficulty level. VedantaQ will instantly generate relevant MCQs for you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
              2. Answer the Questions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Navigate through the quiz using <strong>Next</strong> and{" "}
              <strong>Prev</strong> buttons. Select the best answer for each question. A countdown timer at the top helps you manage your time efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
              3. Submit and Review
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Once you’re done, hit <strong>Submit</strong>. You’ll get your score immediately along with the number of correct answers. This helps you track progress and know where to improve.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-2">
              4. Practice Anytime
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You can take as many quizzes as you like! Experiment with different topics and difficulty levels to sharpen your skills and boost your confidence for real exams.
            </p>
          </div>
        </section>

        <footer className="mt-16 text-center">
          <p className="text-sm text-gray-500 italic">
            We're here to help you succeed. All the best with your preparation! 💪
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Tutorial;
