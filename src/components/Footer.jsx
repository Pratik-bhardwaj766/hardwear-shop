import { Link } from 'react-router-dom';
import { Zap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-secondary" fill="currentColor" />
              <span className="text-2xl font-bold tracking-tight">VoltSpark</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for all high-quality electrical supplies. Powering your world with excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-secondary transition-colors">Cart</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/products?category=Bulbs" className="text-gray-400 hover:text-secondary transition-colors">Bulbs</Link></li>
              <li><Link to="/products?category=Fans" className="text-gray-400 hover:text-secondary transition-colors">Fans</Link></li>
              <li><Link to="/products?category=LED Lights" className="text-gray-400 hover:text-secondary transition-colors">LED Lights</Link></li>
              <li><Link to="/products?category=Electric Wires" className="text-gray-400 hover:text-secondary transition-colors">Wires</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-gray-400">123 Spark Avenue, Volt City, VC 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-gray-400">support@voltspark.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} VoltSpark Electricals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
