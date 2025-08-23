import { ShoppingBag, Star, Heart, Filter, Search, ArrowRight, Waves, Package, Truck, Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "Professional BCD Vest",
    price: "₹18,500",
    originalPrice: "₹22,000",
    rating: 4.8,
    reviews: 124,
    image: "/api/placeholder/300/300",
    category: "BCDs",
    badge: "Best Seller",
    inStock: true
  },
  {
    id: 2,
    name: "Diving Regulator Set",
    price: "₹35,000",
    originalPrice: "₹40,000",
    rating: 4.9,
    reviews: 89,
    image: "/api/placeholder/300/300",
    category: "Regulators",
    badge: "Professional",
    inStock: true
  },
  {
    id: 3,
    name: "Full Face Diving Mask",
    price: "₹8,500",
    originalPrice: "₹10,000",
    rating: 4.7,
    reviews: 156,
    image: "/api/placeholder/300/300",
    category: "Masks",
    badge: "New",
    inStock: true
  },
  {
    id: 4,
    name: "Neoprene Wetsuit 5mm",
    price: "₹12,000",
    originalPrice: "₹15,000",
    rating: 4.6,
    reviews: 203,
    image: "/api/placeholder/300/300",
    category: "Wetsuits",
    badge: "",
    inStock: true
  },
  {
    id: 5,
    name: "Diving Fins Pro",
    price: "₹4,500",
    originalPrice: "₹5,500",
    rating: 4.5,
    reviews: 178,
    image: "/api/placeholder/300/300",
    category: "Fins",
    badge: "",
    inStock: false
  },
  {
    id: 6,
    name: "Underwater Camera",
    price: "₹45,000",
    originalPrice: "₹52,000",
    rating: 4.9,
    reviews: 67,
    image: "/api/placeholder/300/300",
    category: "Cameras",
    badge: "Premium",
    inStock: true
  },
  {
    id: 7,
    name: "Diving Computer Watch",
    price: "₹28,000",
    originalPrice: "₹32,000",
    rating: 4.8,
    reviews: 145,
    image: "/api/placeholder/300/300",
    category: "Computers",
    badge: "Featured",
    inStock: true
  },
  {
    id: 8,
    name: "Dive Knife with Sheath",
    price: "₹2,800",
    originalPrice: "₹3,500",
    rating: 4.4,
    reviews: 234,
    image: "/api/placeholder/300/300",
    category: "Accessories",
    badge: "",
    inStock: true
  }
];

const categories = [
  { name: "All Products", count: 48 },
  { name: "BCDs", count: 12 },
  { name: "Regulators", count: 8 },
  { name: "Masks", count: 15 },
  { name: "Wetsuits", count: 10 },
  { name: "Fins", count: 18 },
  { name: "Cameras", count: 6 },
  { name: "Computers", count: 9 },
  { name: "Accessories", count: 25 }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="bg-slate-900/90 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Dive Azure</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Courses
              </Link>
              <Link href="/shop" className="text-cyan-400 font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link href="/login" className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-semibold transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 pt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
              <ShoppingBag className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Professional Diving Equipment</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Dive Gear</span>{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shop</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium diving equipment for professionals and enthusiasts. Quality gear trusted by diving instructors worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-cyan-600/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-gray-300">Free shipping on orders over ₹5,000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-gray-300">1 Year Warranty on all products</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Package className="h-5 w-5 text-cyan-400" />
              <span className="text-sm text-gray-300">Fast delivery across India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 mb-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2 text-cyan-400" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="w-full text-left py-2 px-3 rounded-lg hover:bg-cyan-500/10 transition-colors flex justify-between items-center group">
                      <span className="text-gray-300 group-hover:text-cyan-400">{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-4">Price Range</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded-lg font-medium transition-colors">
                  Apply Filter
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search diving equipment..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <select className="px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white focus:outline-none focus:border-cyan-400">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
                  <div className="relative">
                    <div className="aspect-square bg-slate-700/50 flex items-center justify-center">
                      <Package className="h-16 w-16 text-gray-400" />
                    </div>
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-red-500/20 transition-colors">
                      <Heart className="h-4 w-4 text-gray-400 hover:text-red-400" />
                    </button>
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-cyan-400 mb-2">{product.category}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400 ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      className="w-full py-3 rounded-lg font-semibold transition-colors bg-orange-600 hover:bg-orange-500 text-white cursor-default"
                      disabled={true}
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center mx-auto">
                Load More Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-slate-900/50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Exclusive <span className="text-cyan-400">Diving Deals</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for special offers, new product launches, and diving tips from professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
            <button className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
