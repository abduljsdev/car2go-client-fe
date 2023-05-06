import { Card } from "react-bootstrap";
import "./card.css";

function TestimonialCard() {
  return (
    <Card className="testimonial-card border-primary-2">
      <Card.Body>
        <div>
          <div className="testimonial-image text-center" style={{ marginTop: "-45px" }}>
            <img
              src="./images/testimonial/testimonial-1.jpeg"
              alt="testimonial"
            />
          </div>
          <div className="text-center">
            <h5 className="mt-3">Sherief Arafa</h5>
            <p>2022-05-27</p>
          </div>
        </div>
        <div className="text-center">
          <p>
            Forem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TestimonialCard;
