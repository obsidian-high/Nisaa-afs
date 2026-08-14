import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const PullUpAndStitch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandPurple = '#4A2C4A';
  const red = '#C0392B';
  const gold = '#C5A059';

  return (
    <PageTransition>
      <article style={{ background: '#fff', overflowX: 'hidden' }}>

        {/* HERO */}
        <div style={{
          background: `linear-gradient(135deg, ${brandPurple} 0%, #1a0a1a 100%)`,
          color: 'white',
          padding: '140px 0 80px',
          textAlign: 'center',
          position: 'relative',
          clipPath: 'ellipse(150% 100% at 50% 0%)'
        }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>

            <div style={{
              display: 'inline-block',
              background: red,
              color: 'white',
              padding: '5px 16px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Community Event · May 17, 2026
            </div>

            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: '1.15',
              margin: '0 0 20px',
              color: 'white'
            }}>
              Pull Up & Stitch<br />
              <span style={{ fontFamily: "'Dancing Script', cursive", color: gold, fontSize: '1.1em' }}>
                × Upstitch'd
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '550px', margin: '0 auto' }}>
              Where sewing, community, and collective care came together at Nisaa African Family Services.
            </p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '60px', alignItems: 'start' }}>

              {/* Story */}
              <div>
                <p style={{ fontSize: '1.4rem', fontWeight: '600', color: brandPurple, fontFamily: "'Cinzel', serif", lineHeight: '1.6', marginBottom: '30px' }}>
                  "This is where creativity meets care."
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  <span style={{ float: 'left', fontFamily: "'Cinzel', serif", fontSize: '4rem', lineHeight: '0.75', paddingRight: '10px', paddingTop: '8px', color: gold }}>O</span>
                  n Sunday, May 17th, Nisaa African Family Services opened its doors at 4944 Franklin Ave for something a little different — needles, thread, laughter, and a donation drive for the Franklin Library Food Pantry. The Pull Up & Stitch workshop, hosted by <strong>The Fashion Circuit</strong> in collaboration with <strong>Upstitch'd</strong>, brought together makers, learners, and community members for an afternoon of DIY hair accessories.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  The workshop ran from 12–3 PM and was completely free to attend. Instead of a ticket price, guests were invited to bring food donations for the Franklin Library Food Pantry — a small act that added up to something meaningful for neighbors in need.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  For Nisaa, hosting this event was a natural fit. When community organizations build on each other's work — sharing space, skills, and networks — everyone benefits. This is what mutual aid looks like in practice.
                </p>
              </div>

              {/* Snapshot card */}
              <div style={{
                background: '#fff',
                border: '1px solid #f0e8d8',
                borderTop: `4px solid ${gold}`,
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
                  { icon: 'fa-calendar-day', text: 'May 17, 2026' },
                  { icon: 'fa-clock', text: '12:00 PM – 3:00 PM' },
                  { icon: 'fa-map-marker-alt', text: '4944 Franklin Ave, Des Moines' },
                  { icon: 'fa-scissors', text: 'DIY Hair Accessories' },
                  { icon: 'fa-heart', text: 'Free — donations welcome' },
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
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#faf6f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className={`fas ${icon}`} style={{ color: gold, fontSize: '0.8rem' }}></i>
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATORS SECTION */}
        <section style={{ background: '#faf6f0', padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: gold, fontWeight: '700', fontSize: '0.8rem' }}>Who Made It Happen</span>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '2.2rem', marginTop: '10px' }}>The Collaborators</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>

              {/* Fashion Circuit */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '35px 30px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                borderTop: `4px solid ${brandPurple}`
              }}>
                <div style={{ fontSize: '2rem', color: brandPurple, marginBottom: '15px' }}>
                  <i className="fas fa-cut"></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.1rem', marginBottom: '5px' }}>The Fashion Circuit</h3>
                <p style={{ color: gold, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                  @the.fashioncircuit · Event Host
                </p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  The creators behind Pull Up & Stitch — a monthly sewing series designed to build skills and community. Each month they partner with a different organization and run a donation drive in support of their work. Sewcial Impact is their ongoing initiative using fashion as a tool for empowerment, healing, and collective care.
                </p>
                <a href="https://thefashioncircuit.net/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '18px', color: brandPurple, fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: `2px solid ${gold}`, paddingBottom: '2px' }}>
                  Visit thefashioncircuit.net <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </a>
              </div>

              {/* Upstitch'd */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '35px 30px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                borderTop: `4px solid ${red}`
              }}>
                <div style={{ fontSize: '2rem', color: red, marginBottom: '15px' }}>
                  <i className="fas fa-recycle"></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.1rem', marginBottom: '5px' }}>Upstitch'd</h3>
                <p style={{ color: red, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                  Reuse · Reduce · Rewear · Co-host
                </p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  Upstitch'd brings a sustainability lens to fashion — championing upcycling, slow fashion, and mindful making. Their collaboration on this event brought creative energy and a shared belief that what we wear can reflect our values.
                </p>
                <a href="https://upstitchd.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '18px', color: brandPurple, fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: `2px solid ${red}`, paddingBottom: '2px' }}>
                  Visit upstitchd.com <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </a>
              </div>

              {/* Nisaa */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '35px 30px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                borderTop: `4px solid ${gold}`
              }}>
                <div style={{ fontSize: '2rem', color: gold, marginBottom: '15px' }}>
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.1rem', marginBottom: '5px' }}>Nisaa African Family Services</h3>
                <p style={{ color: gold, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                  @nisaa.afs · Sponsor & Host Venue
                </p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  Nisaa provided the space and the spirit. As an organization rooted in community healing and empowerment, sponsoring events that bring people together — especially around creativity and mutual aid — is central to who we are.
                </p>
                <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '18px', color: brandPurple, fontWeight: '700', fontSize: '0.85rem', textDecoration: 'none', borderBottom: `2px solid ${gold}`, paddingBottom: '2px' }}>
                  About Nisaa <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }}></i>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* DONATION DRIVE */}
        <section style={{ background: brandPurple, padding: '80px 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', color: gold, marginBottom: '20px' }}>
              <i className="fas fa-box-open"></i>
            </div>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: 'white', fontSize: '2rem', marginBottom: '20px' }}>
              Giving Back to the Pantry
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '40px' }}>
              In place of a ticket fee, attendees were asked to bring non-perishable food items for the <strong style={{ color: gold }}>Franklin Library Food Pantry</strong>. Every item donated went directly to neighbors facing food insecurity in Des Moines.
            </p>

            {/* Donation list */}
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '16px',
              padding: '30px 40px',
              textAlign: 'left',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px 30px'
            }}>
              {[
                'Canned vegetables', 'Canned fruit', 'Soup', 'Peanut butter',
                'Rice', 'Pasta', 'Mac & cheese', 'Cereal', 'Oatmeal',
                'Granola bars', 'Shelf-stable milk', 'Beans',
                'Tuna / chicken packets', 'Hygiene products',
                'Baby wipes / diapers', 'Toilet paper & paper towels'
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', fontSize: '0.9rem', opacity: 0.9 }}>
                  <i className="fas fa-check" style={{ color: gold, fontSize: '0.75rem', flexShrink: 0 }}></i>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEWCIAL IMPACT SECTION */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              borderLeft: `4px solid ${gold}`,
              background: '#faf6f0',
              padding: '30px 35px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.5rem', marginBottom: '15px' }}>
                What is Sewcial Impact?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                Sewcial Impact is a non-profit initiative from The Fashion Circuit that uses fashion as a tool for empowerment, healing, and collective care. What began as a free sewing machine rental program has grown into a platform for workshops, gatherings, and creative projects centered on people over product.
              </p>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                Through Sewcial Impact, fashion becomes accessible — and it tackles broader issues like housing insecurity, gender-based violence, and resource access in underserved communities.
              </p>
              <p style={{ color: brandPurple, fontWeight: '700', fontStyle: 'italic' }}>
                "This is where creativity meets care. This is Sewcial Impact."
              </p>
            </div>

            {/* Spring Series */}
            <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.4rem', marginBottom: '25px', textAlign: 'center' }}>
              The Spring Series
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                { date: 'Mar 15', label: 'Embroidered Tote Bags' },
                { date: 'Apr 19', label: 'Mending & Repair' },
                { date: 'May 17', label: 'DIY Hair Accessories', highlight: true },
              ].map(({ date, label, highlight }) => (
                <div key={date} style={{
                  background: highlight ? brandPurple : 'white',
                  color: highlight ? 'white' : '#444',
                  border: `1px solid ${highlight ? brandPurple : '#eee'}`,
                  borderRadius: '12px',
                  padding: '25px 20px',
                  textAlign: 'center',
                  boxShadow: highlight ? `0 8px 25px ${brandPurple}40` : '0 4px 15px rgba(0,0,0,0.04)'
                }}>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '8px', opacity: highlight ? 0.7 : 0.5, textTransform: 'uppercase' }}>
                    Sunday · {date}
                  </p>
                  <p style={{ fontWeight: '700', fontSize: '1rem', margin: 0 }}>{label}</p>
                  {highlight && (
                    <span style={{ fontSize: '0.75rem', background: gold, color: 'white', padding: '3px 10px', borderRadius: '20px', marginTop: '10px', display: 'inline-block' }}>
                      This Event
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#faf6f0', padding: '80px 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '2rem', marginBottom: '20px' }}>
              Stay Connected
            </h2>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '40px' }}>
              Events like this are what community looks like. Follow The Fashion Circuit and Upstitch'd to catch future Pull Up & Stitch workshops — and keep an eye on Nisaa's events page for what's coming next.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/the.fashioncircuit/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: brandPurple,
                  color: 'white',
                  padding: '14px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <i className="fab fa-instagram"></i> @the.fashioncircuit
              </a>
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

export default PullUpAndStitch;
