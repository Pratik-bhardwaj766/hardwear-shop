import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight">VoltSpark</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">Shop All</Link>
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative p-2 text-gray-600 mr-4">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="px-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-primary"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 hover:text-primary"
            >
              Shop All
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
