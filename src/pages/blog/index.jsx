import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BlogCard from "../../components/card/blogCard";

function Blog() {
  return (
    <Container style={{ marginTop: "120px", marginBottom: "150px" }}>
      <Row>
        <Col col={12}>
          <h1 className="text-center">Our Blog</h1>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhxqFEA9d8q9A_3hcjR3C2YDjMc2Jh-Pc2A&usqp=CAU"
            Title="THE BEST LUXURY CAR"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
              Luxury or premium rental cars are excellent for traveling in style."></BlogCard>
        </Col>
        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://cdn.pixabay.com/photo/2014/04/27/00/43/traffic-332857_960_720.jpg"
            Title="BEST RENT A CAR SERVICES"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
       Luxury or premium rental cars are excellent for traveling in style ."
          ></BlogCard>
        </Col>
        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="data:image/jpeg;base64,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"
            Title="BEST RENT A CAR SERVICES"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
       Luxury or premium rental cars are excellent for traveling in style ."
          ></BlogCard>
        </Col>
        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://cdn.pixabay.com/photo/2019/05/09/09/44/auto-4190813_960_720.jpg"
            Title=" RENTLY FIRST BRAND Car2Go"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
             Luxury or premium rental cars are excellent for traveling in style."
          ></BlogCard>
        </Col>

        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://cdn.pixabay.com/photo/2021/12/08/15/53/traffic-6856075_960_720.jpg"
            Title="THE BEST LUXURY CAR"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
              Luxury or premium rental cars are excellent for traveling in style."
          ></BlogCard>
        </Col>
        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://cdn.pixabay.com/photo/2020/03/31/16/33/road-4988448_960_720.jpg"
            Title="BEST RENT A CAR SERVICES"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
       Luxury or premium rental cars are excellent for traveling in style ."
          ></BlogCard>
        </Col>

        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://cdn.pixabay.com/photo/2015/09/09/18/42/car-932455_960_720.jpg"
            Title=" Situations Inside Rent-a-Car"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
             Luxury or premium rental cars are excellent for traveling in style."
          ></BlogCard>
        </Col>


        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://rently.pk/content/blogs/1641363707929-benefit-car-renting.jpg"
            Title="Instead Of Buying A Car"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
              Luxury or premium rental cars are excellent for traveling in style."
          ></BlogCard>
        </Col>


        <Col md={6} lg={4} className="mt-5 d-flex  justify-content-center text-center">
          <BlogCard
            Path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_iw6ce3z8mkbMcKbxr4kFAG-VqIHpSyGVrQ&usqp=CAU"
            Title="Instead Of Buying A Car"
            Text="If you are a frequent traveler who wants to travel in comfort, then choosing a luxury car rental is a must.
              Luxury or premium rental cars are excellent for traveling in style."
          ></BlogCard>
        </Col>

      </Row>
    </Container>
  );
}

export default Blog;
