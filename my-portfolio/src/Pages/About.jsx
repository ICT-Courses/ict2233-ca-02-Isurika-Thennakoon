
import React from "react";
import ProfilePhoto from "../assets/about.jpg";
import BgImage from "../assets/bg_image.jpg"

export default function About(){
  return  (
    <section
       style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
       }}  
      className="min-h-screen px-4 md:px-20 py-12 relative"
      >
      <div className="relative z-10 text-gray">
        <h2 className="text-4xl font-bold text-center mb-16">About Me!</h2>

        <div className="grid md:grid-cols-2 gap-10 item-center">

          {/* Left Side - Profile Image */}
          <img
            src={ProfilePhoto}
            alt="About"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-xl shadow-lg border-4 border-white"
          />

          {/* Right Side - Info Boxes */}
          <div className="space-y-8">

            {/* Background Box */}
            <div className="bg-gray-400 text-white p-6 rounded-lg shadow-lg relative">
               <h3 className="text-2xl font-semibold mb-2">Background</h3>
              <p>
                I am currently pursuing a <storng>Bsc in Information Technology</storng>.
                I am passionate about technology and software development. My journey
                has given me a strong foundation in computer science, coding, and 
                problem-solving.
              </p>
            </div>

            {/* Education Box */}
            <div className="bg-gray-500 text-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <p> 
                Studying at the <strong> University of Sri Jayewardenepura</strong>,
                specializing in Information Technology. My coursework includes programming,
                database systems, networking, and software engineering, preparing me for 
                real-world challenges in IT.
              </p>
            </div>

            {/* Skills Box */}
            <div className="bg-gray-500 text-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-2xl font-semibold mb-2">Skills</h3>

              {/* Technical Skills */}
              <h4 className="font-semibpld underline mb-1">Technical Skills</h4>
              <ul className="grid grid-cols-2 gap-2 mb-4">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScripts</li>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
                <li>Responsive Design</li>
              </ul>

              {/* Soft Skills */}
              <h4 className="font-semibold underline mb-1">Soft-Skills</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li>📚Problem Solving</li> 
                <li>📚Team Collaboration</li>  
                <li>📚Communication</li>   
                <li>📚Time Management</li> 
                <li>📚Continuous Learning</li> 
                <li>📚Adaptability</li>     
              </ul> 
            </div>   
          </div>
        </div>
      </div>
    </section>
  );
}

