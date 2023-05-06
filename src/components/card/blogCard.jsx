import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './card.css'

function BlogCard(props) {
  return (


    <Card className="blog-card">
      <div>
        <Card.Img className='blog-image fluid' variant="top" src={props.Path} />
      </div>
      <Card.Body>
        <Card.Title className='fw-bold'>{props.Title}</Card.Title>
        <Card.Text>
          {props.Text}
        </Card.Text>
        <div className="mt-4" >
          <Link className="offer-btn-1">Read Info</Link>
        </div>
      </Card.Body>
    </Card>

  );
}

export default BlogCard;