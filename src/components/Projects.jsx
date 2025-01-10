import { projects } from "../variables";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "../animations/motion";

const Projects = () => {
  return (
    <section id="projects" className="bg-darkSlateBlue py-16">
      {/* Title Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-32"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-[10vw] md:text-[80px] font-bold text-mutedBeige opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap uppercase">
          Latest Works
        </h2>
        <div className="relative z-10 mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
            My Projects
          </h3>
          <div className="w-16 md:w-24 h-[2px] bg-steelBlue mx-auto mt-2" />
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              className="bg-steelBlue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-darkSlateBlue/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-pureWhite text-darkSlateBlue rounded-md hover:bg-mutedBeige transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-pureWhite text-darkSlateBlue rounded-md hover:bg-mutedBeige transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-pureWhite mb-2">
                  {project.name}
                </h4>
                <p className="text-mutedBeige mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-darkSlateBlue ${tag.color} text-sm rounded-full`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
