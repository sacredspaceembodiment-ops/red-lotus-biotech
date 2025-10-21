import { Zap, Shield, Sparkles, Heart, Brain, Moon } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Boost Energy',
    description: 'Increase cellular energy production and reduce fatigue naturally'
  },
  {
    icon: Sparkles,
    title: 'Skin Rejuvenation',
    description: 'Stimulate collagen production for healthier, younger-looking skin'
  },
  {
    icon: Heart,
    title: 'Muscle Recovery',
    description: 'Accelerate healing and reduce inflammation after workouts'
  },
  {
    icon: Brain,
    title: 'Mental Clarity',
    description: 'Enhance cognitive function and improve overall mood'
  },
  {
    icon: Moon,
    title: 'Better Sleep',
    description: 'Regulate circadian rhythm for deeper, more restful sleep'
  },
  {
    icon: Shield,
    title: 'Pain Relief',
    description: 'Natural solution for chronic pain and joint discomfort'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500 rounded-full text-red-300 text-sm font-medium mb-4 backdrop-blur-sm">
            Wellness Benefits
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Light Therapy?
          </h2>
          <p className="text-lg text-gray-300">
            Harness the power of specific wavelengths to optimize your body's natural healing flow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-red-900 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 via-rose-500 to-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
