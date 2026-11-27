import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import QuickViewModal from './components/QuickViewModal';

// Pages
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import GoldRatePage from './pages/GoldRatePage';
import SchemesPage from './pages/SchemesPage';
import CraftsmanshipPage from './pages/CraftsmanshipPage';
import StoresPage from './pages/StoresPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div style={{ backgroundColor: '#F9E2CC' }} className="min-h-screen flex flex-col bg-[#F9E2CC] text-[#2D2323]">
          {/* Header adheres strictly to User Specifications: 
              - Logo at center (Image 1) 
              - Body background: #F9E2CC (Image 2)
              - Header background: #4F0C12 (Image 3) 
              - Top/bottom header rows layout (Image 4)
          */}
          <Header />

          {/* Dynamic Multi-Page Router */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/collections" element={<CatalogPage />} />
              <Route path="/category/:categoryId" element={<CatalogPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/gold-rate" element={<GoldRatePage />} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/craftsmanship" element={<CraftsmanshipPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback to home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>

          {/* Interactive Drawers & Overlays */}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}
