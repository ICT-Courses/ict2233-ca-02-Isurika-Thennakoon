import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import BgImage from "../assets/bg_image.jpg"; //background image

const projects  = [
  {
    title: "Smart Diet Planner Application",
    img: Project1,
    description:
      "A Windows Forms desktop application built with C# that helps users create personalized diet plans based on their calorie requirements, BMI, and health goals. Includes features like recipe suggestions and daily meal tracking.",
    link:"https://github.com/ICT-Courses/application-development-ca1-Isurika-Thennakoon.git",
    bgColor: "bg-blue-100/90 dark:bg-blue-900/70",
  },
  {
    title: "Travel-Guide website",
    img: Project2,
    description:
      "A responsive travel guide website that helps users explore destinations, find attractions, and plan trips with detailed itineraries and local tips.",
    link: "https://github.com/ICT-Courses/ict2233-ca-01-Isurika-Thennakoon.git",
    bgColor: "bg-blue-100/90 dark:bg-blue-900/70",
  },
  {
    title: "Furniture website",
    img: Project3,
    description:
      "A modern and responsive furniture website showcasing a variety of home and office furniture, allowing users to browse products, view details, and get inspiration for interior design.",
    link:"https://drive.google.com/file/d/1-KEgrvyxWhqn6yypsrx4Z8iRchwWfjx3/view?usp=sharing",
    bgColor: "bg-blue-100/90 dark:bg-blue-900/70",
  },
];

export default function Project()  {
  return (
    <section
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen bg-gray-50/90 dark:bg-gray-800/80 px-6 md:px-20 py-12 transition-colors duration-500"
    >
       <h2 className="text-4xl font-bold text-center text-gray-600 dark:text-blue-400 mb-10">
        My Projects
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index}{...project}/>
          
        ))}
      </div>
    </section>
  );
}

