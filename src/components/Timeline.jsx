import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const timelineItems = [
  {
    type: "education",
    icon: <FaGraduationCap />,
    title: "B.Sc. Mechatronics Engineering",
    organization: "Ain Shams University",
    period: "2018 — 2022",
    description:
      "Graduated with a degree in Mechatronics Engineering, gaining a strong foundation in mechanical design, electronics, control systems, and software development.",
    highlights: [
      "Graduation Project: Warehouse Autonomous Robot",
      "SolidWorks modeling & simulation",
      "Control systems & automation",
    ],
    badge: null,
  },
  {
    type: "cert",
    icon: <FaCertificate />,
    title: "Certified SolidWorks Associate (CSWA)",
    organization: "Dassault Systèmes",
    period: "2020",
    description:
      "Earned the CSWA certification, validating proficiency in 3D CAD modeling, part design, and assembly using SolidWorks.",
    highlights: [],
    badge: { label: "Certified", color: "gold" },
  },
  {
    type: "cert",
    icon: <FaCertificate />,
    title: "Python Programming",
    organization: "Udemy",
    period: "2022",
    description:
      "Completed a comprehensive Python programming course covering fundamentals through applied scripting and automation.",
    highlights: [],
    badge: null,
  },
  {
    type: "education",
    icon: <FaGraduationCap />,
    title: "Full Stack PHP Web Development Diploma",
    organization: "AMIT Learning",
    period: "2023 — 2024",
    description:
      "Intensive web development diploma covering front-end and back-end technologies, database design, and building full-stack applications.",
    highlights: [
      "React & JavaScript",
      "PHP & Laravel",
      "MySQL database architecture",
      "RESTful API design",
    ],
    badge: null,
  },
  {
    type: "work",
    icon: <FaBriefcase />,
    title: "Data Entry Specialist",
    organization: "Tarbyh Namouthajiyah Schools",
    period: "2025 — 2026",
    description:
      "Managed and supervised multiple student databases while coordinating with teaching, administrative, and IT teams to streamline information flow.",
    highlights: [
      "Supervised multi-database student records",
      "Cross-functional team coordination",
      "Delivered AI presentation to non-technical staff",
      "Structured complaint resolution & communication",
    ],
    badge: null,
  },
  {
    type: "training",
    icon: <FaRocket />,
    title: "Digital Twin Engineering Track",
    organization: "National Telecom Institute (NTI) — DEY/HireReady",
    period: "2026",
    description:
      "Intensive training program in Digital Twin development under the DEY/HireReady scholarship at Smart Village, Cairo. Covering IoT integration, machine learning, simulation technologies, and professional development.",
    highlights: [
      "IoT & MQTT protocol",
      "Machine Learning & Neural Networks",
      "Unity & Blender for 3D visualization",
      "Proposals, presentations & action plans",
    ],
    badge: { label: "In Progress", color: "gold" },
  },
];

const typeColors = {
  education: "cyan",
  cert: "cyan",
  work: "cyan",
  training: "gold",
};

const TimelineCard = ({ item, index, side }) => {
  const isGold = typeColors[item.type] === "gold";
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex w-full mb-12 ${
        isLeft
          ? "justify-start pr-8 md:pr-[52%]"
          : "justify-end pl-8 md:pl-[52%]"
      }`}
    >
      {/* Dot on the center line */}
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10 hidden md:block"
        style={{
          background: isGold ? "#F0B429" : "#00D4FF",
          borderColor: isGold ? "#F0B429" : "#00D4FF",
          boxShadow: isGold
            ? "0 0 12px rgba(240,180,41,0.6)"
            : "0 0 12px rgba(0,212,255,0.6)",
        }}
      />

      {/* Mobile dot */}
      <div
        className="absolute top-6 left-0 w-3 h-3 rounded-full border-2 z-10 md:hidden"
        style={{
          background: isGold ? "#F0B429" : "#00D4FF",
          borderColor: isGold ? "#F0B429" : "#00D4FF",
          boxShadow: isGold
            ? "0 0 8px rgba(240,180,41,0.5)"
            : "0 0 8px rgba(0,212,255,0.5)",
        }}
      />

      <motion.div
        custom={index}
        variants={isLeft ? slideLeft : slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        className="relative rounded-xl p-6 border w-full md:w-[90%] group transition-all duration-300"
        style={{
          background: "rgba(15, 23, 41, 0.7)",
          borderColor: isGold ? "rgba(240,180,41,0.15)" : "rgba(0,212,255,0.1)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: isGold
              ? "0 0 24px rgba(240,180,41,0.07)"
              : "0 0 24px rgba(0,212,255,0.05)",
          }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <span
              className="text-lg shrink-0"
              style={{ color: isGold ? "#F0B429" : "#00D4FF" }}
            >
              {item.icon}
            </span>
            <div>
              <h4
                className="text-[15px] font-bold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.title}
              </h4>
              <p className="text-[12px] text-[#4A5568] mt-0.5">
                {item.organization}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            {/* Period */}
            <span
              className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
              style={{
                color: isGold ? "#F0B429" : "#00D4FF",
                borderColor: isGold
                  ? "rgba(240,180,41,0.25)"
                  : "rgba(0,212,255,0.2)",
                background: isGold
                  ? "rgba(240,180,41,0.06)"
                  : "rgba(0,212,255,0.06)",
              }}
            >
              {item.period}
            </span>
            {/* Badge */}
            {item.badge && (
              <span
                className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md"
                style={{
                  color: "#080D18",
                  background: "#F0B429",
                }}
              >
                {item.badge.label}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] text-[#8892A4] leading-relaxed mb-4 relative z-10">
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights.length > 0 && (
          <ul className="flex flex-col gap-1.5 relative z-10">
            {item.highlights.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-[12px] text-[#6B7280]"
              >
                <span
                  className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                  style={{
                    background: isGold ? "#F0B429" : "#00D4FF",
                  }}
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

TimelineCard.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    badge: PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
  side: PropTypes.oneOf(["left", "right"]).isRequired,
};

const Timeline = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#060B15] py-24 px-6 overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[120px] font-black tracking-[16px] text-[#00D4FF] opacity-[0.03] whitespace-nowrap"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        JOURNEY
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="inline-block text-[11px] tracking-[4px] uppercase text-[#00D4FF] border border-[rgba(0,212,255,0.3)] px-4 py-1.5 rounded-full mb-3">
            My Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Experience & <span className="text-[#F0B429]">Education</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#00D4FF] mx-auto mt-4 opacity-60" />
          <div className="mt-6">
            <a
              href="https://drive.google.com/drive/folders/1ArYPb-o__XKrmRry-7khxKst17iNHmS2?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "rgba(240,180,41,0.08)",
                color: "#F0B429",
                border: "1px solid rgba(240,180,41,0.25)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View All Certificates
            </a>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] hidden md:block"
            style={{ background: "rgba(0,212,255,0.12)" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Mobile vertical line */}
          <motion.div
            className="absolute left-1.5 top-0 w-[1px] md:hidden"
            style={{ background: "rgba(0,212,255,0.12)" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Items */}
          {timelineItems.map((item, index) => (
            <TimelineCard
              key={item.title}
              item={item}
              index={index}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
