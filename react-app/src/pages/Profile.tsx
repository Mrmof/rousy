import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Package, 
  Heart,
  MapPin,
  Truck,
  Clock,
  CheckCircle,
  Star,
  Plus,
  Edit3
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import EditProfileModal from "@/components/EditProfileModal";

const Profile = () => {
  const { user } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const [savedProducts] = useState([
    {
      id: 8,
      name: "SPIDEX 17",
      price: "KSh 2,800",
      originalPrice: "KSh 3,500",
      image: "/src/images/Spidex 17 Box screen Hd.png",
      rating: 5.0,
      reviews: 42,
      badges: ["Premium"],
      category: "Natural-Supplements",
      description: [
        "Aids The Ovaries To Release Mature Eggs At Ovulation",
        "Prevents Recurrent Miscarriages",
        "Treats Painful Menstruation/ Dysmenorrhoea",
        "Supports Healthy Monthly Cycles",
        "Alleviates Menopausal Symptoms",
        "Night Sweats & Headaches",
        "Improves Overall Blood Circulation In Women",
        "Treat Urinary Tract Infections In Women",
        "Alleviate Skin Problems Like Acne & Eczema."
      ],
      inStock: true
    },
    {
      id: 9,
      name: "SPIDEX 18",
      price: "KSh 2,800",
      originalPrice: "KSh 3,500",
      image: "/src/images/Spidex 18 Box screen Hd.png",
      rating: 5.0,
      reviews: 64,
      badges: ["Premium"],
      category: "Natural-Supplements",
      description: [
        "Remedy For Impotency",
        "Corrects Premature Ejaculation",
        "Improves Endurance & Resistance To Stress",
        "Supports Normal Blood Sugar Levels",
        "Treats Parkinson",
        "Corrects Erectile Dysfunction",
        "Anti-Aging",
        "Boosts Sperm Count And Motility",
        "Supports Optimal Testosterone Levels",
        "Treats Inflammation Of The Testis",
        "Enhances Male Stamina, Mood And Performance",
        "Natural Energy Booster."
      ],
      inStock: true
    },
    {
      id: 22,
      name: "FAFORON & SALUD",
      price: "KSh 6,500",
      originalPrice: "KSh 9,900",
      image: "/src/images/combo  Salud, Faforon Box screen Hd.png",
      rating: 5.0,
      reviews: 96,
      badges: ["Discount"],
      category: "Combo-Packs",
      description: [
        "This unique combination effectively treats existing kidney stones and prevents future formations.",
        "Ensuring optimal kidney health",
        "Faforon – Supports kidney function and flushes out toxins",
        "Salud – Helps dissolve stones and reduces pain",
        "Get fast relief, long-term protection",
        "Manages Cancer",
        "Reduces crises or pain for sicklers."
      ],
      inStock: true
    }
  ]);

  const [orders] = useState([
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: "KSh 2,800",
      items: ["MEN COFFEE"],
      trackingNumber: "TRK123456789"
    },
    {
      id: "ORD-002", 
      date: "2024-01-20",
      status: "shipped",
      total: "KSh 3,600",
      items: ["SALUD EXTRA"],
      trackingNumber: "TRK987654321"
    },
    {
      id: "ORD-003",
      date: "2025-01-25", 
      status: "processing",
      total: "KSh 3,500",
      items: ["FAFORON"],
      trackingNumber: null
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-accent/20 text-accent';
      case 'shipped': return 'bg-primary/20 text-primary';
      case 'processing': return 'bg-secondary/20 text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      case 'shipped': return <Truck className="h-4 w-4" />;
      case 'processing': return <Clock className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="space-y-6 sm:space-y-8">
            {/* Profile Header - Mobile Optimized */}
            <div className="card-neon p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-6 w-full sm:w-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                    <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground2" />
                  </div>
                  <div className="space-y-2 min-w-0 flex-1">
                    <h1 className="text-xl sm:text-3xl font-bold font-sora break-words leading-tight">
                      {user?.name || "Guest User"}
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground break-words">
                      {user?.email || "No email provided"}
                    </p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground break-words">
                        {user?.city || "Location not set"}, {user?.zipCode || ""}
                      </span>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                      Premium Member
                    </Badge>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="border-primary/20 w-full sm:w-auto text-xs sm:text-sm h-8 sm:h-10" 
                  onClick={() => setIsEditModalOpen(true)}
                >
                  <Edit3 className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Profile Tabs - Mobile Optimized */}
            <Tabs defaultValue="orders" className="space-y-4 sm:space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border h-auto">
                <TabsTrigger value="orders" className="data-[state=active]:bg-primary/20 text-xs sm:text-sm p-2 sm:p-3">
                  <Package className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">My Orders</span>
                  <span className="sm:hidden">Orders</span>
                </TabsTrigger>
                <TabsTrigger value="saved" className="data-[state=active]:bg-primary/20 text-xs sm:text-sm p-2 sm:p-3">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Saved Products</span>
                  <span className="sm:hidden">Saved</span>
                </TabsTrigger>
                <TabsTrigger value="profile" className="data-[state=active]:bg-primary/20 text-xs sm:text-sm p-2 sm:p-3">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Profile Settings</span>
                  <span className="sm:hidden">Profile</span>
                </TabsTrigger>
              </TabsList>

              {/* Orders Tab - Mobile Optimized with Small Rectangle Containers */}
              <TabsContent value="orders" className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h2 className="text-lg sm:text-2xl font-semibold font-sora">Order History</h2>
                  <Badge variant="outline" className="border-primary/20 text-xs">
                    {orders.length} Orders
                  </Badge>
                </div>

                {/* Mobile: Small Rectangle Layout, Desktop: Original Layout */}
                <div className="space-y-3 sm:space-y-4">
                  {orders.map((order) => (
                    <div key={order.id}>
                      {/* Mobile: Horizontal Rectangle Container */}
                      <Card className="card-subtle sm:hidden">
                        <CardContent className="p-3">
                          <div className="flex gap-3">
                            {/* Status Icon Circle */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                            </div>
                            
                            {/* Order Info */}
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                  <h3 className="font-semibold text-sm break-words">Order {order.id}</h3>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(order.date).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-primary">{order.total}</p>
                                  <Badge className={`${getStatusColor(order.status)} text-xs`}>
                                    <span className="capitalize">{order.status}</span>
                                  </Badge>
                                </div>
                              </div>

                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-xs font-medium text-muted-foreground">Items</p>
                                    <p className="text-xs break-words">
                                      {order.items.join(", ")}
                                    </p>
                                  </div>
                                  {order.trackingNumber && (
                                    <Button size="sm" variant="outline" className="border-primary/20 text-xs h-6 px-2">
                                      <Truck className="h-2.5 w-2.5 mr-1" />
                                      Track
                                    </Button>
                                  )}
                                </div>
                                {order.trackingNumber && (
                                  <p className="text-xs font-mono text-muted-foreground break-all">
                                    {order.trackingNumber}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Desktop: Original Layout */}
                      <Card className="card-subtle hidden sm:block">
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                            <div className="space-y-1 min-w-0 flex-1">
                              <h3 className="font-semibold text-sm sm:text-base break-words">Order {order.id}</h3>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                Ordered on {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <Badge className={`${getStatusColor(order.status)} text-xs flex-shrink-0`}>
                              {getStatusIcon(order.status)}
                              <span className="ml-1 capitalize">{order.status}</span>
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <h4 className="text-xs sm:text-sm font-medium text-muted-foreground">Items</h4>
                              <div className="space-y-1">
                                {order.items.map((item, index) => (
                                  <p key={index} className="text-xs sm:text-sm break-words">{item}</p>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="text-xs sm:text-sm font-medium text-muted-foreground">Total</h4>
                              <p className="text-base sm:text-lg font-semibold text-primary">{order.total}</p>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-xs sm:text-sm font-medium text-muted-foreground">Tracking</h4>
                              {order.trackingNumber ? (
                                <div className="space-y-2">
                                  <p className="text-xs sm:text-sm font-mono break-all">{order.trackingNumber}</p>
                                  <Button size="sm" variant="outline" className="border-primary/20 text-xs h-7 sm:h-8">
                                    <Truck className="h-3 w-3 mr-1" />
                                    Track
                                  </Button>
                                </div>
                              ) : (
                                <p className="text-xs sm:text-sm text-muted-foreground">Processing order...</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Saved Products Tab - Mobile Optimized with Small Rectangle Containers */}
              <TabsContent value="saved" className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h2 className="text-lg sm:text-2xl font-semibold font-sora">Saved Products</h2>
                  <Badge variant="outline" className="border-accent/20 text-xs">
                    {savedProducts.length} Products
                  </Badge>
                </div>

                {/* Mobile: Small Rectangle Layout, Desktop: Grid Layout */}
                <div className="space-y-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-y-0">
                  {savedProducts.map((product) => (
                    <div key={product.id} className="sm:hidden">
                      {/* Mobile: Horizontal Rectangle Container */}
                      <Card className="card-subtle group hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-3">
                          <div className="flex gap-3">
                            {/* Small Square Image */}
                            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            
                            {/* Product Info */}
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="space-y-1">
                                <h3 className="font-semibold text-sm break-words line-clamp-1">
                                  {product.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-bold text-primary">{product.price}</p>
                                  {product.originalPrice && (
                                    <p className="text-xs text-muted-foreground line-through">
                                      {product.originalPrice}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className="h-2.5 w-2.5 fill-accent text-accent" 
                                    />
                                  ))}
                                  <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                                </div>
                                
                                <div className="flex gap-1">
                                  <Button 
                                    className="btn-neon text-xs h-6 px-2" 
                                    size="sm"
                                    disabled={!product.inStock}
                                  >
                                    <Plus className="h-2.5 w-2.5 mr-1" />
                                    Add
                                  </Button>
                                  <Button variant="outline" size="sm" className="border-primary/20 h-6 w-6 p-0">
                                    <Heart className="h-2.5 w-2.5" />
                                  </Button>
                                </div>
                              </div>

                              <div className="flex items-center gap-1">
                                <Badge className={`text-xs py-0 px-1 ${product.inStock ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                                  {product.inStock ? "In Stock" : "Out of Stock"}
                                </Badge>
                                {product.badges.map((badge, index) => (
                                  <Badge 
                                    key={index} 
                                    variant="outline" 
                                    className={`text-xs py-0 px-1 ${
                                      badge === "Premium" ? "border-primary/20 text-primary" :
                                      badge === "Discount" ? "border-accent/20 text-accent" :
                                      "border-secondary/20"
                                    }`}
                                  >
                                    {badge}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  {/* Desktop: Original Grid Layout */}
                  {savedProducts.map((product) => (
                    <Card key={`desktop-${product.id}`} className="card-subtle group hover:shadow-lg transition-all duration-300 hidden sm:block">
                      <CardContent className="p-3 sm:p-4">
                        <div className="aspect-square bg-muted rounded-lg mb-3 sm:mb-4 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          <div className="space-y-1">
                            <h3 className="font-semibold text-sm sm:text-base break-words line-clamp-2">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm sm:text-lg font-bold text-primary">{product.price}</p>
                              {product.originalPrice && (
                                <p className="text-xs sm:text-sm text-muted-foreground line-through">
                                  {product.originalPrice}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 flex-wrap">
                            <Badge className={`text-xs ${product.inStock ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                            {product.badges.map((badge, index) => (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className={`text-xs ${
                                  badge === "Premium" ? "border-primary/20 text-primary" :
                                  badge === "Discount" ? "border-accent/20 text-accent" :
                                  "border-secondary/20"
                                }`}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className="h-3 w-3 fill-accent text-accent" 
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              className="btn-neon flex-1 text-xs h-8" 
                              size="sm"
                              disabled={!product.inStock}
                            >
                              <Plus className="h-3 w-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button variant="outline" size="sm" className="border-primary/20 h-8 w-8 p-0">
                              <Heart className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Profile Settings Tab - Mobile Optimized */}
              <TabsContent value="profile" className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-2xl font-semibold font-sora">Profile Settings</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="card-subtle">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                        <User className="h-4 w-4 sm:h-5 sm:w-5" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">Full Name</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.name || "Not provided"}
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">Email</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.email || "Not provided"}
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">Phone</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.phone || "Not provided"}
                        </p>
                      </div>
                      <Button 
                        className="btn-neon w-full text-xs sm:text-sm h-8 sm:h-10" 
                        onClick={() => setIsEditModalOpen(true)}
                      >
                        Update Information
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="card-subtle">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                        Shipping Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">Address</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.address || "No address provided"}
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">City</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.city || "No city"}
                        </p>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-xs sm:text-sm font-medium">Postal Code</label>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {user?.zipCode || "No ZIP"}
                        </p>
                      </div>
                      <Button 
                        className="btn-neon w-full text-xs sm:text-sm h-8 sm:h-10" 
                        onClick={() => setIsEditModalOpen(true)}
                      >
                        Update Address
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <EditProfileModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
      />

      <Footer />
    </div>
  );
};

export default Profile;