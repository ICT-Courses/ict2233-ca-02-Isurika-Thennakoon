import React, {useState} from "react";
import { Mail, Github, Linkedin} from "lucide-react"
import BgImage from "../assets/bg_image.jpg";

export default function Contact() {
   const [form, setForm]= useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };  
  const handleSubmit =(e) => {
    e.preventDefault();
    alert("message sent! 🚀");
  };
  return (
     <section
      className= "min-h-screen px-6 md:px-20 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})`}}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Contact Me
      </h2> 
      
      <form 
         onSubmit={handleSubmit}
         className="max-w-lg mx-auto bg-gray-50/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700"
          required
        />
        <textarea
          name= "message"
          placeholder="Your-Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border rounded-lg dark:bg-gray-700"
          required
          rows={5}
        />
        
        <button
           type="submit"
          className="w-full bg-blue-600 text-white py-3  rounded-lg  hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        <div className="flex jusfify-center mt-6 gap-6">
          <a
            href="https://www.linkedin.com/in/pawani-thennakoon-4207a9315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a 
               href="https://github.com/Isurika-Thennakoon"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline">
              <Github size={20} /> GitHub
              </a>
              <a
               href="mailto:isurikapawani21@gmail.com"
               className="flex items-center gap-2 text-red-600  hover:underline">
                <Mail size={20} /> Email
               </a>
        </div>
      </form>
       
    </section>
  );
}

