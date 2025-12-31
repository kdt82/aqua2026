import { Rocket, Users, Zap, ExternalLink } from 'lucide-react';

export default function SuiBuilders() {
    return (
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
                        <img src="/suibuilders.webp" alt="SUI Builders" className="partner-image" width="375" height="375" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}
