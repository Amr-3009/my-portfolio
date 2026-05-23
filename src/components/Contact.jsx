import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdContentCopy } from "react-icons/md";
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

const contactCards = [
  {
    icon: <MdEmail className="text-2xl" />,
    label: "Email",
    value: "amrosama1k@gmail.com",
    href: "mailto:amrosama1k@gmail.com",
    copyable: true,
    color: "gold",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,
    label: "WhatsApp",
    value: "(+20) 1013107960",
    href: "https://wa.me/+201013107960",
    copyable: true,
    color: "cyan",
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
    value: "amrosamaeg",
    href: linkedInLink,
    copyable: false,
    color: "cyan",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    value: "Amr-3009",
    href: gitHubLink,
    copyable: false,
    color: "white",
  },
];

const Contact = () => {
  const handleCopy = (value, label) => {
    navigator.clipboard.writeText(value);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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

        <div className="relative z-10 max-w-4xl mx-auto">
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
            <p className="text-[#8892A4] text-[14px] mt-6 max-w-md mx-auto leading-relaxed">
              I&apos;m currently open to opportunities, collaborations, and
              conversations. Feel free to reach out through any of the channels
              below.
            </p>
          </motion.div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactCards.map((card, index) => {
              const isCyan = card.color === "cyan";
              const isGold = card.color === "gold";

              return (
                <motion.div
                  key={card.label}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="relative rounded-xl border p-6 flex items-center gap-5 group transition-all duration-300"
                  style={{
                    background: "rgba(15, 23, 41, 0.7)",
                    borderColor: isGold
                      ? "rgba(240,180,41,0.15)"
                      : isCyan
                        ? "rgba(0,212,255,0.1)"
                        : "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      boxShadow: isGold
                        ? "0 0 24px rgba(240,180,41,0.06)"
                        : isCyan
                          ? "0 0 24px rgba(0,212,255,0.05)"
                          : "0 0 24px rgba(255,255,255,0.03)",
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: isGold
                        ? "rgba(240,180,41,0.08)"
                        : isCyan
                          ? "rgba(0,212,255,0.08)"
                          : "rgba(255,255,255,0.05)",
                      color: isGold
                        ? "#F0B429"
                        : isCyan
                          ? "#00D4FF"
                          : "#8892A4",
                      border: `1px solid ${
                        isGold
                          ? "rgba(240,180,41,0.2)"
                          : isCyan
                            ? "rgba(0,212,255,0.15)"
                            : "rgba(255,255,255,0.08)"
                      }`,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <p className="text-[11px] tracking-[2px] uppercase text-[#4A5568] mb-1">
                      {card.label}
                    </p>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-white hover:text-[#00D4FF] transition-colors duration-300 truncate block"
                    >
                      {card.value}
                    </a>
                  </div>

                  {/* Copy button */}
                  {card.copyable && (
                    <button
                      onClick={() => handleCopy(card.value, card.label)}
                      className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#4A5568",
                      }}
                      title={`Copy ${card.label}`}
                    >
                      <MdContentCopy className="text-sm" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
