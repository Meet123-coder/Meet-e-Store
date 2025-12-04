import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/10 rounded-3xl p-12 md:p-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Join Our Community
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive exclusive offers, early access to new arrivals, 
              and curated style inspiration delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 h-12 bg-background/50 border-border"
              />
              <Button className="btn-primary h-12 px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
