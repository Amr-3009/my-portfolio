import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaReact, FaBrain, FaCube, FaUsers } from "react-icons/fa";
import { FaCubes } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { PiCircuitryFill } from "react-icons/pi";

const skillShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  certified: PropTypes.bool,
  learning: PropTypes.bool,
});

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

const categories = [
  {
    name: "Engineering & CAD",
    icon: <FaCubes className="text-2xl" />,
    color: "gold",
    skills: [
      { name: "SolidWorks", certified: true },
      { name: "Blender", learning: true },
    ],
  },
  {
    name: "Web Development",
    icon: <FaReact className="text-2xl" />,
    color: "cyan",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "PHP" },
      { name: "MySQL" },
      { name: "Laravel" },
    ],
  },
  {
    name: "IoT & Embedded",
    icon: <PiCircuitryFill className="text-2xl" />,
    color: "cyan",
    skills: [
      { name: "MQTT" },
      { name: "Arduino" },
      { name: "RTOS", learning: true },
    ],
  },
  {
    name: "AI & Data",
    icon: <FaBrain className="text-2xl" />,
    color: "cyan",
    skills: [
      { name: "Python" },
      { name: "Classical ML" },
      { name: "Neural Networks", learning: true },
    ],
  },
  {
    name: "3D & Visualization",
    icon: <FaCube className="text-2xl" />,
    color: "gold",
    skills: [
      { name: "Blender", learning: true },
      { name: "Unity", learning: true },
    ],
  },
  {
    name: "Soft Skills",
    icon: <FaUsers className="text-2xl" />,
    color: "cyan",
    skills: [
      { name: "Professional Communication" },
      { name: "Presentation Skills" },
      { name: "Critical Thinking" },
      { name: "Team Collaboration" },
      { name: "Time Management" },
    ],
  },
];

const SkillPill = ({ skill }) => {
  if (skill.certified) {
    return (
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium bg-[rgba(240,180,41,0.08)] text-[#F0B429] border border-[rgba(240,180,41,0.3)] whitespace-nowrap">
        <MdVerified className="text-sm shrink-0" />
        {skill.name}
        <span className="text-[10px] opacity-70 ml-0.5">CSWA</span>
      </span>
    );
  }

  if (skill.learning) {
    return (
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium bg-[rgba(240,180,41,0.05)] text-[#F0B429] border border-dashed border-[rgba(240,180,41,0.25)] whitespace-nowrap">
        {skill.name}
        <span className="text-[10px] opacity-60 ml-0.5">learning</span>
      </span>
    );
  }

  return (
    <span className="px-3 py-1.5 rounded-md text-[12px] font-medium bg-[rgba(0,212,255,0.05)] text-[#8892A4] border border-[rgba(0,212,255,0.12)] hover:text-[#00D4FF] hover:border-[rgba(0,212,255,0.3)] hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200 whitespace-nowrap cursor-default">
      {skill.name}
    </span>
  );
};

SkillPill.propTypes = {
  skill: skillShape.isRequired,
};

const CategoryCard = ({ category, index }) => {
  const isCyan = category.color === "cyan";

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-xl p-6 border transition-all duration-300 group"
      style={{
        background: "rgba(15, 23, 41, 0.6)",
        borderColor: isCyan ? "rgba(0,212,255,0.1)" : "rgba(240,180,41,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: isCyan
            ? "inset 0 0 30px rgba(0,212,255,0.04), 0 0 20px rgba(0,212,255,0.06)"
            : "inset 0 0 30px rgba(240,180,41,0.04), 0 0 20px rgba(240,180,41,0.06)",
        }}
      />

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-8 h-8 rounded-tl-xl overflow-hidden opacity-40"
        style={{
          background: isCyan
            ? "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, transparent 100%)"
            : "linear-gradient(135deg, rgba(240,180,41,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5 relative z-10">
        <span
          style={{ color: isCyan ? "#00D4FF" : "#F0B429" }}
          className="opacity-80"
        >
          {category.icon}
        </span>
        <h3
          className="text-[15px] font-bold tracking-wide"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: isCyan ? "#00D4FF" : "#F0B429",
          }}
        >
          {category.name}
        </h3>
        <div
          className="ml-auto h-[1px] flex-1 opacity-20"
          style={{
            background: isCyan
              ? "linear-gradient(to right, rgba(0,212,255,0.8), transparent)"
              : "linear-gradient(to right, rgba(240,180,41,0.8), transparent)",
          }}
        />
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(skillShape).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#080D18] py-24 px-6 overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[120px] font-black tracking-[16px] text-[#00D4FF] opacity-[0.03] whitespace-nowrap"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        SKILLS
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
            What I Can Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My <span className="text-[#F0B429]">Skills</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#00D4FF] mx-auto mt-4 opacity-60" />
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-2 text-[12px] text-[#4A5568]">
            <span className="w-3 h-3 rounded-sm bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)]" />
            Proficient
          </span>
          <span className="flex items-center gap-2 text-[12px] text-[#4A5568]">
            <span className="w-3 h-3 rounded-sm bg-[rgba(240,180,41,0.08)] border border-dashed border-[rgba(240,180,41,0.3)]" />
            Currently Learning
          </span>
          <span className="flex items-center gap-2 text-[12px] text-[#4A5568]">
            <MdVerified className="text-[#F0B429] text-sm" />
            Certified
          </span>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
