import { Card, Button, Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

export default function ProductCard({ product, onAddToCart }) {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <Card className="h-100 shadow-sm border-0 product-card">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.name}
        className="product-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="h6 mb-2 text-truncate">
          {product.name}
        </Card.Title>
        <Card.Text className="text-muted small mb-3">{product.desc}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">
            {formatRupiah(product.price)}
          </span>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => onAddToCart(product)}
            className="d-flex align-items-center gap-1"
          >
            <FaCartPlus size={14} />
            <span>Keranjang</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
