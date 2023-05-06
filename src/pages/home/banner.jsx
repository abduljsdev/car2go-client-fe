import Carousel from "react-bootstrap/Carousel";
import BookingForm from './bookingform';
import './home.css';


function Banner() {
  return (
    <div>
      <div className="carousel-section">
        <Carousel indicators={false} nextIcon prevIcon>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="./images/carousel/carousel-image-6.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-image">
            <img
              className="d-block w-100 carousel-image"
              src="./images/carousel/carousel-image-1.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="./images/carousel/carousel-image-4.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="carousel-form-section">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default Banner;
