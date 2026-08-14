import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const PullUpAndStitchSep = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandPurple = '#4A2C4A';
  const red = '#C0392B';
  const gold = '#C5A059';
  const cream = '#faf6f0';

  const photos = [
    { src: '/ev1.jpg', alt: 'Two participants showing off their finished blessing bags', position: 'top' },
    { src: '/ev2.jpg', alt: 'Workshop flyer — Pull Up & Stitch × Rachel Reloaded', position: 'top' },
    { src: '/ev3.jpg', alt: 'Hands cutting fabric at the sewing table', position: 'center' },
    { src: '/ev4.jpg', alt: 'Participant focused at the sewing machine', position: 'top' },
  ];

  return (
    <PageTransition>
      <article style={{ background: '#fff', overflowX: 'hidden', position: 'relative' }}>

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
              Community Event · September 21, 2026
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
                Blessing Bags for Our Community
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: '550px', margin: '0 auto' }}>
              Needles, thread, and a whole lot of heart — this month we sewed for the unhoused members of our community.
            </p>
          </div>
        </div>

        {/* INTRO + SNAPSHOT */}
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '60px', alignItems: 'start' }}>

              {/* Story */}
              <div>
                <p style={{ fontSize: '1.4rem', fontWeight: '600', color: brandPurple, fontFamily: "'Cinzel', serif", lineHeight: '1.6', marginBottom: '30px' }}>
                  "Y'all are doing the work of angels."
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  <span style={{ float: 'left', fontFamily: "'Cinzel', serif", fontSize: '4rem', lineHeight: '0.75', paddingRight: '10px', paddingTop: '8px', color: gold }}>T</span>
                  his past Sunday at Nisaa African Family Services, the Pull Up & Stitch monthly workshop returned — and this time, every stitch had a destination. Participants gathered from 12–3 PM to make <strong>blessing bags</strong> for unhoused members of our Des Moines community, collecting donated items to fill them alongside every bag sewn. The room was full of conversation, concentration, and care.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  Led by <strong>Rachel Gai (@r_reloaded)</strong> and <strong>Destiny Williams (@dlashayyy)</strong>, the session brought people of all skill levels to the table — beginners learning their first stitches, experienced makers mentoring alongside them. That's the Pull Up & Stitch ethos: show up, create, give back.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#444', marginBottom: '24px' }}>
                  Photography by <a href="https://www.instagram.com/trinnoelphotography/" target="_blank" rel="noopener noreferrer" style={{ color: brandPurple, fontWeight: '700', borderBottom: `2px solid ${gold}`, textDecoration: 'none' }}>@trinnoelphotography</a> — whose lens captured every quiet, focused, joyful moment of the afternoon.
                </p>
              </div>

              {/* Snapshot */}
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
                  { icon: 'fa-calendar-day', text: 'September 21, 2026' },
                  { icon: 'fa-clock', text: '12:00 PM – 3:00 PM' },
                  { icon: 'fa-map-marker-alt', text: '4944 Franklin Ave, Des Moines' },
                  { icon: 'fa-shopping-bag', text: 'Blessing Bags for Unhoused' },
                  { icon: 'fa-heart', text: 'Free — donations welcomed' },
                  { icon: 'fa-camera', text: 'Photos: @trinnoelphotography' },
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
                      background: cream,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
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

        {/* PHOTO GRID */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.6rem', marginBottom: '30px', textAlign: 'center' }}>
              In the Room
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {photos.map(({ src, alt, position }) => (
                <div key={src} style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '300px',
                  background: '#f0e8d8'
                }}>
                  <img
                    src={src}
                    alt={alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: position, display: 'block' }}
                  />
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', color: '#aaa', fontSize: '0.8rem', marginTop: '16px', fontStyle: 'italic' }}>
              Photography by <a href="https://www.instagram.com/trinnoelphotography/" target="_blank" rel="noopener noreferrer" style={{ color: gold }}>@trinnoelphotography</a>
            </p>
          </div>
        </section>

        {/* DONATION DRIVE — dark section */}
        <section style={{ background: `linear-gradient(135deg, #1a0a1a 0%, ${brandPurple} 100%)`, padding: '80px 0', color: 'white' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div style={{ fontSize: '3rem', color: gold, marginBottom: '15px' }}>
                <i className="fas fa-box-open"></i>
              </div>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: 'white', fontSize: '2rem', marginBottom: '15px' }}>
                Reusable Sanitary Pads — Suggested Donations
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7' }}>
                The next session will focus on sewing reusable sanitary pads for the <strong style={{ color: gold }}>Young Women's Resource Center (@ywrcgirls)</strong>. Alongside making, we'll be collecting the following donated items:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>

              {/* Menstrual & Personal Care */}
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '25px' }}>
                <h4 style={{ color: gold, fontFamily: "'Cinzel', serif", fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  <i className="fas fa-heart" style={{ marginRight: '8px' }}></i> Menstrual & Personal Care
                </h4>
                {[
                  'Reusable & disposable menstrual products',
                  'Toiletries (shampoo, conditioner, deodorant, toothpaste, body wash)',
                  'Postpartum care kits (peri bottles, witch hazel pads, etc.)',
                  'Nursing bras & maternity clothes',
                  'Self-care items (lotions, lip balm, face masks)',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.4' }}>
                    <i className="fas fa-check" style={{ color: gold, fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}></i>
                    {item}
                  </div>
                ))}
              </div>

              {/* Baby & Child */}
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '25px' }}>
                <h4 style={{ color: gold, fontFamily: "'Cinzel', serif", fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  <i className="fas fa-baby" style={{ marginRight: '8px' }}></i> Baby & Child Essentials
                </h4>
                {[
                  'Car seats',
                  'Diapers & baby wipes',
                  'Formula & baby bottles',
                  'Pacifiers & teething toys',
                  'Pregnancy pillows',
                  'Blankets, burp cloths & bibs',
                  'Clothes (all baby & toddler sizes)',
                  'Baby carriers/slings, strollers, and high chairs',
                  'Cribs, bassinets, or playpens',
                  'Books & Learning',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.4' }}>
                    <i className="fas fa-check" style={{ color: gold, fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}></i>
                    {item}
                  </div>
                ))}
              </div>

              {/* Parenting Guides */}
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '16px', padding: '25px' }}>
                <h4 style={{ color: gold, fontFamily: "'Cinzel', serif", fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                  <i className="fas fa-book-open" style={{ marginRight: '8px' }}></i> Parenting Guides
                </h4>
                {[
                  "Children's storybooks (especially diverse voices)",
                  'Cookbooks for quick, healthy meals',
                  'Journals & pens for reflection',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '10px', marginBottom: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.4' }}>
                    <i className="fas fa-check" style={{ color: gold, fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}></i>
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* COLLABORATORS */}
        <section style={{ background: cream, padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '2px', color: gold, fontWeight: '700', fontSize: '0.8rem' }}>Who Made It Happen</span>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '2rem', marginTop: '10px' }}>The Collaborators</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>

              {/* Fashion Circuit */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderTop: `4px solid ${brandPurple}` }}>
                <div style={{ fontSize: '1.8rem', color: brandPurple, marginBottom: '12px' }}><i className="fas fa-cut"></i></div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1rem', marginBottom: '4px' }}>The Fashion Circuit</h3>
                <p style={{ color: gold, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Event Host · Sewcial Impact</p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '16px' }}>
                  The monthly Pull Up & Stitch series, rooted in the Sewcial Impact initiative — using fashion as a tool for empowerment, healing, and collective care.
                </p>
                <a href="https://thefashioncircuit.net/" target="_blank" rel="noopener noreferrer" style={{ color: brandPurple, fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none', borderBottom: `2px solid ${gold}` }}>
                  thefashioncircuit.net <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                </a>
              </div>

              {/* Rachel Reloaded */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderTop: `4px solid ${red}` }}>
                <div style={{ fontSize: '1.8rem', color: red, marginBottom: '12px' }}><i className="fas fa-star"></i></div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1rem', marginBottom: '4px' }}>Rachel Reloaded × DSTNY Studio</h3>
                <p style={{ color: red, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>@r_reloaded · Session Leader</p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Rachel Gai and DSTNY Studio led participants through this session, bringing their creative expertise and community spirit to every stitch.
                </p>
                <a href="https://www.instagram.com/r_reloaded/" target="_blank" rel="noopener noreferrer" style={{ color: brandPurple, fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none', borderBottom: `2px solid ${red}` }}>
                  @r_reloaded <i className="fab fa-instagram" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                </a>
              </div>

              {/* DSTNY Studio / Destiny Williams */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderTop: `4px solid ${gold}` }}>
                <div style={{ fontSize: '1.8rem', color: gold, marginBottom: '12px' }}><i className="fas fa-pencil-alt"></i></div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1rem', marginBottom: '4px' }}>Destiny Williams</h3>
                <p style={{ color: gold, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>@dlashayyy · Session Leader</p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Co-leading the session alongside Rachel, Destiny guided participants through the hands-on work of creating blessing bags with intention.
                </p>
                <a href="https://www.instagram.com/dlashayyy/" target="_blank" rel="noopener noreferrer" style={{ color: brandPurple, fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none', borderBottom: `2px solid ${gold}` }}>
                  @dlashayyy <i className="fab fa-instagram" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                </a>
              </div>

              {/* Nisaa */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', borderTop: `4px solid ${brandPurple}` }}>
                <div style={{ fontSize: '1.8rem', color: brandPurple, marginBottom: '12px' }}><i className="fas fa-hands-helping"></i></div>
                <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1rem', marginBottom: '4px' }}>Nisaa African Family Services</h3>
                <p style={{ color: gold, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>@nisaa.afs · Proud Sponsor & Venue</p>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Nisaa provided the space and the sponsorship, continuing our commitment to hosting events that build community and give back.
                </p>
                <Link to="/about" style={{ color: brandPurple, fontWeight: '700', fontSize: '0.82rem', textDecoration: 'none', borderBottom: `2px solid ${gold}` }}>
                  About Nisaa <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }}></i>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SEWCIAL IMPACT */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{
              borderLeft: `4px solid ${gold}`,
              background: cream,
              padding: '30px 35px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.4rem', marginBottom: '15px' }}>
                What is SewCial Impact?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                SewCial Impact is a community-led initiative from The Fashion Circuit that uses fashion as a tool for empowerment, healing, and collective care. What began as a free sewing machine rental program has evolved into a platform for workshops, gatherings, and creative projects that center people over product.
              </p>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                Through SewCial Impact, The Fashion Circuit tackles broader issues like housing insecurity, gender-based violence, and resource access in underserved communities — because fashion doesn't just look good, it does good.
              </p>
              <p style={{ color: brandPurple, fontWeight: '700', fontStyle: 'italic' }}>
                "This is where creativity meets care. This is SewCial Impact."
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: cream, padding: '80px 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ fontFamily: "'Cinzel', serif", color: brandPurple, fontSize: '1.8rem', marginBottom: '15px' }}>
              Join the Next Session
            </h2>
            <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '35px' }}>
              Pull Up & Stitch runs monthly at Nisaa. Follow The Fashion Circuit to stay up to date on the next theme, date, and donation drive.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com/the.fashioncircuit/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: brandPurple, color: 'white',
                  padding: '14px 30px', borderRadius: '50px',
                  textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem'
                }}
              >
                <i className="fab fa-instagram"></i> @the.fashioncircuit
              </a>
              <Link
                to="/blog/pull-up-and-stitch"
                className="blog-back-btn"
                style={{
                  background: 'white',
                  color: brandPurple,
                  border: `2px solid ${brandPurple}`,
                }}
              >
                <i className="fas fa-arrow-left"></i> Read May's Edition
              </Link>
            </div>
          </div>
        </section>

      </article>
    </PageTransition>
  );
};

export default PullUpAndStitchSep;
