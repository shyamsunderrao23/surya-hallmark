import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';
import { currentGoldRates } from '../data/goldRates';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('surya_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('surya_wishlist');
      return saved ? JSON.parse(saved) : ['sh-101', 'sh-103'];
    } catch {
      return ['sh-101', 'sh-103'];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isGoldRateModalOpen, setIsGoldRateModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('surya_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('surya_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const addToCart = (product, quantity = 1, selectedSize = 'Standard') => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { ...product, quantity, selectedSize }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCart((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gstAmount = Math.round(cartSubtotal * 0.03);
  const cartTotal = cartSubtotal + gstAmount;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        gstAmount,
        cartTotal,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isGoldRateModalOpen,
        setIsGoldRateModalOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        searchQuery,
        setSearchQuery,
        goldRates: currentGoldRates
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
};
