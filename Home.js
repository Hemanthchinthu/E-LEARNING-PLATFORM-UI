import React from 'react';

const courses = [
  { id: 1, title: 'React Basics', progress: 60 },
  { id: 2, title: 'Advanced JavaScript', progress: 30 },
  { id: 3, title: 'UI Design Fundamentals', progress: 90 },
];

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
