import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardItems from "../cards/CardItems";
import SearchInput from "../input/SearchInput";
import fantasy from "../Data/fantasy";

function Books() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = fantasy.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
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
