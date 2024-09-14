
import Browses from "./Components/Home/Browses/Browses";
import Hero from "./Components/Home/Hero/Hero";
import Product from "./Components/Home/Product/Product";
import RoomInspiration from "./Components/Home/Inspiration/Inspiration";
import FurnitureGallery from "./Components/Home/FurnitureGallery/FurnitureGallery";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Browses></Browses>
      <Product></Product>
      <RoomInspiration></RoomInspiration>
      <FurnitureGallery></FurnitureGallery>
   </div>
  );
}
