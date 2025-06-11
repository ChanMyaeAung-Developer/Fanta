import Logo from "../assets/logo.png";
import { FiMenu  } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import {motion} from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";


const Navbar=()=>{

  const navbarMenu=[
    {
      id:1,
      title:"Home",
      Link:"#"

    },
    {
      id:2,
      title:"Categories",
      Link:"#"

    },
    {
      id:3,
      title:"Blog",
      Link:"#"

    },
    {
      id:4,
      title:"About",
      Link:"#"

    },
    {
      id:5,
      title:"Contact",
      Link:"#"

    },
  ]
  return <div className=" text-white py-4">
  
 <motion.div 
   initial={{opacity:0,x:100}}
   animate={{opacity:1,x:0}}
   transition={{duration:0.8,delay:0.5}}
   className="container flex justify-between items-center ">
    {/* logo section */}
    <div>
      <img src={Logo} alt="Logo" className="max-w-[80px] "/>
    </div>
       {/* Menu section */}
       <div className="hidden md:block">
        <ul className="flex items-center gap-4 relative z-40">
          {navbarMenu.map(item=>(
            <li>
               <UpdateFollower mouseOptions={{
                  backgroundColor:"white",
                  zIndex:10,
                  followSpeed:1.5,
                  scale:5,
                  mixBlendMode:"difference"
                }}>
              <a href={item.Link} className="inline-block text-base font-semibold py-2 px-3 uppercase">
                {item.title}
              </a>
              </UpdateFollower>
            </li>
          ))}
               <UpdateFollower mouseOptions={{
                  backgroundColor:"white",
                  zIndex:10,
                  followSpeed:1.5,
                  scale:5,
                  mixBlendMode:"difference"
                }}>
          <button className="text-xl ps-14">
            <FaRegUser/>
          </button>
          </UpdateFollower>
        </ul>
       </div>
          {/* Hamburger Icon */}
  <div className="md:hidden">
    <FiMenu className="text-2xl" />
  </div>
   </motion.div>
  
  </div>
}
export default Navbar;