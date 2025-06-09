import Logo from "../assets/logo.png";
import { FiMenu  } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";


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
   <div className="container flex justify-between items-center">
    {/* logo section */}
    <div>
      <img src={Logo} alt="Logo" className="max-w-[80px] "/>
    </div>
       {/* Menu section */}
       <div className="hidden md:block">
        <ul className="flex items-center gap-4 relative z-40">
          {navbarMenu.map(item=>(
            <li>
              <a href={item.Link} className="inline-block text-base font-semibold py-2 px-3 uppercase">
                {item.title}
              </a>
            </li>
          ))}
          <button className="text-xl ps-14">
            <FaRegUser/>
          </button>
        </ul>
       </div>
          {/* Hamburger Icon */}
  <div className="md:hidden">
    <FiMenu className="text-2xl" />
  </div>
   </div>
  </div>
}
export default Navbar;