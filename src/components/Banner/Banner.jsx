import BannerImage from '../../assets/juice.png';
import Splash from '../../assets/splash.png'
import { motion } from 'framer-motion';
import { fadeUp } from '../Products/Products';
const Banner=()=>{
    return <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-6 gap-12'>
            {/* Banner image Section */}
            <div className='relative '>
                <motion.img 
                 initial={{opacity:0,x:-100}}
                 
                 transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
                 whileInView={{opacity:1,x:0}}
                src={BannerImage} alt=''
                className='w-[200px] md:w-[300px] mx-auto relative z-10'
                />
                <motion.img 
                initial={{opacity:0,y:-100,rotate:-180,scale:0}}
                
                 transition={{duration:0.8,delay:0.2,ease:"easeInOut"}}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                src={Splash} alt='' 
                 className='absolute z-0 -bottom-0  w-[300px]' 
                />
            </div>
            {/* Banner text info Section */}
            <div className='flex flex-col justify-center '>
                <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                    <motion.h1 
                    variants={fadeUp(0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    className='text-3xl lg:text-4xl font-semibold'>Refresh Your World with Fanta</motion.h1>
                     <motion.p 
                      variants={fadeUp(0.7)}
                     initial="hidden"
                    whileInView={"show"}
                     className='text-gray-500'>
                    Orange Fanta is a popular carbonated soft drink with a sweet, fruity orange flavor. Originally created in Germany during World War II, it is now produced by The Coca-Cola Company and sold worldwide. Known for its bright orange color and refreshing taste.
                     </motion.p>
                     
                      <motion.button 
                
                     initial={{opacity:0,y:-100,}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:0.5}}
                      className="!mt-5 border-2 border-primary text-primary px-2 py-2
                                rounded-md hover:bg-primary hover:text-white duration-200">Shop Now</motion.button>
                      </div>
                  
               
               
            </div>
        </div>
    </section>
}
export default Banner;