import { motion } from "framer-motion";
import { textVariants, containerVariants } from "../animations/motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-darkSlateBlue py-16">
      <motion.div
        className="relative flex flex-col items-center justify-center h-32"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-[10vw] md:text-[80px] font-bold text-mutedBeige opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap uppercase">
          Get in Touch
        </h2>
        <div className="relative z-10 mt-4">
          <h3 className="text-xl md:text-2xl font-bold text-pureWhite">
            Contact Me
          </h3>
          <div className="w-16 md:w-24 h-[2px] bg-steelBlue mx-auto mt-2" />
        </div>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto px-4 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-steelBlue rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-pureWhite mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-pureWhite mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-pureWhite mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="7"
                className="w-full px-4 py-2 rounded-md bg-[#393F44] text-[#FFFFFF] border border-[#85888C] focus:border-[#85888C] focus:border-2 outline-none transition-colors duration-300"
                placeholder="Your message..."
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-pureWhite text-darkSlateBlue font-semibold rounded-md hover:bg-mutedBeige transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
