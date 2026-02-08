import React, { Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';

// Lazy load sections
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const Timeline = lazy(() => import('./components/Timeline'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

import ThemeToggle from './components/ThemeToggle';

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[9999]">
    <div className="w-48 h-1 bg-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-teal animate-loading-bar" />
    </div>
    <span className="mt-4 text-[10px] tracking-[0.3em] text-steel/50 uppercase">Initialising Systems...</span>
    <style dangerouslySetInnerHTML={{
      __html: `
      @keyframes loading-bar {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(0); }
        100% { transform: translateX(100%); }
      }
      .animate-loading-bar {
        animation: loading-bar 2s ease-in-out infinite;
      }
    `}} />
  </div>
);

function App() {
  return (
    <main className="relative">
      <CustomCursor />
      <Background />
      <ThemeToggle />

      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Stats />
        <Timeline />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
