import React from 'react';

function Course() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">React Basics</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="w-full h-64"
          src="https://www.youtube.com/embed/dGcsHMXbSOA"
          title="React Tutorial"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-700">Watch the tutorial above and complete the quiz to continue.</p>
    </div>
  );
}

export default Course;
