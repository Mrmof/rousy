import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingCart, Phone, Leaf, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import CurrencySelector from "./CurrencySelector";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Partners", path: "/partners" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Leaf 
                className="h-4 w-4 md:h-6 md:w-6" 
                style={{ color: 'hsl(145, 92%, 91%)' }}
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold font-sora text-foreground">
                Rosy <span className="text-gradient-primary">Herbal</span>
              </h1>
              <p className="text-xs text-muted-foreground">Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-smooth hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <CurrencySelector />
            {!isAuthenticated ? (
              <>
                <Button variant="outline" size="sm" asChild className="btn-outline">
                  <Link to="/login">
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild className="btn-neon">
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="btn-outline"
              >
                Logout
              </Button>
            )}
            {/* Only show profile icon when authenticated */}
            {isAuthenticated && (
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}
            <Link to="/cart" className="relative text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground">
                  {getCartCount()}
                </Badge>
              )}
            </Link>
          </div>

          {/* Mobile Actions - Show Cart and Profile Always */}
          <div className="md:hidden flex items-center space-x-3">
                        {/* Profile Icon - Only when authenticated */}
            {isAuthenticated && (
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}
            {/* Cart Icon */}
            <Link to="/cart" className="relative text-muted-foreground hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground">
                  {getCartCount()}
                </Badge>
              )}
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:glow-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Cleaner Design */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {/* Navigation Links */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl font-medium transition-smooth ${
                    isActive(item.path) 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "text-foreground hover:bg-secondary hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-border my-4"></div>

              {/* Auth Section */}
              <div className="space-y-3">
                {!isAuthenticated ? (
                  <div className="space-y-3">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:border-primary">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;