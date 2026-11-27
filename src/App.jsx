import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import CategoryCircleSection from './components/CategoryCircleSection';
import OurStoresSection from './components/OurStoresSection';
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

          {/* Home Page Content */}
          <main className="flex-1 w-full">
            {/* Hero Home Banner from assets */}
            <section className="w-full overflow-hidden shadow-xs">
              <img
                src={homeBanner}
                alt="Surya Hallmark Jewellers Banner"
                className="w-full h-auto object-cover object-center block"
              />
            </section>

            {/* Circular Category Shortcuts Section */}
            <CategoryCircleSection />

            {/* Our Stores Interactive Expanding Cards Section */}
            <OurStoresSection />
          </main>

          {/* Drawers for Wishlist & Cart */}
          <CartDrawer />
          <WishlistDrawer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
