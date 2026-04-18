import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import { AppContextProvider } from "@/context/AppContext";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderSlider />
      <AppContextProvider>
        <HomeProducts />
      </AppContextProvider>
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
