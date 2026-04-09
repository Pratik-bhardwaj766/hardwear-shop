import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center space-y-12 min-h-screen">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
          <div className="relative bg-white p-12 rounded-full shadow-2xl border border-gray-100 transform group-hover:scale-110 transition-transform duration-500">
            <ShoppingBag className="h-24 w-24 text-gray-200 group-hover:text-primary transition-colors" />
          </div>
        </div>
        <div className="space-y-4 max-w-md">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">Your cart is empty</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our latest electrical supplies and start shopping!
          </p>
        </div>
        <Link 
          to="/products" 
          className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center space-x-3 group"
        >
          <span>Start Shopping</span>
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen space-y-12">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Shopping Cart</h1>
          <p className="text-gray-500 font-bold">You have {totalItems} items in your bag</p>
        </div>
        <button 
          onClick={clearCart}
          className="text-red-500 hover:text-red-600 font-bold flex items-center space-x-2 p-2 hover:bg-red-50 rounded-xl transition-all"
        >
          <Trash2 className="h-5 w-5" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10 hover:shadow-md transition-shadow group">
              <div className="relative shrink-0 w-40 h-40 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="space-y-1">
                  <span className="text-xs font-black text-primary uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-6">
                  <div className="flex items-center bg-gray-50 rounded-2xl p-1.5 border border-gray-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center font-black text-gray-600 hover:bg-white rounded-xl transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-black text-lg text-gray-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center font-black text-gray-600 hover:bg-white rounded-xl transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-2"
                  >
                    <Trash2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="shrink-0 text-center md:text-right">
                <p className="text-2xl font-black text-gray-900">₹{item.price * item.quantity}</p>
                <p className="text-sm font-bold text-gray-400">₹{item.price} each</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 sticky top-32 space-y-10">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight flex items-center space-x-3">
              <Zap className="h-7 w-7 text-primary fill-current" />
              <span>Order Summary</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center text-lg font-bold text-gray-500">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-gray-500">
                <span>Shipping</span>
                <span className="text-green-500 uppercase tracking-widest text-sm">Free</span>
              </div>
              <div className="h-px bg-gray-100 w-full"></div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-gray-900">Total</span>
                <span className="text-3xl font-black text-primary tracking-tight">₹{totalPrice}</span>
              </div>
            </div>

            <div className="space-y-6">
              <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center space-x-4">
                <span>Checkout Now</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              
              <div className="flex items-center justify-center space-x-3 text-gray-400">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="text-sm font-bold uppercase tracking-widest">Secure Checkout</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-sm font-bold text-gray-500 leading-relaxed text-center">
                Prices include all applicable taxes. No hidden fees at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
