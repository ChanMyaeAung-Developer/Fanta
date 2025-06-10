import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";
import Product from "./components/Products/Products";


const App=()=>{
  return <main className="overflow-hidden">
  <UpdateFollower mouseOptions={{
    backgroundColor:"white",
    zIndex:10,
    followSpeed:1.5,
  }}>
   <Hero/>
      <Product/>
   </UpdateFollower>

  </main>
}
export default App;