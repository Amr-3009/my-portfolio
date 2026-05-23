import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaRobot,
  FaBus,
  FaMicrochip,
  FaGithub,
  FaUtensils,
  FaShoppingCart,
  FaSchool,
} from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import bistro from "../assets/bistro.png";
import shopwise from "../assets/shopwise.png";
import activitiesArchive from "../assets/activityarchive.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const projects = [
  {
    id: 1,
    icon: <FaRobot />,
    name: "Warehouse Autonomous Robot",
    subtitle: "Graduation Project — Ain Shams University, 2022",
    description:
      "Designed and fully modeled the complete mechanical structure of a warehouse autonomous robot in SolidWorks. Conducted stress analysis on the lifting mechanism to ensure structural integrity, fabricated the prototype, and supervised the full assembly process from concept to working model.",
    tags: ["SolidWorks", "Mechanical Design", "Stress Analysis", "Prototyping"],
    image: null,
    links: [],
    featured: true,
    color: "gold",
  },
  {
    id: 2,
    icon: <FaBus />,
    name: "Bus-ly",
    subtitle: "School & Corporate Transportation Management System",
    description:
      "A full-stack Laravel-based platform managing student and personnel transportation for schools and corporate organizations. Features intelligent route planning, real-time passenger management, trip tracking, and a comprehensive admin dashboard backed by a scalable RESTful API.",
    tags: ["Laravel", "React", "MySQL", "REST API", "PHP"],
    image: null,
    links: [],
    featured: false,
    color: "cyan",
    status: "In Development",
  },
  {
    id: 3,
    icon: <FaUtensils />,
    name: "Bistro Bliss",
    subtitle: "Restaurant Website with Full Stack Backend",
    description:
      "A restaurant website showcasing the menu, services, and contact information. Built with a React frontend and a Laravel REST API backend connected to a MySQL database.",
    tags: ["React", "Laravel", "REST API", "MySQL", "Tailwind"],
    image: bistro,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Amr-3009/front-end-final-project",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://front-end-final-project-omega.vercel.app/home",
        type: "live",
      },
    ],
    featured: false,
    color: "cyan",
  },
  {
    id: 4,
    icon: <FaShoppingCart />,
    name: "Shopwise",
    subtitle: "E-Commerce Web Application",
    description:
      "An e-commerce platform allowing users to browse products, manage a cart, and complete checkout. Built with React and Tailwind CSS, consuming a REST API for product and order data.",
    tags: ["React", "Tailwind", "REST API", "JavaScript"],
    image: shopwise,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Amr-3009/front-end_project",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://amr-3009.github.io/front-end_project/",
        type: "live",
      },
    ],
    featured: false,
    color: "cyan",
  },
  {
    id: 5,
    icon: <FaSchool />,
    name: "Activities Archive",
    subtitle: "Tarbyh Namouthajiyah Schools — Internal Platform",
    description:
      "A web-based platform built for Tarbyh Namouthajiyah Schools to document and display various school activities. Serves as an official archive for the school's events and programs.",
    tags: ["React", "JavaScript", "CSS", "Responsive Design"],
    image: activitiesArchive,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Amr-3009/qurtuba-complex",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://qurtuba-complex.vercel.app/",
        type: "live",
      },
    ],
    featured: false,
    color: "cyan",
  },
  {
    id: 6,
    icon: <FaMicrochip />,
    name: "Control Systems & Automation",
    subtitle: "Arduino & Python Engineering Projects",
    description:
      "Developed automated control systems using Arduino and Python for sensor-actuator feedback loops. Implemented PID control algorithms for precision motion control applications and created simulation models in MATLAB for dynamic system analysis and controller optimization.",
    tags: ["Arduino", "Python", "PID Control", "MATLAB", "Automation"],
    image: null,
    links: [],
    featured: false,
    color: "cyan",
  },
];

const tagColors = {
  gold: "bg-[rgba(240,180,41,0.06)] text-[#F0B429] border-[rgba(240,180,41,0.2)]",
  cyan: "bg-[rgba(0,212,255,0.05)] text-[#00D4FF] border-[rgba(0,212,255,0.15)]",
};

