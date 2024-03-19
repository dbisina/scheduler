import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Optimize Your Learning Journey</h1>
        <p className="text-gray-700 mb-6">
          This AI-powered scheduler helps you create a personalized learning plan
          to achieve your goals.
        </p>
        <a
          href="/course-input"
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
