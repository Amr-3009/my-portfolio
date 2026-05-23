import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { gitHubLink, linkedInLink } from "../variables";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer
      className="relative py-12 px-6 overflow-hidden"
      style={{ background: "#040810" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Left — identity */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Amr <span className="text-[#00D4FF]">Osama</span>
            </h3>
            <p className="text-[11px] tracking-[3px] uppercase text-[#4A5568] mt-1">
              Digital Twin Engineer in Training
            </p>
          </div>

          {/* Middle — nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#4A5568] hover:text-[#00D4FF] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right — socials */}
          <div className="flex items-center gap-4">
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:text-white"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                color: "#4A5568",
              }}
            >
              <FaGithub className="text-base" />
            </a>
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:text-[#00D4FF]"
              style={{
                borderColor: "rgba(0,212,255,0.1)",
                color: "#4A5568",
              }}
            >
              <FaLinkedin className="text-base" />
            </a>
            <a
              href="https://wa.me/+201013107960"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 hover:border-[rgba(0,212,255,0.4)] hover:text-[#00D4FF]"
              style={{
                borderColor: "rgba(0,212,255,0.1)",
                color: "#4A5568",
              }}
            >
              <FaWhatsapp className="text-base" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-[12px] text-[#2D3748]">
            © {new Date().getFullYear()} Amr Osama Mostafa. All rights reserved.
          </p>
          <a
            href="https://www.youtube.com/watch?v=t6W37c4U8sQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#2D3748] hover:text-[#4A5568] transition-colors duration-300"
          >
            Music by KHAIM
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
