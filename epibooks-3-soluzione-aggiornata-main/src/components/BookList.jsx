import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList({ books, setNewAsin, selectedAsin }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook book={b} setNewAsin={setNewAsin} selectedAsin={selectedAsin} />
            </Col>
          ))}
      </Row>
    </>
  );
}

export default BookList;
