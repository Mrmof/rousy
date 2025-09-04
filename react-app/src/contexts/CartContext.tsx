import React, { createContext, useContext, useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Helper function to parse price strings more robustly
const parsePrice = (priceString: string): number => {
  // Remove all currency symbols and spaces, but keep digits, dots, and commas
  let cleanPrice = priceString.replace(/[KSh$₦₵€£\s]/g, '');
  
  // Handle different decimal separators
  // If there are multiple commas, treat the last one as decimal separator
  const commaCount = (cleanPrice.match(/,/g) || []).length;
  
  if (commaCount > 1) {
    // Multiple commas - likely thousands separators, remove all commas
    cleanPrice = cleanPrice.replace(/,/g, '');
  } else if (commaCount === 1) {
    // Single comma - could be decimal or thousands separator
    const parts = cleanPrice.split(',');
    if (parts[1] && parts[1].length <= 2) {
      // Likely decimal separator (e.g., "2,50")
      cleanPrice = cleanPrice.replace(',', '.');
    } else {
      // Likely thousands separator (e.g., "2,000")
      cleanPrice = cleanPrice.replace(',', '');
    }
  }
  
  const parsed = parseFloat(cleanPrice);
  return isNaN(parsed) ? 0 : parsed;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from memory instead of localStorage (as per Claude.ai restrictions)
  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const price = parsePrice(item.price);
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};