import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative bg-black overflow-hidden">

      <nav className="relative z-20 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/red lotus .png"
              alt="Red Lotus Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">LumaDhara</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-300 hover:text-red-400 transition-colors font-medium">Products</a>
            <a href="#benefits" className="text-gray-300 hover:text-red-400 transition-colors font-medium">Benefits</a>
            <a href="#personalize" className="text-gray-300 hover:text-red-400 transition-colors font-medium">Personalize</a>
            <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors font-medium">About</a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white rounded-full font-medium hover:shadow-xl hover:shadow-red-500/40 transition-all">
              Shop Now
            </button>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-red-900 py-4 px-6 space-y-4 shadow-xl">
            <a href="#products" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">Products</a>
            <a href="#benefits" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">Benefits</a>
            <a href="#personalize" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">Personalize</a>
            <a href="#about" className="block text-gray-300 hover:text-red-400 transition-colors font-medium">About</a>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white rounded-full font-medium">
              Shop Now
            </button>
          </div>
        )}
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-6 pb-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500 rounded-full text-red-300 text-sm font-medium backdrop-blur-sm">
              Healing Light Technology
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl mb-2">
            Illuminate Your
            <span className="block bg-gradient-to-r from-red-500 via-rose-400 to-red-300 bg-clip-text text-transparent">
              Inner Radiance
            </span>
          </h1>

          <div className="relative w-full max-w-md mx-auto my-2">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 via-rose-500/40 to-red-500/40 blur-3xl"></div>
            <div className="relative">
              <img
                src="/300DPIREDlotusflowersquare1.jpg"
                alt="Red Lotus Flower"
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl relative z-10 -mt-2">
            Experience transformative red light therapy guided by ancient wisdom and modern science.
            Awaken your body's natural healing flow with personalized light medicine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="group px-7 py-3 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2">
              Begin Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-7 py-3 border-2 border-red-500 text-red-300 rounded-full font-semibold hover:bg-red-950 backdrop-blur-sm transition-all">
              Discover More
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-6">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">10k+</div>
              <div className="text-gray-400 text-xs">Souls Transformed</div>
            </div>
            <div className="h-10 w-px bg-gradient-to-b from-red-500 to-rose-500"></div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-gray-400 text-xs">Divine Reviews</div>
            </div>
            <div className="h-10 w-px bg-gradient-to-b from-rose-500 to-red-500"></div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">FDA</div>
              <div className="text-gray-400 text-xs">Approved</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}
