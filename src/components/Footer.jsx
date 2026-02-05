import { useState } from 'react';
import { MessageCircle, Twitter, BarChart3, Check, Copy, Droplets } from 'lucide-react';

export default function Footer() {
    const [footerCopied, setFooterCopied] = useState(false);
    const contractAddress = "0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA";

    const copyFooterContract = () => {
        navigator.clipboard.writeText(contractAddress);
        setFooterCopied(true);
        setTimeout(() => setFooterCopied(false), 2000);
    };

    return (
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
    );
}
