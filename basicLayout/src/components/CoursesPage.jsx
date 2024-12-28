import React from 'react';

const courses = [
  { title: 'Data Structures', description: 'Learn the fundamentals of data structures.' },
  { title: 'Operating Systems', description: 'Dive deep into OS concepts and architecture.' },
  { title: 'Machine Learning', description: 'Get started with machine learning basics.' },
  // Add more courses here
];

const CoursesPage = () => {
  return (
    <div id="courses" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-200 transition-all">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="mt-2">{course.description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Explore More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
