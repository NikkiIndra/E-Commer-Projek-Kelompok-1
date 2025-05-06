import React from "react";
import { Card, Button, Container } from "react-bootstrap"; // ✅ Tambahkan Container
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  const products = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Produk ${i + 1}`,
    desc: `Deskripsi produk ${i + 1}`,
    img: `https://picsum.photos/200?random=${i + 1}`,
  }));

  return (
    <div style={{ padding: "70px 48px", backgroundColor: "#f8f9fa" }}>
      <Container>
        <h2 className="text-center mb-4">Produk Best Seller</h2>

        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "1rem",
            padding: "1rem",
            paddingBottom: "1.5rem", // ✅ beri ruang dari scroll bar
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              style={{
                minWidth: "14rem",
                flex: "0 0 auto",
                cursor: "pointer",
              }}
              onClick={() => navigate("/best-seller")}
            >
              <Card.Img
                variant="top"
                src={product.img}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ fontSize: "0.875rem" }}>
                  {product.desc}
                </Card.Text>
                <Button variant="primary" size="sm">
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CallToAction;
