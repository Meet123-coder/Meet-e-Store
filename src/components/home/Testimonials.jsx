import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/products";

export function Testimonials() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-semibold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`relative bg-background/5 rounded-2xl p-8 animate-fade-in-up stagger-${index + 1}`}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/30" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-background/20 text-background/20"
                    }`}
                  />
                ))}
              </div>

              <p className="text-background/80 mb-6 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{review.author}</p>
                  <p className="text-sm text-background/60">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
