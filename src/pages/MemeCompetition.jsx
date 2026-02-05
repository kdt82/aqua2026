import { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Droplets, Send, Loader2, Check, Copy, AlertCircle } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import '../index.css'; // Ensure styles are applied

export default function MemeCompetition() {
    const [formData, setFormData] = useState({
        telegram: '',
        twitter: '',
        postLink: '',
        suiAddress: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [copied, setCopied] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const turnstileRef = useRef();

    // TODO: Paste your Google Script Web App URL here
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbf-F5cSIoKbNNifLrCiZ3H0af331CRxXEcedG2oH2ZVpeFIIQvmi8-b6r2fy795zK/exec";

    // TODO: Paste your Cloudflare Turnstile SITE KEY here
    const SITE_KEY = "0x4AAAAAACYKpNp4JyZt93Lt";

    const contractAddress = "0xab954d078dab0a6727ce58388931850be4bdb6f72703ea3cad3d6eb0c12a0283::aqua::AQUA";

    const copyContract = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("🚀 Starting submission process...");

        if (!turnstileToken) {
            console.error("❌ No Turnstile token present.");
            alert("Please complete the captcha challenge.");
            return;
        }

        setStatus('submitting');
        console.log("📦 Form Data:", formData);
        console.log("🔑 Turnstile Token:", turnstileToken);

        try {
            const data = new FormData();
            Object.keys(formData).forEach(key => data.append(key, formData[key]));
            data.append('cf-turnstile-response', turnstileToken);

            console.log("🌐 Sending request to:", GOOGLE_SCRIPT_URL);

            // removed 'no-cors' to attempt to read actual response errors
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: data
            });

            console.log("📨 Response Status:", response.status);

            // Check if we can read the JSON
            const result = await response.json();
            console.log("📄 Response Body:", result);

            if (result.result === 'success') {
                setStatus('success');
                setFormData({ telegram: '', twitter: '', postLink: '', suiAddress: '' });
                setTurnstileToken(null);
                if (turnstileRef.current) {
                    turnstileRef.current.reset();
                }
            } else {
                throw new Error(result.error || "Unknown server error");
            }
        } catch (err) {
            console.error("💥 Submission Error:", err);

            // If it's a CORS error (common with Apps Script), we might fallback or warn
            if (err.name === 'TypeError' && err.message === 'Failed to fetch') {
                console.warn("⚠️ CORS Error detected. The script might have executed, but we can't confirm. Check Google Sheet.");
                // For debugging, we show error. In production, we might assume success if we trust the script.
                setStatus('error');
                alert("Network Error: Check the Console. If you see a CORS error, the backend might be blocking the response.");
            } else {
                setStatus('error');
                alert("Submission Failed: " + err.message);
            }
        }
    };

    return (
        <>
            <Header />

            <div className="page-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '50px' }}>
                {/* Reusing hero background style */}
                <div className="hero-bg-wrapper" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                    <img src="/aqua-hero.jpg" className="hero-bg" alt="Background" style={{ filter: 'brightness(0.3)' }} />
                </div>

                <div className="container">
                    <div className="section-header">
                        <span className="hero-badge">
                            <Droplets size={16} /> Meme Competition
                        </span>
                        <h1 className="gradient-text">Submit Your Meme</h1>
                        <p>Join the battle for the wettest pussy on SUI. Submit your entry below.</p>
                    </div>

                    {/* Top Buy Button */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                        <a href="https://dex.suidex.org" className="logo-btn" target="_blank" rel="noopener noreferrer" aria-label="Buy AQUA on SUIDEX">
                            <img src="/suidex-logo.webp" alt="Buy on SUIDEX" width="120" height="40" />
                        </a>
                    </div>

                    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                <div style={{ background: 'rgba(0, 255, 100, 0.1)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#00ff64' }}>
                                    <Check size={40} />
                                </div>
                                <h3 style={{ marginBottom: '10px' }}>Entry Submitted!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Good luck! Keep an eye on our Telegram for winners.</p>
                                <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={() => setStatus('idle')}>Submit Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--accent-orange)', fontWeight: '600' }}>Telegram Username</label>
                                    <input
                                        type="text"
                                        name="telegram"
                                        placeholder="@yourusername"
                                        required
                                        value={formData.telegram}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--accent-orange)', fontWeight: '600' }}>X (Twitter) Username</label>
                                    <input
                                        type="text"
                                        name="twitter"
                                        placeholder="@yourusername"
                                        required
                                        value={formData.twitter}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--accent-orange)', fontWeight: '600' }}>Post Link</label>
                                    <input
                                        type="url"
                                        name="postLink"
                                        placeholder="https://x.com/..."
                                        required
                                        value={formData.postLink}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--accent-orange)', fontWeight: '600' }}>SUI Wallet Address</label>
                                    <input
                                        type="text"
                                        name="suiAddress"
                                        placeholder="0x..."
                                        required
                                        value={formData.suiAddress}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(0,0,0,0.3)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            outline: 'none'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <Turnstile
                                        siteKey={SITE_KEY}
                                        onSuccess={setTurnstileToken}
                                        ref={turnstileRef}
                                        options={{
                                            theme: 'dark'
                                        }}
                                    />
                                </div>

                                {status === 'error' && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff4d4d', background: 'rgba(255, 77, 77, 0.1)', padding: '10px', borderRadius: '8px' }}>
                                        <AlertCircle size={20} />
                                        <span>Something went wrong. Please try again.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status === 'submitting'}
                                    style={{ justifyContent: 'center', marginTop: '10px' }}
                                >
                                    {status === 'submitting' ? <Loader2 className="spin" size={20} /> : <Send size={20} />}
                                    {status === 'submitting' ? 'Submitting...' : 'Submit Entry'}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* CA Section */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <div className="contract-address-large" onClick={copyContract} style={{ maxWidth: '400px' }}>
                            <span className="ca-label">Contract Address</span>
                            <span className="ca-value">{contractAddress.slice(0, 20)}...{contractAddress.slice(-12)}</span>
                            <span className="ca-copy">{copied ? <Check size={20} /> : <Copy size={20} />} {copied ? 'Copied!' : 'Copy'}</span>
                        </div>
                    </div>

                    {/* Bottom Buy Button */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                        <a href="https://dex.suidex.org" className="logo-btn" target="_blank" rel="noopener noreferrer" aria-label="Buy AQUA on SUIDEX">
                            <img src="/suidex-logo.webp" alt="Buy on SUIDEX" width="120" height="40" />
                        </a>
                    </div>

                </div>
            </div>

            <Footer />
            <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </>
    );
}
