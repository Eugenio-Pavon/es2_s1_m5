import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardItems from '../cards/CardItems';

import fantasy from '../Data/fantasy';

function Books({ searchTerm, onSearchChange }) {


  const filteredBooks = fantasy.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      
      <Row gap={5}>
        {filteredBooks.map((card) => {
          return (
            <CardItems
              key={card.asin}
              title={card.title}
              img={card.img}
              price={card.price}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Books;

