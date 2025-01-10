import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../variables";
import Logo from "../assets/android-chrome-192x192.png";
import styles from "../styles";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { menuVariants } from "../animations/motion";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const toTop = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-darkSlateBlue`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={toTop}>
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[32px] font-bold cursor-pointer flex">
            Amr&nbsp;<span className="sm:block hidden">Osama</span>
          </p>
        </Link>

        <ul className="list-none flex-row hidden gap-10 sm:flex items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.name ? "text-coral" : "text-softCream"
              }
                hover:text-coral cursor-pointer transition duration-500 ease-in-out font-medium text-[18px]`}
              onClick={() => setActive(link.name)}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden">
          <MdOutlineMenuOpen
            className="text-softCream text-4xl cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>

        <AnimatePresence>
          {/* Mobile Menu Overlay */}
          {open && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 w-screen h-screen bg-darkSlateBlue z-50"
            >
              <div className="p-5 flex flex-col items-center w-full h-full">
                <div className="w-full flex justify-end">
                  <MdClose
                    className="text-softCream text-4xl cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <ul className="flex flex-col items-center justify-center gap-8 h-full">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.name ? "text-coral" : "text-softCream"
                      }
                    hover:text-coral cursor-pointer transition duration-500 ease-in-out font-medium text-[24px]`}
                      onClick={() => {
                        setActive(link.name);
                        setOpen(false);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
