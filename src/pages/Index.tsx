
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, MapPin, Users, Shield, Clock, Target, Zap, ArrowDown, Mail, Linkedin, CheckCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting Everflow Logistics. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full z-50 px-8 py-3">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Everflow</div>
            <div className="ml-2 text-xl font-light text-white">Logistics</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">About</a>
            <a href="#services" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Services</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
          </div>
        </div>
      </nav>

      {/* 3D Hero Section */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-90"
            style={{
              transform: `scale(${1 + scrollY * 0.001})`,
            }}
          />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
              transform: `translateY(${scrollY * 0.3}px) scale(${1.1 + scrollY * 0.0005})`,
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm transform rotate-45 animate-pulse"
            style={{
              transform: `translateY(${scrollY * -0.1}px) rotate(${45 + scrollY * 0.1}deg)`,
            }}
          />
          <div 
            className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm animate-bounce"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          />
          <div 
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full backdrop-blur-sm"
            style={{
              transform: `translateY(${scrollY * -0.15}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`,
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div 
            className="mb-12 transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          >
            <div className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Everflow
            </div>
            <div className="text-4xl md:text-6xl font-light text-white/90 tracking-wide">
              Logistics
            </div>
          </div>
          
          <h1 
            className="text-2xl md:text-4xl mb-12 font-light text-white/90 leading-relaxed"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            Simplifying Freight, Empowering Logistics
          </h1>
          
          <div 
            className="space-y-6"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
            >
              <Zap className="mr-3 w-6 h-6" />
              Request a Quote
            </Button>
            
            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-white/70">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Instant Quotes</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>5-Star Service</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60 w-8 h-8" />
        </div>
      </section>

      {/* Parallax About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Everflow
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                Everflow Logistics is revolutionizing the freight industry through cutting-edge technology 
                and personalized service. We bridge the gap between shippers and carriers with innovative 
                solutions that drive efficiency and reduce costs.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our commitment to excellence has made us the trusted partner for businesses worldwide, 
                from startups to Fortune 500 companies.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-300">Active Carriers</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-blue-400 text-2xl flex items-center">
                    <Target className="mr-3 w-8 h-8" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">
                    To provide exceptional freight brokerage services that streamline logistics operations, 
                    reduce costs, and enhance supply chain efficiency while maintaining the highest standards 
                    of reliability and transparency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-purple-400 text-2xl flex items-center">
                    <Zap className="mr-3 w-8 h-8" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg">
                    To become the leading freight brokerage company recognized for innovation, integrity, 
                    and customer-centric solutions that drive success for our partners worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Services Section */}
      <section 
        id="services" 
        ref={servicesRef}
        className="relative py-32 bg-gradient-to-b from-black via-blue-900/20 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive freight solutions powered by cutting-edge technology and human expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-12 h-12" />,
                title: "Freight Matching",
                description: "AI-powered matching system connecting shippers with qualified carriers for optimal load placement.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <MapPin className="w-12 h-12" />,
                title: "Dispatch Management",
                description: "Advanced dispatch coordination with real-time route optimization and delivery tracking.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Load Tracking",
                description: "Real-time visibility and proactive communication throughout the entire transportation process.",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Carrier Onboarding",
                description: "Streamlined qualification process ensuring compliance, safety, and reliability standards.",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 backdrop-blur-sm hover:scale-110 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl cursor-pointer"
                style={{
                  transform: `translateY(${Math.sin((scrollY * 0.002) + (index * 0.5)) * 20}px)`,
                }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse transition-all duration-500 group-hover:scale-110`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Everflow
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Reliable Network",
                description: "Extensive network of pre-qualified carriers ensuring consistent capacity and reliable service delivery.",
                color: "blue"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Manual Control",
                description: "Hands-on approach with experienced professionals managing every aspect of your freight operations.",
                color: "purple"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Easy Invoicing",
                description: "Simplified billing processes with transparent pricing and detailed documentation for easy reconciliation.",
                color: "green"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Personal Touch",
                description: "Dedicated account management with personalized service tailored to your specific business needs.",
                color: "orange"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-500"
              >
                <div className={`w-24 h-24 bg-gradient-to-r from-${feature.color}-600 to-${feature.color}-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:animate-pulse shadow-2xl group-hover:shadow-${feature.color}-500/50`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Ready to transform your logistics operations? Get in touch with our team today.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-white/20 backdrop-blur-lg shadow-2xl hover:scale-105 transition-all duration-500">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Get Your Quote
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg h-12"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg h-12"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg h-12"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg h-12"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg"
                      placeholder="Tell us about your freight needs..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-xl font-semibold rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  >
                    <Zap className="mr-3 w-6 h-6" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Everflow</div>
                <div className="ml-2 text-3xl font-light text-white">Logistics</div>
              </div>
              <p className="text-gray-300 text-lg">Simplifying Freight, Empowering Logistics</p>
            </div>
            
            <div className="flex space-x-8">
              <a
                href="https://linkedin.com/company/everflow-logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:contact@everflowlogistics.com"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
                aria-label="Email"
              >
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2025 Everflow Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
