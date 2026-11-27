import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import homeBanner from './assets/home-banner.png';

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

          {/* Home Page Content: Home Banner from assets */}
          <main className="flex-1 w-full">
            <section className="w-full overflow-hidden shadow-xs">
              <img
                src={homeBanner}
                alt="Surya Hallmark Jewellers Banner"
                className="w-full h-auto object-cover object-center block"
              />
            </section>
          </main>

          {/* Drawers for Wishlist & Cart */}
          <CartDrawer />
          <WishlistDrawer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
