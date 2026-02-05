import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import Mission from './components/Mission';
import Services from './components/Services';
import About from './components/About';
import Admin from './components/Admin';
import { ProductProvider } from './context/ProductContext';

// Home Component aggregating landing page sections
const Home = () => (
  <>
    <Hero />
    <Mission />
    <ContactSection />
  </>
);

function App() {
  return (
    <ProductProvider>
      <HashRouter>
        <div className="min-h-screen bg-darker text-gray-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<ProductGrid />} />
              <Route path="/contact" element={<ContactSection />} />
              {/* Fallback route redirecting to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Action Buttons */}
          <WhatsAppButton />
          <ChatBot />
          
          {/* Admin Interface */}
          <Admin />
        </div>
      </HashRouter>
    </ProductProvider>
  );
}

export default App;