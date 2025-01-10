import { MdDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { gitHubLink, linkedInLink, cvLink, myBirthDate } from "../variables";
import styles from "../styles";
import { motion } from "framer-motion";
import { textVariants, slideInLeft, slideInRight } from "../animations/motion";

const About = () => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };
  const birthDate = { myBirthDate };
  const age = calculateAge(birthDate);

  return (
    <section className="bg-darkSlateBlue text-center py-12 relative" id="about">
      {/* Container for "Know Me More" Section */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-32 md:h-40"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Large Background Text */}
        <h2 className="text-[10vw] md:text-[80px] font-bold text-mutedBeige opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap">
          ABOUT ME
        </h2>
        {/* Foreground Text */}
        <div className="relative z-10 mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
            Know Me More
          </h3>
          <div className="w-16 md:w-24 h-[2px] bg-lightTeal mx-auto mt-2" />
        </div>
      </motion.div>

      <div className="mx-auto px-4 md:px-6 flex max-w-7xl flex-col sm:flex-row justify-center items-center gap-8 z-10">
        {/* About Text Section */}
        <motion.div
          className="flex mt-10 mb-12 order-2 xl:order-none flex-col justify-start items-start"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            className={`${styles.sectionHeadText} font-bold text-pureWhite mb-6`}
          >
            I am <span className="text-lightGray">Amr Osama</span>,&nbsp;a Web
            Developer
          </h2>
          <p className="text-left text-lightGray text-sm leading-relaxed md:text-base md:leading-relaxed lg:text-lg lg:leading-relaxed">
            A passionate web developer committed to building user-friendly and
            impactful web applications.
            <br /> With a strong focus on creating seamless user experiences, I
            thrive on turning complex ideas into functional and intuitive
            digital solutions.
            <br /> Over the past year, I&apos;ve been honing my skills in web
            development, including technologies like HTML, CSS, JavaScript, and
            frameworks such as React. I enjoy experimenting with new
            technologies
            <br /> and staying up-to-date with the latest industry trends to
            continuously improve my craft and deliver cutting-edge solutions.
            <br />
            When I&apos;m not coding, you&apos;ll often find me exploring
            innovative tools and techniques to push the boundaries of
            what&apos;s possible in web development. I&apos;m always eager to
            learn, grow, and collaborate on exciting projects that make a
            difference.
          </p>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="flex gap-8 mb-12 flex-col order-1 xl:order-none items-start justify-start"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Contact Information */}
          <div className="space-y-6 flex-col flex items-start justify-start">
            {/* Email */}
            <div className="flex flex-col">
              <p className="text-lightGray mb-2">
                Email:&nbsp;
                <a
                  href="mailto:amrosama1k@gmail.com"
                  className="text-coral underline hover:text-pureWhite transition-colors duration-300"
                >
                  amrosama1k@gmail.com
                </a>
              </p>
              <div className="w-full h-[2px] bg-lightTeal " />
            </div>

            {/* Age */}
            <div className="flex flex-col w-full items-start">
              <p className="text-lightGray mb-2">
                Age:&nbsp;<span className="text-pureWhite">{age}</span>
              </p>
              <div className="w-full h-[2px] bg-lightTeal" />
            </div>

            {/* Location */}
            <div className="flex flex-col w-full items-start">
              <p className="text-lightGray mb-2">
                Location:&nbsp;
                <span className="text-pureWhite">Cairo, Egypt</span>
              </p>
              <div className="w-full h-[2px] bg-lightTeal" />
            </div>

            {/* Social Links and CV Download */}
            <div className="flex flex-col w-full justify-center space-y-6">
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href={gitHubLink} target="_blank">
                  <FaGithub className="text-lightTeal hover:text-coral transition-colors duration-300 text-2xl md:text-3xl cursor-pointer" />
                </a>
                <a href={linkedInLink} target="_blank">
                  <FaLinkedin className="text-lightTeal hover:text-coral transition-colors duration-300 text-2xl md:text-3xl cursor-pointer" />
                </a>
              </div>
              <div className="w-full h-[2px] bg-lightTeal" />
              {/* Download CV Button */}
              <a
                href={cvLink}
                target="_blank"
                className="flex items-center justify-center space-x-2 bg-lightTeal hover:bg-pureWhite text-darkSlateBlue px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <MdDownload className="text-xl" />
                <span className="font-medium">Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
