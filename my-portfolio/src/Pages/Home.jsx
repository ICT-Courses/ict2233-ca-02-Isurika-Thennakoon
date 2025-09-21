import React from "react";
import ProfilePhoto from "../assets/profile.png";
import BgImage from "../assets/bg_image.jpg"

export default function Home() {
  return (
    <section
      style={{
        backgroundImage: `URL(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-15"
    >
    
      <div className="md:w-1/2 flex justify-end mb-8 md:mb-0">
        <img
          src= {ProfilePhoto}
          alt="profile"
          className="W-100 h-[600px] object-cover rounded-xl shadow-lg"
        />
      </div>
      
      {/* Right Side - Text */}
      <div className="md:w-1/2 md:pl-12 text-center md:text-left bg-white/70 p-6 rounded-xl shadow-ld">
      
        {/* Using semi-transparent background for readability */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900  dark:text-white mb-4 leading-snug">
          Hey there! <br />
          I’m <span className="text-gray-600">pawani Isurika</span>
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-800 md-6 max-w-lg"> I am currently pursuing a <strong>Bsc in Information Technologhy(IT)</strong> and I am passionate about technology, software development, and problem-solving. I enjoy learninhg new programming language, building projects, and exploring areas such as web development, networking, and data analytics. my goal is to develop my skills further and contribute effectively to innovative tech solutions.</p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="bg-gray-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            view Projects
          </a>
          <a
            href="/contact"
            className="border border-black-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-black-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

