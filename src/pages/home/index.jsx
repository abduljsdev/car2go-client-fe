import "./home.css";
import { React } from "react";
import Banner from "./banner";
import About from "./about";
import HotOfferCard from "./hotOfferCard";
import Testimonial from "./testimonial";
function Home() {
  return (
    <div style={{ marginTop: "88px", overflowX: "hidden" }}>
      <Banner />
      <About />
      <HotOfferCard />
      <Testimonial />
    </div>
  );
}

export default Home;
