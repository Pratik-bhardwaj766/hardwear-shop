import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 min-h-screen">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-gray-500 hover:text-primary transition-colors font-bold group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Catalog</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Product Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 aspect-square">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-white text-sm font-black px-5 py-2 rounded-full shadow-lg">
                {product.category}
              </span>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-yellow-500">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-gray-400 text-sm font-bold">(48 Verified Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">{product.name}</h1>
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-black text-primary">₹{product.price}</span>
              <span className="text-gray-400 line-through text-lg font-bold">₹{Math.round(product.price * 1.2)}</span>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white rounded-xl transition-colors text-gray-600"
              >
                -
              </button>
              <span className="w-16 text-center font-black text-lg text-gray-900">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:bg-white rounded-xl transition-colors text-gray-600"
              >
                +
              </button>
            </div>
            <button 
              onClick={() => {
                for(let i=0; i<quantity; i++) addToCart(product);
              }}
              className="w-full sm:w-auto flex-1 bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center space-x-3"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Add to Cart</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            <div className="flex items-center space-x-4 group">
              <div className="bg-green-100 p-3 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">2 Year Warranty</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-sm font-bold text-gray-700">Energy Star Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-black text-gray-900 mb-10 flex items-center space-x-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <span>Technical Specifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex flex-col space-y-2 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{key}</span>
              <span className="text-lg font-bold text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
