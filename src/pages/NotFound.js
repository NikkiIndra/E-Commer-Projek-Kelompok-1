import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <p className="lead mb-4">Halaman yang Anda cari tidak ditemukan.</p>
      <Button as={Link} to="/" variant="primary">
        Kembali ke Beranda
      </Button>
    </Container>
  );
}