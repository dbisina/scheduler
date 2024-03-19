import React, { useState } from 'react';

const CourseInput = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    platform: '',
    difficulty: '',
    estimatedTime: 0,
  });

  const handleChange = (event) => {
    setCourseData({ ...courseData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (store course data)
    setCourseData({ title: '', platform: '', difficulty: '', estimatedTime: 0 });
  };

  return (
    <div className="course-input container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Your Courses</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="title" className="text-gray-700">
          Course Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <label htmlFor="platform" className="text-gray-700">
          Learning Platform:
        </label>
        <input
          type="text"
          id="platform"
          name="platform"
          value={courseData.platform}
          onChange={handleChange}
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <label htmlFor="difficulty" className="text-gray-700">
          Difficulty Level:
        </label>
        <select
          id="difficulty"
          name="difficulty"
          value={courseData.difficulty}
          onChange={handleChange}
          required
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select...</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <label htmlFor="estimatedTime" className="text-gray-700">
          Estimated Learning Time (per Unit):
        </label>
        <input
          type="number"
          id="estimatedTime"
          name="estimatedTime"
          value={courseData.estimatedTime}
          onChange={handleChange}
          min="0"
          required
          className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
        >
