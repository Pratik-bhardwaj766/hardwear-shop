import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Zap, Shield, Truck, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900 flex items-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1600&auto=format" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full text-primary-light font-bold text-sm">
              <Zap className="h-4 w-4" />
              <span>Special Offer: Up to 30% Off on Fans</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Powering Your <span className="text-primary">Space</span> with Excellence
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Discover a wide range of premium electrical components, from energy-efficient LED lighting to industrial-grade wires.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/products" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center justify-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/products?category=LED Lights" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                View LED Lights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Shield />, title: "Quality Assured", desc: "Premium certified products" },
            { icon: <Truck />, title: "Free Delivery", desc: "On orders over ₹1000" },
            { icon: <Clock />, title: "24/7 Support", desc: "Expert technical assistance" },
            { icon: <Zap />, title: "Energy Efficient", desc: "Save up to 40% on bills" }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 transition-colors group">
              <div className="text-primary mb-4 p-3 bg-primary/10 rounded-xl w-fit group-hover:bg-primary group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Featured Products</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full"></div>
          </div>
          <Link to="/products" className="text-primary font-bold hover:text-primary-dark flex items-center space-x-2 group">
            <span>View All Products</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-16 tracking-tight">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Bulbs', 'Fans', 'Switch Boards', 'Electric Wires', 'LED Lights', 'Batteries'].map((cat, i) => (
              <Link 
                key={i} 
                to={`/products?category=${cat}`}
                className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-transparent hover:border-primary/20 group"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Zap className="h-8 w-8 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
