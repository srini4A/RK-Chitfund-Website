import { useEffect } from 'react';
import './App.css';

const appScreen = '/app-screen.jpeg';
const brandLogo = '/rk-logo.png';
const apkDownloadUrl = '/RK-Chitfunds.apk';
function App() {


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-logo">
          <img
            src={brandLogo}
            alt="Radha Krishna Chit Funds"
            className="brand-logo"
          />
         
        </div>
        <a href="#download" className="nav-cta">
          ⬇ Download App
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Now Available on Android</div>
          <h1>
            Grow Your Wealth
            <br />
            with <em>Chit Funds</em>
            <br />
            You Can Trust
          </h1>
          <p>
            Join thousands of members investing smarter with Radha Krishna Chit Funds -
            automated draws, seamless payments, and total transparency at your fingertips.
          </p>
          <div className="hero-btns">
            <a href="#download" className="btn-primary">
             <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
  <path d="M17.6 9.48l1.43-2.49a.5.5 0 0 0-.87-.5l-1.46 2.53A8.03 8.03 0 0 0 12 8c-1.64 0-3.17.5-4.44 1.35L6.1 6.82a.5.5 0 1 0-.87.5l1.43 2.49A8 8 0 0 0 4 15v3a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1v-3a8 8 0 0 0-2.4-5.52zM8 13.5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 13.5zm8 0A1.5 1.5 0 1 1 17.5 12 1.5 1.5 0 0 1 16 13.5z"/>
</svg>
              Download APK
            </a>
            <a href="#features" className="btn-ghost">
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-glow" />

        <div className="hero-visual">
          <div className="screen-frame">
            <img
              src={appScreen}
              alt="Radha Krishna app dashboard"
              className="app-screen"
            />
          </div>
        </div>
      </section>

      {/* <div className="stats-strip">
        <div className="stat-item scroll-reveal">
          <div className="stat-number">10,000+</div>
          <div className="stat-label">Active Members</div>
        </div>
        <div className="stat-item scroll-reveal">
          <div className="stat-number">₹50 Cr+</div>
          <div className="stat-label">Investment Managed</div>
        </div>
        <div className="stat-item scroll-reveal">
          <div className="stat-number">500+</div>
          <div className="stat-label">Draws Completed</div>
        </div>
        <div className="stat-item scroll-reveal">
          <div className="stat-number">100%</div>
          <div className="stat-label">Transparent & Secure</div>
        </div>
      </div> */}

      <section className="features" id="features">
        <span className="section-tag">What You Get</span>
        <h2 className="section-title">
          Everything You Need
          <br />
          to Invest with Confidence
        </h2>
        <p className="section-sub">
          From joining a chit to watching the live draw, manage your entire chit fund journey
          right from your phone.
        </p>
        <div className="features-grid">
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">🔐</div>
            <div className="feat-title">Secure Login and Onboarding</div>
            <div className="feat-desc">
              MPIN, biometric authentication, OTP verification, and KYC - your account stays
              locked and yours only.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">🏠</div>
            <div className="feat-title">Smart Home Dashboard</div>
            <div className="feat-desc">
              See your total investment, active chits, upcoming payments, and recent activity in
              one glanceable screen.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">💼</div>
            <div className="feat-title">My Chits Management</div>
            <div className="feat-desc">
              Track active, completed, and pending chits. View draw history, member lists, and
              download statements instantly.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">💰</div>
            <div className="feat-title">Smart Investment Plans</div>
            <div className="feat-desc">
              Browse Premium, Gold, Business, and Special plans. Filter, compare ROI, and join
              with a single tap.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">🎰</div>
            <div className="feat-title">Live Lucky Draws</div>
            <div className="feat-desc">
              Watch real-time animated draws with live countdown. Fully automated - completely
              fair, every time.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">💳</div>
            <div className="feat-title">Flexible Payments</div>
            <div className="feat-desc">
              UPI, cards, net banking, and wallets. Instant confirmation and digital receipts.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">🔔</div>
            <div className="feat-title">Smart Notifications</div>
            <div className="feat-desc">
              Never miss a payment or draw. Get push, email, and SMS alerts for everything that
              matters.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">🎯</div>
            <div className="feat-title">Referral Rewards</div>
            <div className="feat-desc">
              Invite friends and earn rewards. Track your referrals and bonuses right inside the
              app.
            </div>
          </div>
          <div className="feat-card scroll-reveal">
            <div className="feat-icon">📊</div>
            <div className="feat-title">Full Transparency</div>
            <div className="feat-desc">
              Download receipts, statements, and reports anytime. Every rupee tracked, every
              transaction logged.
            </div>
          </div>
        </div>
      </section>

      <section className="how">
        <span className="section-tag">Simple Process</span>
        <h2 className="section-title">
          Start Investing in
          <br />
          4 Simple Steps
        </h2>
        <p className="section-sub">
          Getting started takes less than 5 minutes. No paperwork. No queues. Just your phone.
        </p>

        <div className="steps">
          <div className="step scroll-reveal">
            <div className="step-num">1</div>
            <div className="step-title">Download and Register</div>
            <div className="step-desc">
              Install the app, sign up with your phone, and complete quick KYC verification.
            </div>
          </div>
          <div className="step scroll-reveal">
            <div className="step-num">2</div>
            <div className="step-title">Pick a Chit Plan</div>
            <div className="step-desc">
              Browse Premium, Gold, and Business plans and choose what fits your investment goals.
            </div>
          </div>
          <div className="step scroll-reveal">
            <div className="step-num">3</div>
            <div className="step-title">Pay and Participate</div>
            <div className="step-desc">
              Make monthly payments via UPI or card and automatically enter the lucky draw.
            </div>
          </div>
          <div className="step scroll-reveal">
            <div className="step-num">4</div>
            <div className="step-title">Watch and Win</div>
            <div className="step-desc">
              View live draws, track progress, and receive winnings directly to your account.
            </div>
          </div>
        </div>
      </section>

      <section className="payment">
        <div className="payment-inner">
          <div className="payment-left scroll-reveal">
            <span className="section-tag">Payment Methods</span>
            <h2 className="section-title">
              Pay Any Way
              <br />
              You Want
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '.95rem' }}>
              All major Indian payment methods supported - fast, safe, with instant confirmation
              and digital receipts every time.
            </p>
            <div className="pay-methods">
              {/* <div className="pay-badge">📱 UPI</div> */}
              <div className="pay-badge">💳 Credit / Debit Cards</div>
              <div className="pay-badge">🏦 Net Banking</div>
              <div className="pay-badge">👛 Wallets</div>
                         </div>
          </div>
          <div className="payment-right scroll-reveal">
            <span className="section-tag">Bank-Grade Security</span>
            <h2 className="section-title">
              Your Data is  
              <br />
              100% Protected
            </h2>
            <ul className="security-list">
              <li>
                <span className="check-icon">✓</span>MPIN and biometric authentication for every
                login
              </li>
              <li>
                <span className="check-icon">✓</span>OTP verification on every transaction
              </li>
              <li>
                <span className="check-icon">✓</span>End-to-end encrypted data handling
              </li>
              <li>
                <span className="check-icon">✓</span>Secure payment gateway integration
              </li>
              <li>
                <span className="check-icon">✓</span>Auto-logout and session management
              </li>
              <li>
                <span className="check-icon">✓</span>KYC-verified accounts only
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <div className="trust-strip">
        <h3>Trusted by Members Across Andhra Pradesh</h3>
        <div className="trust-cards">
          <div className="trust-card scroll-reveal">
            <div className="trust-stars">★★★★★</div>
            <div className="trust-text">
              "The live draw feature is amazing. Everything is transparent and I never worry about
              fairness. Best chit fund app I have used."
            </div>
            <div className="trust-author">
              Suresh Reddy <span>Member since 2023 · Hyderabad</span>
            </div>
          </div>
          <div className="trust-card scroll-reveal">
            <div className="trust-stars">★★★★★</div>
            <div className="trust-text">
              "Paying via UPI is so easy and I get instant receipts. Managing all my chits from one
              app has changed how I invest."
            </div>
            <div className="trust-author">
              Lakshmi Devi <span>Member since 2022 · Vijayawada</span>
            </div>
          </div>
          <div className="trust-card scroll-reveal">
            <div className="trust-stars">★★★★★</div>
            <div className="trust-text">
              "Joined the Gold Plan and won a draw in month 3. The app notified me instantly.
              Highly recommend to everyone!"
            </div>
            <div className="trust-author">
              Ramana Murthy <span>Member since 2024 · Vizag</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="cta-banner" id="download">
        <h2>
          Your Financial Growth
          <br />
          Starts Today
        </h2>
        <p>
          Download the Radha Krishna Chit Funds app and join thousands already growing their
          wealth.
        </p>
        <a href={apkDownloadUrl} className="btn-download" download="RK-Chitsfunds.apk">
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
  <path d="M17.6 9.48l1.43-2.49a.5.5 0 0 0-.87-.5l-1.46 2.53A8.03 8.03 0 0 0 12 8c-1.64 0-3.17.5-4.44 1.35L6.1 6.82a.5.5 0 1 0-.87.5l1.43 2.49A8 8 0 0 0 4 15v3a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h8v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1v-3a8 8 0 0 0-2.4-5.52zM8 13.5A1.5 1.5 0 1 1 9.5 12 1.5 1.5 0 0 1 8 13.5zm8 0A1.5 1.5 0 1 1 17.5 12 1.5 1.5 0 0 1 16 13.5z"/>
</svg>
          <span>
            <span>Download Free APK</span>
            <span className="btn-download-sub">Android · Direct Install</span>
          </span>
        </a>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="nav-logo">
            <img
              src={brandLogo}
              alt="Radha Krishna Chit Funds"
              className="brand-logo footer-brand-logo"
            />
           
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#contact">Contact Us</a>
            <a href="#download">Download</a>
          </div>
        </div>
        <div className="footer-copy">© 2025 Radha Krishna Chit Funds. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;
