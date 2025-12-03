import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "SparkleClean has been cleaning our home for over a year now. They're always professional, thorough, and use eco-friendly products that are safe for our kids and pets. Highly recommend!",
    service: "Regular Cleaning"
  },
  {
    name: "Michael Chen",
    location: "Westside",
    rating: 5,
    text: "I hired them for a deep clean before hosting a family gathering. They exceeded my expectations! Every corner was spotless and they even organized areas I didn't ask them to. Amazing service.",
    service: "Deep Cleaning"
  },
  {
    name: "Emily Rodriguez",
    location: "Eastside",
    rating: 5,
    text: "Moving is stressful enough, but SparkleClean made our move-out cleaning seamless. The apartment was pristine and we got our full security deposit back. Thank you!",
    service: "Move-out Cleaning"
  },
  {
    name: "David Thompson",
    location: "Northside",
    rating: 5,
    text: "As a busy professional, I appreciate their reliability and attention to detail. They always arrive on time and leave my home sparkling clean. Worth every penny!",
    service: "Weekly Cleaning"
  },
  {
    name: "Lisa Park",
    location: "Southside",
    rating: 5,
    text: "I love that they use green cleaning products. My home smells fresh without harsh chemicals. The team is friendly and trustworthy - I feel comfortable having them in my home.",
    service: "Eco-Friendly Cleaning"
  },
  {
    name: "Robert Miller",
    location: "Central",
    rating: 5,
    text: "Their one-time cleaning service was perfect for our holiday party prep. They were flexible with timing and did an incredible job. Our guests were impressed with how clean everything was!",
    service: "One-time Cleaning"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-trust-navy mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our cleaning services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-pure-white border-0 shadow-gentle hover:shadow-floating transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-accent-foreground/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-trust-navy">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-fresh-blue">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;