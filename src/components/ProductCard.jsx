import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Link 
            to={`/product/${product.id}`}
            className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Eye className="h-6 w-6" />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="p-3 bg-white text-gray-900 rounded-full hover:bg-secondary hover:text-white transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-black text-gray-900">₹{product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors text-sm font-semibold"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
