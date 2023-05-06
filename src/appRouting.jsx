import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/index";
import Vehicles from "./pages/vehicles";
import BookVehicles from "./pages/booking";
import ContactUs from "./pages/contactUs";
import Blog from "./pages/blog";
import PageNotFound from "./components/common/pageNotFound";
import Payment from "./payment";


function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="booking-vehicles/:id" element={<BookVehicles />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="payment" element={<Payment />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}


export default AppRouting;
