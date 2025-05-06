import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

export default function CustomModal({ isOpen, onClose, product, quantity, setQuantity }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted">{product?.desc}</p>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </Form.Group>
        <p className="fw-bold">
          Subtotal: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product?.price * quantity)}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}