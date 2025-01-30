import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-32 bg-[#0A192F]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <h2 className="text-4xl font-playfair text-yellow-400 text-center mb-12">
            Get in Touch
          </h2>

          {/* Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-4 border-2 border-yellow-400 bg-transparent text-white text-lg rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-4 border-2 border-yellow-400 bg-transparent text-white text-lg rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-4 border-2 border-yellow-400 bg-transparent text-white text-lg rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-3 px-6 py-3 bg-yellow-400 text-[#0A192F] font-semibold rounded-md mx-auto transition-transform duration-300 hover:-translate-y-1"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
