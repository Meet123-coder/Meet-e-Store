import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-display font-semibold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Handpicked selections that represent the best of style, quality, and value.
            </p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className={`animate-fade-in-up stagger-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
