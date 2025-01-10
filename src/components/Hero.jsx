import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import styles from "../styles";
import image from "../assets/1735925475993.jpg";
import { useEffect, useState, useRef } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MdDownload } from "react-icons/md";
import { cvLink } from "../variables";

const colors = ["#FF6F61", "#FF4CA1", "#FFD580", "#A3D8FF", "#6F4CA1"];

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(new Audio("../../public/bgm.mp3"));
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #333333 50%, ${color})
  `;
  const backgroundColor = useMotionTemplate`${color}`;
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  useEffect(() => {
    audioRef.current = new Audio("/bgm.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.009;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current
        ?.play()
        .catch((e) => console.log("Audio play failed:", e));
    } else {
      audioRef.current?.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <motion.section
      className="relative w-full h-screen mx-auto z-10"
      style={{
        backgroundImage,
      }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-10 z-10`}
      >
        <motion.div
          className="flex flex-row gap-5 z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Decorative Element */}
          <div className="flex flex-col justify-start items-center">
            <motion.div
              className="w-5 h-5 rounded-full"
              style={{
                backgroundColor,
              }}
            />
            <motion.div
              className="w-1 h-60"
              style={{
                background: useMotionTemplate`linear-gradient(to bottom, ${color} 0%, transparent 100%)`,
              }}
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Hi, I&apos;m{" "}
              <motion.span
                style={{
                  color: useMotionTemplate`${color}`,
                }}
              >
                Amr
              </motion.span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mt-4">
              A Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-gray-400 mt-2">
              Code. Solve. Grow—Fueled by passion and grit.
            </p>
            <p className="text-base sm:text-lg text-gray-400 mt-2 max-w-md">
              Motivated Full Stack Developer crafting responsive solutions with
              React and Laravel. Building scalable applications that transform
              user experiences, one line of code at a time.
            </p>
            <motion.a
              href={cvLink}
              target="_blank"
              className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-charcoalGray justify-center"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              style={{
                border,
                boxShadow,
              }}
            >
              <MdDownload style={{ color }} />
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Image and SVG Container */}
        <motion.div
          className="sm:ml-auto z-10 relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="">
            <img
              src={image}
              alt="Amr's profile"
              className="w-60 h-60 sm:w-96 sm:h-96 object-cover rounded-full relative z-10"
            />
            <motion.svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                style={{ stroke: color }}
                strokeWidth="4"
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <button
        onClick={toggleMute}
        className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-all"
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>
      <motion.div
        className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 1, // This will make it appear after the main content
          ease: "easeOut",
        }}
      >
        <a href="#about">
          <motion.div
            className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2"
            style={{ borderColor: color }}
          >
            <motion.div
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: color }}
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: 2.2,
              }}
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
