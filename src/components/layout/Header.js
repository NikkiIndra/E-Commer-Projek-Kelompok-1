import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="site-header">
      <Container>
        <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
              E-Commerce
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  History
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Services
                </Nav.Link>
              </Nav>

              <div className="d-flex align-items-center gap-3">
                <Link
                  to="/cart"
                  className="position-relative text-decoration-none text-dark"
                >
                  <FiShoppingCart size={20} />
                  {cartCount > 0 && (
                    <Badge
                      pill
                      bg="danger"
                      className="position-absolute top-0 start-100 translate-middle"
                    >
                      {cartCount}
                    </Badge>
                  )}
                </Link>

                <Button
                  variant="outline-primary"
                  size="sm"
                  className="d-none d-sm-inline-block"
                >
                  Cara Belanja
                </Button>

                <Button variant="primary" size="sm">
                  Chat Admin
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
}
