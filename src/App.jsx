import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div 
          style={{ backgroundColor: '#FCEED8' }} 
          className="min-h-screen flex flex-col bg-[#FCEED8] text-[#2D2323]"
        >
          {/* Top Announcement Bar + Main Header + Centered Menu Bar */}
          <Header />

          {/* Clean Body Area (#FCEED8) with all extra page content removed */}
          <main className="flex-1 w-full" />

          {/* Drawers for Wishlist & Cart */}
          <CartDrawer />
          <WishlistDrawer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