const ProjectCard = ({ project, index }) => {
  const isGold = project.color === "gold";

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative rounded-xl border flex flex-col group transition-all duration-300 overflow-hidden ${
        project.featured ? "md:col-span-2 xl:col-span-1" : ""
      }`}
      style={{
        background: "rgba(15, 23, 41, 0.7)",
        borderColor: isGold ? "rgba(240,180,41,0.15)" : "rgba(0,212,255,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: isGold
            ? "linear-gradient(to right, #F0B429, transparent)"
            : "linear-gradient(to right, #00D4FF, transparent)",
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: isGold
            ? "inset 0 0 40px rgba(240,180,41,0.04)"
            : "inset 0 0 40px rgba(0,212,255,0.04)",
        }}
      />

      {/* Card body */}
      <div className="p-7 flex flex-col flex-1 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          {project.image ? (
            <div
              className="relative w-full h-44 overflow-hidden rounded-t-xl mb-5"
              style={{
                margin: "-1.75rem -1.75rem 1.25rem -1.75rem",
                width: "calc(100% + 3.5rem)",
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 30%, rgba(15,23,41,0.97) 100%)",
                }}
              />
              <div
                className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{
                  background: isGold
                    ? "rgba(240,180,41,0.15)"
                    : "rgba(0,212,255,0.15)",
                  color: isGold ? "#F0B429" : "#00D4FF",
                  border: `1px solid ${isGold ? "rgba(240,180,41,0.3)" : "rgba(0,212,255,0.3)"}`,
                }}
              >
                {project.icon}
              </div>
              <div className="absolute bottom-3 right-3 flex flex-col items-end gap-1.5">
                {project.featured && (
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                    style={{ background: "#F0B429", color: "#080D18" }}
                  >
                    Featured
                  </span>
                )}
                {project.status && (
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[rgba(0,212,255,0.15)] text-[#00D4FF] border border-[rgba(0,212,255,0.3)]">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0"
                style={{
                  background: isGold
                    ? "rgba(240,180,41,0.08)"
                    : "rgba(0,212,255,0.08)",
                  color: isGold ? "#F0B429" : "#00D4FF",
                  border: `1px solid ${isGold ? "rgba(240,180,41,0.2)" : "rgba(0,212,255,0.15)"}`,
                }}
              >
                {project.icon}
              </div>
              <div className="flex flex-col items-end gap-2">
                {project.featured && (
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md"
                    style={{ background: "#F0B429", color: "#080D18" }}
                  >
                    Featured
                  </span>
                )}
                {project.status && (
                  <span className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-md bg-[rgba(0,212,255,0.08)] text-[#00D4FF] border border-[rgba(0,212,255,0.2)]">
                    {project.status}
                  </span>
                )}
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h4
          className="text-[18px] font-black text-white mb-1 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.name}
        </h4>
        <p className="text-[11px] text-[#4A5568] mb-4 tracking-wide">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-[13px] text-[#8892A4] leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-medium px-2.5 py-1 rounded border ${
                isGold ? tagColors.gold : tagColors.cyan
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links.length > 0 ? (
          <div className="flex gap-3 mt-auto">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-medium transition-all duration-200"
                style={
                  link.type === "github"
                    ? {
                        background: "rgba(255,255,255,0.05)",
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                    : {
                        background: isGold
                          ? "rgba(240,180,41,0.08)"
                          : "rgba(0,212,255,0.08)",
                        color: isGold ? "#F0B429" : "#00D4FF",
                        border: `1px solid ${
                          isGold
                            ? "rgba(240,180,41,0.2)"
                            : "rgba(0,212,255,0.2)"
                        }`,
                      }
                }
              >
                {link.type === "github" ? (
                  <FaGithub className="text-sm" />
                ) : (
                  <MdOpenInNew className="text-sm" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-auto">
            <span className="text-[11px] text-[#2D3748] italic">
              {project.status === "In Development"
                ? "Repository private — in active development"
                : "Project files available on request"}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["github", "live"]).isRequired,
      }),
    ).isRequired,
    featured: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    status: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#080D18] py-24 px-6 overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="pointer-events-none select-none absolute top-8 left-1/2 -translate-x-1/2 text-[120px] font-black tracking-[16px] text-[#00D4FF] opacity-[0.03] whitespace-nowrap"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        PROJECTS
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
            What I've Built
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            My <span className="text-[#F0B429]">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#00D4FF] mx-auto mt-4 opacity-60" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-[12px] text-[#2D3748] mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          More projects coming as the Digital Twin Engineering track progresses.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
