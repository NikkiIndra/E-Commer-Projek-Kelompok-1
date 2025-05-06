import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
  Badge,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const BestSellerPage = () => {
  const navigate = useNavigate();
  const { cartCount, addToCart } = useCart();

  // Generate sample products
  const products = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    title: `Produk Best ${i + 1}`,
    desc: `Deskripsi produk best seller ${i + 1}`,
    price: Math.floor(Math.random() * 500000) + 50000,
    img: `https://picsum.photos/300/200?random=${i + 100}`,
  }));

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <Container fluid className="py-4 px-3 px-md-4 h-100">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <h2 className="h4 mb-0 fw-bold text-center text-md-start">
          Produk Best Seller
        </h2>

        <div className="d-flex gap-3 w-100 w-md-auto">
          <InputGroup style={{ maxWidth: "400px" }}>
            <InputGroup.Text className="bg-white">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Cari produk best seller..."
              className="border-start-0"
            />
          </InputGroup>

          <Button
            variant="outline-secondary"
            className="position-relative"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Product Grid - 5 columns on xl, 4 on lg, 3 on md, 2 on sm */}
      <Row xs={2} sm={3} md={4} lg={4} xl={5} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: "180px", objectFit: "cover" }}
                className="cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 mb-2 text-truncate">
                  {product.title}
                </Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold text-primary">
                    {formatRupiah(product.price)}
                  </span>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="d-flex align-items-center gap-1"
                  >
                    <FaPlus size={12} />
                    <span>Keranjang</span>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Load More Button */}
      <div className="text-center mt-4">
        <Button variant="outline-primary">Muat Lebih Banyak</Button>
      </div>
    </Container>
  );
};

export default BestSellerPage;
