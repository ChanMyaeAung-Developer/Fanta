import { FaFacebookF,FaGoogle ,FaInstagram,FaPhone,FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import Card from "../../assets/Card.png"
const footer=({ activeData})=>
{
    return <>
      <motion.div
            initial={{ backgroundColor: activeData.bgColor }}
            animate={{ backgroundColor: activeData.bgColor }}
            transition={{ duration: 0.8 }}
         >
    <div className="container  text-white py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company link section */}
            
            <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1 ,y:0}}
           transition={{
            delay:0.2,
            duration:0.6
           }}
            className="space-y-6">
                    <img src={Logo} alt="" className="max-w-[100px] "/>
                    <div>
                        <p className="flex items-center gap-2">
                            <FaPhone/>
                            +1 (123) 456-7890
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <FaMapLocation/>
                            Nodia, Uttar Pradesh
                        </p>
                        
                    </div>
            </motion.div>
            {/* Footer link section */}
              <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1 ,y:0}}
              transition={{
            delay:0.2,
            duration:0.6
           }}
            className="space-y-6">
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        
          </div>
              </motion.div>
            {/* Social link section */}
              <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1 ,y:0}}
              transition={{
            delay:0.2,
            duration:0.6
           }}
            className="space-y-6 ">
                <h1 className="text-3xl font-bold pl-4">Follow us</h1>
                <div className="flex items-center gap-3 pl-1">
                    <FaFacebookF className="text-4xl p-2 rounded-full bg-transparent hover:bg-blue-600 hover:text-white duration-300 cursor-pointer" />

                    <FaGoogle className="text-4xl p-2 rounded-full bg-transparent hover:bg-red-600 hover:text-white duration-300 cursor-pointer" />

                    <FaInstagram className="text-4xl p-2 rounded-full bg-transparent hover:bg-pink-600 hover:text-white duration-300 cursor-pointer" />

                  <FaTelegram className="text-4xl p-2 rounded-full bg-transparent hover:bg-sky-500 hover:text-white duration-300 cursor-pointer" />

                   
                </div>
                <div className="space-y-2">
                    <p className="pl-3">Payment Methods</p>
                    <img src={Card} alt="" className="max-w-[200px]"/>
                </div>
            </motion.div>
        </div>
        {/* Copy Right section */}
        <p className="text-center mt-8 border-t-2 pt-8 border-white/30">Copyright &copy; 2022.All Rights Reserved</p>
    </div>
    </motion.div>
    </>
}
export default footer