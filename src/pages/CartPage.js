import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";
import { Container, Button, Stack } from "react-bootstrap";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <div className="bg-light min-vh-100">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 mb-0">Keranjang Belanja</h1>
          <Button
            variant="outline-primary"
            size="sm"
            className="d-none d-sm-inline-block"
          >
            <Link to="/" className=" text-reset text-decoration-none">
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <Stack gap={3}>
          {cart.length === 0 ? (
            <p className="text-center text-muted">Keranjang kosong</p>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </Stack>

        {cart.length > 0 && (
          <div className="text-end mt-4">
            <h2 className="h4">
              Total: <span className="fw-bold">{formatRupiah(total)}</span>
            </h2>
            <Button variant="primary" className="mt-3">
              Checkout
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
