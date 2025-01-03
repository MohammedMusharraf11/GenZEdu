import React, { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const courses = [
    {
      title: "Mathematics Excellence",
      description: "Advanced concepts in Algebra, Calculus, and Geometry.",
      grade: "Class 10",
    },
    {
      title: "Physics Mastery",
      description: "In-depth understanding of Mechanics, Optics, and Thermodynamics.",
      grade: "Class 11",
    },
    {
      title: "Chemistry Advanced",
      description: "Organic, Inorganic, and Physical Chemistry for Boards & JEE.",
      grade: "Class 12",
    },
    {
      title: "Biology Basics to Advanced",
      description: "Genetics, Evolution, and Human Physiology for NEET.",
      grade: "Class 12",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black-500 via-purple-500">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 shadow-md bg-white z-50 relative">
        <div
          className="text-3xl cursor-pointer z-50"
          onClick={toggleSidebar}
        >
          <span className="material-icons">menu</span>
        </div>
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-4 flex items-center justify-between bg-gray-100">
          <h2 className="text-lg font-bold text-gray-700">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-200">
              <a href="#home">Home</a>
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-200">
              <a href="#features">Features</a>
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-200">
              <a href="#about">About</a>
            </li>
            <li className="px-4 py-2 text-gray-600 hover:bg-gray-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="px-8 py-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Courses for Students
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-0">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600">{course.description}</p>
              <p className="mt-2 text-sm text-gray-500">
                Suitable for: <span className="font-bold">{course.grade}</span>
              </p>
              <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
