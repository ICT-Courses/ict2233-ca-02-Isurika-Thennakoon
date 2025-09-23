import React from "react";

export default function ProjectCard({ title, img, description, link, bgColor}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}`}
      className={`block ${bgColor} dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-lg p-4 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
    >
      <img
        src={img}
        alt={title}
        className="rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>
      <span className="text-blue-700 dark:text-blue-400 font-semibold hover:underline">
          View Project →
      </span>
    </a>
  );
}

