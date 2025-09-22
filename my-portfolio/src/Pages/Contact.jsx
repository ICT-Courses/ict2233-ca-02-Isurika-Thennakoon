
import React, {useState} from "react";
import BgImage from "../assets/bg_image.jpg";

export default function Contact() {
   const [form, setForm]= useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.mame]: e.target.value});
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
        >
        </textarea>
        <button
           type="submit"
          className="w-full bg-blue-600 text-white py-3  rounded-lg  hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

