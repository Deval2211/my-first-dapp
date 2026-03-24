'use client';

import Link from 'next/link';
import { useAccount } from 'wagmi';
import { WalletButton } from '@/components/wallet-button';
import './landing.css';

function shortAddress(addr?: string) {
  if (!addr) return '';
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <main className="landing">
      <nav className="lc-nav">
        <div className="logo"><span className="logo-dot" /> TicketChain</div>
        <div className="nav-links">
          <a href="#">How it works</a>
          <a href="#">For Organizers</a>
          <a href="#">Marketplace</a>
          <a href="#">Docs</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <WalletButton />
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-tag">
          <span style={{ width: 6, height: 6, borderRadius: 6, background: 'var(--accent)', display: 'inline-block' }} />
          NFT-Powered Event Ticketing
        </div>
        <h1 className="lc-title">Your ticket is <span>on-chain</span>.<br />So is your trust.</h1>
        <p className="hero-sub">Mint, buy, and verify event tickets as NFTs — eliminating fakes, scalping, and shady resales. Every seat is unique. Every entry is trustless.</p>

        <div className="btn-group">
          <Link href="/events"><a className="btn-primary">Browse Events</a></Link>
          <a className="btn-outline" href="#">List as Organizer</a>
        </div>

        <div className="ticket-showcase">
          <div className="ticket">
            <div className="ticket-glow" />
            <div className="ticket-top">
              <div className="nft-badge">NFT #0471</div>
              <div className="ticket-event">Neon Horizons</div>
              <div className="ticket-artist">ft. ODESZA · Bonobo · Lane 8</div>
              <div className="ticket-meta">
                <div className="ticket-meta-item">
                  <label>Date</label>
                  <span>Apr 19, 2025</span>
                </div>
                <div className="ticket-meta-item">
                  <label>Venue</label>
                  <span>The Dome, Mumbai</span>
                </div>
                <div className="ticket-meta-item">
                  <label>Seat</label>
                  <span>A-12</span>
                </div>
              </div>
            </div>
            <div className="ticket-bottom">
              <div className="ticket-id">
                Token ID<br />
                <span>0x4a3f...c81e</span>
                <span className="tag-success">✓ Verified</span>
              </div>
              <div className="qr-box">
                <div className="qp" style={{ gridColumn: '1 / 4', gridRow: '1 / 4', borderRadius: 3 }} />
                <div className="qp" style={{ gridColumn: '2 / 3', gridRow: '2 / 3', background: 'var(--ink2)' }} />
                <div className="qp" style={{ gridColumn: '5 / 8', gridRow: '1 / 4', borderRadius: 3 }} />
                <div className="qp" style={{ gridColumn: '6 / 7', gridRow: '2 / 3', background: 'var(--ink2)' }} />
                <div className="qp" style={{ gridColumn: '1 / 4', gridRow: '5 / 8', borderRadius: 3 }} />
                <div className="qp" style={{ gridColumn: '2 / 3', gridRow: '6 / 7', background: 'var(--ink2)' }} />
                <div className="qp" />
                <div className="qp" />
                <div className="qp" />
                <div className="qp" />
                <div className="qp" />
              </div>
            </div>
          </div>
        </div>

        {isConnected ? (
          <div className="wallet-pill"><span className="wallet-dot" /> {shortAddress(address)}</div>
        ) : null}
      </section>

      <div className="stats-row">
        <div className="stat-cell">
          <div className="stat-num">48<span>K+</span></div>
          <div className="stat-label">Tickets Minted</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">1.2<span>K</span></div>
          <div className="stat-label">Events Hosted</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">0<span>%</span></div>
          <div className="stat-label">Duplicate Incidents</div>
        </div>
      </div>

      <section className="lc-section">
        <div className="section-tag">Process</div>
        <h2 className="lc-h2">How TicketChain works</h2>
        <p className="section-sub">Four simple steps from event creation to verified entry — all trustless, transparent, and on-chain.</p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">01</div>
            <div className="step-icon">🎭</div>
            <div className="step-title">Organizer creates event</div>
            <div className="step-desc">Deploy a smart contract defining ticket supply, pricing, resale royalties, and event metadata.</div>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <div className="step-icon">🪙</div>
            <div className="step-title">Tickets minted as NFTs</div>
            <div className="step-desc">Each seat becomes a unique, tamper-proof NFT stored in the buyer's crypto wallet.</div>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <div className="step-icon">🔄</div>
            <div className="step-title">Transparent resale market</div>
            <div className="step-desc">Secondary sales happen on-chain. Organizers earn royalties automatically on every trade.</div>
          </div>
          <div className="step-card">
            <div className="step-num">04</div>
            <div className="step-icon">✅</div>
            <div className="step-title">Instant gate verification</div>
            <div className="step-desc">Attendees scan a QR linked to their NFT or connect their wallet — entry granted in seconds.</div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="section-tag">Features</div>
        <h2 className="lc-h2">Built for organizers<br/>and attendees</h2>
        <p className="section-sub">Everything you need to run fraud-free, community-owned events.</p>

        <div className="features-grid">
          <div className="feat-cell">
            <div className="feat-icon">🔐</div>
            <div className="feat-title">Unforgeable ownership</div>
            <div className="feat-desc">Blockchain-backed tickets can't be duplicated, screenshotted, or counterfeited.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon">💸</div>
            <div className="feat-title">Royalty-enforced resales</div>
            <div className="feat-desc">Set a resale royalty once. Earn on every secondary sale, forever — no middlemen.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon">🌐</div>
            <div className="feat-title">Multi-chain support</div>
            <div className="feat-desc">Deploy on Ethereum, Polygon, or Base. Low-gas options for large events.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon">📱</div>
            <div className="feat-title">Wallet-native UX</div>
            <div className="feat-desc">Connect MetaMask, WalletConnect, or Coinbase Wallet. No apps to download.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon">🎟️</div>
            <div className="feat-title">Dynamic NFT metadata</div>
            <div className="feat-desc">Tickets can evolve — unlock merch, backstage access, or POAPs post-event.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon">📊</div>
            <div className="feat-title">Real-time analytics</div>
            <div className="feat-desc">Track mints, transfers, and resale volume from your organizer dashboard.</div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <p className="section-tag" style={{ textAlign: 'center' }}>Ready to launch?</p>
        <h2 className="lc-h2">The future of ticketing<br/>is <span style={{ color: 'var(--gold)' }}>on-chain</span></h2>
        <p>Join hundreds of organizers running transparent, scalp-proof events. Connect your wallet and mint your first ticket in under 5 minutes.</p>
        <div className="btn-group" style={{ justifyContent: 'center' }}>
          <a className="btn-primary" href="#">Start for Free</a>
          <a className="btn-outline" href="#">View on GitHub</a>
        </div>
      </div>

      <footer className="lc-footer">
        <div className="logo" style={{ fontSize: '1rem' }}><span className="logo-dot" /> TicketChain</div>
        <p style={{ color: 'var(--muted)' }}>Built on Ethereum · Open source · MIT License</p>
        <div className="footer-links">
          <a href="#">GitHub</a>
          <a href="#">Docs</a>
          <a href="#">Twitter</a>
          <a href="#">Discord</a>
        </div>
      </footer>
    </main>
  );
}