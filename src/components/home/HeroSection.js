import React from "react";
import { Container, Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <section className="bg-white py-5 py-lg-6">
      <Container>
        <div className="max-w-lg">
          <h1 className="display-5 fw-bold mb-4">
            Lihat Dan temukan{" "}
            <span className="text-primary">Produk Terbaik</span> Kami
          </h1>
          <p className="lead text-muted mb-4">
            Jelajahi koleksi produk kami yang dirancang untuk memenuhi semua
            kebutuhan Anda.
          </p>
          <div className="d-flex gap-3">
            <Button href="#products" variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
