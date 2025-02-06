"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Type for the cart and wishlist item
export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  wishlist: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  addToWishlist: (item: CartItem) => void;
  removeFromWishlist: (id: string) => void;
  updateWishlistItemQuantity: (id: string, quantity: number) => void; // New function
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize cart and wishlist from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    setIsInitialized(true);
  }, []);

  // Sync cart and wishlist with localStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [cart, wishlist, isInitialized]);

  // Add item to cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: item.quantity } // Update quantity
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Add item to wishlist
  const addToWishlist = (item: CartItem) => {
    setWishlist((prevWishlist) => {
      // Avoid duplicate items in wishlist
      if (prevWishlist.some((wishlistItem) => wishlistItem.id === item.id)) return prevWishlist;
      return [...prevWishlist, item];
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  // Update quantity of item in wishlist
  const updateWishlistItemQuantity = (id: string, quantity: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        clearCart,
        addToWishlist,
        removeFromWishlist,
        updateWishlistItemQuantity, // Include the new function in context
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
