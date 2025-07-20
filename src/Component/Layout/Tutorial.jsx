import React from "react";

function Tutorial() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-8">
      {/* Welcome Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#344C3D] mb-2">
          Welcome to VedantaQ!
        </h1>
        <p className="text-gray-700 text-lg">
          Thank you for choosing us to support your exam preparation journey. You're now ready to start learning smartly and confidently.
        </p>
      </header>

      <section className="space-y-10">
        {/* Step 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#344C3D] mb-2">
            1. Start a New Exam
          </h2>
          <p className="text-gray-700">
            Head over to your <strong>Dashboard</strong> and click the{" "}
            <strong>"Start New Exam"</strong> button. Fill in the topic, a short description, number of questions, and select the difficulty level. VedantaQ will instantly generate relevant MCQs for you.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#344C3D] mb-2">
            2. Answer the Questions
          </h2>
          <p className="text-gray-700">
            Navigate through the quiz using <strong>Next</strong> and{" "}
            <strong>Prev</strong> buttons. Select the best answer for each question. A countdown timer at the top helps you manage your time efficiently.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#344C3D] mb-2">
            3. Submit and Review
          </h2>
          <p className="text-gray-700">
            Once you’re done, hit <strong>Submit</strong>. You’ll get your score immediately along with the number of correct answers. This helps you track progress and know where to improve.
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-[#344C3D] mb-2">
            4. Practice Anytime
          </h2>
          <p className="text-gray-700">
            You can take as many quizzes as you like! Experiment with different topics and difficulty levels to sharpen your skills and boost your confidence for real exams.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          We're here to help you succeed. All the best with your preparation! 💪
        </p>
      </footer>
    </div>
  );
}

export default Tutorial;
