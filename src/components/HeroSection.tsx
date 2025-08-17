import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const features = [
    { icon: Sparkles, text: "100% Natural Herbal Solutions" },
    { icon: Shield, text: "Clinically Tested & Approved" },
    { icon: Users, text: "Trusted by 50+ Hospitals" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-40 md:opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/src/videos/honey-red-tone-orchid-flower-blooming-and-yellow-green.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: `
            linear-gradient(rgba(132,255,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,255,128,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-slide-up">
          {/* Rotating Feature Badge */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 bg-card/80 backdrop-blur-md rounded-full border border-primary/30 glow-primary relative z-20 mx-2">
            {(() => {
              const IconComponent = features[currentIndex].icon;
              return <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary mr-2 sm:mr-3 animate-pulse flex-shrink-0" />;
            })()}
            <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{features[currentIndex].text}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora leading-tight px-2">
              <span className="block text-foreground">Modern Herbal</span>
              <span className="block text-gradient-primary animate-neon-flicker mt-1 sm:mt-2">Power</span>
            </h1>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                Trusted by Nature. <span className="text-accent font-semibold">Backed by Hospitals.</span>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed">
                Premium Herbal products for wellness and professional healthcare. 
                <span className="block sm:inline"> Sponsored by RoseDan Stockist Center.</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 lg:pt-8 px-4 max-w-md sm:max-w-2xl mx-auto">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button className="btn-neon text-sm sm:text-base xl:text-lg px-6 py-3 sm:px-8 sm:py-3.5 xl:px-10 xl:py-4 group w-full sm:w-auto h-12 sm:h-14">
                <span className="flex items-center justify-center">
                  Shop Herbal Products
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </Link>
            <Link to="/partners" className="w-full sm:w-auto">
              <Button className="btn-hospital text-sm sm:text-base xl:text-lg px-6 py-3 sm:px-8 sm:py-3.5 xl:px-10 xl:py-4 group w-full sm:w-auto h-12 sm:h-14">
                <span className="flex items-center justify-center">
                  Partner With Us
                  <Users className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Optimized Stats */}
          <div className="pt-6 sm:pt-8 lg:pt-12 px-4">
            {/* Mobile: Vertical Stack */}
            <div className="flex flex-col gap-4 sm:hidden">
              {[
                { number: "50+", label: "Hospital Partners", desc: "Trusted medical facilities" },
                { number: "10K+", label: "Happy Customers", desc: "Satisfied wellness seekers" },
                { number: "100%", label: "Natural Products", desc: "Pure herbal solutions" },
              ].map((stat, index) => (
                <div key={index} className="bg-card/60 backdrop-blur-md rounded-2xl p-4 border border-primary/20 group hover:border-primary/40 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-2xl font-bold text-primary group-hover:animate-pulse-glow transition-smooth">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                      <div className="text-xs text-muted-foreground">{stat.desc}</div>
                    </div>
                    <div className="text-2xl opacity-30">
                      {index === 0 ? '🏥' : index === 1 ? '😊' : '🌿'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet & Desktop: Horizontal Layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-6 lg:gap-8">
              {[
                { number: "50+", label: "Hospital Partners" },
                { number: "10K+", label: "Happy Customers" },
                { number: "100%", label: "Natural Products" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary group-hover:animate-pulse-glow transition-smooth">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Call-to-Action Enhancement */}
          <div className="sm:hidden mt-8 px-4">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-4 border border-primary/30 backdrop-blur-md">
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-foreground">🌿 Start Your Wellness Journey</div>
                <div className="text-sm text-muted-foreground">
                  Join thousands who trust our natural herbal solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;