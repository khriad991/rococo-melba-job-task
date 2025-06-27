import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut'
      }
    }
  };

  return (
      <motion.div
          ref={ref}
          className="relative sectopm-padding w-full h-[calc(100vh-60px)] bg-[#0a1022] z-10 overflow-hidden shadow-2xl"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
      >


        <div className="absolute inset-0 pointer-events-none z-0 max-w-[1000px] mx-auto">
          {[...Array(150)].map((_, i) => {
            const size = 4;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const isTriple = i % 15 === 0;
            const isConnected = i % 10 === 0;
            const opacity = i % 4 === 0 ? "opacity-50" : "opacity-75";

            return (
                <motion.div
                    key={i}
                    className={`absolute rounded-full bg-[#60a5fa] ${opacity}`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${y}%`,
                      left: `${x}%`,
                    }}
                    animate={{
                      y: [0, (i % 2 === 0 ? -10 : 10), 0],
                      x: isTriple ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05,
                    }}
                >
                  {isConnected && (
                      <div className="absolute left-full top-1/2 w-[20px] h-[1px] bg-[#60a5fa] opacity-50"/>
                  )}
                  {isTriple && (
                      <>
                        <div className="absolute left-full top-0 w-[25px] h-[1px] bg-[#60a5fa] opacity-50"/>
                        <div className="absolute left-full bottom-0 w-[25px] h-[1px] bg-[#60a5fa] opacity-75"/>
                      </>
                  )}
                </motion.div>
            );
          })}
        </div>

        {/* Floating Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-3">
          {[{top: '-10px', left: '-40px', size: 300}, {
            bottom: '-50px',
            right: '-50px',
            size: 200,
            delay: 2,
            duration: .5
          }, {top: '20%', right: '15%', size: 150, delay: 1, duration: .5}].map((el, i) => (
              <motion.div
                  key={i}
                  className="absolute rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50"
                  style={{width: el.size, height: el.size, ...el}}
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  transition={el.duration ? {duration: el.duration, delay: el.delay} : undefined}
              />
          ))}
        </div>



        {/* Content */}
        <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-11 w-[90%] max-w-[1000px] mx-auto">
          <motion.div className="mb-[30px]" variants={itemVariants}>
            <motion.div className="w-[120px] h-[120px] mx-auto mb-[15px] relative" variants={pulseVariants}
                        initial="initial" animate="animate">
              <svg className="absolute w-full h-full filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                   viewBox="0 0 100 100">
                <path
                    d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
                    fill="none" stroke="#60a5fa" strokeWidth="2"/>
              </svg>
              <svg className="absolute w-full h-full animate-[glow_3s_infinite]" viewBox="0 0 100 100">
                <path d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75" stroke="#93c5fd" strokeWidth="1.5" fill="none"/>
                {[{cx: 35, cy: 40}, {cx: 65, cy: 40}, {cx: 50, cy: 60}, {cx: 35, cy: 80}, {
                  cx: 65,
                  cy: 80
                }].map((circle, i) => (
                    <circle key={i} {...circle} r="2" fill="#93c5fd"/>
                ))}
              </svg>
            </motion.div>
          </motion.div>

          <motion.h1
              className="text-[2rem] md:text-[2.986rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] m-0 tracking-tight"
              variants={itemVariants} transition={{delay: 0.2}}>
            Clin Technologies
          </motion.h1>

          <motion.p
              className="!text-[1.728rem] !md:text-[1.728rem] !leading-normal !text-gray-white mt-[10px] mb-0 tracking-normal opacity-0 translate-y-[20px]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0},
                exit: {opacity: 0, y: 20},
              }}
              transition={{delay: 0.4, duration: 0.6}}
          >
            Revolutionizing clinical documentation through{' '}
            <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span> advanced artificial intelligence,
            giving
            healthcare providers more time for what truly matters — patient care. Try it for{' '}
            <span className="text-[#f59e0b] font-semibold">FREE</span> today.
          </motion.p>

          <motion.p
              className="mt-11 !text-[1.44rem] !leading-normal !text-[#e2e8f0] max-w-[700px] mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {opacity: 0, y: 20},
                visible: {opacity: 1, y: 0},
                exit: {opacity: 0, y: 20},
              }}
              transition={{delay: 0.6, duration: 0.6}}
          >
            Our sophisticated AI platform intelligently processes clinical conversations, creating accurate
            documentation that
            integrates with your existing EMR system.
          </motion.p>


          <motion.div className="mt-[40px] flex justify-center gap-5 md:flex-row flex-col" variants={itemVariants}
                      transition={{delay: 0.8}}>
            <a href="/login"
               className="bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)]">
              Login
            </a>
            <a href="/signUp"
               className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)]">
              Signup
            </a>
          </motion.div>
          <motion.div
              className="absolute -bottom-[8px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{opacity: 0}}
              animate={{opacity: inView ? 1 : 0}}
              transition={{delay: 1.5, duration: 0.5}}
          >
            <div
                className="w-[24px] h-[40px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative overflow-hidden">
              <motion.div
                  className="absolute top-center left-center transform -translate-y-center w-[5px] h-[5px] bg-[#60a5fa] rounded-full"
                  initial={{y: 6}}
                  animate={{y: [6, 25, 6]}}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  style={{left: "50%", transform: "translateX(-50%)"}}
              />
            </div>
          </motion.div>
        </motion.div>


      </motion.div>
  );
};

export default HeroSection;