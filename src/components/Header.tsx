import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-pure-white shadow-gentle sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              SparkleClean
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-trust-navy hover:text-fresh-blue transition-colors">
              Services
            </a>
            <a href="#about" className="text-trust-navy hover:text-fresh-blue transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-trust-navy hover:text-fresh-blue transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-trust-navy hover:text-fresh-blue transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-trust-navy">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">(555) 123-4567</span>
            </div>
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-gentle">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;