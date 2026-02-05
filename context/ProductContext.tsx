import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem('alexTechProducts');
      if (storedProducts) {
        const parsed = JSON.parse(storedProducts);
        // Safety check to ensure parsed data is an array
        if (Array.isArray(parsed)) {
          setProducts(parsed);
        } else {
          console.warn('Corrupt product data in localStorage, reverting to defaults.');
          setProducts(INITIAL_PRODUCTS);
        }
      } else {
        setProducts(INITIAL_PRODUCTS);
      }
    } catch (error) {
      console.error('Failed to parse products from localStorage:', error);
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  const addProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('alexTechProducts', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};