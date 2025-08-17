import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import useScrollToTop from "@/hooks/useScrollToTop";
import { 
  Star, 
  ShoppingCart, 
  Quote,
  Calendar,
  User,
  ThumbsUp,
  ShieldCheck,
  Heart
} from "lucide-react";

const Testimonials = () => {
  // Use the custom scroll to top hook
  useScrollToTop();

  const { addToCart } = useCart();
  const { convertPrice } = useCurrency();
  const [selectedProductId, setSelectedProductId] = useState(1);

  // Featured products with testimonials
  const products = [
    {
      id: 1,
      name: "FAFORON",
      price: "KSh 3,500",
      originalPrice: "KSh 4,100",
      image: "/src/images/Faforon box screen 15 HD.png",
      rating: 5.0,
      reviews: 346,
      badges: ["Bestseller"],
      category: "Stem-Cell-&-detox",
      description: "100% organic blood builder, Boosts Immune, Energizes, Rejuvenates cells, Restores cells, Repairs cells, Replicates cells, Replaces dead cells and detoxifies the body.",
      inStock: true,
      testimonials: [
        {
          id: 1,
          name: "Dr. KALU",
          location: "Nairobi, Kenya",
          rating: 5,
          date: "2024-07-15",
          comment: "I used Faforon on a lady who was having leakages in her digestive system, she had breast cancer and was taking blood biweekly. I used Faforon to boost her blood & with the help of other herbal remedies her cancer is gone. Faforon is very good",
          verified: true,
          helpful: 23
        },
        {
          id: 2,
          name: "Dr. MUNEERAT R",
          location: "Mombasa, Kenya",
          rating: 5,
          date: "2024-07-08",
          comment: "Two of my cousins with Sickle Cell Anemia were having serious crises, I have used so many available remedies and methods to curb their crises, but since I started giving them Faforon over 1 year now, their crises have stopped and their bodies have fully recovered to the barest minimum. Faforon is very powerful.",
          verified: true,
          helpful: 45
        },
        {
          id: 3,
          name: "Grace Wanjiku",
          location: "Kisumu, Kenya",
          rating: 5,
          date: "2024-06-30",
          comment: "I've been using FAFORON for 2 months now. My chronic fatigue is gone, and I have energy to play with my children again. Life-changing product!",
          verified: true,
          helpful: 18
        }
      ]
    },
    {
      id: 2,
      name: "SALUD EXTRA",
      price: "KSh 3,600",
      originalPrice: "KSh 4,200",
      image: "/src/images/Salud Box screen2 HD.png",
      rating: 4.9,
      reviews: 157,
      badges: ["Stem Cell"],
      category: "Stem-Cell-&-detox",
      description: "Treats Chronic Inflammation, Anti-tumour, Diarrhea, Protects The Liver against Toxins, Supports Cardiovascular Health, Alleviates Symptoms Of Asthma.",
      inStock: true,
      testimonials: [
        {
          id: 4,
          name: "James Kiprotich",
          location: "Eldoret, Kenya",
          rating: 5,
          date: "2024-07-20",
          comment: "My chronic inflammation has reduced significantly after using SALUD EXTRA. My doctor is amazed by the improvement in my liver function tests.",
          verified: true,
          helpful: 32
        },
        {
          id: 5,
          name: "Mary Nyong'o",
          location: "Kisii, Kenya",
          rating: 5,
          date: "2024-07-12",
          comment: "I suffered from asthma for years. After 6 weeks with SALUD EXTRA, my breathing has improved dramatically. I can now exercise without difficulty.",
          verified: true,
          helpful: 27
        },
        {
          id: 6,
          name: "Peter Kamau",
          location: "Nakuru, Kenya",
          rating: 4,
          date: "2024-06-25",
          comment: "Great product for cardiovascular health. My blood pressure has stabilized and I feel much better overall. Will continue using it.",
          verified: true,
          helpful: 19
        }
      ]
    },
    {
      id: 3,
      name: "SPIDEX 20",
      price: "KSh 2,800",
      originalPrice: "KSh 3,500",
      image: "/src/images/Spidex 20 Box view Hd.png",
      rating: 5.0,
      reviews: 642,
      badges: ["Premium", "Hospital Grade"],
      category: "Natural-Supplements",
      description: "Boosts Libido, Enhances Sexual Performance, Aids Fertility, Promotes Healthy Cervical Fluid, Alleviate Chest Pain, Enhances Liver Function, Normalizes Menstrual Disorder, Supports Brain Function, Balances Hormones",
      inStock: true,
      testimonials: [
        {
          id: 7,
          name: "David Mwangi",
          location: "Thika, Kenya",
          rating: 5,
          date: "2024-07-18",
          comment: "SPIDEX 20 has transformed my relationship. My performance has improved significantly and my confidence is back. My wife is very happy too!",
          verified: true,
          helpful: 56
        },
        {
          id: 8,
          name: "Christine Akinyi",
          location: "Kakamega, Kenya",
          rating: 5,
          date: "2024-07-10",
          comment: "After struggling with hormonal imbalances, SPIDEX 20 has helped regulate my cycle. My energy levels are stable and mood swings are gone.",
          verified: true,
          helpful: 41
        },
        {
          id: 9,
          name: "Robert Otieno",
          location: "Kisumu, Kenya",
          rating: 5,
          date: "2025-07-05",
          comment: "This product helped me and my wife conceive after 3 years of trying. We're now expecting our first child. Truly grateful!",
          verified: true,
          helpful: 78
        }
      ]
    },
    {
      id: 21,
      name: "FAFORON, SALUD & SPIDEX 19",
      price: "KSh 8,600",
      originalPrice: "KSh 9,900",
      image: "/src/images/Faforon Salud Spidex 19 Box screen HD.png",
      rating: 4.9,
      reviews: 96,
      badges: ["Best"],
      category: "Combo-Pack",
      description: "Say goodbye to kidney stones with our powerful trio – Faforon, Salud & Spidex 19. This unique combination treats kidney stones and prevents future formations. Faforon – Supports kidney function and flushes out toxins. Salud – Helps dissolve stones and reduces pain. Spidex 19 – Prevents recurrence with natural stone-fighting properties. Get fast relief, long-term protection, and improved urinary health with this unbeatable combo.", 
      inStock: true, 
      testimonials: [
        {
          id: 4,
          name: "James Kiprotich",
          location: "Eldoret, Kenya",
          rating: 5,
          date: "2024-07-20",
          comment: "I suffered from kidney stones for years until I tried Faforon, Salud & Spidex 19. Within weeks, the pain reduced, and after a full course, my stones were gone. No more sleepless nights, this combo really works.",
          verified: true,
          helpful: 32
        },
        {
          id: 5,
          name: "Mary Nyong'o",
          location: "Kisii, Kenya",
          rating: 5,
          date: "2024-07-12",
          comment: "After two failed medications, this combo was my last hope. Amazingly, it dissolved my 5mm stone naturally. No surgery, just pure relief. Now I take it occasionally to prevent new stones. Highly recommend.",
          verified: true,
          helpful: 27
        },
        {
          id: 6,
          name: "Peter Kamau",
          location: "Nakuru, Kenya",
          rating: 4,
          date: "2024-06-25",
          comment: "I was skeptical, but Faforon, Salud & Spidex 19 proved me wrong. My frequent kidney stone episodes stopped completely. Even my doctor noticed the improvement. This combo is a must-have.",
          verified: true,
          helpful: 19
        }
      ]
    },
  ];

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: convertPrice(product.price),
      image: product.image
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 sm:opacity-20"
            style={{
              backgroundImage: "url('/src/images/background image leaf.png')"
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/90 to-accent/5"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4 sm:space-y-6 px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-3 sm:mb-4">
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary mr-0 sm:mr-4 mb-2 sm:mb-0" />
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-sora text-foreground leading-tight">
                Customer <span className="text-gradient-primary">Testimonials</span>
              </h1>
            </div>
            <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from people who have transformed their health with our premium herbal products
            </p>
          </div>
        </section>

        {/* Product Selector */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide">
              {products.map((product) => (
                <Button
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  variant={selectedProductId === product.id ? "default" : "outline"}
                  className={`flex-shrink-0 text-xs px-3 py-2 h-8 ${
                    selectedProductId === product.id 
                      ? "btn-neon" 
                      : "btn-outline"
                  }`}
                >
                  {product.name}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Centered Flex */}
          <div className="hidden sm:flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <Button
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                variant={selectedProductId === product.id ? "default" : "outline"}
                className={`${
                  selectedProductId === product.id 
                    ? "btn-neon" 
                    : "btn-outline"
                }`}
              >
                {product.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            
            {/* Mobile: Product Card First */}
            <div className="lg:hidden order-1">
              <div className="card-neon p-4 mb-6">
                {/* Mobile Product Header */}
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0 bg-gradient-to-br from-primary/5 to-accent/5"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 line-clamp-1">
                      {selectedProduct.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(selectedProduct.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-xs font-medium ml-1">{selectedProduct.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">
                        {convertPrice(selectedProduct.price)}
                      </span>
                      <span className="text-xs text-muted-foreground line-through">
                        {convertPrice(selectedProduct.originalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-neon text-sm py-2.5 group" 
                  disabled={!selectedProduct.inStock}
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
            
            {/* Testimonials Section */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  What Our Customers Say About <span className="text-gradient-primary">{selectedProduct.name}</span>
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-base sm:text-lg font-semibold">{selectedProduct.rating}</span>
                  <span className="text-sm sm:text-base text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                </div>
              </div>

              {/* Testimonials List */}
              <div className="space-y-4 sm:space-y-6">
                {selectedProduct.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="card-neon p-4 sm:p-6">
                    {/* Mobile: Compact Header */}
                    <div className="sm:hidden">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <User 
                            className="h-5 w-5" 
                            style={{ color: 'hsl(145, 92%, 91%)' }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm text-foreground line-clamp-1">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <ShieldCheck className="h-3 w-3 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{testimonial.location}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < testimonial.rating
                                      ? "fill-primary text-primary"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span className="text-xs">{new Date(testimonial.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Original Header */}
                    <div className="hidden sm:flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                          <User 
                            className="h-6 w-6" 
                            style={{ color: 'hsl(145, 92%, 91%)' }}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            {testimonial.name}
                            {testimonial.verified && (
                              <ShieldCheck className="h-4 w-4 text-primary" />
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(testimonial.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 leading-relaxed">
                      "{testimonial.comment}"
                    </blockquote>

                    {/* Testimonial Footer */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                      <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                        <ShieldCheck className="h-3 w-3" />
                        Verified Purchase
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary text-xs p-2">
                        <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        <span className="hidden sm:inline">Helpful </span>({testimonial.helpful})
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Product Sidebar */}
            <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 order-3">
              <div className="card-neon">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {selectedProduct.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className={`text-xs px-2 py-1 ${
                          badge === "Bestseller" ? "bg-primary text-primary-foreground" :
                          badge === "New" ? "bg-accent text-accent-foreground" :
                          badge === "Premium" ? "bg-gradient-primary text-primary-foreground" :
                          "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Favorite Button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(selectedProduct.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{selectedProduct.rating}</span>
                    <span className="text-xs text-muted-foreground">({selectedProduct.reviews})</span>
                  </div>

                  {/* Name & Category */}
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {selectedProduct.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {selectedProduct.category.replace(/-/g, ' ')}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {selectedProduct.description}
                  </p>

                  {/* Price */}
                  <div className="bg-secondary/30 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xl font-bold text-primary">
                        {convertPrice(selectedProduct.price)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {convertPrice(selectedProduct.originalPrice)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Save {
                        Math.round(((parseFloat(selectedProduct.originalPrice.replace(/[^\d]/g, '')) - 
                        parseFloat(selectedProduct.price.replace(/[^\d]/g, ''))) / 
                        parseFloat(selectedProduct.originalPrice.replace(/[^\d]/g, '')) * 100))
                      }% • Free Shipping
                    </p>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      selectedProduct.inStock ? 'bg-primary animate-pulse' : 'bg-destructive'
                    }`}></div>
                    <span className={`text-xs font-medium ${
                      selectedProduct.inStock ? 'text-primary' : 'text-destructive'
                    }`}>
                      {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full btn-neon py-3 group" 
                    disabled={!selectedProduct.inStock}
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-secondary/20 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Trusted by Thousands</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Join our satisfied customers across Kenya</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">10,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">4.9/5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;