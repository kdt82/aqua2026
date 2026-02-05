import { Link } from 'react-router-dom';
import { MessageCircle, Twitter, BarChart3, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/aqua-icon.webp" alt="AQUA" width="48" height="48" />
          <span>$AQUA</span>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/#sui-builders">SUI Builders</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#tokenomics">Tokenomics</a></li>
            <li><a href="/#roadmap">Roadmap</a></li>
            <li><a href="/#how-to-buy">How to Buy</a></li>
            <li><Link to="/memecomp" style={{ color: 'var(--accent-orange)' }}>Meme Comp</Link></li>
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
  );
}
