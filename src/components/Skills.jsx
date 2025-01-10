import { skills } from "../variables";
import {
  textVariants,
  cardVariants,
  containerVariants,
} from "../animations/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="bg-steelBlue">
      <motion.div
        className="relative flex flex-col items-center justify-center h-32 md:h-40"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Large Background Text */}
        <h2 className="text-[10vw] md:text-[80px] font-bold text-mutedBeige opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap uppercase">
          What I Can Do
        </h2>
        {/* Foreground Text */}
        <div className="relative z-10 mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
            My Skills
          </h3>
          <div className="w-16 md:w-24 h-[2px] bg-darkSlateBlue mx-auto mt-2" />
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((category) => (
          <motion.div
            variants={cardVariants}
            className="flex-col flex gap-4 items-center bg-darkSlateBlue rounded-lg p-6 backdrop-blur-sm relative"
            key={category.category}
          >
            <h3 className="text-4xl font-bold text-pureWhite mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 gap-3 w-full">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 p-2 rounded-md transition-colors"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-lightGray">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
