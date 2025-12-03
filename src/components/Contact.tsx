import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-trust-navy mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the SparkleClean difference? Contact us for a free, 
            no-obligation quote tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gradient-card border-0 shadow-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-trust-navy">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-fresh-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-fresh-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-navy mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Available 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-clean-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-clean-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-navy mb-1">Email</h3>
                    <p className="text-muted-foreground">info@sparkleclean.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-navy mb-1">Service Area</h3>
                    <p className="text-muted-foreground">Greater Metro Area</p>
                    <p className="text-sm text-muted-foreground">Free estimates within 25 miles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-trust-navy mb-1">Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 8AM - 6PM</p>
                    <p className="text-muted-foreground">Sat-Sun: 9AM - 5PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-gradient-card border-0 shadow-gentle">
              <CardHeader>
                <CardTitle className="text-2xl text-trust-navy">Request Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-trust-navy mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" className="border-soft-gray" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-trust-navy mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="border-soft-gray" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="border-soft-gray" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" className="border-soft-gray" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Service Needed
                    </label>
                    <select className="w-full p-3 border border-soft-gray rounded-md bg-pure-white text-trust-navy">
                      <option>Regular Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-in/Move-out</option>
                      <option>One-time Cleaning</option>
                      <option>Office Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-trust-navy mb-2 block">
                      Additional Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your home size, specific needs, preferred schedule..."
                      className="border-soft-gray min-h-[100px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity shadow-gentle text-lg py-3">
                    Get My Free Quote
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    We'll contact you within 2 hours with your personalized quote
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;