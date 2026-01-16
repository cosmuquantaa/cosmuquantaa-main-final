import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ImpactSection } from './components/ImpactSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CorePrinciples } from './components/CorePrinciples';
import { VisionMission } from './components/VisionMission';
import { TechnologyStack } from './components/TechnologyStack';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductPageCodeReview } from './components/ProductPageCodeReview';
import { ProductPageCustomFineTuning } from './components/ProductPageCustomFineTuning';
import { ProductPageQuickify } from './components/ProductPageQuickify';
import { ProductPageCosmuBuilder } from './components/ProductPageCosmuBuilder';
import { ProductPageCosmuView } from './components/ProductPageCosmuView';
import RippleGrid from './components/RippleGrid';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product-code' | 'product-llm' | 'product-quickify' | 'product-cosmu-builder' | 'product-cosmu-view'>('home');

  const handleNavigateToProduct = (productId: string) => {
    if (productId === 'code') {
      setCurrentView('product-code');
    } else if (productId === 'llm') {
      setCurrentView('product-llm');
    } else if (productId === 'quickify') {
      setCurrentView('product-quickify');
    } else if (productId === 'placeholder1') {
      setCurrentView('product-cosmu-builder');
    } else if (productId === 'placeholder2') {
      setCurrentView('product-cosmu-view');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'product-code') {
    return (
      <div className="min-h-screen bg-white">
        <ProductPageCodeReview onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'product-llm') {
    return (
      <div className="min-h-screen bg-white">
        <ProductPageCustomFineTuning onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'product-quickify') {
    return (
      <div className="min-h-screen bg-white">
        <ProductPageQuickify onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'product-cosmu-builder') {
    return (
      <div className="min-h-screen bg-white">
        <ProductPageCosmuBuilder onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  if (currentView === 'product-cosmu-view') {
    return (
      <div className="min-h-screen bg-white">
        <ProductPageCosmuView onBack={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Fixed RippleGrid Background */}
      <div className="fixed inset-0 z-0">
        <RippleGrid
          enableRainbow={true}
          gridColor="#00A8B5"
          rippleIntensity={0.04}
          gridSize={12}
          gridThickness={18}
          opacity={0.6}
          mouseInteraction={true}
          mouseInteractionRadius={1.5}
          vignetteStrength={2.5}
          fadeDistance={1.8}
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation />
        <main className="relative">
          <HeroSection />
          <ImpactSection />
          <IndustriesSection onNavigateToProduct={handleNavigateToProduct} />
          <CorePrinciples />
          <VisionMission />
          <TechnologyStack />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}