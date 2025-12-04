import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { useWishlist } from "@/context/WishlistContext";

const Wishlist = () => {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display font-semibold mb-4">
              Your wishlist is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Save your favorite items here to purchase later.
            </p>
            <Link to="/products">
              <Button className="btn-primary">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary/30 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-semibold">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Wishlist;
