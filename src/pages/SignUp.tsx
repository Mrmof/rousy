import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  CheckCircle,
  Gift,
  Shield
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { exit } from "process";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    agreeTerms: false,
    agreeMarketing: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);

  //   // Simulate user registration and login
  //   const userData = {
  //     id: Date.now().toString(),
  //     name: `${formData.firstName} ${formData.lastName}`,
  //     email: formData.email,
  //     phone: formData.phone,
  //     address: "",
  //     city: formData.city,
  //     zipCode: ""
  //   };

  //   login(userData);
  //   navigate("/");

  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);


    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // important for Laravel
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          password: formData.password,
          password_confirmation: formData.confirmPassword, // required by Laravel
        }),
      });

      // Parse response only ONCE
      const data = await response.json();

      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/login");
        // alert("Signup successful: " + JSON.stringify(data));
      } else {
        console.error("Signup error:", data);
        alert("Signup failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed: " + error.message);
    } finally {
      setIsSubmitted(false);
    }

  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const benefits = [
    "Get 10% off your first order",
    "Early access to new products",
    "Exclusive member-only discounts",
    "Free shipping on orders over KSh 5,000",
    "Personalized health recommendations",
    "Access to Health consultation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Benefits (Hidden on mobile, shown on desktop) */}
            <div className="hidden lg:block space-y-8">
              <div className="space-y-6">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs sm:text-sm">
                  Join Our Community
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sora leading-tight">
                  Create Your <span className="text-gradient-primary">Account</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Join thousands of customers who trust Lucy Herbal Care for their wellness journey.
                </p>
              </div>

              {/* Welcome Offer */}
              <div className="card-neon bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Gift className="h-6 w-6 text-primary-foreground2" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-accent">Welcome Offer</h3>
                    <p className="text-sm text-muted-foreground">
                      Get 10% off your first order plus free shipping when you sign up today!
                    </p>
                  </div>
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold font-sora">Membership Benefits</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Your data is protected with enterprise-grade security
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge variant="outline" className="border-primary/20 text-xs">
                    10K+ Happy Customers
                  </Badge>
                  <Badge variant="outline" className="border-accent/20 text-xs">
                    50+ Hospital Partners
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full space-y-6 sm:space-y-8">
              {/* Mobile Header */}
              <div className="lg:hidden text-center space-y-3 sm:space-y-4 px-2">
                <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                  Join Our Community
                </Badge>
                <h1 className="text-2xl sm:text-3xl font-bold font-sora leading-tight">
                  Create Your <span className="text-gradient-primary">Account</span>
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Join thousands of customers who trust Lucy Herbal Care
                </p>
              </div>

              <div className="card-neon">
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <h2 className="text-xl sm:text-2xl font-bold">Create Account</h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">First Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                            required
                            className="pl-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">Last Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                            required
                            className="pl-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="pl-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                        />
                      </div>
                    </div>

                    {/* Phone and City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+254 700 123 456"
                            required
                            className="pl-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">City</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Nairobi"
                            className="pl-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create password"
                            required
                            className="pl-10 pr-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-2 sm:px-3 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <label className="text-sm font-medium">Confirm Password *</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm password"
                            required
                            className="pl-10 pr-10 form-input-neon text-sm sm:text-base h-10 sm:h-11"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-2 sm:px-3 hover:bg-transparent"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Eye className="h-4 w-4 text-muted-foreground" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={handleCheckboxChange("agreeTerms")}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <label htmlFor="terms" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer">
                          I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </label>
                      </div>
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={handleCheckboxChange("agreeMarketing")}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <label htmlFor="marketing" className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer">
                          I want to receive marketing communications about products, offers, and wellness tips
                        </label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="btn-neon w-full text-sm sm:text-base h-11 sm:h-12"
                      size="lg"
                      disabled={!formData.agreeTerms || isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Account Created!
                        </>
                      ) : (
                        "Create Account"
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
                    <Button variant="outline" className="border-border hover:bg-secondary h-10 sm:h-11 text-xs sm:text-sm">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="border-border hover:bg-secondary h-10 sm:h-11 text-xs sm:text-sm">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Welcome Offer */}
              <div className="lg:hidden card-neon bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground2" />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-accent">Welcome Offer</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Get 10% off your first order plus free shipping when you sign up today!
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Benefits */}
              <div className="lg:hidden space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-2xl font-semibold font-sora">Why Join Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Trust Indicators */}
              <div className="lg:hidden space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    Your data is protected with enterprise-grade security
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
                  <Badge variant="outline" className="border-primary/20 text-xs">
                    10K+ Happy Customers
                  </Badge>
                  <Badge variant="outline" className="border-accent/20 text-xs">
                    50+ Hospital Partners
                  </Badge>
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

export default SignUp;