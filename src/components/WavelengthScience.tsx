import { Waves, Activity, Layers } from 'lucide-react';

const wavelengths = [
  {
    nm: '630',
    color: 'from-rose-400 to-red-500',
    depth: '2-3mm',
    layer: 'Superficial Skin',
    benefits: [
      'Stimulates collagen production and reduces wrinkles',
      'Promotes wound healing and skin rejuvenation',
      'Assists in hair regrowth by activating follicles',
      'Reduces lipid production and balances sebum output'
    ]
  },
  {
    nm: '660',
    color: 'from-red-500 to-red-600',
    depth: '4-5mm',
    layer: 'Deeper Dermis',
    benefits: [
      'Reduces inflammation and accelerates healing',
      'Enhances ATP production and cellular metabolism',
      'Supports tissue regeneration and reduces muscle fatigue',
      'Improves energy and recovery after exercise'
    ]
  },
  {
    nm: '810',
    color: 'from-red-600 to-rose-700',
    depth: '20-25mm',
    layer: 'Muscle & Joint Level',
    benefits: [
      'Promotes neurological and cognitive health',
      'Increases blood flow and mitochondrial energy',
      'Reduces joint pain and inflammation',
      'Beneficial for arthritis and sports injuries'
    ]
  },
  {
    nm: '850',
    color: 'from-rose-700 to-red-800',
    depth: '25-35mm',
    layer: 'Deep Tissue',
    benefits: [
      'Enhances circulation, detoxification, and tissue regeneration',
      'Aids muscle recovery and pain relief',
      'Deep anti-inflammatory effects',
      'Cellular healing across organ and muscle systems'
    ]
  },
  {
    nm: '940',
    color: 'from-red-800 to-rose-900',
    depth: '40mm+',
    layer: 'Deepest Penetration',
    benefits: [
      'Penetrates deeper muscles and connective tissues',
      'Chronic pain and injury repair',
      'Enhances circulatory and lymphatic flow',
      'Reduces swelling and edema'
    ]
  }
];

export default function WavelengthScience() {
  return (
    <section className="py-24 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500 rounded-full text-red-300 text-sm font-medium mb-4 backdrop-blur-sm">
            <Waves size={16} />
            Full Light Spectrum
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Science of Healing Wavelengths
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our devices harmonize five powerful wavelengths (630nm, 660nm, 810nm, 850nm, 940nm) to create
            a multi-dimensional energy matrix that flows from surface to soul for complete transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {wavelengths.map((wavelength, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 backdrop-blur-sm border border-red-900 hover:border-red-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${wavelength.color} rounded-lg text-white font-bold text-lg mb-2 shadow-lg`}>
                    {wavelength.nm} nm
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Layers size={16} />
                      <span>Depth: {wavelength.depth}</span>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-red-950/50 border border-red-900 rounded-full text-xs font-medium text-red-300">
                  {wavelength.layer}
                </div>
              </div>

              <ul className="space-y-3">
                {wavelength.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-900/20 via-rose-900/20 to-red-900/20 backdrop-blur-sm border border-red-900 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-rose-500 to-red-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30">
              <Activity className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Divine Full-Spectrum Synergy</h3>
              <p className="text-gray-300 leading-relaxed">
                When harmonized, these five wavelengths create a powerful multi-dimensional healing matrix
                that flows through every layer of your being, from surface skin to deepest tissue.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-rose-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white mb-1">Surface to Soul Activation</h4>
                <p className="text-gray-400 text-sm">Awakens collagen flow, cellular repair, and divine ATP energy from skin to spirit</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white mb-1">Deep Anti-Aging</h4>
                <p className="text-gray-400 text-sm">Reduces wrinkles, enhances radiance, and promotes timeless cellular rejuvenation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-rose-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white mb-1">Holistic Pain Relief</h4>
                <p className="text-gray-400 text-sm">Dissolves inflammation and chronic pain through multi-dimensional healing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-bold text-white mb-1">Consciousness Enhancement</h4>
                <p className="text-gray-400 text-sm">Elevates mental clarity and supports divine neurological awakening</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-red-900">
            <p className="text-center text-gray-300 italic">
              This 630-660-810-850-940nm configuration offers complete photobiomodulation,
              flowing from skin cells and hair follicles to muscles, joints, and neural pathways
              for deep healing and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
