import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white p-4 text-center mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} My Portfolio. All right reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/Isurika-Thennakoon" target="_black" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
        < a href ="https://www.linkedin.com/in/pawani-thennakoon-4207a9315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_black" rel="noopener noreferrer" className="hover:underline">
           LinkedIn
        </a>
        <a href="mailto:isurikapawani21@gmail.com" className="hover:underline">
          Email
        </a>
      </div>
      </footer>  
  );
}    
        
      
