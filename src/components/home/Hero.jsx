import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-gold-light/30" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              New Collection 2025
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-6">
              Discover Premium{" "}
              <span className="text-gradient">Lifestyle</span> Essentials
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Curated collection of premium products designed for the modern lifestyle. 
              Quality craftsmanship meets timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="btn-primary text-base px-8 h-12">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-outline text-base px-8 h-12">
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-display font-semibold">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-display font-semibold">50+</p>
                <p className="text-sm text-muted-foreground">Brands</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block animate-fade-in stagger-2">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Premium lifestyle products"
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
