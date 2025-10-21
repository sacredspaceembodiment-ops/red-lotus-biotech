import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/red lotus .png"
                alt="Red Lotus Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">LumaDhara</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium light therapy devices for your wellness journey and spiritual transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-red-950/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all border border-red-900 hover:border-red-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-950/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all border border-red-900 hover:border-red-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-950/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all border border-red-900 hover:border-red-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-950/50 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all border border-red-900 hover:border-red-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Light Therapy Panels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Healing Masks</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Recovery Mats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Divine Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Wellness Bundles</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">How Light Heals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Research & Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Healing Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Wellness Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-red-300">Connect With Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a href="mailto:hello@lumadhara.com" className="hover:text-red-400 transition-colors">
                    hello@lumadhara.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <a href="tel:1-800-LUMINA" className="hover:text-red-400 transition-colors">
                    1-800-LUMINA
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Sanctuary</div>
                  <span className="text-white">
                    123 Wellness Ave<br />San Francisco, CA 94102
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-red-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 LumaDhara. All rights reserved. Made with sacred intention.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
