import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  wavelengths: string;
  coverage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pro Panel 1500',
    category: 'panel',
    price: 899,
    image: '🔴',
    rating: 4.9,
    reviews: 234,
    wavelengths: '630, 660, 810, 850, 940nm',
    coverage: 'Full Body'
  },
  {
    id: 2,
    name: 'Face Therapy Mask',
    category: 'mask',
    price: 349,
    image: '😷',
    rating: 4.8,
    reviews: 156,
    wavelengths: '630, 660, 810nm',
    coverage: 'Face & Neck'
  },
  {
    id: 3,
    name: 'Recovery Mat Pro',
    category: 'mat',
    price: 1299,
    image: '🟥',
    rating: 5.0,
    reviews: 89,
    wavelengths: '630, 660, 810, 850, 940nm',
    coverage: 'Full Body'
  },
  {
    id: 4,
    name: 'Mini Panel 750',
    category: 'panel',
    price: 499,
    image: '📱',
    rating: 4.7,
    reviews: 312,
    wavelengths: '660, 810, 850nm',
    coverage: 'Targeted'
  },
  {
    id: 5,
    name: 'Premium Face Mask',
    category: 'mask',
    price: 449,
    image: '✨',
    rating: 4.9,
    reviews: 201,
    wavelengths: '630, 660, 810, 850nm',
    coverage: 'Face, Neck & Décolleté'
  },
  {
    id: 6,
    name: 'Travel Mat Compact',
    category: 'mat',
    price: 799,
    image: '🧘',
    rating: 4.6,
    reviews: 143,
    wavelengths: '660, 810, 850nm',
    coverage: 'Partial Body'
  }
];

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'panel', label: 'Panels' },
  { value: 'mask', label: 'Masks' },
  { value: 'mat', label: 'Mats' }
];

interface ProductsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Products({ selectedCategory, onCategoryChange }: ProductsProps) {
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500 rounded-full text-red-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Our Products
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Divine Light Medicine
          </h2>
          <p className="text-lg text-gray-300">
            Professional-grade healing devices designed for your home wellness sanctuary
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white shadow-lg shadow-red-500/40'
                  : 'bg-zinc-900 border-2 border-red-900 text-gray-300 hover:border-red-500 hover:bg-red-950'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-900/80 rounded-2xl border-2 border-red-900 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 overflow-hidden"
            >
              <div className="relative bg-gradient-to-br from-zinc-900 to-black aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-rose-900/20 to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-8xl relative z-10">{product.image}</span>
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-rose-500 text-white text-sm font-bold rounded-full shadow-lg">
                  PREMIUM
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="fill-amber-400 text-amber-400" size={16} />
                  <span className="font-bold text-white">{product.rating}</span>
                  <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>

                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Wavelengths:</span>
                    <span className="font-medium bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">{product.wavelengths}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Coverage:</span>
                    <span className="font-medium text-white">{product.coverage}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-red-900">
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">${product.price}</span>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white rounded-full font-medium hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center gap-2">
                    <ShoppingCart size={20} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
