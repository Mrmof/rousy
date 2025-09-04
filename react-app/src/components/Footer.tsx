import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Send,
  Heart,
  Zap,
  Leaf,
  X,
  FileText,
  Shield
} from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const handleNewsletterSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (email) {
      toast.success("🎉 Welcome! Check your email for 10% off code");
      setEmail("");
    }
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTerms(true);
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setShowPrivacy(true);
  };

const footerLinks = {
  products: [
    { name: "Stem Cell & detox", path: "/shop?category=Stem-Cell-%26-detox" },
    { name: "Natural Supplements", path: "/shop?category=Natural-Supplements" },
    { name: "Herbal Coffee", path: "/shop?category=Herbal-Coffee" },
    { name: "Toothpaste", path: "/shop?category=Toothpaste" },
    { name: "Combo Packs", path: "/shop?category=Combo-Packs" },
  ],

    company: [
      { name: "About Us", path: "/about" },
      { name: "Partners", path: "/partners" },
    ],
    support: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/contact#faq" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy", onClick: handlePrivacyClick },
      { name: "Terms of Service", path: "/terms", onClick: handleTermsClick },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-300" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" }
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-background to-secondary/50 border-t border-border">
        {/* Newsletter Section - Mobile Optimized */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-primary">
                <Zap className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-lg font-semibold">Join Our Wellness Community</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-sora">
                Get <span className="text-gradient-primary">10% Off</span> Your First Order
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
                Subscribe to our newsletter for exclusive health tips, product launches, 
                and special offers from Rosy Herbal Care.
              </p>

              <div onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4 sm:px-0">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary h-10 sm:h-11 text-sm"
                  required
                />
                <Button onClick={handleNewsletterSubmit} className="btn-neon group h-10 sm:h-11 text-sm">
                  Subscribe
                  <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                No spam, just wellness. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content - Mobile Optimized */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                 <Leaf 
  className="h-4 w-4 md:h-6 md:w-6" 
  style={{ color: 'hsl(145, 92%, 91%)' }}
/>
                </div>
                <div>
                  <h3 className="font-sora font-bold text-lg sm:text-xl text-gradient-primary">
                    Rosy Herbal Care
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Modern Herbal Power</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                Leading provider of premium herbal wellness solutions, trusted by healthcare 
                professionals and loved by customers across East Africa. We combine traditional 
                wisdom with modern science.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span className="break-all">+254 705774711</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span className="break-all">rosedanstockist@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span>Nigeria, Kenya</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-secondary border border-border flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:glow-primary ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Products</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm group flex items-center gap-2"
                    >
                      <span className="break-words">{link.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Support</h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.path} 
                      className="text-muted-foreground hover:text-primary transition-smooth text-xs sm:text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Mobile Optimized */}
        <div className="border-t border-border bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>© 2025 Rosy Herbal Care. Made with</span>
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span>in Kenya</span>
              </div>
              
              <div className="flex gap-4 sm:gap-6">
                {footerLinks.legal.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.onClick || (() => {})}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms of Service Modal - Mobile Optimized */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground2" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-xl font-bold text-foreground truncate">Terms of Service</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">Last Updated: 14/06/2025</p>
                </div>
              </div>
              <Button
                onClick={() => setShowTerms(false)}
                variant="ghost"
                size="sm"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl hover:bg-destructive/10 hover:text-destructive flex-shrink-0"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-120px)] prose prose-sm max-w-none">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                Welcome to <strong>Rosy Herbal Care</strong>. These Terms govern your use of our website, products, and services. By using our website, you agree to these Terms.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</span>
                Purpose of Our Website
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">We operate an online platform for:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Selling herbal and natural wellness products.</li>
                <li>Providing product information and usage guidance.</li>
                <li>Offering business <strong>partnership</strong> opportunities for distribution/reselling.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</span>
                Eligibility
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                You must be 18+ or have consent from a parent/guardian to use the site or make purchases.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</span>
                Orders and Payment
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Orders are subject to availability and acceptance.</li>
                <li>Prices will not change without notice.</li>
                <li>Full payment is required before shipping.</li>
                <li>We may refuse or cancel an order at our discretion.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">4</span>
                Shipping and Delivery
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>We aim to deliver within indicated timelines, but delays can occur.</li>
                <li>Risk of loss passes to you when the order is handed to the carrier.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">5</span>
                Returns and Refunds
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Due to the nature of herbal products, all sales are final unless the item arrives damaged/defective.</li>
                <li>Report any issue within 48 hours of delivery with clear photo evidence.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">6</span>
                Product Compliance & Health Guidance
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                <li><strong>NAFDAC Compliance:</strong> Our products are <strong>tested and approved by NAFDAC</strong> and are produced/distributed in line with applicable regulations. Where applicable, NAFDAC registration numbers may be displayed on product packaging.</li>
                <li><strong>Use & Expectations:</strong> Our products support general wellness. Individual responses vary. Products are not prescription medicines.</li>
                <li><strong>Medical Advice:</strong> If you are pregnant or nursing, have a medical condition, or are taking medication, please <strong>consult a qualified healthcare professional</strong> before use. Discontinue use and seek advice if any adverse reaction occurs.</li>
                <li><strong>Directions & Allergies:</strong> Always follow the label and check ingredients for possible allergens.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">7</span>
                Intellectual Property
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                All website content (text, images, logos, product descriptions) is the property of Rosy Herbal Care and protected by law. Do not use or reproduce without written permission.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">8</span>
                Partnerships and Affiliates
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Partnership opportunities are governed by separate written agreements.</li>
                <li>We may approve or decline applications at our discretion.</li>
                <li>Partners must follow brand guidelines and all applicable laws.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">9</span>
                Prohibited Activities
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">You agree not to:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Use the site for unlawful purposes.</li>
                <li>Misrepresent our products or brand.</li>
                <li>Post false/misleading content or reviews.</li>
                <li>Interfere with site security or operations.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">10</span>
                Limitation of Liability
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                To the fullest extent permitted by law, Rosy Herbal Care is not liable for indirect, incidental, special, or consequential damages arising from your use of the website or products.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">11</span>
                Changes to These Terms
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                We may update these Terms at any time. Updates take effect upon posting with the revised date.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">12</span>
                Governing Law
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                These Terms are governed by the laws of the Federal Republic of Nigeria.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">13</span>
                Contact Us
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">Questions about these Terms?</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-xs sm:text-sm break-all">rosdanstockist@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-xs sm:text-sm">+234 902 383 1083</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-border bg-secondary/30">
              <div className="flex justify-end">
                <Button 
                  onClick={() => setShowTerms(false)}
                  className="px-4 sm:px-6 h-8 sm:h-10 text-sm"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal - Mobile Optimized */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground2" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-base sm:text-xl font-bold text-foreground truncate">Privacy Policy</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">Last Updated: 14/06/2025</p>
                </div>
              </div>
              <Button
                onClick={() => setShowPrivacy(false)}
                variant="ghost"
                size="sm"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl hover:bg-destructive/10 hover:text-destructive flex-shrink-0"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-140px)] sm:max-h-[calc(90vh-120px)] prose prose-sm max-w-none">
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <strong>Rosy Herbal Care</strong> values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, purchase our products, or engage with us in business partnerships.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</span>
                Information We Collect
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">We may collect the following information when you use our services:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li><strong>Personal Identification Information:</strong> Name, phone number, email address, billing/delivery address.</li>
                <li><strong>Payment Information:</strong> Bank/payment details (processed securely via payment providers; we do not store card details).</li>
                <li><strong>Business Partnership Information:</strong> Business name, registration details, and other information you provide when applying for a partnership.</li>
                <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and device information collected via cookies or analytics tools.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</span>
                How We Use Your Information
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Process and deliver your orders.</li>
                <li>Communicate with you about your purchases, partnerships, or inquiries.</li>
                <li>Provide customer support.</li>
                <li>Send promotional offers, product updates, and newsletters (only if you opt in).</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal obligations (including NAFDAC and tax regulations).</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</span>
                Sharing Your Information
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">We do not sell your personal information.</p>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">We may share your information only with:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li><strong>Trusted Service Providers</strong> (e.g., delivery companies, payment processors) who assist in operating our business.</li>
                <li><strong>Regulatory Authorities</strong> (e.g., NAFDAC, tax agencies) if required by law.</li>
                <li><strong>Business Partners</strong> only with your consent.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">4</span>
                Cookies and Tracking
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>We use cookies to improve your browsing experience, analyze site traffic, and remember your preferences.</li>
                <li>You can manage or disable cookies in your browser settings.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">5</span>
                Data Protection & Security
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</li>
                <li>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">6</span>
                Your Rights (Under NDPR)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">You have the right to:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 space-y-1">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your data (subject to legal requirements).</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>To exercise your rights, contact us using the details in Section 9.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">7</span>
                Third-Party Links
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                Our website may contain links to other websites. We are not responsible for the privacy practices of those third parties.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">8</span>
                Changes to This Policy
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
              </p>

              <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">9</span>
                Contact Us
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">If you have questions about this Privacy Policy or how we handle your data, contact us at:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-xs sm:text-sm break-all">rosdanstockist@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-xs sm:text-sm">+234 902 383 1083</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-border bg-secondary/30">
              <div className="flex justify-end">
                <Button 
                  onClick={() => setShowPrivacy(false)}
                  className="px-4 sm:px-6 h-8 sm:h-10 text-sm"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;