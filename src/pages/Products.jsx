import { useSearchParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import { Filter, Search, Grid, List } from 'lucide-react';
import { useState, useMemo } from 'react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => (categoryFilter === 'All' || p.category === categoryFilter))
      .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        return 0;
      });
  }, [categoryFilter, searchTerm, sortBy]);

  const categories = ['All', 'Bulbs', 'Fans', 'Switch Boards', 'Electric Wires', 'LED Lights', 'Batteries'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-8 md:space-y-0">
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Electrical Catalog</h1>
          <p className="text-gray-500 max-w-lg">
            Explore our extensive collection of high-quality electrical components for home and industrial use.
          </p>
        </div>
        <div className="flex items-center space-x-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100 w-full md:w-auto">
          <Search className="h-5 w-5 text-gray-400 ml-4 shrink-0" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="bg-transparent border-none focus:ring-0 text-gray-700 py-3 px-4 w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-8 flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <span>Filter by Category</span>
            </h3>
            <div className="space-y-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all font-semibold ${
                    categoryFilter === cat 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-8">Sort By</h3>
            <select 
              className="w-full bg-gray-50 border-none rounded-xl py-4 px-5 text-gray-600 font-semibold focus:ring-primary focus:bg-white transition-all"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
              <Search className="h-16 w-16 text-gray-200 mx-auto mb-6" />
              <p className="text-2xl font-bold text-gray-400">No products found matching your criteria</p>
              <button 
                onClick={() => {setSearchTerm(''); setSearchParams({category: 'All'})}}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
