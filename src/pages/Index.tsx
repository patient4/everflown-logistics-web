
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, MapPin, Users, Shield, Clock, Target, Phone, Mail, CheckCircle } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center animate-fade-in">
              <Truck className="h-8 w-8 text-blue-600 mr-3 transition-transform duration-300 hover:scale-110" />
              <div className="font-bold text-xl text-gray-900">Everflow Logistics</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-blue-900 text-white py-20 mt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in transition-transform duration-1000 hover:scale-105">
            Simplifying Freight, Empowering Logistics
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in delay-200">
            Professional freight brokerage services connecting shippers with reliable carriers nationwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Request a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in delay-500">
            <div className="flex items-center justify-center space-x-2 transition-transform duration-300 hover:scale-110">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2 transition-transform duration-300 hover:scale-110">
              <Clock className="h-6 w-6 text-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 transition-transform duration-300 hover:scale-110">
              <Shield className="h-6 w-6 text-green-400" />
              <span>Reliable Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-500 hover:scale-105">About Everflow Logistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in freight transportation with years of experience in connecting 
              businesses with reliable shipping solutions across the United States.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in delay-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Experience</h3>
              <p className="text-gray-600 mb-6">
                Everflow Logistics has been serving businesses of all sizes with comprehensive freight 
                brokerage services. We understand the challenges of modern logistics and work tirelessly 
                to provide efficient, cost-effective solutions.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced professionals manages every aspect of your shipment, from initial 
                booking to final delivery, ensuring your cargo reaches its destination safely and on time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center transition-transform duration-300 hover:scale-110">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Trusted Carriers</div>
                </div>
                <div className="text-center transition-transform duration-300 hover:scale-110">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Loads Delivered</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in delay-400">
              <Card className="border-l-4 border-l-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To provide exceptional freight brokerage services that streamline logistics operations 
                    and help businesses grow through reliable, efficient transportation solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-orange-600 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in transparency, reliability, and building long-term partnerships. 
                    Every shipment is handled with the utmost care and professionalism.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-500 hover:scale-105">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive freight solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 animate-fade-in delay-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Freight Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Connect your shipments with qualified carriers in our extensive network for optimal placement and competitive rates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 animate-fade-in delay-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Dispatch Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional dispatch coordination with real-time tracking and proactive communication throughout transit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 animate-fade-in delay-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Load Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Complete visibility of your shipments with regular updates and detailed tracking information from pickup to delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 animate-fade-in delay-400">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Carrier Relations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Rigorous carrier qualification process ensuring compliance, safety standards, and reliable service delivery.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-500 hover:scale-105">Why Choose Everflow Logistics</h2>
            <p className="text-xl text-gray-600">The advantages that set us apart in the freight industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in delay-100 transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliable Network</h3>
              <p className="text-gray-600">
                Extensive network of pre-qualified carriers ensuring consistent capacity and dependable service.
              </p>
            </div>
            
            <div className="text-center animate-fade-in delay-200 transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Service</h3>
              <p className="text-gray-600">
                Dedicated account management with hands-on approach and personalized attention to your needs.
              </p>
            </div>
            
            <div className="text-center animate-fade-in delay-300 transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Response</h3>
              <p className="text-gray-600">
                Fast quote turnaround and responsive communication to keep your business moving efficiently.
              </p>
            </div>
            
            <div className="text-center animate-fade-in delay-400 transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 hover:scale-110">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Process</h3>
              <p className="text-gray-600">
                Streamlined booking and transparent pricing with detailed documentation for easy management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-transform duration-500 hover:scale-105">Get Your Quote Today</h2>
            <p className="text-xl text-gray-600">
              Ready to ship? Contact us for competitive rates and reliable service.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-fade-in delay-200">
              <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                  <CardDescription>Get in touch with our logistics experts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Phone</div>
                      <div className="text-gray-600">(555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">quote@everflowlogistics.com</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Business Hours</h4>
                    <p className="text-blue-800">Monday - Friday: 7:00 AM - 7:00 PM EST</p>
                    <p className="text-blue-800">Saturday: 8:00 AM - 4:00 PM EST</p>
                    <p className="text-blue-800">24/7 Emergency Support Available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-fade-in delay-400">
              <Card className="shadow-lg border-0 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Request a Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 2 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <Input
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Details *</label>
                      <Textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your shipping needs: pickup location, destination, freight type, weight, etc."
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      {isSubmitting ? "Sending..." : "Get Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 animate-fade-in">
              <div className="flex items-center mb-2">
                <Truck className="h-8 w-8 text-blue-400 mr-3 transition-transform duration-300 hover:scale-110" />
                <div className="font-bold text-xl">Everflow Logistics</div>
              </div>
              <p className="text-gray-400">Simplifying Freight, Empowering Logistics</p>
            </div>
            
            <div className="flex space-x-6 animate-fade-in delay-200">
              <a href="mailto:contact@everflowlogistics.com" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                <Users className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Everflow Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
