import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePageComponent() {
  const [hoveredButton, setHoveredButton] = useState(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={"videos/video_ivolks_intro.mp4"} />
        </video>
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4"
      >

        {/* Logo */}
        <motion.div 
          variants={logoVariants}
          className="mb-8 md:mb-10 lg:mb-16"
        >
          <Image 
            src={"/logo/logo_v_red.png"} 
            className="w-[200px] md:w-[280px] lg:w-[320px] h-auto select-none drop-shadow-2xl" 
            width={400} 
            height={400} 
            priority 
            alt="Logo" 
          />
        </motion.div>

        {/* Nav Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12"
        >
          {[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" }
          ].map((item, index) => {
            const getInitialPosition = () => {
              if (index === 0) return { x: "-100%", y: "0%" };
              if (index === 1) return null;
              return { x: "100%", y: "0%" };
            };

            const getAnimatePosition = () => {
              if (index === 0) return { x: hoveredButton === index ? "0%" : "-100%", y: "0%" };
              if (index === 1) return null;
              return { x: hoveredButton === index ? "0%" : "100%", y: "0%" };
            };

            return (
              <Link href={item.href} key={item.label}>
                <motion.button
                  onHoverStart={() => setHoveredButton(index)}
                  onHoverEnd={() => setHoveredButton(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden font-semibold uppercase py-3 px-14 text-white border-2 border-white/80 backdrop-blur-sm text-sm tracking-wider transition-all duration-300 w-full md:w-auto"
                >
                  {index === 1 ? (
                    <>
                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: hoveredButton === index ? "0%" : "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 top-0 bottom-1/2 bg-white"
                      />
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: hoveredButton === index ? "0%" : "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 top-1/2 bottom-0 bg-white"
                      />
                    </>
                  ) : (
                    <motion.div
                      initial={getInitialPosition()}
                      animate={getAnimatePosition()}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 bg-white"
                    />
                  )}
                  
                  <span className={`relative z-10 transition-colors duration-300 ${
                    hoveredButton === index ? "text-black" : "text-white"
                  }`}>
                    {item.label}
                  </span>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredButton === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
                  />
                </motion.button>
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}