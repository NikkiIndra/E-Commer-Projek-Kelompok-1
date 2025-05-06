import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart, cols }) {
  return (
    <Row xs={cols.xs} md={cols.md} lg={cols.lg} xl={cols.xl} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} onAddToCart={onAddToCart} />
        </Col>
      ))}
    </Row>
  );
}
