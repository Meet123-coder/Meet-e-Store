import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Minus, 
  Plus, 
  Truck, 
  RotateCcw, 
  Shield,
  ChevronRight
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.new && (
                  <span className="px-3 py-1 text-sm font-medium bg-foreground text-background rounded">
                    New
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-3 py-1 text-sm font-medium bg-destructive text-destructive-foreground rounded">
                    Sale
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-semibold">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-medium">Quantity</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mb-8">
                  <Button
                    size="lg"
                    className="flex-1 btn-primary h-12"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-4"
                    onClick={handleWishlist}
                  >
                    <Heart
                      className={cn(
                        "h-5 w-5",
                        inWishlist && "fill-destructive text-destructive"
                      )}
                    />
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Free Shipping</p>
                      <p className="text-xs text-muted-foreground">On orders ₹100+</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <RotateCcw className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Easy Returns</p>
                      <p className="text-xs text-muted-foreground">30-day policy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">100% protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <h2 className="text-3xl font-display font-semibold mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
