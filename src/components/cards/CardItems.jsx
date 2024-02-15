import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import fantasy from '../Data/fantasy';




function CardItems({img,title,price}) {
  return (
    <Col sm={6} md={4} lg={3} >
    <Card  >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default CardItems;