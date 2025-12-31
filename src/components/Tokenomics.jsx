import { Coins, Lock, Rocket, Gem, Gift, Swords } from 'lucide-react';

export default function Tokenomics() {
    return (
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
    );
}
