import { Button, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { addQty, reduceQty } = useCart();

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const itemTotal = item.qty * item.price;

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex gap-3 align-items-center">
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
            className="rounded"
          />
          <div className="flex-grow-1">
            <h3 className="h6 mb-1">{item.name}</h3>
            <p className="small text-muted mb-2">{item.desc}</p>

            <div className="d-flex align-items-center gap-2 mb-1">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => reduceQty(item.id)}
              >
                −
              </Button>
              <span>{item.qty}</span>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => addQty(item.id)}
              >
                +
              </Button>
            </div>

            <p className="small fw-bold text-primary mb-0">
              Subtotal: {formatRupiah(itemTotal)}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
