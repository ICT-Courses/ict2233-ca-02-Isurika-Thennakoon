import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-8xl font-bold text-red-600">404</h1>
      <p className="texr-xl text-gray-700 dark:text-gray-300 mb-6">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go Home page
      </Link>
    </section>
  );
}
