import { Row, Col, Container } from "react-bootstrap";
import BlogCard from "../../components/card/blogCard";

function BlogSection() {
  return (
    <>
      <Row>
        <Col col={12} className="text-center mb-5">
          <h2 className="text-warning fw-bold">Our Blogs</h2>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col sm={4} className="p-3 mb-5 bg-body rounde">
            <BlogCard
              Path="http://themescare.com/demos/gauto-preview/assets/img/blog-3.jpg"
              Title="THE BEST LUXURY CAR"
              Text="If you are a frequent traveler who wants to travel in comfort.The Consumer Choice Awards are considered to be a symbol of quality and are recognized everywhere."
            ></BlogCard>
          </Col>
          <Col sm={4} className="p-3 mb-5 bg-body ">
            <BlogCard
              Path="https://jthemes.net/themes/wp/rentit/wp-content/uploads/bfi_thumb/car-370x220x10-plbiaglbvvsg9w81aw1mk3i1xzzozhzdky67evisu4.jpg"
              Title="BEST RENT A CAR SERVICES"
              Text="If you are a frequent traveler who wants to travel in comfort.The Consumer Choice Awards are considered to be a symbol of quality and are recognized everywhere."
            ></BlogCard>
          </Col>

          <Col sm={4} className="p-3 mb-5 bg- rounde">
            <BlogCard
              Path="https://rently.pk/content/blogs/1644255961342-car-rentals-pakistan.jpg"
              Title=" RENTLY FIRST BRAND Car2Go"
              Text="If you are a frequent traveler who wants to travel in comfort.The Consumer Choice Awards are considered to be a symbol of quality and are recognized everywhere."
            ></BlogCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogSection;
