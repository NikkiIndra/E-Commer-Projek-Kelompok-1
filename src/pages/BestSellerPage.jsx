import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BestSellerPage = () => {
  const navigate = useNavigate();

  const products = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Produk ${i + 1}`,
    desc: `Deskripsi produk ${i + 1}`,
    img: `https://picsum.photos/300?random=${i + 11}`,
  }));

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ maxWidth: "75%" }}>
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Cari produk..." />
        </InputGroup>
        <Button variant="outline-secondary">
          <FaShoppingCart />
        </Button>
      </div>

      <Row xs={1} md={2} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Button variant="primary">Beli Sekarang</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellerPage;
