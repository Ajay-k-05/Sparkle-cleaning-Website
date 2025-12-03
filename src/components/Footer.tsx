import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-fresh-blue to-clean-green bg-clip-text text-transparent mb-4">
              SparkleClean
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional house cleaning services you can trust. We make your home sparkle while you focus on what matters most.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-fresh-blue/20 rounded-full flex items-center justify-center hover:bg-fresh-blue/30 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-fresh-blue/20 rounded-full flex items-center justify-center hover:bg-fresh-blue/30 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-fresh-blue/20 rounded-full flex items-center justify-center hover:bg-fresh-blue/30 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Regular Cleaning</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Move-in/Move-out</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">One-time Service</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Eco-Friendly Options</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-fresh-blue transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-fresh-blue transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-fresh-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fresh-blue" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fresh-blue" />
                <span>info@sparkleclean.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-fresh-blue" />
                <span>Greater Metro Area</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Mon-Fri: 8AM - 6PM</div>
                <div>Sat-Sun: 9AM - 5PM</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 SparkleClean. All rights reserved. Licensed, Bonded & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;