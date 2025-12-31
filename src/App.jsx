import { useState, useEffect, Suspense, lazy } from 'react'
import {
  MessageCircle,
  Copy,
  Check,
  Droplets,
  Twitter,
  BarChart3,
  Menu
} from 'lucide-react'
import './App.css'

// Lazy load components for performance
const SuiBuilders = lazy(() => import('./components/SuiBuilders'));
const About = lazy(() => import('./components/About'));
const Tokenomics = lazy(() => import('./components/Tokenomics'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const HowToBuy = lazy(() => import('./components/HowToBuy'));

function LoadingSection() {
  return <div className="section-loading" style={{ height: '300px' }}></div>;
}

function App() {
  const [copied, setCopied] = useState(false);
  const [footerCopied, setFooterCopied] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = [
    "The Wettest Pussy on SUI",
    "SUI's Most Unapologetic Meme Coin",
    "Built for Degens. Backed by Builders."
  ];

  const contractAddress = "0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA";

  // Rotating headline effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const copyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyFooterContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setFooterCopied(true);
    setTimeout(() => setFooterCopied(false), 2000);
  };

  // Generate water drops (Memoized to prevent re-calculation on every render)
  // We use a fixed seed-like approach or just generate once
  const [waterDrops] = useState(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 3}s`
  })));

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="/aqua-icon.webp" alt="AQUA" width="48" height="48" />
            <span>$AQUA</span>
          </a>

          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#sui-builders">SUI Builders</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#how-to-buy">How to Buy</a></li>
            </ul>

            <div className="social-links">
              <a href="https://t.me/AQUA_CAT_ON_SUI" target="_blank" rel="noopener noreferrer" title="Telegram" aria-label="Join our Telegram Community">
                <MessageCircle size={20} />
              </a>
              <a href="https://x.com/AQUA_on_SUI" target="_blank" rel="noopener noreferrer" title="X/Twitter" aria-label="Follow us on X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://dexscreener.com/sui/0x78f5e63a1732220b1f4d575e94d61d25d5416aa77f4387cd763366fde463f6e8" target="_blank" rel="noopener noreferrer" title="DexScreener" aria-label="View on DexScreener">
                <BarChart3 size={20} />
              </a>
            </div>
          </nav>

          <button className="mobile-menu-btn" aria-label="Open Menu"><Menu size={24} /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        {/* Optimized Hero Background for LCP - WebP + Responsive Sizes */}
        <picture className="hero-bg-wrapper">
          <source
            srcSet="/aqua-hero-mobile.webp 640w, /aqua-hero-tablet.webp 1200w, /aqua-hero.webp 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 100vw"
            type="image/webp"
          />
          <img
            src="/aqua-hero.jpg"
            srcSet="/aqua-hero-mobile.jpg 640w, /aqua-hero-tablet.jpg 1200w, /aqua-hero.jpg 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="hero-bg"
            alt="AQUA Background"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </picture>

        <div className="water-drops">
          {waterDrops.map(drop => (
            <div
              key={drop.id}
              className="drop"
              style={{
                left: drop.left,
                animationDelay: drop.delay,
                animationDuration: drop.duration
              }}
            />
          ))}
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <span className="hero-badge">
                <Droplets size={16} /> Built on SUI Network
              </span>
              <h1 className="rotating-headline">
                <span className="gradient-text" key={headlineIndex}>
                  {headlines[headlineIndex]}
                </span>
              </h1>
              <p className="hero-tagline">
                Forged with perpetually wet fur and a disgruntled demeanor — AQUA is the internet anti-hero, master of disguise, and loves to get into the costume box.
              </p>
            </div>

            <div className="hero-actions">
              <h3 className="buy-heading">Buy $AQUA Now</h3>
              <div className="hero-buttons">
                <a href="https://app.cetus.zone/swap/0x2::sui::SUI/0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA" className="logo-btn" target="_blank" rel="noopener noreferrer" aria-label="Buy AQUA on Cetus">
                  <img src="/cetus-logo.webp" alt="Buy on Cetus" width="120" height="40" />
                </a>
                <a href="https://dex.suidex.org" className="logo-btn" target="_blank" rel="noopener noreferrer" aria-label="Buy AQUA on SUIDEX">
                  <img src="/suidex-logo.webp" alt="Buy on SUIDEX" width="120" height="40" />
                </a>
              </div>

              <div className="contract-address-large" onClick={copyContract}>
                <span className="ca-label">Contract Address</span>
                <span className="ca-value">{contractAddress.slice(0, 25)}...{contractAddress.slice(-15)}</span>
                <span className="ca-copy">{copied ? <Check size={20} /> : <Copy size={20} />} {copied ? 'Copied!' : 'Copy'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<LoadingSection />}>
        <SuiBuilders />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Tokenomics />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <Roadmap />
      </Suspense>

      <Suspense fallback={<LoadingSection />}>
        <HowToBuy />
      </Suspense>

      {/* Footer - Enhanced */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src="/aqua-icon.webp" alt="AQUA" width="60" height="60" loading="lazy" />
                  <span className="gradient-text">$AQUA</span>
                </div>
                <div className="built-on-sui">
                  <Droplets size={16} />
                  <span>Built on SUI Network</span>
                </div>
              </div>

              <div className="footer-links">
                <h4>Community</h4>
                <div className="footer-socials-large">
                  <a href="https://t.me/AQUA_CAT_ON_SUI" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={24} />
                    <span>Telegram</span>
                  </a>
                  <a href="https://x.com/AQUA_on_SUI" target="_blank" rel="noopener noreferrer">
                    <Twitter size={24} />
                    <span>X / Twitter</span>
                  </a>
                  <a href="https://dexscreener.com/sui/0x78f5e63a1732220b1f4d575e94d61d25d5416aa77f4387cd763366fde463f6e8" target="_blank" rel="noopener noreferrer">
                    <BarChart3 size={24} />
                    <span>DexScreener</span>
                  </a>
                </div>
              </div>

              <div className="footer-contract">
                <h4>Contract Address</h4>
                <div className="footer-ca" onClick={copyFooterContract}>
                  <span className="footer-ca-value">{contractAddress.slice(0, 20)}...{contractAddress.slice(-12)}</span>
                  <span className="footer-ca-copy">{footerCopied ? <Check size={16} /> : <Copy size={16} />}</span>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="disclaimer">
                Disclaimer: $AQUA is a meme coin with no intrinsic value or expectation of financial return. It is for entertainment purposes only. Always do your own research. This is not financial advice.
              </p>
              <p className="copyright">
                © 2026 $AQUA - The Wettest Pussy on SUI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
