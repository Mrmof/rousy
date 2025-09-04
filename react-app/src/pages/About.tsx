import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, Globe, Target, Heart, User, Building, TrendingUp, Code, Megaphone } from 'lucide-react';
import useScrollToTop from "@/hooks/useScrollToTop";

const About = () => {
  // Use the custom scroll to top hook
  useScrollToTop();
  
  // Add navigation hook
  const navigate = useNavigate();

  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      description: "Rosy Herbal Care was founded with a vision to bridge traditional herbal medicine with modern healthcare standards."
    },
    {
      year: "2023", 
      title: "Hospital Partnerships",
      description: "Established partnerships with leading hospitals, bringing Herbal products to clinical settings."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations across Africa, reaching over 50 healthcare facilities."
    },
    {
      year: "2025",
      title: "Digital Innovation",
      description: "Launched our Web3-inspired platform, revolutionizing herbal e-commerce."
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Natural Purity",
      description: "We source only the finest herbs from certified organic farms"
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "All products undergo rigorous testing and quality assurance"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building stronger communities through better health outcomes"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making premium herbal solutions accessible worldwide"
    }
  ];

  const leadership = [
    {
      name: "Dr. Daniel",
      role: "Major Shareholder & Chairman",
      icon: Building,
      description: "Strategic investor and healthcare veteran, providing guidance on expansion and long-term sustainability.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Mrs. Roseline Momah",
      role: "Board of Directors / Stockist",
      icon: Award,
      description: "Owner of RoseDan Stockist Center, ensuring product quality and scientific integrity in all formulations.",
      image: "/api/placeholder/120/120"
    },
     {
      name: "Mr. Great",
      role: "Chief Executive Officer",
      icon: User,
      description: "Visionary leader with 3+ years in herbal medicine, driving strategic growth and clinical partnerships across Africa.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Mr. Gideon",
      role: "Chief Technology Officer",
      icon: Code,
      description: "Tech innovator leading our digital transformation and Web3 platform development for modern healthcare.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Mrs. Lucy ",
      role: "Chief Marketing Officer",
      icon: Megaphone,
      description: "Brand strategist expanding our reach across healthcare institutions and building community trust.",
      image: "/api/placeholder/120/120"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section with Video Background - Half Screen */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-[50vh] flex items-center">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/src/videos/growth-scene-featuring-technology-icons-and-green.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          
          {/* Content */}
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-20">
            <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-2">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Pioneering <span className="text-gradient-primary">Herbal</span> Innovation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-background/20 rounded-2xl p-4">
              At Rosy Herbal Care, we're revolutionizing wellness by combining ancient herbal wisdom 
              with cutting-edge technology and clinical excellence.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To democratize access to premium herbal healthcare solutions by bridging 
                    traditional medicine with modern clinical standards, empowering both 
                    individuals and healthcare institutions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A world where natural healing is seamlessly integrated into mainstream 
                    healthcare, making wellness accessible, affordable, and effective for all.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="card-neon p-8 text-center space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <p className="text-sm text-muted-foreground">Healthcare Partners</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-accent">30K+</div>
                      <p className="text-sm text-muted-foreground">Happy Customers</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <p className="text-sm text-muted-foreground">Premium Products</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-accent">3</div>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section - Updated for better mobile view */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/20 to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20">Leadership Team</Badge>
              <h2 className="text-4xl font-bold">
                Guided by <span className="text-gradient-primary">Visionary Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our experienced leadership team brings together decades of expertise in healthcare, 
                technology, and business strategy to drive Lucy Herbal Care's mission forward.
              </p>
            </div>

            {/* Updated grid: 2 columns on mobile, 2 on md, 3 on lg+ */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {leadership.map((leader, index) => (
                <div key={leader.name} className="card-neon group text-center space-y-4 sm:space-y-6 hover:scale-105 transition-all duration-300 p-4 sm:p-6">
                  {/* Profile Picture - Responsive sizing */}
                  <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 overflow-hidden">
                      <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                        <leader.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary" />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-primary to-accent rounded-full border-2 border-background flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content - Responsive text sizing */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-foreground leading-tight">{leader.name}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-primary leading-tight">{leader.role}</p>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {leader.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="flex justify-center">
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full group-hover:from-primary group-hover:to-accent transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to industry leadership
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="flex gap-4 sm:gap-8 items-start group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background font-bold text-sm sm:text-lg shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="card-neon flex-1 space-y-3 group-hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {values.map((value) => (
                <div key={value.title} className="card-neon group text-center space-y-4 sm:space-y-6 hover:scale-105 transition-all duration-300 p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <value.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-background" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold leading-tight">{value.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your <span className="text-gradient-primary">Health Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands who trust Rosy Herbal Care for their wellness needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-neon" 
                size="lg"
                onClick={() => navigate('/shop')}
              >
                Shop Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/5"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;