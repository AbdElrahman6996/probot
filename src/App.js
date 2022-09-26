import Header from "./components/Header";
import './App.css'
import Hero from "./components/Hero";
import WhyProbot from "./components/WhyProbot";
import Cards from "./components/Cards";
import img1 from './icons/Discord_Bot_Welcome_Images-1.webp'
import img2 from './icons/feature2.webp'
import img3 from './icons/feature3.webp'
import img4 from './icons/feature4.webp'
import img5 from './icons/feature5.webp'
import img6 from './icons/feature6.webp'
function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <WhyProbot/>
      <section className="cards-container">
          <Cards
            imgPath={img1}
            position="left"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
          <Cards
            imgPath={img2}
            position="right"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
          <Cards
            imgPath={img3}
            position="left"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
          <Cards
            imgPath={img4}
            position="right"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
          <Cards
            imgPath={img5}
            position="left"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
          <Cards
            imgPath={img6}
            position="right"
            title="Design Welcome Images"
            description="ProBot lets you design your own welcome images that includes user's avatar and username with a customizable background image!"
          />
      </section>
    </>
  );
}

export default App;