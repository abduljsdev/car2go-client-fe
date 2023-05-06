import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import TestimonialCard from "../../components/card/testimonialCard";
import "swiper/css/navigation";
import "swiper/css";



function Testimonial() {
  return (
    <>
      <Row style={{ marginTop: "60px" }}>
        <Col col={12} className="mb-5">
          <h2 className="text-center fw-bold ">Testimonials</h2>
        </Col>
      </Row>
      <Container style={{ padding: "0px" }}>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="testimonial-swiper"
          >
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
            <SwiperSlide className="testimonial-center" ><TestimonialCard /></SwiperSlide>
          </Swiper>
        </div>

      </Container>
    </>
  );
}

export default Testimonial;
