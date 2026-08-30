import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Programs = () => {
  const [activeSection, setActiveSection] = useState('direct');

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ['direct', 'outreach', 'youth'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const purple = '#4A2C4A';
  const sage = '#8da399';
  const gold = '#C5A059';
  const cream = '#f9f7f2';
  const dark = '#1a0a1a';

  return (
    <PageTransition>
      <div style={{ background: '#fff', overflowX: 'hidden' }}>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <header style={{
          background: `linear-gradient(160deg, ${dark} 0%, ${purple} 60%, #2d1240 100%)`,
          color: 'white',
          paddingTop: '160px',
          paddingBottom: '100px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(197,160,89,0.07)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(141,163,153,0.08)', pointerEvents: 'none' }}></div>

          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

              {/* Left */}
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(197,160,89,0.2)', color: gold, padding: '5px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
                  Our Programs
                </span>
                <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: '1.1', margin: '0 0 20px', color: 'white' }}>
                  From Crisis<br />
                  <span style={{ fontFamily: "'Dancing Script', cursive", color: gold, fontSize: '1.15em' }}>to Flourishing</span>
                </h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginBottom: '35px', maxWidth: '480px' }}>
                  Three pillars of support — designed around the real lives of African immigrant and refugee survivors in Iowa.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="tel:18442696203" style={{ background: gold, color: purple, padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fas fa-phone"></i> 1-844-269-6203
                  </a>
                  <Link to="/contact" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
                    Get in Touch
                  </Link>
                </div>
              </div>

              {/* Right — impact numbers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { number: '24/7', label: 'Crisis Support', icon: 'fa-phone-alt' },
                  { number: '3', label: 'Core Programs', icon: 'fa-layer-group' },
                  { number: '10+', label: 'Languages Served', icon: 'fa-language' },
                  { number: '100%', label: 'Confidential', icon: 'fa-lock' },
                ].map(({ number, label, icon }) => (
                  <div key={label} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    textAlign: 'center',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <i className={`fas ${icon}`} style={{ color: gold, fontSize: '1.2rem', marginBottom: '10px', display: 'block' }}></i>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', fontWeight: '800', color: 'white', lineHeight: 1 }}>{number}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ── STICKY NAV ───────────────────────────────────────── */}
        <div style={{
          position: 'sticky',
          top: '0',
          zIndex: 100,
          background: 'white',
          borderBottom: '1px solid #ede8e8',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
        }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>
            <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
              {[
                { id: 'direct', label: 'Direct Services', icon: 'fa-hands-helping' },
                { id: 'outreach', label: 'Outreach & FGM/C', icon: 'fa-bullhorn' },
                { id: 'youth', label: 'Youth Program', icon: 'fa-seedling' },
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: activeSection === id ? `3px solid ${purple}` : '3px solid transparent',
                    padding: '18px 28px',
                    fontFamily: "'Mulish', sans-serif",
                    fontWeight: activeSection === id ? '800' : '600',
                    fontSize: '0.9rem',
                    color: activeSection === id ? purple : '#888',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <i className={`fas ${icon}`}></i> {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 1: DIRECT SERVICES ───────────────────────── */}
        <section id="direct" style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>

            {/* Section label + heading */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
              <div>
                <span style={{ display: 'inline-block', background: `${purple}15`, color: purple, padding: '5px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  Pillar One
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.4rem', color: purple, lineHeight: '1.2', margin: '0 0 16px' }}>
                  Direct Services
                </h2>
                <div style={{ width: '50px', height: '4px', background: purple, borderRadius: '2px', marginBottom: '20px' }}></div>
                <p style={{ color: '#777', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  Holistic, culturally specific case management for survivors of domestic violence, sexual assault, and FGM/C — from the first call to long-term stability.
                </p>
              </div>
              <div style={{
                background: `linear-gradient(135deg, ${purple} 0%, #2d0a2d 100%)`,
                borderRadius: '20px',
                padding: '35px 40px',
                color: 'white'
              }}>
                <i className="fas fa-quote-left" style={{ color: gold, fontSize: '1.5rem', marginBottom: '16px', display: 'block', opacity: 0.7 }}></i>
                <p style={{ fontSize: '1.35rem', lineHeight: '1.8', margin: '0 0 24px', fontFamily: "'Dancing Script', cursive", color: gold, fontWeight: '700' }}>
                  "We walk alongside survivors — not ahead of them, not behind. Right beside them, every step."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(197,160,89,0.3)', border: `2px solid ${gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel', serif", fontWeight: '800', color: gold, fontSize: '0.85rem', flexShrink: 0 }}>
                    HJ
                  </div>
                  <div>
                    <p style={{ fontWeight: '800', color: 'white', margin: 0, fontSize: '0.9rem' }}>Hibo Jama</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Executive Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Three service cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '50px' }}>

              {/* Crisis Intervention */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid #f0eaf0' }}>
                <div style={{ background: purple, padding: '30px', color: 'white' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: '1.4rem' }}></i>
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', margin: 0 }}>Crisis Intervention</h3>
                </div>
                <div style={{ background: cream, padding: '28px' }}>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.93rem', marginBottom: '20px' }}>
                    Available around the clock, in your language. When you don't know who to call or where to turn — we are here.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['24/7 Crisis Advocacy', 'FGM/C Survivor Care', 'Safety Planning', 'Individual Counseling'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#555', fontSize: '0.9rem', borderBottom: '1px solid #ede8e8' }}>
                        <i className="fas fa-check-circle" style={{ color: sage, fontSize: '0.85rem', flexShrink: 0 }}></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Legal Support */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid #f0eaf0' }}>
                <div style={{ background: sage, padding: '30px', color: 'white' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <i className="fas fa-balance-scale" style={{ fontSize: '1.4rem' }}></i>
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', margin: 0 }}>Legal Support</h3>
                </div>
                <div style={{ background: cream, padding: '28px' }}>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.93rem', marginBottom: '20px' }}>
                    The legal system is complex. We provide guidance, accompaniment, and advocacy so no survivor faces it alone.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['VAWA Applications', 'U-Visa Assistance', 'Court Accompaniment', 'Immigration Support'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#555', fontSize: '0.9rem', borderBottom: '1px solid #ede8e8' }}>
                        <i className="fas fa-check-circle" style={{ color: sage, fontSize: '0.85rem', flexShrink: 0 }}></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stability */}
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid #f0eaf0' }}>
                <div style={{ background: gold, padding: '30px', color: 'white' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <i className="fas fa-home" style={{ fontSize: '1.4rem' }}></i>
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.15rem', margin: 0 }}>Stability & Practical</h3>
                </div>
                <div style={{ background: cream, padding: '28px' }}>
                  <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.93rem', marginBottom: '20px' }}>
                    Safety is the beginning. We help survivors rebuild the practical foundations of an independent life.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['Housing Assistance', 'Employment Help', 'Govt. Benefit Apps', 'Victim Compensation'].map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#555', fontSize: '0.9rem', borderBottom: '1px solid #ede8e8' }}>
                        <i className="fas fa-check-circle" style={{ color: sage, fontSize: '0.85rem', flexShrink: 0 }}></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div style={{ background: cream, border: `1px solid #e8dfe8`, borderLeft: `5px solid ${purple}`, borderRadius: '12px', padding: '28px 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontWeight: '800', color: purple, fontSize: '1rem', margin: '0 0 4px' }}>Need support right now?</p>
                <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>Our helpline is available 24/7. All calls are confidential.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:18442696203" style={{ background: purple, color: 'white', padding: '11px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-phone"></i> 1-844-269-6203
                </a>
                <Link to="/contact" style={{ background: 'white', color: purple, border: `2px solid ${purple}`, padding: '9px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ──────────────────────────────────────────── */}
        <div style={{ height: '2px', background: `linear-gradient(to right, transparent, ${purple}30, transparent)` }}></div>

        {/* ── SECTION 2: OUTREACH & FGM/C ─────────────────────── */}
        <section id="outreach" style={{ padding: '100px 0', background: cream }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
              <div>
                <span style={{ display: 'inline-block', background: `${sage}25`, color: '#5a7a70', padding: '5px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  Pillar Two
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.4rem', color: purple, lineHeight: '1.2', margin: '0 0 16px' }}>
                  Outreach &amp;<br />FGM/C
                </h2>
                <div style={{ width: '50px', height: '4px', background: sage, borderRadius: '2px', marginBottom: '20px' }}></div>
                <p style={{ color: '#777', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  Changing social norms takes presence, patience, and bold conversation — inside homes, mosques, churches, and community halls across Iowa.
                </p>
              </div>
              <div style={{ background: 'white', borderRadius: '20px', padding: '35px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', borderLeft: `5px solid ${sage}` }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555', margin: 0 }}>
                  Female Genital Cutting affects millions of survivors globally, including members of our Iowa community. Nisaa leads state-wide education and advocacy efforts — working directly with families, faith leaders, and healthcare providers to end the practice while providing compassionate, survivor-centered support.
                </p>
              </div>
            </div>

            {/* Three outreach cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '50px' }}>

              <div style={{ background: 'white', borderRadius: '20px', padding: '35px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderTop: `4px solid ${purple}` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${purple}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fas fa-venus" style={{ color: purple, fontSize: '1.4rem' }}></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: purple, fontSize: '1.1rem', marginBottom: '12px' }}>Women's Advocacy</h3>
                <p style={{ color: '#666', lineHeight: '1.75', fontSize: '0.93rem', margin: 0 }}>
                  Celebrating International Women's Day and hosting panel discussions that center African women's voices, lived experiences, and leadership in Des Moines.
                </p>
              </div>

              <div style={{ background: purple, borderRadius: '20px', padding: '35px', boxShadow: '0 8px 30px rgba(74,44,74,0.25)', borderTop: `4px solid ${gold}` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fas fa-ribbon" style={{ color: gold, fontSize: '1.4rem' }}></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: 'white', fontSize: '1.1rem', marginBottom: '12px' }}>End FGM/C</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.75', fontSize: '0.93rem', margin: 0 }}>
                  Leading state-wide education on the harms of Female Genital Cutting — while providing sensitive, non-judgmental support for survivors and at-risk girls.
                </p>
              </div>

              <div style={{ background: 'white', borderRadius: '20px', padding: '35px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', borderTop: `4px solid ${sage}` }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${sage}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <i className="fas fa-users" style={{ color: sage, fontSize: '1.4rem' }}></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: purple, fontSize: '1.1rem', marginBottom: '12px' }}>Community Presence</h3>
                <p style={{ color: '#666', lineHeight: '1.75', fontSize: '0.93rem', margin: 0 }}>
                  Tabling at cultural gatherings and religious centers across Iowa — making sure every family knows Nisaa exists and that help is close.
                </p>
              </div>
            </div>

            {/* CTA bar */}
            <div style={{ background: 'white', border: `1px solid #dde8e5`, borderLeft: `5px solid ${sage}`, borderRadius: '12px', padding: '28px 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontWeight: '800', color: purple, fontSize: '1rem', margin: '0 0 4px' }}>Want to partner with us on outreach?</p>
                <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>We welcome community organizations, faith leaders, and volunteers.</p>
              </div>
              <Link to="/get-involved" style={{ background: sage, color: 'white', padding: '11px 24px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-heart"></i> Get Involved
              </Link>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ──────────────────────────────────────────── */}
        <div style={{ height: '2px', background: `linear-gradient(to right, transparent, ${sage}40, transparent)` }}></div>

        {/* ── ASSISTANT DIRECTOR QUOTE ─────────────────────────── */}
        <section style={{ background: cream, padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px', alignItems: 'start' }}>

              {/* Quote on the LEFT — mirrors the director's on the right */}
              <div style={{
                background: `linear-gradient(135deg, #3a6b5f 0%, ${sage} 100%)`,
                borderRadius: '20px',
                padding: '35px 40px',
                color: 'white'
              }}>
                <i className="fas fa-quote-left" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5rem', marginBottom: '16px', display: 'block' }}></i>
                <p style={{ fontSize: '1.35rem', lineHeight: '1.8', margin: '0 0 24px', fontFamily: "'Dancing Script', cursive", color: 'white', fontWeight: '700' }}>
                  "Every young person who comes through our doors carries a story worth protecting. Our job is to make sure they know that story has a future."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel', serif", fontWeight: '800', color: 'white', fontSize: '0.85rem', flexShrink: 0 }}>
                    BA
                  </div>
                  <div>
                    <p style={{ fontWeight: '800', color: 'white', margin: 0, fontSize: '0.9rem' }}>Barwaqo Aden</p>
                    <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Assistant Director</p>
                  </div>
                </div>
              </div>

              {/* Text on the RIGHT */}
              <div style={{ paddingTop: '10px' }}>
                <span style={{ display: 'inline-block', background: `${sage}25`, color: '#3a6b5f', padding: '5px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  A Word From
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2rem', color: purple, lineHeight: '1.2', margin: '0 0 16px' }}>
                  Our Assistant Director
                </h2>
                <div style={{ width: '50px', height: '4px', background: sage, borderRadius: '2px', marginBottom: '20px' }}></div>
                <p style={{ color: '#777', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  Barwaqo Aden leads Nisaa's day-to-day operations and brings years of experience working directly with survivors, youth, and the broader African community in Des Moines.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── SECTION 3: YOUTH ─────────────────────────────────── */}
        <section id="youth" style={{ padding: '100px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '60px', alignItems: 'start', marginBottom: '60px' }}>
              <div>
                <span style={{ display: 'inline-block', background: `${gold}20`, color: '#8a6a20', padding: '5px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  Pillar Three
                </span>
                <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.4rem', color: purple, lineHeight: '1.2', margin: '0 0 16px' }}>
                  Youth<br />Program
                </h2>
                <div style={{ width: '50px', height: '4px', background: gold, borderRadius: '2px', marginBottom: '20px' }}></div>
                <p style={{ color: '#777', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  A safe harbor for young people navigating the space between African heritage and American life — building identity, resilience, and the next generation of leaders.
                </p>
              </div>
              <div style={{ background: `linear-gradient(135deg, ${gold}15 0%, ${cream} 100%)`, borderRadius: '20px', padding: '35px', border: `1px solid ${gold}30` }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555', margin: '0 0 20px' }}>
                  Children in our community carry a particular weight — processing trauma at home while navigating a school system that rarely reflects their culture or experience. Our youth programming meets them where they are, offering connection, mentorship, and the skills to shape their own futures.
                </p>
                <p style={{ fontWeight: '700', color: purple, margin: 0, fontStyle: 'italic' }}>
                  "Our youth are not just survivors of their circumstances — they are future leaders."
                </p>
              </div>
            </div>

            {/* Four program cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '50px' }}>

              {[
                {
                  icon: 'fa-comments',
                  color: purple,
                  title: 'Peer-to-Peer Support',
                  desc: 'Safe, facilitated spaces where young people connect with others who share their background and experience. Heard, seen, and never alone.'
                },
                {
                  icon: 'fa-user-graduate',
                  color: sage,
                  title: 'Youth Mentorship',
                  desc: 'Meaningful one-on-one relationships with mentors from the community who model strength, purpose, and what is possible.'
                },
                {
                  icon: 'fa-briefcase',
                  color: gold,
                  title: 'Leadership Internships',
                  desc: 'Real-world experience inside Nisaa and partner organizations — developing the next generation of advocates who understand this work from the inside.'
                },
                {
                  icon: 'fa-shield-heart',
                  color: purple,
                  title: 'Prevention Workshops',
                  desc: 'Age-appropriate education on healthy relationships, personal boundaries, and how to recognize, respond to, and report harm.'
                },
              ].map(({ icon, color, title, desc }) => (
                <div key={title} style={{
                  display: 'flex',
                  gap: '24px',
                  background: cream,
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  border: '1px solid #f0eaf0',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`fas ${icon}`} style={{ color: 'white', fontSize: '1.2rem' }}></i>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Cinzel', serif", color: purple, fontSize: '1rem', marginBottom: '10px', marginTop: 0 }}>{title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.7', fontSize: '0.92rem', margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA bar */}
            <div style={{ background: `linear-gradient(135deg, ${purple} 0%, #2d0a2d 100%)`, borderRadius: '20px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ color: 'white', fontFamily: "'Cinzel', serif", fontSize: '1.2rem', margin: '0 0 8px' }}>Know a young person who could benefit?</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.9rem' }}>Connect with us to learn more about the Youth Program and how to refer someone.</p>
              </div>
              <Link to="/contact" style={{ background: gold, color: purple, padding: '13px 28px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <i className="fas fa-arrow-right"></i> Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM BAND ──────────────────────────────────────── */}
        <section style={{ background: cream, borderTop: '1px solid #ede8e8', padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 30px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: purple, fontSize: '1.8rem', marginBottom: '12px' }}>
              Not sure where to start?
            </h2>
            <p style={{ color: '#777', fontSize: '1rem', maxWidth: '520px', margin: '0 auto 30px', lineHeight: '1.7' }}>
              Our team will listen, help you understand your options, and connect you with the right support — at no cost, in your language.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:18442696203" style={{ background: purple, color: 'white', padding: '13px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: '800', fontSize: '0.92rem', display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                <i className="fas fa-phone"></i> Helpline: 1-844-269-6203
              </a>
              <Link to="/donate" style={{ background: 'white', color: purple, border: `2px solid ${purple}`, padding: '11px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '0.92rem' }}>
                Support Our Work
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Programs;
