import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

export function ProductCard({ product, className }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn("group block", className)}
    >
      <div className="relative overflow-hidden rounded-lg bg-secondary aspect-square mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.new && (
            <span className="px-2 py-1 text-xs font-medium bg-foreground text-background rounded">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="px-2 py-1 text-xs font-medium bg-destructive text-destructive-foreground rounded">
              Sale
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-9 w-9 rounded-full shadow-md"
            onClick={handleWishlist}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                inWishlist && "fill-destructive text-destructive"
              )}
            />
          </Button>
        </div>

        {/* Quick add */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Button
            className="w-full btn-primary"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <h3 className="font-medium group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
