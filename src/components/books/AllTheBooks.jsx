import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import fantasy from '../Data/fantasy';
import CardsItems from '../cards/CardsItems';


function Books() {
  return (
    <Container>
      <Row gap={3} >
      {fantasy.map((card) => {
        return(
            <CardsItems 
            title={card.title} 
            img={card.img} 
            price={card.price} />
            
        )
      })}
        
      </Row>
    </Container>
  );
}

export default Books;