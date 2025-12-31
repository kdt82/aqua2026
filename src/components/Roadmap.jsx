export default function Roadmap() {
    return (
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
    );
}
