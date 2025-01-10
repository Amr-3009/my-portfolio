import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-steelBlue">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Left Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-pureWhite">Amr Osama</h3>
            <p className="text-pureWhite/80">Full Stack Developer</p>
          </div>

          {/* Middle Section */}
          <nav className="flex gap-8 mb-6 md:mb-0">
            <a
              href="#home"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub className="text-2xl" />
              <span className="hidden md:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pureWhite hover:text-charcoalGray transition-colors duration-300 flex items-center gap-2"
            >
              <FaLinkedin className="text-2xl" />
              <span className="hidden md:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-pureWhite/10 pt-6">
          <p className="text-charcoalGray text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <a
            href="https://www.youtube.com/watch?v=t6W37c4U8sQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pureWhite/80 text-sm hover:text-charcoalGray transition-colors duration-300"
          >
            Music provided by KHAIM
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
