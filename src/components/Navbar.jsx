import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/android-chrome-192x192.png";
import { MdOutlineMenuOpen, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

const menuVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll opacity effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver — highlights nav link when section is in view
  useEffect(() => {
    const observers = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toTop = () => {
    setActive("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (id) => active === id;

  return (
    <nav
      className="w-full flex items-center py-4 px-6 fixed top-0 z-20 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8, 13, 24, 0.85)"
          : "rgba(8, 13, 24, 0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 255, 0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={toTop}>
          <img src={Logo} alt="Logo" className="w-9 h-9 object-contain" />
          <span
            className="text-white text-2xl font-black tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Amr{" "}
            <span className="text-[#00D4FF] hidden sm:inline">Osama</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="list-none hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className="relative text-[14px] font-medium transition-colors duration-300 group"
                style={{
                  color: isActive(link.id) ? "#00D4FF" : "rgba(255,255,255,0.5)",
                }}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] bg-[#00D4FF] transition-all duration-300 rounded-full"
                  style={{ width: isActive(link.id) ? "100%" : "0%" }}
                />
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#00D4FF] w-0 group-hover:w-full transition-all duration-300 rounded-full opacity-30" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="sm:hidden">
          <MdOutlineMenuOpen
            className="text-[#00D4FF] text-4xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 w-screen h-screen z-50 flex flex-col"
              style={{
                background: "rgba(8, 13, 24, 0.97)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top bar */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-[rgba(0,212,255,0.1)]">
                <span
                  className="text-white text-xl font-black"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Amr <span className="text-[#00D4FF]">Osama</span>
                </span>
                <MdClose
                  className="text-[rgba(255,255,255,0.6)] text-4xl cursor-pointer hover:text-[#00D4FF] transition-colors"
                  onClick={() => setOpen(false)}
                />
              </div>

              {/* Mobile nav links */}
              <ul className="flex flex-col items-center justify-center gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setActive(link.id);
                        setOpen(false);
                      }}
                      className="text-[28px] font-black transition-colors duration-300"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: isActive(link.id)
                          ? "#00D4FF"
                          : "rgba(255,255,255,0.4)",
                      }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="px-6 py-6 border-t border-[rgba(0,212,255,0.1)]">
                <p className="text-[11px] tracking-[3px] uppercase text-[rgba(255,255,255,0.2)] text-center">
                  Digital Twin Engineer in Training
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;