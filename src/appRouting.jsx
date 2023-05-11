import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/index";
import Vehicles from "./pages/vehicles";
import BookVehicles from "./pages/booking";
import ContactUs from "./pages/contactUs";
import Blog from "./pages/blog";
import PageNotFound from "./components/common/pageNotFound";
import Payment from "./payment";
import PublicElement from "./auth/publicProtected";


function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicElement >
          <Home />
        </PublicElement>
      }

      />
      <Route path="home" element={
        <PublicElement name="public">
          <Home />
        </PublicElement>
      } />
      <Route path="about" element={
        <PublicElement name="public">
          <About />
        </PublicElement>
      } />
      <Route path="vehicles" element={
        <PublicElement name="public">
          <Vehicles />
        </PublicElement>
      } />
      <Route path="booking-vehicles/:id" element={
        <PublicElement name="public">
          <BookVehicles />
        </PublicElement>
      } />
      <Route path="contact-us" element={
        <PublicElement>
          <ContactUs />
        </PublicElement>
      } />
      <Route path="blog" element={
        <PublicElement name="public">
          <Blog />
        </PublicElement>
      } />
      <Route path="payment" element={
        <PublicElement name="public">
          <Payment />
        </PublicElement>
      } />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}


export default AppRouting;
