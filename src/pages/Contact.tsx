import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const { pathname, hash } = useLocation();
  
  // Scroll to top on route change, then handle hash scroll
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [pathname, hash]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["RoseDan Stockist", "Nigeria & Kenya"],
      action: "Call to get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 902 383 1083", "+254 705 774711"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["rosedanstockist@gmail.com", "partnerships@rosyherbalcare.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 7:00 PM", "Sat: 8:00 AM - 6:00 PM"],
      action: "View Schedule"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/src/images/background image leaf.png')"
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background/80 to-accent/10"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4 sm:space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm">Get In Touch</Badge>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-sora leading-tight">
              Contact <span className="text-gradient-primary">Lucy Herbal Care</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Have questions about our products or partnerships? We're here to help you on your wellness journey.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora">Send Us a Message</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="card-neon">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="form-input-neon text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="form-input-neon text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-sm font-medium">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full p-2 sm:p-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base h-10 sm:h-12"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Customer Support</option>
                      <option value="bulk">Bulk Orders</option>
                    </select>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief subject of your message"
                      required
                      className="form-input-neon text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={4}
                      className="form-input-neon resize-none text-sm sm:text-base min-h-[80px] sm:min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-neon w-full group text-sm sm:text-base h-11 sm:h-12"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora">Get In Touch</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Prefer to reach out directly? Use any of the contact methods below.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-neon group hover-scale cursor-pointer">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground2" />
                      </div>
                      <div className="flex-1 space-y-1 sm:space-y-2 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-xs sm:text-sm text-muted-foreground break-words">{detail}</p>
                        ))}
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto text-xs sm:text-sm">
                          {info.action} →
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Quick Actions</h3>
                <div className="space-y-2 sm:space-y-3">
                  <Button className="w-full justify-start btn-ghost-neon text-sm sm:text-base h-10 sm:h-11">
                    <MessageCircle className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Start WhatsApp Chat</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:bg-primary/5 text-sm sm:text-base h-10 sm:h-11">
                    <Phone className="h-4 w-4 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="truncate">Schedule a Call</span>
                  </Button>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card-neon bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-accent text-base sm:text-lg">Emergency Support</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    For urgent medical inquiries or product safety concerns
                  </p>
                  <Button variant="outline" size="sm" className="border-accent/30 text-accent hover:bg-accent/10 text-xs sm:text-sm w-full sm:w-auto">
                    Emergency Line: +234 9023831083
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="card-neon text-left space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-sm sm:text-base">How quickly do you respond?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div className="card-neon text-left space-y-2 sm:space-y-3">
                <h3 className="font-semibold text-sm sm:text-base">Do you offer phone consultations?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Yes, we provide free phone consultations for product selection and health guidance.
                </p>
              </div>
              <div className="card-neon text-left space-y-2 sm:space-y-3 md:col-span-1">
                <h3 className="font-semibold text-sm sm:text-base">How authentic are your herbal products?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  At Rosy Herbal Care, we are committed to providing only safe, effective, and authentic herbal products. All our products are approved by NAFDAC, ensuring they meet the highest standards of quality and safety.
                </p>
              </div>
              <div className="card-neon text-left space-y-2 sm:space-y-3 md:col-span-1">
                <h3 className="font-semibold text-sm sm:text-base">Do you offer bulk pricing?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Yes, we offer competitive bulk pricing for hospitals and healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;