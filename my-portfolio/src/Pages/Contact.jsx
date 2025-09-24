import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import BgImage from "../assets/bg_image.jpg";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate input fields
  const validate = (data) => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Email is invalid";
    if (!data.message) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_jo6ll5c", //  service ID
          "template_ss5e8dn", //  template ID
          formData, // sending state directly
          "WlepAL1omRqYIhxx7" // user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // reset form
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            setSuccess("Failed to send message. Try again later.");
          }
        );
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };

  return (
    <section
      className="min-h-screen px-6 md:px-20 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
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
          value={formData.name} 
          onChange={handleChange}
          className="w-full p-3 mb-2 border rounded-lg dark:bg-gray-700"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email} 
          onChange={handleChange}
          className="w-full p-3 mb-2 border rounded-lg dark:bg-gray-700"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message} 
          onChange={handleChange}
          className="w-full p-3 mb-2 border rounded-lg dark:bg-gray-700"
          rows={5}
        />
        {errors.message && <p className="text-red-500 text-sm mb-4">{errors.message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

        {success && (
          <p className="text-center text-green-600 font-semibold mt-4">{success}</p>
        )}

        <div className="flex justify-center mt-6 gap-6">
          <a
            href="https://www.linkedin.com/in/pawani-thennakoon-4207a9315"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/Isurika-Thennakoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:underline"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="mailto:isurikapawani21@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:underline"
          >
            <Mail size={20} /> Email
          </a>
        </div>
      </form>
    </section>
  );
}
