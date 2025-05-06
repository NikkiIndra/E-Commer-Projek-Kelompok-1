import React from 'react';
import { Alert } from 'react-bootstrap';

export default function PromotionBanner() {
  return (
    <Alert variant="info" className="mb-0 text-center rounded-0">
      Khusus untuk Anda! Dapatkan diskon 50% untuk pembelian pertama Anda.{' '}
      <Alert.Link href="#">Pelajari lebih lanjut</Alert.Link>
    </Alert>
  );
}