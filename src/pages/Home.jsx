import { useState, useEffect, Suspense, lazy } from 'react'
import {
    Check,
    Copy,
    Droplets
} from 'lucide-react'
import Header from '../components/Header';
import Footer from '../components/Footer';

// Lazy load components for performance
const SuiBuilders = lazy(() => import('../components/SuiBuilders'));
const About = lazy(() => import('../components/About'));
const Tokenomics = lazy(() => import('../components/Tokenomics'));
const Roadmap = lazy(() => import('../components/Roadmap'));
const HowToBuy = lazy(() => import('../components/HowToBuy'));

function LoadingSection() {
    return <div className="section-loading" style={{ height: '300px' }}></div>;
}

export default function Home() {
    const [copied, setCopied] = useState(false);
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

    // Generate water drops (Memoized to prevent re-calculation on every render)
    const [waterDrops] = useState(() => Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 3}s`
    })));

    // Promo Banner Component
    const PromoBanner = () => {
        const [isVisible, setIsVisible] = useState(true);

        useEffect(() => {
            const checkTime = () => {
                const now = new Date();
                // Deadline: February 9th at 12:00 (Noon) - using local time as implied, or defaulting to UTC if needed
                // "12:00 9th Feb" - Assuming 2026 based on project context "aqua2026"
                const deadline = new Date('2026-02-09T12:00:00');

                if (now > deadline) {
                    setIsVisible(false);
                }
            };

            checkTime();
            // Optional: check every minute to auto-remove without refresh
            const timer = setInterval(checkTime, 60000);
            return () => clearInterval(timer);
        }, []);

        if (!isVisible) return null;

        return (
            <div className="promo-banner">
                🚀 AQUA MEME COMP - Get rewarded for Original memes!!!
                <a href="https://memecomp.aquacatcoin.xyz" target="_blank" rel="noopener noreferrer">
                    Enter Now →
                </a>
            </div>
        );
    };

    return (
        <>
            <PromoBanner />
            <Header />

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

            <Footer />
        </>
    )
}
