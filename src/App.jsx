import { useEffect, useState } from 'react';
import './App.css';
import Background from './components/Background';
import BackToTop from './components/BackToTop';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();
  const [isReady, setIsReady] = useState(false);

  useReveal([isReady]);

  // The intro plays inside the real header logo (see Nav/AnimatedLogo) —
  // there is no separate loading screen to unmount. Scroll stays locked
  // until the initials have nearly finished docking into place.
  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', !isReady);
  }, [isReady]);

  return (
    <div className={`app${isReady ? ' is-ready' : ''}`}>
      <Background isInteractive={isReady} />
      <Nav theme={theme} onToggleTheme={toggle} onIntroSettle={() => setIsReady(true)} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
