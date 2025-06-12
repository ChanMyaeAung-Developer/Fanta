

import { useState } from "react";
import Hero from "./components/Hero";
import Product from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blog from "./components/Blog/Blog";
import FAQ from "./components/FAQ/FAQ";
import Fanta1 from "./assets/fanta1.png";
import Fanta2 from "./assets/fanta2.png";
import Fanta3 from "./assets/fanta3.png";
import { UpdateFollower } from "react-mouse-follower";

const heroData = [
  {
    id: 1,
    image: Fanta1,
    title: "Fanta Orange",
    subtitle: "Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
    price: "$25",
    normalPrice: "$28",
    model: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Fanta Berry",
    subtitle: "Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
    price: "$30",
    normalPrice: "$32",
    model: "grape",
    bgColor: "#8011bc",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle: "Discover the bold, fruity flavor of Fanta – where fun meets refreshment.",
    price: "$20",
    normalPrice: "$25",
    model: "Cola",
    bgColor: "#F40009",
  },
];

const App = () => {
  const [activeData, setActiveData] = useState(heroData[0]);

  return (
    <main className="overflow-hidden">
      <UpdateFollower mouseOptions={{
        backgroundColor: "white",
        zIndex: 10,
        followSpeed: 1.5,
      }}>
        <Hero
          heroData={heroData}
          activeData={activeData}
          setActiveData={setActiveData}
        />
        <Product activeData={activeData} />
        <Banner  activeData={activeData}/>
        <BannerText activeData={activeData} />
        <Blog />
        <FAQ />
      </UpdateFollower>
    </main>
  );
};

export default App;
