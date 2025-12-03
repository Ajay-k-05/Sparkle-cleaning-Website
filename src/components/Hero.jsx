// import { Button } from "@/components/ui/button";
// import { Star, Shield, Clock } from "lucide-react";
// import heroImage from "@/assets/hero-cleaning.jpg";

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-accent to-pure-white py-20 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="animate-fade-in">
//             <div className="flex items-center space-x-2 mb-6">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <span className="text-trust-navy font-medium">Trusted by 500+ Happy Customers</span>
//             </div>
            
//             <h1 className="text-4xl lg:text-6xl font-bold text-trust-navy mb-6 leading-tight">
//               Professional
//               <span className="bg-gradient-hero bg-clip-text text-transparent"> House Cleaning </span>
//               You Can Trust
//             </h1>
            
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Transform your home with our eco-friendly cleaning services. Professional, reliable, and insured cleaners who treat your home like their own.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-gentle text-lg px-8 py-4">
//                 Book Now - Free Estimate
//               </Button>
//               <Button variant="outline" size="lg" className="border-fresh-blue text-fresh-blue hover:bg-fresh-blue hover:text-white transition-colors text-lg px-8 py-4">
//                 Call (555) 123-4567
//               </Button>
//             </div>
            
//             <div className="grid grid-cols-3 gap-6">
//               <div className="text-center">
//                 <Shield className="h-8 w-8 text-fresh-blue mx-auto mb-2" />
//                 <p className="text-sm font-medium text-trust-navy">Fully Insured</p>
//               </div>
//               <div className="text-center">
//                 <Clock className="h-8 w-8 text-clean-green mx-auto mb-2" />
//                 <p className="text-sm font-medium text-trust-navy">Same Day Service</p>
//               </div>
//               <div className="text-center">
//                 <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
//                 <p className="text-sm font-medium text-trust-navy">5-Star Rated</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative animate-gentle-float">
//             <div className="relative rounded-2xl overflow-hidden shadow-floating">
//               <img 
//                 src={heroImage} 
//                 alt="Professional house cleaning service" 
//                 className="w-full h-auto object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// Hero.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent to-pure-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-trust-navy font-medium">Trusted by 500+ Happy Customers</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-trust-navy mb-6 leading-tight">
              Professional
              <span className="bg-gradient-hero bg-clip-text text-transparent"> House Cleaning </span>
              You Can Trust
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your home with our eco-friendly cleaning services. Professional, reliable,
              and insured cleaners who treat your home like their own.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-gentle text-lg px-8 py-4"
              >
                Book Now - Free Estimate
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-fresh-blue text-fresh-blue hover:bg-fresh-blue hover:text-white transition-colors text-lg px-8 py-4"
              >
                Call (555) 123-4567
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="h-8 w-8 text-fresh-blue mx-auto mb-2" />
                <p className="text-sm font-medium text-trust-navy">Fully Insured</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-clean-green mx-auto mb-2" />
                <p className="text-sm font-medium text-trust-navy">Same Day Service</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-trust-navy">5-Star Rated</p>
              </div>
            </div>
          </div>

          <div className="relative animate-gentle-float">
            <div className="relative rounded-2xl overflow-hidden shadow-floating">
              <img
                src={heroImage}
                alt="Professional house cleaning service"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
