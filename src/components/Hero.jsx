
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Navbar from "./Navbar";
import { UpdateFollower } from "react-mouse-follower";

const SlideRight = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
  exit: {
    x: -50, opacity: 0,
    transition: { duration: 0.2, ease: easeInOut }
  }
});

const Hero = ({ heroData, activeData, setActiveData }) => {
  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <div>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
      >
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[544px]">
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center md:py-0 order-2 md:order-1 text-white z-40">
            <div className="space-y-3 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 0.5,
                    scale: 10,
                    mixBlendMode: "difference",
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    className="text-xl lg:text-4xl xl:text-5xl font-bold font-handwriting text-shadow"
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  className="text-sm leading-loose text-white/80"
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    scale: 6,
                    rotate: -720,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    className="px-4 py-2 bg-white font-normal rounded-sm"
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 mt-10"
              >
                <div className="w-20 h-[1px] bg-white" />
                <p>Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white" />
              </motion.div>

              <div className="grid grid-cols-3 gap-10">
                {heroData.map((data) => (
                  <UpdateFollower
                    key={data.id}
                    mouseOptions={{
                      backgroundColor: data.bgColor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 5,
                      text: "View Details",
                      textFontSize: "3px",
                    }}
                  >
                    <div
                      onClick={() => handleActiveData(data)}
                      className="cursor-pointer space-y-2 hover:scale-105 transition-all duration-100"
                    >
                      <div className="flex justify-center">
                        <img
                          src={data.image}
                          alt=""
                          className={`w-[100px] image-shadow ${
                            activeData.id === data.id ? "opacity-100 scale-110" : "opacity-50"
                          }`}
                        />
                      </div>
                      <div className="text-center mt-1 space-y-1">
                        <p className="text-base line-through opacity-50">{data.normalPrice}</p>
                        <p className="font-bold text-xl">{data.price}</p>
                      </div>
                    </div>
                  </UpdateFollower>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: easeInOut }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[300px] xl:w-[450px] image-shadow relative z-10"
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: easeInOut }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {activeData.model}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
