import { useState } from "react";
import Navbar from "./Navbar";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { motion,AnimatePresence,easeInOut} from "framer-motion"
import { UpdateFollower } from "react-mouse-follower";
import { FaWhatsapp } from "react-icons/fa";

const SlideRight=(delay)=>{
    return{
        hidden:{
            x:100,
            opacity:0,
        },
        show:{
             opacity:1,
            x:0,
            transition:{
                duration:0.5,
                delay:delay,
                
                
            }

        },
        exit:{
             opacity:0,
            x:-50,
            transition:{
                duration:0.2,
                ease:easeInOut,
        }
    }
}
}
 const HeroData=[
        {
            id:1,
            image:Fanta1,
            title:"Fanta Orange",
             subtitle:"Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
            price:'$25',
            normalPrice:'$28',
            model:"Orange",
            bgColor:"#cf4f00"
        },
        {
            id:2,
            image:Fanta2,
            title:"Fanta berry",
             subtitle:"Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
            price:'$30',
            normalPrice:'$32',
            model:"grape",
            bgColor:"#8011bc"
        },
        {
            id:3,
            image:Fanta3,
            title:"Coca Cola",
             subtitle:"Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
            price:'$20',
                 normalPrice:'$25',
            model:"Cola",
            bgColor:"#ac1a00"
        }
    ]
const Hero=()=>{
    const [activeData,setActiveData]=useState(HeroData[0]);

    const handleActiveData=(data)=>{
        setActiveData(data);
    }
  return  <div className="">
  <motion.div
  initial={{backgroundColor:activeData.bgColor}}
  animate={{backgroundColor:activeData.bgColor}}
  transition={{duration:0.8}}>

     {/* Navbar component */}
     <Navbar/>

     {/* Hero component section*/}
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[544px]">
         {/*Data Info */}
         <div className="flex flex-col justify-center  md:py-0 xl:max-w[500px] order-2 md:order-1 text-white z-40">
            <div className="space-y-3 text-center md:text-left">

        <AnimatePresence mode="wait">
            <UpdateFollower 
            mouseOptions={
                {backgroundColor:"white",
                    zIndex:10,
                    followSpeed:0.5,
                    scale:10,
                    mixBlendMode:"difference"
                }}>
                <motion.h1 className="text-xl lg:text-4xl xl:text-5xl font-bold font-handwriting text-shadow"
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit">
                    {activeData.title}
                </motion.h1>
            </UpdateFollower>
         </AnimatePresence>

                <AnimatePresence mode="wait">
            <motion.p className="text-sm leading-loose text-white/80"
            key={activeData.id}
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="show"
            exit="exit">
                {activeData.subtitle}
                </motion.p>
                </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <UpdateFollower 
            mouseOptions={
                {backgroundColor:activeData.bgColor,
                    zIndex:9999,
                    followSpeed:0.5,
                    scale:6,
                    rotate:-720,
                    backgroundElement:(<div>
                        <img src={activeData.image}/>
                    </div>)
                }}>
            <motion.button className=" px-4 py-2 bg-white inline-block font-normal rounded-sm"
            key={activeData.id}
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{color:activeData.bgColor}}>
                Order Now
                </motion.button>
                </UpdateFollower>
                </AnimatePresence>
              {/*List Seprator */}
              <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.5,delay:0.2,ease:"easeInOut"}}
              className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10">
                <div className="w-20 h-[1px] bg-white"></div>
                <p>Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
                </motion.div>
                {/*image switcher */}
                <div className="grid grid-cols-3 gap-10">
                    {
                        HeroData.map(data=>{
                            return(
                                <UpdateFollower
                                 mouseOptions={
                {backgroundColor:data.bgColor,
                    zIndex:9999,
                    followSpeed:0.5,
                    scale:5,
                    text:"View Details",
                    textFontSize:"3px",
                    
                }}>
                                <div onClick={()=>handleActiveData(data)} 
                                className="cursor-pointer space-y-2 hover:scale-105 transition-all duration-100">
                                    <div className="flex justify-center">
                                        <img src={data.image} alt="" className={`w-[100px] image-shadow ${activeData.image===data.image ? "opacity-100 scale-110"
                                                            :"opacity-50"
                                        }`}/>
                                    </div>
                                    <div className="text-center !mt-1 space-y-1">
                                    <p className="text-base line-through opacity-50">{data.normalPrice}</p>
                                    <p className="font-bold text-xl">{data.price}</p>
                                </div>
                                </div>
                                </UpdateFollower>
                            )
                        })
                    }
                </div>
              
            </div>
         </div>
          {/* Hero image */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2">
            <AnimatePresence mode="wait">
            <motion.img 
            key={activeData.id}
            initial={{opacity:0,x:100}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.6,delay:0,ease:easeInOut}}
              exit={{
                opacity:0,
                x:-100,
                transition:{duration:0.4}
              }}
            src={activeData.image} alt=""  className="w-[150px] md:w-[300px] xl:w-[450px] image-shadow relative z-10"/>
             </AnimatePresence>

               <AnimatePresence mode="wait"
               key={activeData.id}
            initial={{opacity:0}}
             transition={{duration:0.5,delay:0.0,ease:easeInOut}}
              animate={{opacity:1}}
                  exit={{
                opacity:0,
                transition:{duration:0.4}
              }}>
            <motion.div className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">{activeData.model}
            </motion.div>
            </AnimatePresence>
           
          </div>
          {/* What Up Icon */}
          {/* <div className="text-3xl text-white fixed hover:rotate-[360deg] duration-500 mix-blend-difference z-[999999 bottom-10 right-10">
        <FaWhatsapp />
          </div> */}
      </div>
      
     </motion.div>
  </div>
}
export default Hero;