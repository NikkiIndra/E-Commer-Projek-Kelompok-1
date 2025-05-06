import { useState } from "react";
import { Container } from "react-bootstrap";
import PromotionBanner from "../components/layout/PromotionBanner";
import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import CallToAction from "../components/home/CallToAction";
import ProductList from "../components/products/ProductList";
import Modal from "../components/common/Modal";
// import sweatpants2 from "../assets/images/sweetpants2.png";
// import shoes1 from "../assets/images/shoes1.png";
// import shoes2 from "../assets/images/shoes2.png";
// import shoes3 from "../assets/images/shoes3.png";
// import tshirt1 from "../assets/images/t-Shirt1.png";
// import tshirt2 from "../assets/images/t-Shirt2.png";

import {
  sweatpants2,
  shoes1,
  shoes2,
  shoes3,
  tshirt1,
  tshirt2,
} from "../assets/images'/ProductImages.js";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    price: 24000,
    desc: "High-quality cotton tee.",
    img: shoes3,
    // img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    name: "Elegant Shirt",
    price: 35000,
    desc: "Men's Casual Versatile Drawstring Waist Sweatpants",
    img: sweatpants2,
  },
  {
    id: 3,
    name: "Elegant Shirt",
    price: 35000,
    desc: "Unisex Casual Shoes, Size 36-45, Lace-Up Soft",
    img: shoes1,
  },
  {
    id: 4,
    name: "Elegant Shirt",
    price: 45000,
    desc: "ew Fashionable Lace-Up Sport Casual Shoes, Unisex",
    img: shoes2,
  },
  {
    id: 5,
    name: "Elegant Shirt",
    price: 35000,
    desc: "Solid Brown Regular T-Shirt",
    img: tshirt1,
  },
  {
    id: 6,
    name: "Elegant Shirt",
    price: 98000,
    desc: "Regular T-Shirt",
    img: tshirt2,
  },
  // Tambahkan produk lainnya sesuai kebutuhan
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1);
  };

  return (
    <div className="home-page">
      <PromotionBanner />
      <Header />
      <Container fluid="md" className="main-content">
        <HeroSection />
        <CallToAction />
        {/* Hanya satu bagian Produk Terbaik */}
        <section id="products" className="py-5">
          <h2 className="text-center mb-4">Produk Pilihan Kami</h2>

          <ProductList
            products={products}
            onAddToCart={openModal}
            cols={{ xs: 2, md: 3, lg: 4, xl: 5 }}
          />
        </section>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}
