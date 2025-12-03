import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Shield, Heart } from "lucide-react";
import teamImage from "@/assets/cleaning-team.jpg";

const stats = [
  { number: "500+", label: "Happy Customers", icon: Users },
  { number: "5", label: "Years Experience", icon: Award },
  { number: "100%", label: "Satisfaction Rate", icon: Heart },
  { number: "24/7", label: "Customer Support", icon: Shield }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-trust-navy mb-6">
              Why Choose SparkleClean?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another cleaning service. We're your trusted partner in maintaining 
              a healthy, beautiful home environment. Our experienced team uses eco-friendly products 
              and proven techniques to deliver exceptional results every time.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fresh-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-fresh-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-trust-navy mb-2">Fully Insured & Bonded</h3>
                  <p className="text-muted-foreground">Your home is protected with comprehensive insurance coverage.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-clean-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-clean-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-trust-navy mb-2">Trained Professionals</h3>
                  <p className="text-muted-foreground">Background-checked cleaners with ongoing training and certification.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-trust-navy mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">If you're not happy, we'll return within 24 hours to make it right.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-gradient-card border-0 shadow-gentle">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 text-fresh-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-trust-navy">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-floating">
              <img 
                src={teamImage} 
                alt="Professional cleaning team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;