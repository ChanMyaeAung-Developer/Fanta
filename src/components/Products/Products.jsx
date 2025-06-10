import { div } from "framer-motion/client";
import P1 from "../../assets/fanta1.png"
import P2 from "../../assets/fanta2.png"
import P3 from "../../assets/fanta3.png"
import { motion } from "framer-motion";
import { ImInsertTemplate } from "react-icons/im";
export const fadeUp=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                duration:0.5,
                delay:delay,
            }
        }
    }
};

const ProductsData=[
    {
        id:1,
        title:"Orange Fanta",
        image:P1,
        desc:" Orange Fanta is often enjoyed chilled and is available in cans, bottles, and fountain drinks.",
        delay:0.5,
         bgColor:"#cf4f00"
    },
    {
        id:2,
        title:"Grape Fanta",
        image:P2,
        desc:"Grape Fanta is a fruity, carbonated soft drink known for its bold purple color and sweet grape flavor.",
        delay:0.7,
          bgColor:"#8011bc"
       
    },
    {
        id:3,
        title:"Coca Cola",
        image:P3,
        desc:"Known for its signature taste, it combines sweet, spicy, and citrusy flavors.",
        delay:0.9,
          bgColor:"#ac1a00"
        
    },
];

const Product=()=>{
    return <div className="bg-gray-100">
        <div className="container py-14">
            <motion.h1 
            variants={fadeUp(0.2)}
                    
                           initial="hidden"
                           whileInView={"show"}
            className=" text-center text-3xl pb-10 font-bold font-handwriting text-shadow-lg">
                Products  
            </motion.h1>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
                    {
                    ProductsData.map(data=>{
                        return(
                           <motion.div 
                           variants={fadeUp(data.delay)}
                           key={data.id}
                           initial="hidden"
                           whileInView={"show"}

                           className=" flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white">
                            <img id={data.id} src={data.image} alt={data.title} className="w-[100px] hover:rotate-12 mb-4 hover:scale-110 duration-300"/>
                            <div className=" text-center space-y-2">
                                <h1 className=" text-2xl font-bold font-handwriting">{data.title}</h1>
                                <p className=" text-sm text-gray-600">{data.desc}</p>
                                <button className="!mt-5 border-2 border-primary text-primary px-2 py-2
                                rounded-md hover:bg-primary hover:text-white duration-200">Buy Now</button>
                            </div>
                           </motion.div>
                        )
                    })
                  }
                  </div>
          

        </div>
    </div>
}
export default Product;