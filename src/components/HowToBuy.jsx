import { AlertCircle } from 'lucide-react';

export default function HowToBuy() {
    return (
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
    );
}
