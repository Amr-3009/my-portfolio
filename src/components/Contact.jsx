import { motion } from "framer-motion";
import { textVariants, containerVariants } from "../animations/motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";
import { gitHubLink, linkedInLink, cvLink } from "../variables";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_0i4gqfc",
        "template_2ytl0jj",
        {
          from_name: form.name,
          to_name: "Amr",
          from_email: form.email,
          to_email: "amrosama1k@gmail.com",
          message: form.message,
        },
        "WmGXz6if7_TBgoDaN"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setTimeout(() => {
          toast.success(
            "Thank you. I will get back to you as soon as possible."
          );
        }, 0);

        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Failed to send email:", error);
        setTimeout(() => {
          toast.error("Something went wrong. Please try again later.");
        }, 0);
        setLoading(false);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="z-50"
      />
      <section id="contact" className="bg-darkSlateBlue py-16">
        <motion.div
          className="relative flex flex-col items-center justify-center h-32"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[10vw] md:text-[80px] font-bold text-mutedBeige opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap uppercase">
            Get in Touch
          </h2>
          <div className="relative z-10 mt-4">
            <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
              Contact Me
            </h3>
            <div className="w-16 md:w-24 h-[2px] bg-steelBlue mx-auto mt-2" />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 mt-16">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact Form Section */}
            <motion.div
              className="lg:w-2/3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-steelBlue rounded-lg p-8 shadow-lg h-full">
                <form
                  className="space-y-6"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-pureWhite mb-2"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-pureWhite mb-2"
                      >
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        value={form.email}
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-pureWhite mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={form.message}
                      rows="7"
                      className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                      placeholder="Your message..."
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-pureWhite text-darkSlateBlue font-semibold rounded-md hover:bg-mutedBeige transition-colors duration-300"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </motion.div>
            {/* Social Links Section */}
            <motion.div
              className="lg:w-1/3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-steelBlue rounded-lg p-8 shadow-lg h-full order-2">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  <a
                    href={gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#393F44] rounded-lg text-pureWhite hover:bg-[#4a4f55] transition-all duration-300"
                  >
                    <FaGithub className="text-2xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={linkedInLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#393F44] rounded-lg text-pureWhite hover:bg-[#4a4f55] transition-all duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://wa.me/+201013107960"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#393F44] rounded-lg text-pureWhite hover:bg-[#4a4f55] transition-all duration-300"
                  >
                    <FaWhatsapp className="text-2xl" />
                    <span>(+20) 1013107960</span>
                  </a>
                  <div className="flex items-center justify-center gap-2 p-3 bg-[#393F44] rounded-lg text-pureWhite hover:bg-[#4a4f55] transition-all duration-300">
                    <MdEmail className="text-xl" />
                    <a href="mailto:amrosama1k@gmail.com">
                      amrosama1k@gmail.com
                    </a>
                  </div>
                  <a
                    href={cvLink}
                    download
                    className="flex items-center justify-center gap-2 p-3 bg-[#393F44] rounded-lg text-pureWhite hover:bg-[#4a4f55] transition-all duration-300"
                  >
                    <MdDownload className="text-2xl" />
                    <span className="text-sm md:text-base">Download CV</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
