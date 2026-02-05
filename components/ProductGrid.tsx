import React, { useState } from 'react';
import { Category } from '../types';
import { useProducts } from '../context/ProductContext';
import { CONTACT_INFO } from '../constants';
import { Search, Filter, MessageCircle, Mail } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === Category.ALL || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Products & Services</h2>
          <p className="mt-4 text-xl text-gray-400">Premium digital solutions for your business growth.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
          {/* Categories */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-4xl">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg leading-5 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback image
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute top-0 right-0 m-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white uppercase border border-gray-700">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-2">{product.name}</h3>
                  <span className="text-emerald-400 font-bold text-lg">{'\u20A6'}{product.price.toLocaleString()}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
                
                {product.features && product.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-col gap-3 mt-auto">
                   <a 
                    href={`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${product.name}&body=I am interested in the ${product.name} package.`}
                    className="w-full bg-gray-800 hover:bg-primary text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-sm border border-gray-700 hover:border-transparent"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Inquiry
                  </a>
                   <a 
                    href={`${CONTACT_INFO.whatsappLink}?text=Hi, I am interested in the ${product.name} package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-gray-900/50 rounded-2xl border border-gray-800 mt-8">
                <Filter className="mx-auto h-12 w-12 text-gray-600 mb-4" />
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
                <button onClick={() => {setSearchQuery(''); setActiveCategory(Category.ALL)}} className="mt-4 text-primary hover:underline">Clear filters</button>
            </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;