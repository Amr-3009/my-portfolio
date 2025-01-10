import { education, courses } from "../variables";
import { motion } from "framer-motion";
import { textVariants, containerVariants } from "../animations/motion";

const Education = () => {
  return (
    <section id="education" className="bg-steelBlue py-16">
      {/* Title Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-32"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-[10vw] md:text-[80px] font-bold text-darkSlateBlue opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap uppercase">
          Qualifications
        </h2>
        <div className="relative z-10 mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
            Education & Courses
          </h3>
          <div className="w-16 md:w-24 h-[2px] bg-darkSlateBlue mx-auto mt-2" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Formal Education Section */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-pureWhite mb-6">
              Formal Education
            </h4>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="bg-darkSlateBlue rounded-lg p-6 mb-4 shadow-lg"
              >
                <h5 className="text-xl font-bold text-pureWhite mb-2">
                  {edu.degree} in {edu.major}
                </h5>
                <p className="text-mutedBeige">{edu.university}</p>
                <p className="text-mutedBeige mt-2">
                  Graduated: {edu.graduationYear}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Courses Section */}
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-pureWhite mb-6">
              Professional Courses
            </h4>
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="bg-darkSlateBlue rounded-lg p-6 mb-4 shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-xl font-bold text-pureWhite mb-2">
                      {course.course}
                    </h5>
                    <p className="text-mutedBeige">{course.institution}</p>
                    <p className="text-mutedBeige mt-2">{course.year}</p>
                  </div>
                  <a
                    href={course.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pureWhite text-darkSlateBlue rounded-md hover:bg-mutedBeige transition-colors duration-300 text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
