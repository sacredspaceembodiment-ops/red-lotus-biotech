import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const goals = [
  'Skin Health & Anti-Aging',
  'Athletic Performance & Recovery',
  'Pain Management',
  'Better Sleep & Energy',
  'Mental Wellness',
  'Overall Health Optimization'
];

const lifestyles = [
  { value: 'athlete', label: 'Active Athlete', description: 'Regular training and need for recovery' },
  { value: 'professional', label: 'Busy Professional', description: 'Limited time, maximum efficiency' },
  { value: 'wellness', label: 'Wellness Enthusiast', description: 'Holistic health approach' },
  { value: 'recovery', label: 'Recovery Focus', description: 'Managing pain or injury' }
];

export default function Personalization() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedLifestyle, setSelectedLifestyle] = useState<string>('');

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  return (
    <section id="personalize" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-900/50 to-rose-900/50 border border-red-500 rounded-full text-red-300 text-sm font-medium mb-4 backdrop-blur-sm">
              Personalized Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Discover Your Divine Match
            </h2>
            <p className="text-lg text-gray-300">
              Answer a few questions to receive personalized light therapy recommendations
            </p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-red-500/20 p-8 md:p-12 border border-red-900">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                What are your wellness intentions?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedGoals.includes(goal)
                        ? 'border-red-500 bg-gradient-to-r from-red-950 to-rose-950 shadow-lg shadow-red-500/20'
                        : 'border-red-900 hover:border-red-700 hover:bg-red-950/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{goal}</span>
                      {selectedGoals.includes(goal) && (
                        <CheckCircle2 className="text-red-400" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                What's your lifestyle?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {lifestyles.map((lifestyle) => (
                  <button
                    key={lifestyle.value}
                    onClick={() => setSelectedLifestyle(lifestyle.value)}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedLifestyle === lifestyle.value
                        ? 'border-red-500 bg-gradient-to-r from-red-950 to-rose-950 shadow-lg shadow-red-500/20'
                        : 'border-red-900 hover:border-red-700 hover:bg-red-950/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-white">{lifestyle.label}</h4>
                      {selectedLifestyle === lifestyle.value && (
                        <CheckCircle2 className="text-red-400" size={20} />
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{lifestyle.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={selectedGoals.length === 0 || !selectedLifestyle}
              className="group w-full px-8 py-5 bg-gradient-to-r from-red-600 via-rose-500 to-red-400 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Get My Recommendations
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
