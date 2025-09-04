import { useState } from "react";
import { Shield, Leaf, Award, Users, Zap, Heart, X, Mail, Phone, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const WhyChooseUs = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consultationType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const features = [
    {
      icon: Shield,
      title: "Clinically Tested",
      description: "All products undergo rigorous clinical testing and approved by NAFDAC & healthcare professionals.",
      color: "from-primary to-accent"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure herbal ingredients sourced from the finest natural environments worldwide.",
      color: "from-accent to-primary"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized by international health organizations for quality and effectiveness.",
      color: "from-primary to-accent"
    },
    {
      icon: Users,
      title: "Hospital Trusted",
      description: "Trusted by over 50 hospitals and healthcare institutions across East Africa.",
      color: "from-accent to-primary"
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Experience noticeable improvements in your health within weeks of consistent use.",
      color: "from-primary to-accent"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "24/7 support and personalized wellness consultations from our expert team.",
      color: "from-accent to-primary"
    }
  ];

  const consultationTypes = [
    { value: 'general', label: 'General Wellness' },
    { value: 'specific', label: 'Specific Health Concern' },
    { value: 'product', label: 'Product Recommendation' },
    { value: 'hospital', label: 'Hospital Partnership' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create email body
      const emailBody = `
        New Consultation Request from Lucy Herbal Care Website
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Consultation Type: ${consultationTypes.find(type => type.value === formData.consultationType)?.label}
        
        Message:
        ${formData.message}
        
        Submitted on: ${new Date().toLocaleString()}
      `;

      // Create mailto link (fallback option)
      const mailtoLink = `mailto:info@lucyherbalcare.com?subject=Consultation Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      // For demonstration, we'll use mailto. In production, you'd use a proper email service
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setTimeout(() => {
        setShowConsultationForm(false);
        setFormData({ name: '', email: '', phone: '', message: '', consultationType: 'general' });
        setSubmitStatus('');
      }, 2000);

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-sora leading-tight">
            Why Choose <span className="text-gradient-primary">Rosy Herbal Care</span>
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            We combine traditional herbal wisdom with modern scientific validation to deliver 
            premium wellness solutions trusted by healthcare professionals. Sponsored by RoseDan Stockist Center
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-card border border-border p-4 sm:p-6 lg:p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} p-2.5 sm:p-3 lg:p-4 mb-4 sm:mb-6 group-hover:animate-pulse-glow transition-all duration-300`}>
                <feature.icon className="w-full h-full text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
            Ready to Experience the <span className="text-gradient-primary">Difference?</span>
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Join thousands of satisfied customers and healthcare professionals who trust 
            Rosy Herbal Care for their wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button className="btn-neon w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11">
                Start Shopping Now
              </Button>
            </Link>
            <Button 
              className="btn-ghost-neon w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
              onClick={() => setShowConsultationForm(true)}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-background rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Book a Consultation</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Get personalized wellness advice from our experts</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowConsultationForm(false)} className="h-8 w-8 sm:h-10 sm:w-10">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Personal Information */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full text-sm sm:text-base h-9 sm:h-10"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Phone Number</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full text-sm sm:text-base h-9 sm:h-10"
                  />
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold">Consultation Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {consultationTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center p-2.5 sm:p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.consultationType === type.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value={type.value}
                        checked={formData.consultationType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-xs sm:text-sm font-medium">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  Tell us about your wellness goals or concerns *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your health concerns, wellness goals, or any specific questions you have..."
                  required
                  rows={3}
                  className="w-full p-2.5 sm:p-3 border border-border rounded-xl bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-xs sm:text-sm">
                    ✓ Consultation request submitted successfully! We'll contact you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-xs sm:text-sm">
                    ✗ There was an error submitting your request. Please try again.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button
                  type="submit"
                  className="flex-1 btn-neon text-sm sm:text-base h-10 sm:h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      Send Request
                    </>
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowConsultationForm(false)}
                  disabled={isSubmitting}
                  className="text-sm sm:text-base h-10 sm:h-11"
                >
                  Cancel
                </Button>
              </div>

              {/* Contact Info */}
              <div className="p-3 sm:p-4 bg-secondary/50 rounded-xl border border-border">
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  <Phone className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Prefer to call? Reach us at: <strong>+234 902 383 1083</strong>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default WhyChooseUs;