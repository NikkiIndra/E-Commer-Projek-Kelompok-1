import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      }

      return [...prevCart, { ...product, qty: quantity }];
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const addQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const reduceQty = (id) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id === id) {
          if (item.qty <= 1) {
            const confirmDelete = window.confirm("Jumlah 0. Hapus produk ini?");
            return confirmDelete ? [] : [item];
          }
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
    );
  };

  <CartContext.Provider
    value={{
      cart,
      addToCart,
      cartCount,
      addQty,
      reduceQty, // ✅ ini penting
    }}
  >
    {children}
  </CartContext.Provider>;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, addQty, reduceQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
