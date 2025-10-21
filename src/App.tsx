import { useState } from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Benefits from './components/Benefits';
import WavelengthScience from './components/WavelengthScience';
import Personalization from './components/Personalization';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <WavelengthScience />
      <Personalization />
      <Products selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
