import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";
import Product from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blog from "./components/Blog/Blog";

const App=()=>{
  return <main className="overflow-hidden">
  <UpdateFollower mouseOptions={{
    backgroundColor:"white",
    zIndex:10,
    followSpeed:1.5,
  }}>
       <Hero/>
       <Product/>
       <Banner/>
       <BannerText/>
       <Blog/>
   </UpdateFollower>

  </main>
}
export default App;