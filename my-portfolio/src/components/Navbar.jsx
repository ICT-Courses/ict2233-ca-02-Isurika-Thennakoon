import React from "react";

export default function Navbar({ darkMode, setDarkMode}) {
  return (
    <nav className="bg-gray-500 dark:bg-gray-800 text-white p-4 flex justify-between items-center shadow-md transition-colors duration-500">
      <h1 className="text-xl font-bold">My portfolio</h1>
      
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/projects" className="hover:underline">Projects</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 dark:bg-gray-200 dark:text-gray-900 px-4 py-2 rounded hover:bg-gray-600 dark:hover:bg-gray-300 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

