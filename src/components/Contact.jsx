import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gitHubLink, linkedInLink } from "../variables";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const socialLinks = [
  {
    icon: <FaGithub className="text-xl" />,
    label: "GitHub",
    value: "Amr-3009",
    href: gitHubLink,
    color: "white",
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    label: "LinkedIn",
    value: "amrosamaeg",
    href: linkedInLink,
    color: "cyan",
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    label: "WhatsApp",
    value: "(+20) 1013107960",
    href: "https://wa.me/+201013107960",
    color: "cyan",
  },
  {
    icon: <MdEmail className="text-xl" />,
    label: "Email",
    value: "amrosama1k@gmail.com",
    href: "mailto:amrosama1k@gmail.com",
    color: "cyan",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg text-white text-[14px] outline-none transition-all duration-300 border focus:border-[rgba(0,212,255,0.5)] placeholder-[#4A5568]";

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  borderColor: "rgba(0,212,255,0.1)",
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        "WmGXz6if7_TBgoDaN",
      )
      .then(() => {
        setTimeout(() => {
          toast.success(
            "Thank you. I will get back to you as soon as possible.",
          );
        }, 0);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
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
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
        className="z-50"
      />

      <section
        id="contact"
        className="relative bg-[#060B15] py-24 px-6 overflow-hidden"
      >
        {/* Watermark */}
        <span
          className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[120px] font-black tracking-[16px] text-[#00D4FF] opacity-[0.03] whitespace-nowrap"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          CONTACT
        </span>

        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block text-[11px] tracking-[4px] uppercase text-[#00D4FF] border border-[rgba(0,212,255,0.3)] px-4 py-1.5 rounded-full mb-3">
              Get In Touch
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Contact <span className="text-[#F0B429]">Me</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#00D4FF] mx-auto mt-4 opacity-60" />
            <p className="text-[#8892A4] text-[14px] mt-4 max-w-md mx-auto">
              Have a project in mind or want to connect? Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Form */}
            <motion.div
              className="lg:w-2/3"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="rounded-xl p-8 border h-full"
                style={{
                  background: "rgba(15, 23, 41, 0.7)",
                  borderColor: "rgba(0,212,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Top accent */}
                <div
                  className="h-[2px] w-full mb-8 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #00D4FF, transparent)",
                  }}
                />

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] tracking-[2px] uppercase text-[#8892A4] mb-2 font-medium">
                        Name
                      </label>
                      <input
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        name="name"
                        className={inputClass}
                        style={inputStyle}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] tracking-[2px] uppercase text-[#8892A4] mb-2 font-medium">
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        value={form.email}
                        type="email"
                        name="email"
                        className={inputClass}
                        style={inputStyle}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] tracking-[2px] uppercase text-[#8892A4] mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={form.message}
                      rows="7"
                      className={inputClass}
                      style={{ ...inputStyle, resize: "none" }}
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg text-[13px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: loading
                        ? "rgba(0,212,255,0.1)"
                        : "rgba(0,212,255,0.12)",
                      color: "#00D4FF",
                      border: "1px solid rgba(0,212,255,0.3)",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="lg:w-1/3"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="rounded-xl p-8 border h-full flex flex-col"
                style={{
                  background: "rgba(15, 23, 41, 0.7)",
                  borderColor: "rgba(0,212,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Top accent */}
                <div
                  className="h-[2px] w-full mb-8 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, #F0B429, transparent)",
                  }}
                />

                <p className="text-[12px] tracking-[3px] uppercase text-[#8892A4] mb-6 font-medium">
                  Find me on
                </p>

                <div className="flex flex-col gap-3 flex-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-4 py-3 rounded-lg border transition-all duration-300 group"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        borderColor:
                          link.color === "cyan"
                            ? "rgba(0,212,255,0.08)"
                            : "rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="shrink-0 transition-colors duration-300"
                        style={{
                          color: link.color === "cyan" ? "#00D4FF" : "#8892A4",
                        }}
                      >
                        {link.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] tracking-[1px] uppercase text-[#4A5568]">
                          {link.label}
                        </p>
                        <p className="text-[12px] text-[#8892A4] group-hover:text-white transition-colors duration-300 truncate">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  ))}
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
