import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-display font-semibold mb-4">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button className="btn-primary">
                Start Shopping
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
          <h1 className="text-4xl font-display font-semibold">Shopping Cart</h1>
          <p className="text-muted-foreground mt-2">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 md:gap-6 p-4 bg-card rounded-xl border border-border"
                  >
                    {/* Image */}
                    <Link
                      to={`/products/${item.id}`}
                      className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            to={`/products/${item.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {item.category}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="text-xl font-display font-semibold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{totalPrice >= 100 ? "Free" : "₹9.99"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>₹{(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{(
                        totalPrice +
                        (totalPrice >= 100 ? 0 : 9.99) +
                        totalPrice * 0.1
                      ).toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full btn-primary h-12">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
