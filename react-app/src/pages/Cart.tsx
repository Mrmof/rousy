import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  CreditCard,
  Shield,
  Truck,
  ArrowRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();
  const { currency, convertPrice, convertToKsh, convertFromKsh } = useCurrency();

  // Constants
  const PICKUP_FEE_KSH = 200; // Fixed pickup fee in KSh
  const FREE_SHIPPING_THRESHOLD_KSH = 5000; // Free shipping threshold in KSh

  const formatPrice = (price: number) => {
    if (currency.code === 'KSh') {
      return `KSh ${Math.round(price).toLocaleString()}`;
    } else if (currency.code === 'USD') {
      return `$${price.toFixed(2)}`;
    } else if (currency.code === 'NGN') {
      return `₦${Math.round(price).toLocaleString()}`;
    } else if (currency.code === 'GHS') {
      return `₵${price.toFixed(2)}`;
    } else if (currency.code === 'EUR') {
      return `€${price.toFixed(2)}`;
    } else if (currency.code === 'GBP') {
      return `£${price.toFixed(2)}`;
    }
    return `${currency.symbol}${price.toFixed(2)}`;
  };

  // Calculate subtotal in current currency
  const getSubtotalInCurrentCurrency = () => {
    let totalKsh = 0;

    items.forEach(item => {
      const priceInKsh = convertToKsh(item.price);
      totalKsh += priceInKsh * item.quantity;
    });

    return convertFromKsh(totalKsh);
  };

  // Calculate shipping fee
  const getShippingFee = () => {
    let totalKsh = 0;

    items.forEach(item => {
      const priceInKsh = convertToKsh(item.price);
      totalKsh += priceInKsh * item.quantity;
    });

    // Free shipping if total in KSh is above threshold
    if (totalKsh >= FREE_SHIPPING_THRESHOLD_KSH) {
      return 0;
    }

    // Convert pickup fee to current currency
    return convertFromKsh(PICKUP_FEE_KSH);
  };

  // Calculate final total (without tax)
  const getFinalTotal = () => {
    return getSubtotalInCurrentCurrency() + getShippingFee();
  };

  // Get free shipping threshold in current currency
  const getFreeShippingThreshold = () => {
    return convertFromKsh(FREE_SHIPPING_THRESHOLD_KSH);
  };

  // const handleProceedToCheckout = () => {
  //   alert("Proceeding to checkout... This would integrate with payment processing." + finalTotal);
  // };
  const handleProceedToCheckout = async () => {
    try {
      const storedUserRaw = localStorage.getItem("user");
      if (!storedUserRaw) {
        alert("You must be logged in before checkout.");
        return;
      }

      const storedUser = JSON.parse(storedUserRaw);

      // ✅ Build the payload
      const payload = {
        user_id: storedUser?.id, // replace with logged-in user ID
        email: storedUser?.email, // replace with actual user email
        amount: Math.round(finalTotal * 100), // convert to kobo (integer)
        items: items,
      };

      // ✅ Log what’s being sent
      console.log("Checkout request payload:", payload);

      const response = await fetch("http://localhost:8000/api/initialize-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to initialize payment");
      }

      const data = await response.json();
      console.log("Payment init response:", data);

      // Redirect to Paystack checkout page
      if (data?.data?.authorization_url) {
        window.location.href = data.data.authorization_url;
      } else {
        throw new Error("authorization_url missing from response");
      }
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Unable to start payment. Try again.");
    }
  };



  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center space-y-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold font-sora">Your Cart is Empty</h1>
                <p className="text-xl text-muted-foreground max-w-md mx-auto">
                  Looks like you haven't added any products to your cart yet. Start shopping to find amazing herbal products!
                </p>
              </div>

              <Link to="/shop">
                <Button className="btn-neon" size="lg">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const subtotal = getSubtotalInCurrentCurrency();
  const shippingFee = getShippingFee();
  const finalTotal = getFinalTotal();
  const freeShippingThreshold = getFreeShippingThreshold();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold font-sora">Shopping Cart</h1>
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {getCartCount()} {getCartCount() === 1 ? 'Item' : 'Items'}
              </Badge>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="card-subtle">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {items.map((item) => {
                        const itemPriceInKsh = convertToKsh(item.price);
                        const itemPriceInCurrentCurrency = convertFromKsh(itemPriceInKsh);
                        const itemSubtotal = itemPriceInCurrentCurrency * item.quantity;

                        return (
                          <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-border/50">
                            <div className="w-20 h-20 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1 space-y-2">
                              <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                  <h3 className="font-semibold">{item.name}</h3>
                                  <p className="text-lg font-bold text-primary">
                                    {formatPrice(itemPriceInCurrentCurrency)}
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>

                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <Input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    className="w-16 h-8 text-center"
                                    min="1"
                                  />
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                  Subtotal: <span className="font-semibold text-foreground">
                                    {formatPrice(itemSubtotal)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Continue Shopping */}
                <Link to="/shop">
                  <Button variant="outline" className="border-primary/20">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="card-neon">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold font-sora">Order Summary</h2>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className={shippingFee === 0 ? "text-accent font-medium" : ""}>
                          {shippingFee === 0 ? "Free" : formatPrice(shippingFee)}
                        </span>
                      </div>
                      {shippingFee > 0 && (
                        <div className="text-xs text-muted-foreground">
                          Free shipping on orders over {formatPrice(freeShippingThreshold)}
                        </div>
                      )}

                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total</span>
                          <span className="text-primary">{formatPrice(finalTotal)}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="btn-neon w-full"
                      size="lg"
                      onClick={handleProceedToCheckout}
                    >
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed to Checkout
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="card-subtle">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold">Shopping Benefits</h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <Truck className="h-4 w-4 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Free Shipping</p>
                          <p className="text-xs text-muted-foreground">
                            On orders over {formatPrice(freeShippingThreshold)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Secure Payment</p>
                          <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-secondary-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Pickup Station</p>
                          <p className="text-xs text-muted-foreground">
                            {formatPrice(convertFromKsh(PICKUP_FEE_KSH))} pickup fee
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;