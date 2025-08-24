import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Mail, 
  Lock, 
  Eye,
  EyeOff,
  CheckCircle,
  Zap,
  Shield
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError("");
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      setIsSubmitted(false);
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // important for Laravel
        },
        body: JSON.stringify({
          
          email: formData.email,
          password: formData.password,
          
        }),
      });

      // Parse response only ONCE
      const data = await response.json();

      if (response.ok) {
        console.log("Signin successful:", data);
        login(data.user);
        // navigate("/");
        alert("Signin successful: " + JSON.stringify(data));
      } else {
        console.error("Signin error:", data);
        alert("Signin failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Signin failed:", error);
      alert("Signin failed: " + error.message);
    } finally {
      setIsSubmitted(false);
    }
    
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      rememberMe: checked
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
            {/* Left Side - Welcome Back */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                  Welcome Back
                </Badge>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Sign in to <span className="text-gradient-primary">Your Account</span>
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Continue your wellness journey with Rosy Herbal Care. Access your orders, saved products, and personalized recommendations.
                </p>
              </div>

              {/* Quick Access - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block card-neon bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                  <Zap className="h-4 w-4 text-background" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary">Quick Access</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      View your order history, track shipments, and manage your saved products instantly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits - Hidden on mobile */}
              <div className="hidden lg:block space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold">Account Benefits</h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Track your orders in real-time",
                    "Save products for later purchase",
                    "Get personalized product recommendations", 
                    "Access to member-only discounts",
                    "Priority customer support"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                      </div>
                      <span className="text-sm sm:text-base text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators - Hidden on mobile */}
              <div className="hidden sm:block space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Your data is secured with enterprise-grade encryption
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="card-neon p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold">Welcome Back</h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Don't have an account?{' '}
                      <span 
                        className="text-primary hover:underline cursor-pointer" 
                        onClick={() => navigate('/signup')}
                      >
                        Sign up for free
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Error Message */}
                    {error && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                        {error}
                      </div>
                    )}

                    {/* Email */}
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="pl-8 sm:pl-10 h-10 sm:h-11 text-sm sm:text-base border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs sm:text-sm font-medium">Password</label>
                        <span className="text-xs sm:text-sm text-primary hover:underline cursor-pointer">
                          Forgot password?
                        </span>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <Input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          className="pl-8 sm:pl-10 pr-10 h-10 sm:h-11 text-sm sm:text-base border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <Checkbox
                        id="remember"
                        checked={formData.rememberMe}
                        onCheckedChange={handleCheckboxChange}
                        className="h-4 w-4"
                      />
                      <label htmlFor="remember" className="text-xs sm:text-sm text-muted-foreground">
                        Keep me signed in
                      </label>
                    </div>

                    <Button 
                      type="submit"
                      className="btn-neon w-full h-10 sm:h-12 text-sm sm:text-base" 
                      size="lg"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Signing In...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>

                  {/* Social Login */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs sm:text-sm">
                      <span className="px-3 sm:px-4 bg-card text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Button 
                      variant="outline" 
                      className="border-border hover:bg-secondary h-10 sm:h-11 text-xs sm:text-sm"
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-border hover:bg-secondary h-10 sm:h-11 text-xs sm:text-sm"
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile-only Quick Access */}
              <div className="sm:hidden card-neon bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                    <Zap className="h-4 w-4 text-background" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-primary">Quick Access</h3>
                    <p className="text-xs text-muted-foreground">
                      View orders, track shipments, and manage saved products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;