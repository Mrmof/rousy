import { useState, useEffect } from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Kimani",
      role: "Chief Medical Officer, Nairobi General Hospital",
      image: "/src/images/doctor Testimonial.png",
      rating: 5,
      text: "We've been partnering with Lucy Herbal Care for over 2 years. Their Faforon products have shown remarkable results in our patients, especially for immune system support and cellular regeneration. The quality is consistently excellent.",
      type: "hospital"
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      role: "Customer since 2022",
      image: "/src/images/Woman Testimonial2.png",
      rating: 5,
      text: "After struggling with fatigue for months, Faforon Stem Cell completely transformed my energy levels. I feel 10 years younger! The customer service team was also incredibly helpful throughout my wellness journey.",
      type: "customer"
    },
    {
      id: 3,
      name: "Dr. Michael Ochieng",
      role: "Wellness Director, Coast Medical Center",
      image: "/src/images/doctor Testimonial2.png",
      rating: 5,
      text: "The hospital partnership program with Rosy Herbal Care has been exceptional. They provide comprehensive support, training, and the products consistently meet our high standards for patient care.",
      type: "hospital"
    },
    {
      id: 4,
      name: "Grace Mutindi",
      role: "Wellness Enthusiast",
      image: "/src/images/Woman Testimonial1.png",
      rating: 5,
      text: "I've tried many herbal supplements, but nothing compares to Faforon. The natural ingredients and scientific backing give me confidence. My overall health has improved dramatically since I started using it.",
      type: "customer"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-sora leading-tight">
            What Our <span className="text-gradient-primary">Partners</span> Say
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by healthcare professionals and loved by customers worldwide
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="card-neon max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
                <Quote className="h-12 w-12 sm:h-16 sm:w-16 lg:h-24 lg:w-24 text-primary" />
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 rotate-180">
                <Quote className="h-12 w-12 sm:h-16 sm:w-16 lg:h-24 lg:w-24 text-accent" />
              </div>
            </div>

            <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 sm:border-4 border-primary/20 glow-primary"
                  />
                  <div className={`absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm ${
                    currentTestimonial.type === 'hospital' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {currentTestimonial.type === 'hospital' ? '🏥' : '❤️'}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 ${
                      i < currentTestimonial.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground max-w-3xl mx-auto px-2">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="space-y-1 sm:space-y-2">
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold">{currentTestimonial.name}</h4>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:glow-primary h-8 w-8 sm:h-10 sm:w-10"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary glow-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:glow-primary h-8 w-8 sm:h-10 sm:w-10"
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          {[
            { number: "50+", label: "Hospital Partners", icon: "🏥" },
            { number: "10K+", label: "Happy Customers", icon: "😊" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" },
            { number: "99%", label: "Satisfaction Rate", icon: "💚" }
          ].map((stat, index) => (
            <div key={index} className="text-center group p-2 sm:p-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-0.5 sm:mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;