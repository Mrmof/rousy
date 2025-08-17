import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle, 
  Download,
  Phone,
  Mail,
  ArrowRight,
  Star,
  Award,
  Truck,
  HeartHandshake,
  Target
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Partners = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🏥 Partnership inquiry submitted! We'll contact you within 24 hours.");
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      position: "",
      message: ""
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('partnership-form');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle PDF download
  const handleDownloadCatalog = () => {
    try {
      const link = document.createElement('a');
      link.href = '/src/images/Rosy_Herbal_Care_Catalog.pdf';
      link.href = '/src/images/Rosy_Herbal_Care_Clinical_Study.pdf';
      link.href = '/src/images/Rosy_Herbal_Care_Product_Benefits.pdf';
      link.href = '/src/images/Rosy_Herbal_Care_Partnership_Tiers.pdf'; 
      link.download = 'Rosy_Herbal_Care_Catalog.pdf';
      link.download = 'Rosy_Herbal_Care_Clinical_Study.pdf';
      link.download = 'Rosy_Herbal_Care_Product_Benefits.pdf'; 
      link.download = 'Rosy_Herbal_Care_Partnership_Tiers.pdf';           
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success toast
      toast.success("📄 Catalog download started!");
    } catch (error) {
      console.error('Download failed:', error);
      toast.error("❌ Download failed. Please try again or contact support.");
    }
  };

  // Alternative download function for the sidebar downloads
  const handleDownloadResource = (filename, displayName) => {
    try {
      const link = document.createElement('a');
      link.href = `/src/images/${filename}`;
      link.download = filename;
      link.target = '_blank';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success(`📄 ${displayName} download started!`);
    } catch (error) {
      console.error('Download failed:', error);
      toast.error("❌ Download failed. Please try again or contact support.");
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: Building2,
      title: "Bulk Supply Solutions",
      description: "Competitive pricing for large quantity orders with flexible payment terms and customized packaging options.",
      features: ["Volume discounts up to 35%", "Custom packaging", "Flexible payment terms"]
    },
    {
      icon: ShieldCheck,
      title: "Clinical Grade Quality",
      description: "Hospital-grade products that meet international standards with full documentation and traceability.",
      features: ["WHO GMP certified", "Batch testing reports", "Full traceability"]
    },
    {
      icon: Users,
      title: "Professional Training",
      description: "Comprehensive training programs for medical staff on product usage, benefits, and patient consultation.",
      features: ["Medical staff training", "Patient consultation guides", "Ongoing support"]
    },
    {
      icon: TrendingUp,
      title: "Research Collaboration",
      description: "Opportunities to participate in clinical trials and research studies with our herbal products.",
      features: ["Clinical trial participation", "Research grants", "Publication opportunities"]
    }
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your hospital's needs and discuss potential collaboration opportunities.",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Product Demonstration",
      description: "Live demonstration of our products with sample testing and quality verification.",
      duration: "3-5 days"
    },
    {
      step: 3,
      title: "Partnership Agreement",
      description: "Finalize terms, pricing, and delivery schedules that work for your institution.",
      duration: "1 week"
    }
  ];

  const testimonials = [
    {
      hospital: "Nairobi General Hospital",
      contact: "Dr. Sarah Kimani, CMO",
      text: "Rosy Herbal Care has been an exceptional partner. Their products consistently meet our quality standards.",
      rating: 5
    },
    {
      hospital: "Coast Medical Center",
      contact: "Dr. Michael Ochieng",
      text: "The training and support provided has been invaluable for our medical team.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section with Video Background - Mobile Optimized Height */}
        <section className="py-6 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-[60vh] sm:h-screen flex items-start sm:items-center">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 sm:opacity-80"
            >
              <source src="/src/videos/a-garden-with-flowers-and-trees-in-the-sun.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-background/65 sm:bg-background/50 backdrop-blur-sm"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
          </div>

          {/* Content positioned higher on mobile */}
          <div className="relative z-20 max-w-4xl mx-auto text-center space-y-5 sm:space-y-8 px-2 pt-4 sm:pt-0">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm text-xs sm:text-sm">
              Partnership Program
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sora leading-tight">
              Partner with <span className="text-gradient-primary">Africa's Leading</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Herbal Healthcare Provider</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Join over <span className="text-accent font-semibold">50+ hospitals</span> across East Africa 
              who trust Lucy Herbal Care for premium herbal wellness solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-3 sm:pt-8 max-w-md sm:max-w-2xl mx-auto">
              <Button 
                onClick={scrollToForm}
                className="btn-hospital text-sm sm:text-base xl:text-lg px-6 py-3 sm:px-8 sm:py-3.5 xl:px-10 xl:py-4 group backdrop-blur-sm w-full sm:w-auto"
              >
                Start Partnership
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={handleDownloadCatalog}
                className="btn-ghost-neon text-sm sm:text-base xl:text-lg px-6 py-3 sm:px-8 sm:py-3.5 xl:px-10 xl:py-4 group backdrop-blur-sm w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                Download Catalog
              </Button>
            </div>

            {/* Stats - Mobile optimized positioning */}
            <div className="grid grid-cols-3 gap-1 sm:gap-4 lg:gap-8 pt-4 sm:pt-12 max-w-xs sm:max-w-4xl mx-auto">
              {[
                { icon: Building2, number: "50+", label: "Partner Hospitals" },
                { icon: Award, number: "3+", label: "Years Experience" },
                { icon: Star, number: "4.9/5", label: "Partner Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-1 sm:space-y-2 backdrop-blur-sm bg-background/20 rounded-md sm:rounded-xl p-1.5 sm:p-3 lg:p-4">
                  <stat.icon className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary mx-auto" />
                  <div className="text-sm sm:text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight px-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sora">
                Partnership <span className="text-gradient-primary">Benefits</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive support and premium products designed specifically for healthcare institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-neon p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon 
                        className="h-5 w-5 sm:h-6 sm:w-6" 
                        style={{ color: 'hsl(145, 92%, 91%)' }}
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-13 sm:ml-16">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sora">
                Simple <span className="text-gradient-primary">Partnership Process</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                Get started with our streamlined onboarding process designed for busy healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {partnershipSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="card-neon p-4 sm:p-6 lg:p-8 text-center space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto glow-primary">
                      <span 
                        className="text-lg sm:text-2xl font-bold" 
                        style={{ color: 'hsl(145, 92%, 91%)' }}
                      >
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">
                      {step.duration}
                    </Badge>
                  </div>
                  
                  {index < partnershipSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Testimonials */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sora">
                What Our <span className="text-gradient-primary">Partners</span> Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-neon p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="space-y-1">
                    <div className="text-sm sm:text-base font-semibold">{testimonial.hospital}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.contact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="partnership-form" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sora">
                Ready to <span className="text-gradient-primary">Partner</span> with Us?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                Fill out the form below and our partnership team will contact you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="card-neon p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Company Name *</label>
                      <Input
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        placeholder="Enter company name"
                        className="text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Contact Person *</label>
                      <Input
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        placeholder="Dr. John Doe"
                        className="text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="contact@company.com"
                        className="text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Phone Number *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+254 7XX XXX XXX"
                        className="text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-sm font-medium">Position/Title</label>
                    <Input
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      placeholder="Chief Medical Officer"
                      className="text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your requirements and how we can help..."
                      rows={3}
                      className="text-sm sm:text-base min-h-[80px] sm:min-h-[100px]"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-neon text-sm sm:text-base lg:text-lg py-3 sm:py-3.5">
                    Submit Partnership Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div className="card-neon p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Partnership Team</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-medium">Direct Line</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-all">+254 705774711</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-medium">Partnership Email</div>
                        <div className="text-xs sm:text-sm text-muted-foreground break-all">partnerships@rosyherbalcare.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-medium">Response Time</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-neon p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold">Download Resources</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary/10 hover:border-primary text-xs sm:text-sm h-10 sm:h-11"
                      onClick={handleDownloadCatalog}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Partnership Catalog (PDF)</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary/10 hover:border-primary text-xs sm:text-sm h-10 sm:h-11"
                      onClick={() => handleDownloadResource('Rosy_Herbal_Care_Clinical_Study.pdf', 'Clinical Studies Report')}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Clinical Studies Report</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary/10 hover:border-primary text-xs sm:text-sm h-10 sm:h-11"
                      onClick={() => handleDownloadResource('Rosy_Herbal_Care_Product_Benefits.pdf', 'Product  Benefits')}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Product Benefits</span>
                    </Button>
                      <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary/10 hover:border-primary text-xs sm:text-sm h-10 sm:h-11"
                      onClick={() => handleDownloadResource('Rosy_Herbal_Care_Clinical_Study.pdf', 'Clinical Studies Report')}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Clinical Studies Report</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover:bg-primary/10 hover:border-primary text-xs sm:text-sm h-10 sm:h-11"
                      onClick={() => handleDownloadResource('Rosy_Herbal_Care_Partnership_Tiers.pdf', 'Partnership Tiers')}
                    >
                      <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">Partnership Tiers</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;