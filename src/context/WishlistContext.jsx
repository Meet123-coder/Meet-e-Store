import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const WishlistContext = createContext(undefined);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("het-store-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("het-store-wishlist", JSON.stringify(items));
  }, [items]);

  const addToWishlist = (product) => {
    setItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const removeFromWishlist = (productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const isInWishlist = (productId) => {
    return items.some((item) => item.id === productId);
  };

  const totalItems = items.length;

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        totalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
