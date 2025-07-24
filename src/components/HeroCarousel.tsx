
import { motion } from "framer-motion";
import { ArrowRight, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides = [
    {
      id: 1,
      background: "images/contactsengineer.jpg",
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      description: t('hero.description'),
      tagline: t('hero.tagline'),
      
      primaryButton: {
        text: t('hero.ourServices'),
        action: () => navigate('/services')
      },
      secondaryButton: {
        text: t('hero.getConsultation'),
        action: scrollToContact
      }
    },
    {
      id: 2,
      background: "images/blasting).jpeg",
      title: "Professional Mining Services",
      subtitle: "Expert Solutions",
      description: "Comprehensive blasting services, explosive products, and technical consultancy for all your mining operations across East Africa.",
      tagline: "Safety • Precision • Excellence",
      icon: Target,
      primaryButton: {
        text: "Explore Services",
        action: () => navigate('/services')
      },
      secondaryButton: {
        text: "Contact Us",
        action: scrollToContact
      }
    },
    {
      id: 3,
      background: "images/products.png",
      title: "Premium Explosive Products",
      subtitle: "Quality Guaranteed",
      description: "Weather-resistant explosive products including TRUNKLINE, VIPER BOOSTERS, LP ASSEMBLIES, and PGAN for all mining conditions.",
      tagline: "Reliable • Tested • Certified",
      icon: Shield,
      primaryButton: {
        text: "View Products",
        action: () => navigate('/products')
      },
      secondaryButton: {
        text: "Get Quote",
        action: scrollToContact
      }
    },
    {
      id: 4,
      background: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070",
      title: "Trusted by East Africa",
      subtitle: "Our Values",
      description: "Built on transparency, reliability, and innovation. We're committed to enhancing mining operations with accountability and excellence.",
      tagline: "Transparency • Innovation • Accountability",
      icon: Users,
      primaryButton: {
        text: "About Us",
        action: () => navigate('/about')
      },
      secondaryButton: {
        text: "Join Our Team",
        action: scrollToContact
      }
    }
  ];

  return (
    <section id="home" className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full flex items-center justify-center">
                {/* Animated Explosive Banner for First Slide */}
                {slide.id === 1 && (
                  <motion.img
                    src="/images/explosives.jpg"
                    alt="Explosives Banner"
                    initial={{ opacity: 0, x: 80, y: -80, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                    className="hidden sm:block absolute top-6 right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 z-30 shadow-xl rounded-lg pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-800/85 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.background}')` }}
                ></div>
                
                <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-center h-full py-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 sm:mb-6"
                  >
                    {slide.icon && (
                      <slide.icon className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-400 mx-auto mb-3 sm:mb-4" />
                    )}
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
                  >
                    {slide.title}
                    <span className="text-yellow-400 block">{slide.subtitle}</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed"
                  >
                    {slide.description}
                    <span className="block text-xs sm:text-sm md:text-base mt-1 sm:mt-2">{slide.tagline}</span>
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                  >
                    <Button 
                      onClick={slide.primaryButton.action}
                      size="lg" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg group transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[48px]"
                    >
                      {slide.primaryButton.text}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      onClick={slide.secondaryButton.action}
                      size="lg" 
                      variant="outline" 
                      className="border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-slate-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[48px] border-2"
                    >
                      {slide.secondaryButton.text}
                    </Button>
                  </motion.div>
                </div>

                {/* Enhanced Floating Animation Elements */}
                <div className="absolute inset-0 z-15">
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full opacity-60"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      y: [0, -30, 0],
                      x: [0, 20, 0],
                      rotate: [0, -360]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full opacity-40"
                  ></motion.div>
                  <motion.div
                    animate={{ 
                      y: [0, 25, 0],
                      x: [0, -15, 0],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-yellow-300 rounded-full opacity-70"
                  ></motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 w-8 h-8 sm:w-10 sm:h-10" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-800/80 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 w-8 h-8 sm:w-10 sm:h-10" />
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400/50 hover:bg-yellow-400 transition-colors cursor-pointer"
            ></div>
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
