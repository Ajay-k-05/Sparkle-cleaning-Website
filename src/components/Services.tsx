import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Sparkles, Wrench, Building2, Calendar, Leaf } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Regular House Cleaning",
    description: "Weekly, bi-weekly, or monthly cleaning to keep your home spotless",
    price: "Starting at $80",
    features: ["All rooms cleaned", "Kitchen & bathrooms", "Dusting & vacuuming", "Eco-friendly products"]
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning for a fresh start",
    price: "Starting at $200",
    features: ["Inside appliances", "Baseboards & trim", "Light fixtures", "Cabinet interiors"]
  },
  {
    icon: Wrench,
    title: "Move-in/Move-out",
    description: "Complete cleaning for your transition",
    price: "Starting at $250",
    features: ["Empty home cleaning", "Inside all cabinets", "All surfaces", "Ready for occupancy"]
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional commercial cleaning services",
    price: "Custom pricing",
    features: ["Daily/weekly service", "Sanitization", "Trash removal", "Professional image"]
  },
  {
    icon: Calendar,
    title: "One-Time Cleaning",
    description: "Perfect for special events or spring cleaning",
    price: "Starting at $120",
    features: ["Flexible scheduling", "Custom focus areas", "No commitment", "Same great quality"]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Green cleaning products for a healthier home",
    price: "No extra charge",
    features: ["Non-toxic products", "Safe for pets/kids", "Environmentally friendly", "Natural ingredients"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-trust-navy mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From regular maintenance to deep cleaning, we provide comprehensive services 
            tailored to your specific needs and schedule.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-gentle hover:shadow-floating transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-trust-navy text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-fresh-blue">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-clean-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;