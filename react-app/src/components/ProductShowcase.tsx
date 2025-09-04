import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Zap, ArrowRight, CheckCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";


const ProductShowcase = () => {
  // Real cart functionality
  const { addToCart } = useCart();
  const { convertPrice } = useCurrency();

  // Toast notification state
  const [toasts, setToasts] = useState([]);
  // Saved products state
  const [savedProducts, setSavedProducts] = useState([]);
  // Product modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);

  // Toast notification functionality
  const showToast = (message) => {
    const toastId = Date.now();
    const newToast = {
      id: toastId,
      message: message,
      visible: true
    };

    setToasts(prev => [...prev, newToast]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.map(toast =>
        toast.id === toastId ? { ...toast, visible: false } : toast
      ));

      // Remove from array after animation
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== toastId));
      }, 300);
    }, 3000);
  };

  const handleAddToCart = (product, e = null) => {
    if (e) e.stopPropagation();
    addToCart(product);
    showToast(`${product.name} added to cart`);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const handleSaveProduct = (product) => {
    const isAlreadySaved = savedProducts.some(saved => saved.id === product.id);

    if (isAlreadySaved) {
      setSavedProducts(prev => prev.filter(saved => saved.id !== product.id));
      showToast(`${product.name} removed from saved`);
    } else {
      setSavedProducts(prev => [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        inStock: true
      }]);
      showToast(`${product.name} saved to profile`);
    }
  };

  const isProductSaved = (productId) => {
    return savedProducts.some(saved => saved.id === productId);
  };

  // const products = [
  //   {
  //     id: 1,
  //     name: "FAFORON",
  //     price: "KSh 3,500",
  //     originalPrice: "KSh 4,100",
  //     image: "/src/images/Faforon box screen 15 HD.png",
  //     rating: 5.0,
  //     reviews: 346,
  //     badges: ["Bestseller", "New"],
  //     benefits: ["Repairs cells", "Anti-Aging", "Replaces dead cells", "Immune Boost"],
  //     description: [
  //       "100% organic blood builder", 
  //       "Boosts Immune", 
  //       "Energizes", 
  //       "Rejuvenates cells", 
  //       "Restores cells", 
  //       "Repairs cells", 
  //       "Replicates cells", 
  //       "Replaces dead cells and detoxifies the body."
  //     ],
  //     category: "Stem-Cell-&-detox",
  //     inStock: true
  //   },
  //   {
  //     id: 2,
  //     name: "SALUD EXTRA",
  //     price: "KSh 3,600",
  //     originalPrice: "KSh 4,200",
  //     image: "/src/images/Salud Box screen2 HD.png",
  //     rating: 4.9,
  //     reviews: 157,
  //     badges: ["Stem Cell"],
  //     benefits: ["Liver Cleanse", "Blood Purification", "Reduces Chronic Inflammation", "Energy Boost"],
  //     description: [
  //       "Treats Chronic Inflammation", 
  //       "Anti-tumour", 
  //       "Diarrhea", 
  //       "Protects The Liver against Toxins", 
  //       "Supports Cardiovascular Health", 
  //       "Alleviates Symptoms Of Asthma", 
  //       "Purifies The Blood"
  //     ],
  //     category: "Stem-Cell-&-detox",
  //     inStock: true
  //   },
  //   {
  //     id: 3,
  //     name: "SPIDEX 20",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 20 Box view Hd.png",
  //     rating: 4.9,
  //     reviews: 342,
  //     badges: ["Premium", "Hospital Grade"],
  //     benefits: ["Aids Blood Circulation", "Boosts Libido", "Chest Pain", "Enhances Female Fertility"],
  //     description: [
  //                  "FEMALE SEXUAL HEALTH", 
  //                  "Boosts Libido", 
  //                  "Aids Fertility", 
  //                  "Promotes Healthy Cervical Fluid", 
  //                  "Alleviates Chest Pain", 
  //                  "Enhances Liver Function", 
  //                  "Normalizes Menstrual Disorder", 
  //                  "Supports Brain Function", 
  //                  "Balances Hormones."
  //     ],
  //     category: "Natural-Supplements",
  //     inStock: true
  //   },
  //       {
  //     id: 3,
  //     name: "SPIDEX 21",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 21 Box screen Hd.png",
  //     rating: 4.9,
  //     reviews: 342,
  //     badges: ["Premium", "Hospital Grade"],
  //     benefits: ["Aids Blood Circulation", "Boosts Sperm Quality", "For Prostate Health", "Enhances Male Fertility"],
  //     description: [
  //       "MEN SEXUAL HEALTH", 
  //       "Skyrocket your confidence as a man", 
  //       "Boosts Libido", 
  //       "Enhances Male Fertility", 
  //       "Rockets Erection", 
  //       "Boosts Sperm Quality", 
  //       "Supports Prostate Health", 
  //       "Helps Improve Memory", 
  //       "Supports Brain Function", 
  //       "Improves Stress Resistance", 
  //       "Alleviates Waist Pain", 
  //       "Energizes & Aids Blood Circulation"
  //     ],
  //     category: "Natural-Supplements",
  //     inStock: true
  //   }

  // ];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products") // Your Laravel API
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.productName,
          price: `KSh ${item.productPrice}`,
          originalPrice: `KSh ${item.oldProductPrice}`,
          image: `http://127.0.0.1:8000/product_images/${item.productImage}`,
          rating: 5.0, // or item.rating if you store it
          reviews: 100, // or item.reviews if you store it
          badges: ["Bestseller"], // can be dynamic later
          benefits: item.productBenefits ? item.productBenefits.split(",") : [],
          description: item.productDescription
            ? item.productDescription.split(",").map((d: string) => d.trim()) // split and trim spaces
            : [],
          category: item.category?.category_name || "General",
          inStock: item.productQuantity > 0,
        }));
        setProducts(formatted);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);


  return (
    <section className="py-8 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
        <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm">
          Featured Products
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sora">
          Premium <span className="text-gradient-primary">Herbal</span> Collection
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Discover our range of clinically-tested herbal supplements trusted by healthcare professionals worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="card-neon group cursor-pointer p-3 md:p-6"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => handleProductClick(product)}
          >
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg md:rounded-2xl mb-3 md:mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 sm:h-40 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Badges */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 flex flex-wrap gap-1 md:gap-2">
                {product.badges.slice(0, 1).map((badge) => (
                  <Badge
                    key={badge}
                    className={`
                      text-xs px-1 py-0.5 md:px-2 md:py-1 ${badge === "Bestseller"
                        ? "bg-primary text-primary-foreground"
                        : badge === "New"
                          ? "bg-accent text-accent-foreground"
                          : badge === "Premium"
                            ? "bg-gradient-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }
                    `}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Favorite Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-2 md:top-4 right-2 md:right-4 backdrop-blur-sm w-6 h-6 md:w-8 md:h-8 transition-all duration-200 ${isProductSaved(product.id)
                  ? 'bg-primary text-primary-foreground hover:bg-primary/80'
                  : 'bg-background/80 hover:bg-primary hover:text-primary-foreground'
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSaveProduct(product);
                }}
              >
                <Heart className={`h-3 w-3 md:h-4 md:w-4 transition-all duration-200 ${isProductSaved(product.id) ? 'fill-current' : ''
                  }`} />
              </Button>
            </div>

            {/* Product Info */}
            <div className="space-y-2 md:space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1 md:gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 md:h-4 md:w-4 ${i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-medium">{product.rating}</span>
                <span className="text-xs md:text-sm text-muted-foreground">({product.reviews})</span>
              </div>

              {/* Name & Description */}
              <div>
                <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 md:mb-2 group-hover:text-primary transition-smooth">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 hidden sm:block">
                  {Array.isArray(product.description) ? product.description[0] : product.description}
                </p>
              </div>

              {/* Benefits - Show only on medium screens and up */}
              <div className="hidden md:flex flex-wrap gap-1">
                {product.benefits.map((benefit) => (
                  <Badge
                    key={benefit}
                    variant="outline"
                    className="text-xs bg-primary/5 border-primary/20 text-primary"
                  >
                    <Zap className="h-3 w-3 mr-1" />
                    {benefit}
                  </Badge>
                ))}
              </div>

              {/* Price & Actions */}
              <div className="pt-2 md:pt-4 border-t border-border space-y-2 md:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5 md:space-y-1">
                    <div className="flex items-center gap-1 md:gap-2">
                      <span className="text-lg md:text-2xl font-bold text-primary">{convertPrice(product.price)}</span>
                      <span className="text-xs md:text-sm text-muted-foreground line-through">
                        {convertPrice(product.originalPrice)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground hidden md:block">Incl. VAT & Shipping</p>
                  </div>
                </div>

                <Button
                  className="btn-neon group w-full text-xs md:text-sm py-2 md:py-3"
                  onClick={(e) => handleAddToCart({
                    id: product.id,
                    name: product.name,
                    price: convertPrice(product.price),
                    image: product.image
                  }, e)}
                >
                  <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 group-hover:animate-bounce" />
                  Add to Cart
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg border border-primary/20
              transform transition-all duration-300 ease-out
              ${toast.visible
                ? 'translate-x-0 opacity-100 scale-100'
                : 'translate-x-full opacity-0 scale-95'
              }
            `}
          >
            <CheckCircle className="h-5 w-5 animate-pulse" />
            <span className="font-medium text-sm">{toast.message}</span>
            <span className="text-lg">✅</span>
          </div>
        ))}
      </div>

      {/* View All Products */}
      <div className="text-center mt-8 md:mt-12">
        <Link to="/shop">
          <button className="btn-ghost-neon text-lg px-8 py-3 group flex items-center mx-auto">
            View All Products
            <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
          </button>
        </Link>
      </div>

      {/* Product Modal */}
      {showProductModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-80 object-cover"
                    />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {selectedProduct.badges.map((badge) => (
                        <Badge
                          key={badge}
                          className={`text-xs px-2 py-1 ${badge === "Bestseller" ? "bg-primary text-primary-foreground" :
                            badge === "New" ? "bg-accent text-accent-foreground" :
                              badge === "Premium" ? "bg-gradient-primary text-primary-foreground" :
                                "bg-secondary text-secondary-foreground"
                            }`}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">{selectedProduct.rating}</span>
                    <span className="text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <div>
                    <Badge variant="outline">
                      {selectedProduct.category ? selectedProduct.category.replace(/-/g, ' ') : 'Herbal Product'}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Product Benefits</h3>
                    <div className="text-muted-foreground leading-relaxed space-y-2">
                      {Array.isArray(selectedProduct.description) ? (
                        selectedProduct.description.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span>{benefit}</span>
                          </div>
                        ))
                      ) : (
                        <p className="whitespace-pre-line">{selectedProduct.description}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">
                        {convertPrice(selectedProduct.price)}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {convertPrice(selectedProduct.originalPrice)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Incl. VAT & Shipping</p>
                  </div>

                  <div>
                    {selectedProduct.inStock ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="flex-1 btn-neon"
                      disabled={!selectedProduct.inStock}
                      onClick={() => {
                        handleAddToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: convertPrice(selectedProduct.price),
                          image: selectedProduct.image
                        });
                        closeModal();
                      }}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveProduct(selectedProduct);
                      }}
                      className={isProductSaved(selectedProduct.id) ? 'bg-primary text-primary-foreground' : ''}
                    >
                      <Heart className={`h-5 w-5 ${isProductSaved(selectedProduct.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;