import React from "react";
import { Card } from "react-bootstrap";

function SingleBook({ book, setNewAsin, selectedAsin }) {
  return (
    <>
      <Card
        onClick={() => {
          setNewAsin(book.asin);
        }}
        style={{
          border: book.asin === selectedAsin ? "3px solid red" : "3px solid rgb(0 0 0 / 12.5%)",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleBook;
