import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const LaurenCollinsWellness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandPurple = '#4A2C4A';
  const pink = '#E8789A';
  const gold = '#C5A059';
  const cream = '#faf6f0';

  return (
    <PageTransition>
      <article style={{ background: '#fff', overflowX: 'hidden', position: 'relative' }}>

        {/* HERO */}
        <div style={{
          background: `linear-gradient(135deg, ${brandPurple} 0%, #2d0a1f 100%)`,
          color: 'white',
          padding: '140px 0 80px',
          textAlign: 'center',
          position: 'relative',
          clipPath: 'ellipse(150% 100% at 50% 0%)'
        }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              display: 'inline-block',
              background: pink,
              color: 'white',
              padding: '5px 16px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Community Partnership · July 27–28, 2024
            </div>

            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              margin: '0 0 20px',
              color: 'white'
            }}>
              Free Physical Therapy<br />
              <span style={{ fontFamily: "'Dancing Script', cursive", color: gold, fontSize: '1.1em' }}>
                & Complimentary Healing
              </span>
            </h1>

            <p style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '560px', margin: '0 auto' }}>
              A weekend of self-care for Black survivors of domestic violence and sexual assault — right here at Nisaa.
            </p>
          </div>
        </div>

        {/* INTRO */}
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '60px', alignItems: 'start' }}>

              {/* Story */}
              <div>
                <p style={{ fontSize: '1.4rem', fontWeight: '600', color: brandPurple, fontFamily: "'Cinzel', serif", lineHeight: '1.6', marginBottom: '30px' }}>
                  "Healing the body is part of healing the whole person."
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  <span style={{ float: 'left', fontFamily: "'Cinzel', serif", fontSize: '4rem', lineHeight: '0.75', paddingRight: '10px', paddingTop: '8px', color: pink }}>W</span>
                  hen Lauren H. Collins Wellness reached out to partner with Nisaa African Family Services, the answer was an immediate yes. For two days — July 27th and 28th, 2024 — survivors in our community received something they rarely get offered: free, professional physical therapy and other complimentary healing services, delivered by a practitioner who truly understands their experience.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  The clinic ran from 9am to 4pm both days at Nisaa's office at 4944 Franklin Ave. No cost, no barriers — just care. Appointments were available via a link in bio, and walk-ins were welcome. For survivors who carry the weight of trauma in their bodies — persistent pain, pelvic floor dysfunction, headaches — this kind of access is transformative.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  Physical trauma doesn't end when the danger does. It lives in the body long after — in chronic pain, in tension, in symptoms that mainstream healthcare often dismisses or misdiagnoses. Lauren H. Collins Wellness works specifically with Black survivors, bringing a trauma-informed lens to physical therapy that centers dignity, safety, and cultural competency.
                </p>
              </div>

              {/* Snapshot */}
              <div style={{
                background: '#fff',
                border: '1px solid #f0e8d8',
                borderTop: `4px solid ${pink}`,
                borderRadius: '12px',
                padding: '25px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                position: 'sticky',
                top: '120px'
              }}>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#999',
                  marginBottom: '20px',
                  marginTop: 0
                }}>Event Snapshot</p>

                {[
                  { icon: 'fa-calendar-day', text: 'July 27–28, 2024' },
                  { icon: 'fa-clock', text: '9:00 AM – 4:00 PM' },
                  { icon: 'fa-map-marker-alt', text: '4944 Franklin Ave, Suite P' },
                  { icon: 'fa-hand-holding-heart', text: 'Free — no cost to survivors' },
                  { icon: 'fa-users', text: 'Black Survivors of DV & SA' },
                ].map(({ icon, text }) => (
                  <div key={text} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '14px',
                    fontSize: '0.92rem',
                    color: '#444',
                    fontWeight: '500'
                  }}>
                    <span style={{
                      width: '32px', height: '32px',
                      borderRadius: '50%',
                      background: '#fdf0f5',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={`fas ${icon}`} style={{ color: pink, fontSize: '0.8rem' }}></i>
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KNOW THE SIGNS — pink banner */}
        <section style={{ background: `linear-gradient(135deg, #2d0a1f 0%, ${brandPurple} 100%)`, padding: '70px 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: pink, fontWeight: '700', fontSize: '0.8rem' }}>
                <i className="fas fa-heartbeat" style={{ marginRight: '6px' }}></i> Body Signs
              </span>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: 'white', fontSize: '2rem', marginTop: '10px' }}>
                How to Know if Physical Therapy Could Help
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '15px auto 0', lineHeight: '1.7' }}>
                Trauma lives in the body. These are some of the signs that physical therapy — especially trauma-informed PT — could make a difference.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {[
                { icon: 'fa-bone', label: 'Persistent Body Pain', desc: 'Ongoing pain that doesn\'t resolve with rest or standard treatment.' },
                { icon: 'fa-circle', label: 'Pelvic Pain', desc: 'Discomfort, pressure, or pain in the pelvic region.' },
                { icon: 'fa-heart-broken', label: 'Pain with Sex', desc: 'Physical discomfort that may be linked to trauma or tension.' },
                { icon: 'fa-stomach', label: 'Persistent Gut Issues', desc: 'Chronic digestive problems often connected to nervous system stress.' },
                { icon: 'fa-head-side-virus', label: 'Persistent Headaches', desc: 'Recurring headaches that may stem from tension and trauma held in the body.' },
              ].map(({ icon, label, desc }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '25px 20px',
                  borderTop: `3px solid ${pink}`
                }}>
                  <div style={{ color: pink, fontSize: '1.5rem', marginBottom: '12px' }}>
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px' }}>{label}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COLLABORATOR */}
        <section style={{ background: cream, padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: pink, fontWeight: '700', fontSize: '0.8rem' }}>Partnership</span>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '2rem', marginTop: '10px' }}>About Lauren H. Collins Wellness</h2>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
              borderTop: `4px solid ${pink}`,
              display: 'flex',
              gap: '30px',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '70px', height: '70px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${pink}, #c0392b)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className="fas fa-heart" style={{ color: 'white', fontSize: '1.8rem' }}></i>
              </div>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.2rem', marginBottom: '5px' }}>
                  Lauren H. Collins Wellness
                </h3>
                <p style={{ color: pink, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                  Co-Sponsor · Trauma-Informed Physical Therapy
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.97rem', marginBottom: '15px' }}>
                  Lauren H. Collins Wellness is a 501(c)(3) nonprofit bringing trauma-informed physical therapy and healing services specifically to Black survivors of domestic violence and sexual assault. Their practice addresses pelvic floor dysfunction, chronic pain, and the physical effects of trauma — conditions that are often overlooked or under-served in mainstream healthcare settings.
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.97rem', marginBottom: '24px' }}>
                  By partnering with Nisaa, they brought their services directly into a trusted community space — removing the barriers of cost, transportation, and fear that keep so many survivors from accessing the care they deserve.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href="https://laurenhcollinswellness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: brandPurple, color: 'white',
                      padding: '11px 22px', borderRadius: '50px',
                      textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem'
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i> laurenhcollinswellness.com
                  </a>
                  <a
                    href="tel:8774482818"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      color: brandPurple, border: `2px solid ${brandPurple}`,
                      background: 'white', padding: '9px 22px', borderRadius: '50px',
                      textDecoration: 'none', fontWeight: '700', fontSize: '0.85rem'
                    }}
                  >
                    <i className="fas fa-phone"></i> 877-448-2818
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ fontSize: '2.5rem', color: pink, marginBottom: '20px' }}>
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.8rem', marginBottom: '15px' }}>
              You Deserve to Heal — Fully
            </h2>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '35px' }}>
              Events like this one remind us that healing is not a luxury. If you or someone you know is a survivor in need of wellness support, reach out to us or to Lauren H. Collins Wellness directly.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: brandPurple, color: 'white',
                  padding: '14px 30px', borderRadius: '50px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem'
                }}
              >
                <i className="fas fa-envelope"></i> Contact Nisaa
              </Link>
              <Link
                to="/blog"
                className="blog-back-btn"
                style={{
                  background: 'white',
                  color: brandPurple,
                  border: `2px solid ${brandPurple}`,
                }}
              >
                <i className="fas fa-arrow-left"></i> Back to Blog
              </Link>
            </div>
          </div>
        </section>

      </article>
    </PageTransition>
  );
};

export default LaurenCollinsWellness;
