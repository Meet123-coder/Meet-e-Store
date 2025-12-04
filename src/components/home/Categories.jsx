import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function Categories() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories, each featuring premium products 
            selected for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name}`}
              className={`group relative overflow-hidden rounded-xl aspect-square card-hover animate-fade-in-up stagger-${index + 1}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-background">
                <h3 className="font-display font-semibold text-lg mb-1">
                  {category.name}
                </h3>
                <p className="text-sm opacity-80">{category.productCount} Products</p>
                <ArrowRight className="h-4 w-4 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
