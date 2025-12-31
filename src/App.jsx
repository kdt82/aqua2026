import { useState, useEffect } from 'react'
import {
  Coins,
  Lock,
  Rocket,
  Gem,
  Gift,
  Swords,
  Wallet,
  ArrowRightLeft,
  CreditCard,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  Droplets,
  Users,
  Zap,
  Trophy,
  Twitter,
  BarChart3,
  Menu,
  AlertCircle
} from 'lucide-react'
import './App.css'

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

  // Generate water drops
  const waterDrops = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 3}s`
  }));

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="/aqua-icon.jpg" alt="AQUA" />
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
              <a href="https://t.me/AQUA_CAT_ON_SUI" target="_blank" rel="noopener noreferrer" title="Telegram">
                <MessageCircle size={20} />
              </a>
              <a href="https://x.com/AQUA_on_SUI" target="_blank" rel="noopener noreferrer" title="X/Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://dexscreener.com/sui/0x78f5e63a1732220b1f4d575e94d61d25d5416aa77f4387cd763366fde463f6e8" target="_blank" rel="noopener noreferrer" title="DexScreener">
                <BarChart3 size={20} />
              </a>
            </div>
          </nav>

          <button className="mobile-menu-btn"><Menu size={24} /></button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
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
                <a href="https://app.cetus.zone/swap/0x2::sui::SUI/0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA" className="logo-btn" target="_blank" rel="noopener noreferrer">
                  <img src="/cetus-logo.png" alt="Buy on Cetus" />
                </a>
                <a href="https://dex.suidex.org" className="logo-btn" target="_blank" rel="noopener noreferrer">
                  <img src="/suidex-logo.png" alt="Buy on SUIDEX" />
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

      {/* SUI Builders Section */}
      <section className="sui-builders" id="sui-builders">
        <div className="container">
          <div className="section-header">
            <h2>Official Partner with <span className="gradient-text">SUI Builders</span></h2>
            <p>Our rocket fuel partners powering the $AQUA journey</p>
          </div>

          <div className="builders-content">
            <div className="builders-text">
              <p className="builders-intro">
                <a href="https://linktr.ee/suibuilders" target="_blank" rel="noopener noreferrer">SUI Builders</a> aren't just partners — they've been the rocket fuel behind $AQUA's journey.
              </p>
              <p>From day one, the SUI Builder community has had our back:</p>

              <div className="builders-features">
                <div className="builder-feature">
                  <div className="feature-icon">
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4>Running Ads</h4>
                    <p>Amplifying our message across their applications</p>
                  </div>
                </div>

                <div className="builder-feature">
                  <div className="feature-icon">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4>Community Bot</h4>
                    <p>Powering our Telegram with their Staking Bot integrated with Moonbags.io</p>
                  </div>
                </div>

                <div className="builder-feature">
                  <div className="feature-icon">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4>Ecosystem Growth</h4>
                    <p>Standing shoulder to shoulder as we grow across SUI</p>
                  </div>
                </div>
              </div>

              <p className="builders-statement">
                We're not just a project on SUI — we're building alongside the very people shaping its future. Being part of the SUI Builders isn't a badge… it's a statement.
              </p>

              <a href="https://linktr.ee/suibuilders" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} /> Visit SUI Builders
              </a>
            </div>

            <div className="builders-visual">
              <img src="/suibuilders.jpg" alt="SUI Builders" className="partner-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Streamlined */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/aqua-icon.jpg" alt="AQUA Cat" />
            </div>

            <div className="about-text">
              <h2>The Legend of <span className="gradient-text">$AQUA</span></h2>
              <p className="about-lead">
                Meet the cat with an unbreakable curse — umbrellas simply won't work. Every storm, every drizzle... soaked.
              </p>
              <p>
                We turned this soggy saga into crypto gold. Join $AQUA and embrace the chaos.
              </p>

              <div className="trait-list">
                <span className="trait"><Droplets size={14} /> Perpetually Wet</span>
                <span className="trait">😾 Disgruntled AF</span>
                <span className="trait">🎭 Master of Disguise</span>
                <span className="trait">🦸 Anti-Hero Energy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section with Supply Bar */}
      <section className="tokenomics" id="tokenomics">
        <div className="container">
          <div className="section-header">
            <h2><span className="gradient-text">Aqua-nomics</span></h2>
            <p>Simple, transparent, and community-first tokenomics</p>
          </div>

          {/* Supply Distribution Bar */}
          <div className="supply-bar-container">
            <h3 className="supply-title">Total Supply: 1 Billion $AQUA</h3>
            <div className="supply-bar">
              <div className="supply-segment circulating" style={{ width: '75%' }}>
                <span><span className="segment-label">Circulating </span>75%</span>
              </div>
              <div className="supply-segment staked" style={{ width: '15%' }}>
                <span><span className="segment-label">Staked </span>15%+</span>
              </div>
              <div className="supply-segment locked" style={{ width: '10%' }}>
                <span><span className="segment-label">Locked </span>10%</span>
              </div>
            </div>
            <div className="supply-stats">
              <div className="supply-stat">
                <span className="stat-value">50M+</span>
                <span className="stat-label">Tokens Airdropped</span>
              </div>
              <div className="supply-stat">
                <span className="stat-value">15%+</span>
                <span className="stat-label">Supply Staked</span>
              </div>
              <div className="supply-stat">
                <span className="stat-value">10%</span>
                <span className="stat-label">Locked Until Mar 2026</span>
              </div>
            </div>
          </div>

          <div className="tokenomics-grid">
            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Coins size={28} />
              </div>
              <h3>1 Billion</h3>
              <p className="token-label">Total Supply</p>
              <p>Fixed supply designed for simplicity and long-term clarity.</p>
            </div>

            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Lock size={28} />
              </div>
              <h3>10% Locked</h3>
              <p className="token-label">Until 1st March 2026</p>
              <p>Reserved tokens are locked and will only be unlocked to fund community initiatives.</p>
            </div>

            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Rocket size={28} />
              </div>
              <h3>100% Fair Launch</h3>
              <p className="token-label">No Presale</p>
              <p>Open, transparent, and community-first. Everyone gets to jump in the same puddle.</p>
            </div>

            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Gem size={28} />
              </div>
              <h3>Moonbags Staking</h3>
              <p className="token-label">Earn Passive SUI</p>
              <p>Stake your $AQUA on Moonbags.io to earn passive income while you HODL.</p>
            </div>

            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Gift size={28} />
              </div>
              <h3>50M+ Airdropped</h3>
              <p className="token-label">Community Rewards</p>
              <p>Over 50 million tokens distributed to community members.</p>
            </div>

            <div className="card tokenomics-card card-glow">
              <div className="icon">
                <Swords size={28} />
              </div>
              <h3>Weekly Raids</h3>
              <p className="token-label">500K Token Budget</p>
              <p>Dedicated weekly Raid 2 Earn campaigns to reward community loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section with Status Indicators */}
      <section className="roadmap" id="roadmap">
        <div className="container">
          <div className="section-header">
            <h2>The <span className="gradient-text">Forecast</span></h2>
            <p>Our journey from soggy beginnings to making it rain</p>
          </div>

          <div className="roadmap-legend">
            <span className="legend-item"><span className="legend-icon completed">✔</span> Completed</span>
            <span className="legend-item"><span className="legend-icon in-progress">⏳</span> In Progress</span>
            <span className="legend-item"><span className="legend-icon planned">⬜</span> Planned</span>
          </div>

          <div className="roadmap-timeline">
            <div className="roadmap-item completed">
              <div className="roadmap-dot completed"></div>
              <div className="roadmap-content">
                <div className="phase-header">
                  <h3>Phase 1: Foundation & Community</h3>
                  <span className="status-badge completed">✔ Complete</span>
                </div>
                <p className="phase-description">Existence, identity, and social gravity established.</p>
                <ul>
                  <li className="done">Official $AQUA website launched</li>
                  <li className="done">X (Twitter) and Telegram communities activated</li>
                  <li className="done">Core branding established</li>
                  <li className="done">Meme content pipeline live</li>
                  <li className="done">Community giveaways & campaigns</li>
                  <li className="done">SUI ecosystem exposure via Moonbags</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-item completed">
              <div className="roadmap-dot completed"></div>
              <div className="roadmap-content">
                <div className="phase-header">
                  <h3>Phase 2: Token Launch & Market Validation</h3>
                  <span className="status-badge completed">✔ Complete</span>
                </div>
                <p className="phase-description">Token works, trades, and attracts real holders.</p>
                <ul>
                  <li className="done">$AQUA deployed via Moonbags</li>
                  <li className="done">Graduated to Cetus DEX</li>
                  <li className="done">Liquidity pools live (Cetus / SuiDex)</li>
                  <li className="done">Organic holder growth achieved</li>
                  <li className="done">Community raids & XP systems live</li>
                  <li className="done">Staking adoption established</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-item active">
              <div className="roadmap-dot active"></div>
              <div className="roadmap-content">
                <div className="phase-header">
                  <h3>Phase 3: Utility & Ecosystem Expansion</h3>
                  <span className="status-badge active">⏳ Active</span>
                </div>
                <p className="phase-description">Pivot from meme coin → meme ecosystem.</p>
                <ul>
                  <li className="done">Raid2Earn mechanics battle-tested</li>
                  <li className="done">Raffles & XP tracking proven</li>
                  <li className="done">NFT concepts validated</li>
                  <li className="pending">"Rainy Day Fund" NFT Collection</li>
                  <li className="pending">$AQUA merchandise line</li>
                  <li className="pending">Strategic CEX conversations</li>
                </ul>
              </div>
            </div>

            <div className="roadmap-item upcoming">
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <div className="phase-header">
                  <h3>Phase 4: Sustainability & Real-World Impact</h3>
                  <span className="status-badge upcoming">⬜ Planned</span>
                </div>
                <p className="phase-description">Online-native becomes values-native.</p>
                <ul>
                  <li className="pending">Long-term holder alignment programs</li>
                  <li className="pending">Deeper SUI ecosystem partnerships</li>
                  <li className="pending">Clean water charitable initiatives</li>
                  <li className="pending">Position AQUA as enduring SUI culture token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="how-to-buy" id="how-to-buy">
        <div className="container">
          <div className="section-header">
            <h2>Get Your <span className="gradient-text">Paws Wet</span></h2>
            <p>Join the soggiest community on SUI in just a few steps</p>
          </div>

          <div className="network-reminder">
            <AlertCircle size={20} />
            <span>You must be on the <strong>SUI Network</strong> to buy $AQUA</span>
          </div>

          <div className="how-to-buy-steps">
            <div className="card step-card card-glow">
              <div className="step-number">1</div>
              <h3>Get a SUI Wallet</h3>
              <p>Download a SUI-compatible wallet to securely store your tokens.</p>
              <div className="wallet-logos">
                <a href="https://slush.app/" target="_blank" rel="noopener noreferrer" className="wallet-link">
                  <span>Slush</span>
                </a>
                <a href="https://phantom.com/download" target="_blank" rel="noopener noreferrer" className="wallet-link">
                  <span>Phantom</span>
                </a>
                <a href="https://suiwallet.com" target="_blank" rel="noopener noreferrer" className="wallet-link">
                  <span>Sui Wallet</span>
                </a>
              </div>
            </div>

            <div className="card step-card card-glow">
              <div className="step-number">2</div>
              <h3>Fund Your Wallet</h3>
              <p>Get $SUI tokens from these popular exchanges.</p>
              <div className="step-links">
                <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer">Binance</a>
                <a href="https://www.coinbase.com" target="_blank" rel="noopener noreferrer">Coinbase</a>
                <a href="https://www.okx.com" target="_blank" rel="noopener noreferrer">OKX</a>
                <a href="https://www.bybit.com" target="_blank" rel="noopener noreferrer">Bybit</a>
              </div>
            </div>

            <div className="card step-card card-glow">
              <div className="step-number">3</div>
              <h3>Swap for $AQUA</h3>
              <p>Head to a DEX and swap your $SUI for $AQUA!</p>
              <div className="step-links">
                <a href="https://app.cetus.zone/swap/0x2::sui::SUI/0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA" target="_blank" rel="noopener noreferrer">Cetus</a>
                <a href="https://dex.suidex.org" target="_blank" rel="noopener noreferrer">SUIDEX</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">
                  <img src="/aqua-icon.jpg" alt="AQUA" />
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
