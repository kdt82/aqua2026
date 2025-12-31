import { Droplets } from 'lucide-react';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image">
                        <img src="/aqua-icon.webp" alt="AQUA Cat" width="400" height="400" loading="lazy" />
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
    );
}
