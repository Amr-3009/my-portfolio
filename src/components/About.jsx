import { FaGithub, FaLinkedin } from "react-icons/fa";
import { gitHubLink, linkedInLink } from "../variables";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tags = [
  { label: "Mechatronics Grad", type: "cyan" },
  { label: "Web Developer", type: "cyan" },
  { label: "Digital Twin Trainee", type: "gold" },
  { label: "IoT", type: "cyan" },
  { label: "ML / AI", type: "gold" },
];

const infoRows = [
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Email", value: "amrosama1k@gmail.com", isEmail: true },
  { label: "Phone", value: "(+20) 1013107960" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#080D18] py-24 px-6 overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[120px] font-black tracking-[16px] text-[#00D4FF] opacity-[0.03] whitespace-nowrap"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        ABOUT
      </span>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
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
          <span
            className="inline-block text-[11px] tracking-[4px] uppercase text-[#00D4FF] border border-[rgba(0,212,255,0.3)] px-4 py-1.5 rounded-full mb-3"
          >
            Who I Am
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Know Me{" "}
            <span className="text-[#F0B429]">More</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#00D4FF] mx-auto mt-4 opacity-60" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-[#8892A4] text-base leading-[1.9] mb-5">
              I&apos;m{" "}
              <span className="text-[#00D4FF] font-medium">Amr Osama</span>, a
              Mechatronics Engineering graduate with a Web Development diploma
              and a current trainee in the{" "}
              <span className="text-[#F0B429]">
                Digital Twin Engineering track
              </span>{" "}
              at NTI Egypt under the DEY/HireReady program.
            </p>
            <p className="text-[#8892A4] text-base leading-[1.9] mb-5">
              My background sits at the intersection of hardware, software, and
              intelligent systems — from building responsive web apps with{" "}
              <span className="text-[#00D4FF] font-medium">React</span> to
              working with{" "}
              <span className="text-[#00D4FF] font-medium">
                IoT protocols
              </span>
              , machine learning, and 3D simulation tools like Unity and
              Blender.
            </p>
            <p className="text-[#8892A4] text-base leading-[1.9]">
              I&apos;m drawn to engineering problems that require thinking
              across disciplines, and I&apos;m building toward a career in
              Digital Twin development — where physical and digital worlds{" "}
              <span className="text-[#F0B429]">converge</span>.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`text-[11px] font-medium tracking-wider px-3 py-1.5 rounded border ${
                    tag.type === "cyan"
                      ? "bg-[rgba(0,212,255,0.06)] text-[#00D4FF] border-[rgba(0,212,255,0.2)]"
                      : "bg-[rgba(240,180,41,0.06)] text-[#F0B429] border-[rgba(240,180,41,0.2)]"
                  }`}
                >
                  {tag.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* Info rows */}
            <div className="mb-6">
              {infoRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-between items-center py-4 border-b border-[rgba(255,255,255,0.06)]"
                >
                  <span className="text-[11px] tracking-[2px] uppercase text-[#4A5568]">
                    {row.label}
                  </span>
                  {row.isEmail ? (
                    <a
                      href={`mailto:${row.value}`}
                      className="text-[13px] text-[#00D4FF] font-medium hover:underline"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[13px] text-[#CBD5E0] font-medium">
                      {row.value}
                    </span>
                  )}
                </motion.div>
              ))}

              {/* Status row */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-between items-center py-4"
              >
                <span className="text-[11px] tracking-[2px] uppercase text-[#4A5568]">
                  Status
                </span>
                <span className="flex items-center gap-2 text-[13px] text-[#4ade80] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.7)]" />
                  NTI Trainee · 2026
                </span>
              </motion.div>
            </div>

            {/* CSWA Badge */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[rgba(240,180,41,0.25)] bg-[rgba(240,180,41,0.04)] mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0B429] shadow-[0_0_8px_rgba(240,180,41,0.7)] shrink-0" />
              <span className="text-[12px] text-[#F0B429] font-medium">
                CSWA Certified · Dassault Systèmes · 2020
              </span>
            </motion.div>

            {/* Social Buttons */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-medium text-white bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
              <a
                href={linkedInLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-medium text-[#00D4FF] bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] hover:bg-[rgba(0,212,255,0.15)] hover:border-[rgba(0,212,255,0.4)] transition-all duration-300"
              >
                <FaLinkedin className="text-base" />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
